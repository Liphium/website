---
title: "Frequently asked questions"
description: "What you guys frequently ask us, the solution to your problem might be here!"
menus:
  3general:
    weight: 2
---

Welcome to our frequently asked questions page. If you have any question that should be listed here, please let us know! We'd like to expand this page to include as much information as possible because a lot of people only look for answers here.

### Where do I get Liphium?

Liphium is still in an alpha state, but if you are probably gonna try anyway. You first need to set up a server with Liphium Station (or get a friend that has a Liphium instance to send you an invite code) and then connect to it using one of our apps. Setting up your own Liphium instance is quite complicated and since there are no guides (for now), you should probably wait for that. But if you're willing to try it out, the code is always available on our GitHub repository.

### Why make another chat app?

I mostly just thought about chat apps really hard because I don't really use social media much. Through the desire for more features and better privacy across the social media stack, Liphium was born. Then there is also the lack of features in other messaging apps (such as Microphone sensitivity and more) that motivated me even more to make my own instead of building on top of an existing protocol like Matrix. And look what we have now. Zap, Tabletop and all the other things that make Liphium unique could not have been created without making everything from scratch.

### What is Liphium?

Come on, if that's your question, just go to the main page or click on "Documentation" again in the navbar above the title of this documentation entry. I don't want to paste that gigantic thing into here again. You can just look at it there.

### Why do I need a domain for my town?

Alright, there are two reasons for this, let me explain.

First, if you don't have a domain, the server address of your [town](/docs/concepts/towns) will be in all of the addresses of all of the people in your town. This would mean that if the address of the server ever changes (like if you want to move to a more powerful machine) everyone would lose their connections to people outside of your town. It would break everything in decentralization. The Liphium server is also designed in a way where it never expects to have the address of it change. Meaning if you don't have a domain and want to change the address of your server, you'll go through a lot of complaints from the **people in your town losing connections to friends in other towns**. And **you'd have to delete all of the accounts** as the server can't change the address of the friends you've saved in your vault. Would be kinda bad wouldn't it?

Second, by default Liphium blocks all towns that are using an insecure protocol. And because you can't have HTTPS when you just use a plain IP address you will never be able to connect to any towns running on the default configuration (which is basically all of them) because there are major security implications if you were to actually use a town without HTTPS in production.

I hope you understood the reasoning for this requirement and make the right choice. I will not help you with any of this stuff and if any request of this issue ever reaches me, I will ignore it. But if you have a good, secure and reasonable idea of how to solve this problem for everyone without huge migrations and want to implement all of it yourself, [feel free to file a pull request](https://github.com/Liphium/station) as Liphium is open source.
