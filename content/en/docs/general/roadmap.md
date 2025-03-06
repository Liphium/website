---
title: "Roadmap & the future"
description: "Everything coming to Liphium in the near future, even what you can expect in the far future."
menus:
  3general:
    weight: 3
---

Liphium is quite a large project and features come and go over time. If you have any suggestions for future additions or maybe even removals, make an issue on GitHub and maybe we'll consider what you want done. But please remember that Liphium is an open-source project and that we therefore work on the stuff that we want/need and often not what one person is demanding. If you want a better look at what was actually finished, you can check out [the changelog](https://github.com/Liphium/chat_interface/blob/main/CHANGELOG.md).

## 2025

2025 is the year of Liphium finally becoming stable enough for general availability. There are so many things I want to ship this year, and one of them might just take Liphium to the next level altogether. I want to remind you that this is a really ambitious roadmap and that features might be delayed by months or even into 2026 altogether. Nothing is certain in programming and this is just me putting out some milestones that I think are achievable. No promises, but I'll say that I've been pretty good with hitting the milestones recently, so make of that what you will.

### May: 1.0.0 Beta

First, and this is the biggest and most ambitious goal in this entire roadmap: Finish all of the features Liphium has to offer by the End of April. Yes, that includes bringing back voice and video to Spaces and might even contain screenshares. We'll see how far we make it. But here is an entire list:

#### The exciting bits

- **Squares**: A new type of group conversation that can also list Spaces as a part of it as well as have multiple conversations in it (called Topics). This should make it easier for people who are more used to something like Discord to adopt Liphium.
- **Voice and video** will be returning to Spaces together with new revamped audio settings that support AI noise cancellation and microphone sensitivity (more audio processing related features like echo cancellation in the future).

#### Everything else

- Fix all major bugs and annoyances in the current version of Liphium
- Finally add password reset and key reset functionality
- Improve the performance and database layout of the app before it always needs an entire migration to merge major changes

#### The sad bits

- **Tabletop** will likely be removed for this update as maintaining it is just a too big of a burden with everything else going on right now. It will make a return and I will not forget about it, but for now it has too many bugs and flaws to ship it as stable.

### June: 1.0.0 Release

After the Beta is released, we'll take a whole month to ship out Liphium to as many platforms as we possibly can and also fix all the bugs that we encounter during testing. A big goal will also be to finally add tests to a lot of parts in Liphium to make sure it's as reliable as you would expect. I also want to review basically the entire source code to see if we find any obvious flaws or ways to improve the encryption in Liphium.

### The rest of 2025

Well, 1.0.0 makes this year exciting already, but if you are a developer you'll be even more excited for what's coming after.

That's right, the community makes an app what it is and I want to also give everyone in the community the ability to contribute, not just by contributing to the Liphium codebase, but also by publishing themes and maybe even extensions that allow Liphium to be even better than it is currently. Therefore, the rest of 2025 will be focused on just that. Just to get you excited, here are a few ideas that I've been playing around with in my head:

- Tabletop needs a rewrite anyway as mentioned above, so what if we made a **Liphium Realtime SDK** to use a Liphium Town's resources for managing multiplayer and real-time apps like Tabletop. This could enable more than just Tabletop and also allow developers to build their own apps/games (native to Liphium) without needing a server.
- Wouldn't it be cool if Tabletop had persistence? For that reason, I think it would be cool to build a **Liphium Projects SDK** that would give you direct access to Liphium's files and vault API to upload project files or project state and have a projects list or even other more complex things stored in there.

Don't think that any of the things listed above will arrive in 2025 or ever even be created in the first place, but they're just ideas so you know what I'm looking towards. Of course there are also other ideas floating around in my head to make Liphium even more unique. But those things are good surprises when the time is right and I don't want to spoil it because that would be boring. So for now, this will have to be enough.

I hope that there's at least something in this roadmap you're excited about and with that we shall hope that 2025 will be another good year of development.
