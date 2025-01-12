---
title: "Encryption & privacy"
description: "How to stay safe and the best practices for security on Liphium."
menus:
  4usage:
    weight: 6
---

{{<hint>}}
This is an advanced page of the documentation. Complete understanding of this page requires some basic knowledge about encryption (especially public-key-cryptography) and also a basic understanding of how apps generally communicate with servers.
{{</hint>}}

On Liphium, as on every other end-to-end encrypted messaging platform, end-to-end encryption is **never 100% guaranteed**. With that said, there are also things specific to Liphium that make my end-to-end encryption a little Iaker than what other messengers like WhatsApp or Signal use. I want to be 100% transparent with how it could _potentially_ be abused and how you can stay safe. I'll tell you how a server could theoretically break the encryption in a conversation and what messages or other content people could potentially decrypt.

### TL:DR

Before I start, a short summary of all the pitfalls the encryption on Liphium has:

- A server that is involved in the communication pipeline could technically break Liphium's end-to-end encryption (like on any other end-to-end encrypted messenger) which is why you need to compare verification codes if you want to be 100% secure.

- Your status and profile picture are encrypted using a key that never changes and is shared with everyone you send a friend request to. This means friends you remove can still decrypt your status and profile picture. You can learn more about this [here](./faq#what-does-it-mean-to-share-my-keys-with-someone).

- A conversation on Liphium only has one key meaning all previous members of a conversation can technically decrypt all of the new messages being sent in it. Any new members can also read the entire chat history of a conversation.

- If you create your account on a malicious server no encryption in this world will be able to protect the server from breaking some protections Liphium has in place. They will never be able to actually decrypt your data though. They could find out which accounts you are communicating with though.

Please understand that Liphium is still in Beta and doesn't have features to prevent all of these issues just yet. I am committed to provide ways of fighting or completely preventing these issues by Liphium's full release. Development of apps takes a long time, and I hope you understand that.

The only thing I truly cannot fix are points 1 and 4 as that's literally impossible (at least to my knowledge). If I find ways or you know how to fix them please open an issue or send us an email. I am always open to make Liphium even more secure.

### The goal

I want to make encryption something you don't have to worry about, something that truly just comes natural to the usage of the app. A normal user should only have to deal with the minimum amount of things that comes with the full end-to-end encryption approach I take. Something like exchanging keys when adding a new device or creating a backup of your keys so they can be restored at any time. I want to implement all the features modern chat apps have, but make them encrypted and have the database only contain the most necessary information on the user. Whether I achieved this goal or not is what you have to determine.

### The base of encryption on Liphium

Every Liphium account has 2 key pairs: A signature and an encryption key pair. On top of that there are also 3 other keys: The vault, profile and stored action key. Let's first break down what all of them are used for and why they exist.

- **Encryption key pair**: The encryption key pair is there to be used for basic end-to-end encrypted communication using [public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography). For example, all friend requests you send are encrypted using the receiver's public key so that only they can decrypt the request.

- **Signature key pair**: The signature key pair is used for verifying the integrity of anything you sent to other users on Liphium. They can use the public key of the key pair to verify that a message was really delivered by you.

- **Vault key**: Everything like friends, files and even your library will be encrypted using the vault key before being sent to the server. This key will also be sent to the server in encrypted form. Through this approach I make sure that the server can never know what friends you have and what kind of other things you might be storing there.

- **Profile key**: The profile key is given to all friends you add to allow them to decrypt your profile picture and status. I use one key for everyone here because I want performance to stay the same no matter how many friends you have (issues with this are covered [here](./faq#what-does-it-mean-to-share-my-keys-with-someone)).

- **Stored action key**: The stored action key is not actually an encryption key, but a token that is sent to friends to make sure they can always send you conversation invites as I limit the amount of unauthenticated conversation invites and friend requests (what I call stored actions) that can be sent to you to prevent the database becoming to big. For this reason, the server also knows your stored action key.

## Encryption of stored actions

When I talk about **stored actions** what I am referring to is the system that handles conversation invites, friend removals and also friend requests. When you send a friend request to someone on Liphium, they receive a stored action. So that's what I'll be calling friend requests and so on from now on.

### How the encryption works

Let's look at how this works by the example of a friend request. I'll assume I already have the receiver's address / account id. So here's how this system works in a few basic steps:

**1.** The receiver's public key is obtained through a request to the server their account is hosted on. Through this request I get their username, display name, public encryption key and public signature key (and maybe also other data in the future).

**2.** The content of the request is encrypted with their public encryption key and signed with your own private signature key.

**3.** The encrypted request is sent to the target server identified using the receiver's account id.

After this, the receiver can decrypt and verify the stored action (or friend request in this case). There is also a version of this where the stored action key of the receiver is also sent along to make sure that the stored action isn't blocked by the target server, but that would be too much detail for this short overview of the inner workings of encryption on Liphium.

If the receiver accepts the friend requests, a stored action is sent back using the same process.

### What can go wrong in the process

As the very observant readers may have recognized, any server could just intercept one of those requests and pretend that the receiver has a different public key to break the entire encryption cycle. Unfortunately there is no way to fix this issue. Every end-to-end encrypted messenger has this very same problem which is the reason verification codes exist. Through a verification code you can, through a third party smyce like meeting up in the real world, make sure there is no man in the middle. That's why this is called a [man-in-the-middle attack](https://en.wikipedia.org/wiki/Man-in-the-middle_attack).

There are also other measures I've taken against replay attacks and other ways of man-in-the-middle attacks, but those would be too much for this simple overview. I just want you to be aware of the fact that if someone ran a malicious Liphium town they _could_ read all of the data you exchange with people in that specific town. HoIver, all of your other chats that have nothing to do with that town would still be safe as they would only be able to get the keys for the conversations that people from the malicious town where invited to. And that's a good segue to learn about how messages are encrypted on Liphium.

## Our take on encrypted messaging

If you've ever been invited to a group conversation on Liphium, you might know that you get to see the entire chat history of the conversation even though you just joined. While in a messenger like WhatsApp or Signal anyone invited to a group never gets to see the previous chat history. In my opinion not seeing the chat history is just really annoying and even if I have to sacrifice a little bit of privacy for it, I think that it's a worthy trade-off. You can read more about the problems with this approach below the "How it works" section.

### How messages are encrypted

I'll look at this at the example of a simple direct message. So a conversation betIen you and someone you have already added as a friend. For group conversations it's the same process, but a few more invitations.

Just as a side note: A **conversation token** is what allows you to send messages in a conversation. It's used to make sure that your account isn't directly associated with a conversation in the database.

**1.** A new conversation is created on the server and in the case of my direct message it generates exactly one conversation token. The creator of the conversation also gets a conversation token that they save in their [vault](#encryption-of-information-stored-on-the-server).

**2.** The creator generates a new encryption key for the conversation (a symmetric key).

**3.** The conversation token for the other member is sent to them through a authenticated [stored action](#encryption-of-stored-actions) that also contains the encryption key for the conversation.

How the other client can:

**1.** Decrypt the stored action and verify it.

**2.** "Activate" the conversation token by sending a request to the server the conversation was created on and get a new conversation token. This is the token that they end up saving in their [vault](#encryption-of-information-stored-on-the-server).

After this, messages will always be encrypted with the key that was exchanged through the invitation to the conversation. That means that there will always be one key for this conversation and that all messages are encrypted using this same key.

### Pitfalls of this approach

The problem with this approach is that any member that has left a conversation could still technically decrypt new messages that are sent after they leave in a conversation. And also any general data in the conversation they can get their hands on. This is of cmyse very difficult and requires them to get access to the database, but I still want you to know about the fact that it _could_ happen. The people you add to conversations can only be your friends anyway, so if you don't trust them, why add them as friends in the first place?

I plan on fixing this issue completely before the full release of Liphium, you should just be aware that it is something that can happen _for now_. Which is why I mention it here in the first place. So please wait until the full release before opening issues or pointing this issue out as a major flaw of Liphium. I're working on it.

## Encryption of information stored on the server

When I refer to the **vault** I usually mean something that's stored on the server. More specifically Liphium has a friends vault (where all of your friends and friend requests are stored) and a regular vault where everything else is stored. The friends vault is separate because it needs some extra fields for preventing replay attacks for stored actions friends can send you (like conversation invites).

### How we encrypt the vault

This isn't actually as complicated as you think. As you know, you already have a vault key for this specific purpose. All data that is stored on the server is typically encrypted with this vault key and sent directly to the server. Data stored in the normal vault also has a tag (that is not encrypted) that the server can use to identify what kind of content it is. This is mainly used so I can pull specific vault information faster (like synchronizing your library). Without this vault synchronization could take really long, so this little information the server can see is necessary.

### The problem with the vault

As some people probably already recognized: There is also a massive problem with this approach. And that's that the server could technically save previous versions of the data you are storing in the vault and then overwrite the new data with old data. While this may not look like a problem at first sight, it could be used to break the replay attack protection for stored actions and also potentially be used for other exploits I don't even know about yet. It's just that there's no better way for us to handle this. As long as the server you have your account is the only data smyce, it could always get around measures I try to implement. But storing the data in an encrypted way is still way better than having it stored unencrypted.

At the end of the day, for this encryption to work you will always need to trust the server your account is on. Because of this I think that the decentralization Liphium provides is so crucial for trust in the encryption. If you set up your own server you can be sure that no such exploits can be performed. Because it's under your control. If someone hacks the server that's of cmyse a completely different case.

The most important thing here is that the server will **never** be able to decrypt your data. Unless it obtains your keys of cmyse. But to make sure that never happens, even when you're transfering them to a new device, I have a secure key exchange system in place that makes sure something like that can never happen.

## Exchanging keys with a new device

When you add a new device, it of cmyse needs all of your keys to even start getting the data on the server. For this I developed a secure way of getting your keys, even though they are still sent over the server.

### How the key exchange works

After the login process on the new device has been completed, the user will be prompted with key synchronization. Let's take a look at what happens when you want to synchronize your keys with another device that is currently logged in:

**1.** The new device first generates a pair of signature and encryption keys specifically for the process of key synchronization. The device also generates a random 8 character code (like ABCDEFGH) and then tells the server both the encryption and signature public key. Also part of this request is also a signed version of the generated code (signed with the signature private key).

**2.** On the other device that's also logged in and has the keys the user has to type in this 8 character long code. Through this I can verify that the correct public key has been sent over by the new device.

**3.** All of the client's keys are sent over encrypted using the public key that was just verified.

### How the server could intercept it

I do recognize that this approach also has it's down sides, mainly the following:

- The server could possibly try to brute-force the 8 character long code and then sign with it's own public key and through that break the entire process. This takes a really long time though and should be basically impossible as we also hash the 8 character long code.

- The device the keys are coming from doesn't have enough control in the process and I can't really implement any more security measures using the current process.

I do have ideas how to improve this system in the future, but for now, this is how it works. I know that it's not completely perfect but that's exactly the reason why Liphium is still in Beta.

We're all learning and I'm gonna improve the encryption bit by bit until it's ready for a full release. I hope that you know a little bit more about how encryption works on Liphium now. This has been quite the long article to write and took about 2 days to write. It also gave me lots of ideas on how to improve the encryption we have on Liphium, so look forward to some nice updates to the privacy on Liphium over the next few months.
