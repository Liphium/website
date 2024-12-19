---
title: "Windows"
description: "How you install Liphium on Windows, it can be complicated, for that reason we have this guide."
---

Installing Liphium can be hard and since I'm a poor soul I can't really help you out by doing fancy things like signing the thing cause that would be way too expensive. And since the Microsoft store recently started requiring me to leak my address and phone number for a "customer support contact" I'm like: Well, that's not happening either. Even though I had everything ready. Well we're here now, and I'm gonna need a little bit of your trust to make this work and I'm also a little sorry that there is currently no better way of doing this. **Below all the installation instructions there is also a guide on how to uninstall Liphium** since that may be something you are looking for as well.

### Requirements

Before you install Liphium, it's important to tell you what you need to actually use the app after the installation. If you don't have **an invite to a town** or didn't [set up your own one yet](/docs/town-setup/docker), you will **not be able to use** Liphium.

### Installation of Liphium on Windows

Well there are two ways to get Liphium installed on your system. The first way is to just download the zip archive from our GitHub repository and do a bunch of weird stuff with that, and the other option is to just use the PowerShell script I provide below to get it installed. Problem is both are kind of complicated. Choose the one you like more, I guess.

#### Option 1: Install through the PowerShell script

Because PowerShell doesn't allow you to run just any script you download off the internet (which is probably for the better) you may have to perform additional steps based on what errors that come up when when running the command below. You can also view the script [here](https://gist.github.com/Unbreathable/c476ee7c54b9356aaa214628d2a026e8) if you want to see what it's going to do. Now just open a new PowerShell session and run the command below. Make sure to not close anything and Liphium should just open after the download completed.

```
irm https://gist.githubusercontent.com/Unbreathable/c476ee7c54b9356aaa214628d2a026e8/raw/9ab6c929d31bc4a37f77b4dab2874d680830e837/install.ps1 | iex
```

Liphium will also ask you for Administrator priviledges because it needs to add a shortcut to a folder so you can actually search for it in the Windows Search.

#### Option 2: Manual installation

This will basically guide you through the entire process the script does for you, but it's also a little more straight forward, this will take like 5 minutes and a few clicks, so please don't leave: It's not that complicated, I promise.

**Step 1**: Download the windows.zip file from the [latest release](https://github.com/Liphium/chat_interface/releases/latest) on GitHub and unzip the entire archive by right-clicking on the zip file and selecting "Extract" (or a similarly named option). If you can't figure it out, check out [this support article](https://support.microsoft.com/en-us/windows/zip-and-unzip-files-f6dde0a7-0fec-8294-e1d3-703ed85e7ebc).

**Step 2**: Run the file in the folder called chat_interface.exe and if there is a Windows Defender popup, that's completely normal. I don't have the money to buy a certificate to get around this problem, so you'll have to believe me or [an anti-virus scanning site](https://virustotal.com) that the file you're about to run is just installing Liphium and not some weird other stuff.

**Step 3**: The thing is also gonna ask you for Administrator because it needs to create a shortcut (not a desktop one), please accept that cause otherwise the app is not going to be installed. And with that, you're done. Have a nice time on Liphium. Oh and you can also now delete the zip file and the folder you extracted it to. There should be a shortcut in your applications folder, meaning you can run the app by typing "Liphium" into your search bar. Have fun!

### Uninstalling Liphium on Windows

So the time has come, huh? I guess not everyone likes Liphium and that's totally fine. Now, for uninstalling I didn't make a script cause I'm a lazy bastard so you'll just have to delete all the folders I tell you to. Luckily Liphium doesn't hide files all over your system so we're not going to have to delete so many directories.

Just as a reminder, **if you uninstall Liphium, all your keys and with that all of your data will never be accessible to you again unless you are logged in with another device on the same Liphium account**.

Now, if you really want to uninstall Liphium, just delete the following folders:

- %appdata%\com.liphium\chat_interface
- %temp%\liphium

If you now run the shortcut for Liphium again by typing "Liphium" into the Windows Search it should automatically ask you to remove the shortcut. Just click "Yes", and now Liphium is completely gone from your computer. Never to be seen again. It was nice having you!
