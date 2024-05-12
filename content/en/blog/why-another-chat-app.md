---
title: "Why another chat app?"
date: '2024-05-11T16:42:56+02:00'
description: "A short dive into why Liphium was built."
author: "Unbreathable"
---

This is the first question people ask me when I tell them I work on a chat app. We have so many of them. Some startups even make chat apps to make all chat apps one chat app, so we no longer have to deal with all the clutter on our home screen. So why did I decide to create a new one? Is there really nothing out there that can meet all of my criteria?

Well, here are my thoughts.


## The heart of our digital communication

A chat app is the core of our digital communication. And for some of us, they are everything we have. We share our most memorable moments. We talk to our friends or people we met entirely online. We have fun together with *everyone*.

I'm one of those people. For me a chat app is the place where I spend time with my friends. I talk to all of my friends on there since I got my first computer. I've met all kinds of people on the internet. From good to bad, they all exist. But the main point here is, that the chat app is the place where we all live our digital lives together. The place where all of our memories happen. And this place should do **everything in order to make us feel at home**. But that isn't often the case.

The platform me and my friends use to communicate, Discord, makes us feel at home. We could have our own server, or "guild" as they call it. We could spend our time talking to each other there and sharing all of our best moments together. But there is one big problem with that, everything is not private and visible to all people at Discord who want access to it. According to their terms, everything you post on the platform can be stored *forever*. Until you ask them to delete it, but that's only possible per official account delete request.

So, what if we moved to another, *more private* platform? Oh, I have a suggestion. The closest thing to Discord. What about Element? Or any other messenger based on Matrix for that matter? It's a decentralized network of servers where you can even host your own one. And anyone can make an account! It's free, open-source and it has *almost* all the features you could want, so why don't we switch?


## The problem with all *secure* chat apps

They lack basic features. Yes, that's it. And those features are mostly nitpicks from me that are *in my opinion* required to have a good experience. As I discussed above, your *digital home* should do everything in order to make your experience better. A lot of apps are missing basic features to meat *my criteria* here. So what are those? 

When you are in a group voice call, let's say with 3-5 people, what is the one thing you don't want to hear? What is the one thing that made me switch away from Skype? Everyone's background noise. So, what features do we have to prevent that? Noise suppression or echo cancellation? Sure they are here, so where is the problem? Microphone sensitivity. I'll only say this once, but WHY DOES NO ONE IMPLEMENT IT? You have to check if the average of the amplitude is bigger than a value the user defines in the settings and then only send sound to the server once that condition is met. It's not that difficult (for people who have a lot of free time, read more about that below). But no app I've tested besides Mumble, TeamSpeak and Discord has it. Just for reference, here are the ones I looked at: Element, SimplexChat, Skype, WhatsApp, Signal, Revolt and so many more that I don't even know their names anymore (Guilded is excluded here because it sucks and doesn't have encryption anyway).

And there are more things as well. The online status and status message. While it may sound simple, it can be really difficult to implement in an encrypted context (speaking from experience here). And since it is mentioned here, you probably already know what I'm gonna say. Most chat apps that are encrypted by default don't have it (I haven't checked Element in a while, they might've added it by now). And for good reason: Making a status system is normally as simple as sending a request to the server and asking for the online status of your friends. But when the server doesn't know who they are, that whole thing can be kind of difficult.

*The feel problem.* Nailing the feel of an app is really hard. But somehow your app just feels more alive when you using Discord. You can see what everyone is doing and what they are up to. Their latest status message right below their name tells you just a little bit about what they are doing or what game they are playing. Maybe even which voice channel they are in. This feel of community is often missing on other messengers. While most of them often have something like Stories, these feel like I'm on Instagram when what I really want to do is come home. Into my *digital home*. Where all of my friends are waiting for me. Right at the click of a button.


## Why is it like this?

Looking at the 3 things I listed above might make you think that it's easy to do all of these things. And that couldn't be further from the truth. The truth is that these things I listed above are things *I want* and not what *everyone wants*. My mom or dad don't need a microphone sensitivity setting that they won't even understand and just complain about. It's gonna make them switch away from the app rather than stay.

And the difficulty to do this is also another point. Discord forked WebRTC just to add microphone sensitivity and some other more advanced audio settings to their app. Not everyone knows how to do this and it's a really big time investment just for a feature that will only be touched by a few people. So why don't we make our own call solution? Try making that for every platform. You'll probably regret it. I tried this and failed miserably. App design is also really hard. And with most of these encrypted messengers being open source (don't get me started on the closed source ones!) and hundreds of contributions coming from the people that won't use the features I specified above, this is just not something they're looking for. And that's totally fine.


## Enter Liphium

Okay, so after complaing for so long, what can I, as a solo developer, accomplish to fix this little problem of mine? Well, I can just fix it. And that's what I've been trying to do over the past 1,5 years. I can't say it's been a smooth journey. Many things have been blocking my way. But I'm finally starting to see the end of the tunnel. And this blog post is the first thing on the internet that properly lists my frustrations and concerns. But now you probably want to know what I made.

Liphium is going to be a decentralized chat app, think Element or Matrix, just with even better encryption (if they haven't changed their protocol) that's more like what Signal is doing. The approach I'm taking doesn't guarantee that you can't be tracked. But what it can guarantee is that if someone hacks the server, they will not be able to reverse engineer all the friends you have added. Like they would be able to with something like WhatsApp.

We also have all the things I listed above. Microphone sensitivity is provided by a separate binary I wrote in [Rust](https://rust-lang.org) that just listens to the same microphone as the one you use with WebRTC (we are using [LiveKit](https://livekit.io) for this). It then just stops audio from being sent, if you are not talking. Very simple, as I said above (says the guys who needed to bring in Rust to do this..). While support for showing which games people are playing in the app isn't yet there, we do have a way for you to share what call ("Space") you are in. You can of course also just have a normal status message.

And well, because these features were prioritized over most things during the development of Liphium there are lot of things missing. Stuff like message reactions, typing indicators and message read confirmations are all planned but not yet available. Not to mention that the app is still in its Alpha phase which is why there is currently not a lot of documentation in place. If you want to be up to date with the project, the best thing you can probably do right now is follow the [organisation I created on GitHub](https://github.com/Liphium). There are also a lot of [unique features](/docs) I have already implemented. The main page of the documentation currently contains some info on those (talking about Zap Share and Tabletop here).

And that's it for this very first blog post on the Liphium blog. I wanted to just address this question I get asked so much and have a resource I can link whenever someone doesn't get what I'm talking about and this now exists. So thanks for reading, and I'll catch you in the next blog post.