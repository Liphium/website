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

On Liphium, as on every other end-to-end encrypted messaging platform, end-to-end encryption is **never 100% guaranteed**. With that said, there are also things specific to Liphium that make our end-to-end encryption a little weaker than what other messengers like WhatsApp or Signal use. We want to be 100% transparent with how it could _potentially_ be abused and how you can stay safe. We'll tell you how a server could theoretically break the encryption in a conversation and what messages or other content people could potentially decrypt.

### TL:DR

Before we start, a short summary of all the pitfalls the encryption on Liphium has:

- A server that is involved in the communication pipeline could technically break Liphium's end-to-end encryption (like on any other end-to-end encrypted messenger) which is why you need to compare verification codes if you want to be 100% secure.

- Your status and profile picture are encrypted using a key that never changes and is shared with everyone you send a friend request to. This means friends you remove can still decrypt your status and profile picture. You can learn more about this [here](./faq.md#what-does-it-mean-to-share-my-keys-with-someone).

- A conversation on Liphium only has one key meaning all previous members of a conversation can technically decrypt all of the new messages being sent in it. Any new members can also read the entire chat history of a conversation.

### The base of encryption on Liphium

Every Liphium account has 2 key pairs: A signature and an encryption key pair. On top of that there are also 3 other keys: The vault, profile and stored action key. Let's first break down what all of them are used for and why they exist.

- **Encryption key pair**: The encryption key pair is there to be used for basic end-to-end encrypted communication using [public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography). For example, all friend requests you send are encrypted using the receiver's public key so that only they can decrypt the request.

- **Signature key pair**: The signature key pair is used for verifying the integrity of anything you sent to other users on Liphium. They can use the public key of the key pair to verify that a message was really delivered by you.

- **Vault key**: Everything like friends, files and even your library will be encrypted using the vault key before being sent to the server. This key will also be sent to the server in encrypted form. Through this approach we make sure that the server can never know what friends you have and what kind of other things you might be storing there.

- **Profile key**: The profile key is given to all friends you add to allow them to decrypt your profile picture and status. We use one key for everyone here because we want performance to stay the same no matter how many friends you have (issues with this are covered [here](./faq.md#what-does-it-mean-to-share-my-keys-with-someone)).

- **Stored action key**: The stored action key is not actually an encryption key, but a token that is sent to friends to make sure they can always send you conversation invites as we limit the amount of unauthenticated conversation invites and friend requests (what we call stored actions) that can be sent to you to prevent the database becoming to big. For this reason, the server also knows your stored action key.

## Encryption of stored actions

When we talk about **stored actions** what we are referring to is the system that handles conversation invites, friend removals and also friend requests. When you send a friend request to someone on Liphium, they receive a stored action. So that's what I'll be calling friend requests and so on from now on.

### How the encryption works

Let's look at how this works by the example of a friend request. We'll assume we already have the receiver's address / account id. So here's how this system works in a few basic steps:

**1.** The receiver's public key is obtained through a request to the server their account is hosted on. Through this request we get their username, display name, public encryption key and public signature key (and maybe also other data in the future).

**2.** The content of the request is encrypted with their public encryption key and signed with your own private signature key.

**3.** The encrypted request is sent to the target server identified using the receiver's account id.

After this, the receiver can decrypt and verify the stored action (or friend request in this case). There is also a version of this where the stored action key of the receiver is also sent along to make sure that the stored action isn't blocked by the target server, but that would be too much detail for this short overview of the inner workings of encryption on Liphium.

If the receiver accepts the friend requests, a stored action is sent back using the same process.

### What can go wrong in the process

As the very observant readers may have recognized, any server could just intercept one of those requests and pretend that the receiver has a different public key to break the entire encryption cycle. Unfortunately there is no way to fix this issue. Every end-to-end encrypted messenger has this very same problem which is the reason verification codes exist. Through a verification code you can, through a third party source like meeting up in the real world, make sure there is no man in the middle. That's why this is called a [man-in-the-middle attack](https://en.wikipedia.org/wiki/Man-in-the-middle_attack).

There are also other measures we've taken against replay attacks and other ways of man-in-the-middle attacks, but those would be too much for this simple overview. We just want you to be aware of the fact that if someone ran a malicious Liphium town they _could_ read all of the data you exchange with people in that specific town. However, all of your other chats that have nothing to do with that town would still be safe as they would only be able to get the keys for the conversations that people from the malicious town where invited to. And that's a good segue to learn about how messages are encrypted on Liphium.

## Our take on encrypted messaging

If you've ever been invited to a group conversation on Liphium, you might know that you get to see the entire chat history of the conversation even though you just joined. While in a messenger like WhatsApp or Signal anyone invited to a group never gets to see the previous chat history. In our opinion not seeing the chat history is just really annoying and even if we have to sacrifice a little bit of privacy for it, we think that it's a worthy trade-off. You can read more about the problems with this approach below the "How it works" section.

### How messages are encrypted

We'll look at this at the example of a simple direct message. So a conversation between you and someone you have already added as a friend. For group conversations it's the same process, but a few more invitations.

Just as a side note: A **conversation token** is what allows you to send messages in a conversation. It's used to make sure that your account isn't directly associated with a conversation in the database.

**1.** A new conversation is created on the server and in the case of our direct message it generates exactly one conversation token. The creator of the conversation also gets a conversation token that they save in their [vault](#encryption-of-information-stored-on-the-server).

**2.** The creator generates a new encryption key for the conversation (a symmetric key).

**3.** The conversation token for the other member is sent to them through a authenticated [stored action](#encryption-of-stored-actions) that also contains the encryption key for the conversation.

How the other client can:

**1.** Decrypt the stored action and verify it.

**2.** "Activate" the conversation token by sending a request to the server the conversation was created on and get a new conversation token. This is the token that they end up saving in their [vault](#encryption-of-information-stored-on-the-server).

After this, messages will always be encrypted with the key that was exchanged through the invitation to the conversation. That means that there will always be one key for this conversation and that all messages are encrypted using this same key.

### Pitfalls of this approach

The problem with this approach is that any member that has left a conversation could still technically decrypt new messages that are sent after they leave in a conversation. And also any general data in the conversation they can get their hands on. This is of course very difficult and requires them to get access to the database, but we still want you to know about the fact that it _could_ happen. The people you add to conversations can only be your friends anyway, so if you don't trust them, why add them as friends in the first place?

In the future, we may also add ways for changing keys of conversations, but for now the option is **not** available. We're just focusing on other important stuff for the app and, while privacy is important, we have laid all the foundations we would need to implement such a system. Although it would likely require deletion of all previous messages, we'll still see how it ends up being resolved, but for now, just remember that you can't change the key of a conversation.

## Encryption of information stored on the server

## Exchanging keys with a new device
