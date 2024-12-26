---
title: "Roadmap & the future"
description: "Everything coming to Liphium in the near future, even what you can expect in the far future."
menus:
  3general:
    weight: 3
---

Liphium is quite a large project and features come and go over time. If you have any suggestions for future additions or maybe even removals, make an issue on GitHub and maybe we'll consider what you want done. But please remember that Liphium is an open-source project and that we therefore work on the stuff that we want/need and often not what one person is demanding. If you want a better look at what was actually finished, you can check out [the changelog](https://github.com/Liphium/chat_interface/blob/main/CHANGELOG.md).

## 2025

With you probably reading this in 2025, we're just short of our next big milestone: Officially shipping to the first platform. While I don't want to really announce anything yet, I can say that I've been working on a Microsoft Store listing. And while that's not everyone's preferred way of installing the app (which I completely understand), it's the cheapest way for me to get the app to everyone in a safe way. Certificates cost a lot of money and are burden for me to manage and having a third party publish the thing also doesn't really sit right with me. So for all of those reasons, the Microsoft Store was chosen. 

But let's get to what you wanna really hear: What I'm planning to do in the next few months and a few more details for January.

### January of 2025

For January the biggest goal is rolling out version 0.6.0 of the server and client for Liphium. I want local message storage and the message search to be available for everyone. Most of this is already done, so let me say what's still on the list before 0.6.0 can go out of the door:

- A Tabletop rework with inventories that live on the table instead of the UI (to make it easier to play card games that require you to see how many cards someone has)
- A member list in Spaces to actually see who you're in the Space with (why did we not have this before?)
- The Spaces chat needs persistent account identifiers (right now when you leave a Space and join again no-one knows which messages where yours even though they're still there)
- Finally that the steps needed to make Spaces decentralized by making the connection to a Space completely independent from having an account in the town where it's hosted  
- Make the client app more stable and make errors more easy to understand
- Write lots of documentation so people can actually understand Liphium
- Link to new documentation directly from the client

This is quite a lot of work to do in one month for me as I've also got university going at the same time as making this app, but I think with the few days of holidays I've left I can get a good headstart on all of this.

### The rest of 2025

As I've said on this roadmap before, we definitely need voice and video chat to come back to Liphium at some point. I want to build an entire audio engine from scratch just for this purpose. This will require a lot of work and will run under the name **Project Lightwire**. This engine is finally gonna make it possible for us to have reliable and well supported audio settings directly in the app. While I know that it might take a while until we can roll something like this out to all of Liphium and call it stable, current solutions just miss basic features like AI noise suppression and microphone sensitivity as well as push to talk which are just a few requirements for Project Lightwire. This is going to be tough and I hope that I can complete it by the end of 2025, but I unfortunately can't say for certain if this will be completed throughout the year, so no promises. My plan is to have it stable by summer though and I will keep working on it.

We'll also have a shifted focus at features that make you more productive after winter summer since I have some really cool ideas for how we could go beyond just being a chat platform and also potentially integrate with other apps and give you the ability to customize Liphium even more than currently and make Tabletop even more powerful. We don't just want to support card games, but also board games and potentially even more. Everything that's possible on a real table should be possible in Tabletop. But that's about as far as I'll go with my calls for this year as nothing here is certain yet, just a lot of things I hope to achieve.

I hope that there's at least something in this roadmap you're excited about and with that we shall hope that 2025 will be another good year of development.

