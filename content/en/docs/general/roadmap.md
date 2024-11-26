---
title: "Roadmap & the future"
description: "Everything coming to Liphium in the near future, even what you can expect in the far future."
menus:
  3general:
    weight: 3
---

Liphium is quite a large project and features come and go over time. If you have any suggestions for future additions or maybe even removals, make an issue on GitHub and maybe we'll consider what you want done. But please remember that Liphium is an open-source project and that we therefore work on the stuff that we want/need and often not what one person is demanding. If you want a better look at what was actually finished, you can check out [the changelog](https://github.com/Liphium/chat_interface/blob/main/CHANGELOG.md).

## 2024

Liphium has grown quite a lot in 2024. Throughout June and July decentralization was finally complete and at the end of August first versions of Liphium were released as downloadable and had instructions to get set up. This year is all about getting the basics right and making sure Liphium is available on the first mobile and desktop platforms.

### Project Lightwire

Because audio and video calls have been removed and all of the code has been deleted from the codebase, we are planning to reintroduce this functionality throughout 2025. The goal of Project Lightwire is building UDP streaming technology to serve the needs of all the ideas we want to implement in the future. This doesn't just stop at audio and video calls, because there's (as usual) a lot of way too big things that I'm currently thinking about. You can read more about those ideas in the 2025 section of this page.

### A look back at November

While I didn't manage to get out a Beta of the Android version of the app this month, I still feel like significant progress was made towards that goal. The app now runs decently on Android, with a few more quirks that we need to get rid of. For example, when rotating your phone by 90 degrees into a wide-screen format. But as for all of the other goals, most of them have been released with the recent [0.5.0 update](https://github.com/Liphium/chat_interface/releases/tag/v0.5.0). The rewrite of the internals for faster startup is also complete, but that will be released together with bigger features later in December.

### Goals for December

Well December being the last and final month and now almost around the corner, I can now finally talk about what I'll be working on. The focus is making Liphium a usable app and also to push out some changes that were made in November but didn't make it into the release in November. Most notably, the rewrite of the internal startup architecture that can boost startup performance by 2x (I got rid of a lot of unnessecary endpoints and also merged some resulting in less calls to the server).

- Get all messages synchronized into the local database
- Add message search to finally make conversations sort of usable
- Get a basic demo of Lightwire up and running (I'm attending a Hackathon later this month where I'll be working on it)

And now for some things that would be cool, but will most likely be pushed into January.

- That one feature that I talked about here before
- The release of a Beta version of Liphium for Android
- A proper release in the Microsoft Store / Making the installation of Liphium more user-friendly
- Addition of a Downloads page here on the website


## 2025

In 2025, I want to evolve Liphium beyond what it currently is. It shouldn't just be about chatting anymore. I want it to be a place for events and make sure our audio and video features support this vision. One priority is making it really simple to set up a Liphium server and trying to make it even easier. Project Lightwire will be a major part of that and while streaming audio will be **much** easier than video, both are planned and will hopefully be supported at the end of 2025. To add a little bit more to the already massive challenge, I also want to be able to stream video and audio files using Lightwire. But that's the most distant dream as of now, we'll see how it goes though!

### Our collaboration with Vultris

If you read the Impressum of this page, you may already know what's coming. Liphium isn't becoming proprietary, but we need ways to make it sustainable and make it even simpler to host towns. The simplest way for someone to host a town would be by just paying for a server and everything being installed for you. As a part of Vultris we'll finally be able to achieve that vision.