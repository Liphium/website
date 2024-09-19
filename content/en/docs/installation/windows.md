---
title: "Windows"
description: "How you install Liphium on Windows, it can be complicated, for that reason we have this guide."
menus:
  1installation:
    weight: 2
---

Installing Liphium can be hard and since I'm a poor soul I can't really help you out by doing fancy things like signing the thing cause that would be way too expensive. And since the Microsoft store recently started requiring me to leak my address and phone number for a "customer support contact" I'm like: Well, that's not happening either. Even though I had everything ready. Well we're here now, and I'm gonna need a little bit of your trust to make this work and I'm also a little sorry that there is currently no better way of doing this. **Below all the installation instructions there is also a guide on how to uninstall Liphium** since that may be something you are looking for as well.

### Requirements

Before you install Liphium, it's important to tell you what you need to actually use the app after the installation. If you don't have **an invite to a town** or didn't set up your own one yet, you will **not be able to use** Liphium.

### Installation of Liphium on Windows

Well there are two ways to get Liphium installed on your system. The first way is to just download the zip archive from our GitHub repository and do a bunch of weird stuff with that, and the other option is to just use the PowerShell script I provide below to get it installed. Problem is both are kind of complicated. Choose the one you like more, I guess.

#### Option 1: Manual installation

This will basically guide you through the entire process the script does for you, but it's also a little more straight forward, this will take like 5 minutes and a few clicks, so please don't leave: It's not that complicated, I promise.

**Step 1**: Download the windows.zip file from the [latest release](https://github.com/Liphium/chat_interface/releases/latest) on GitHub and unzip the entire archive by right-clicking on the zip file and selecting "Extract" (or a similarly named option). If you can't figure it out, check out [this support article](https://support.microsoft.com/en-us/windows/zip-and-unzip-files-f6dde0a7-0fec-8294-e1d3-703ed85e7ebc).

**Step 2**: Run the file in the folder called chat_interface.exe and if there is a Windows Defender popup, that's completely normal. I don't have the money to buy a certificate to get around this problem, so you'll have to believe me or [an anti-virus scanning site](https://virustotal.com) that the file you're about to run is just installing Liphium and not some weird other stuff.

**Step 3**: The thing is also gonna ask you for Administrator because it needs to create a shortcut (not a desktop one), please accept that cause otherwise the app is not going to be installed. And with that, you're done. Have a nice time on Liphium. Oh and you can also now delete the zip file and the folder you extracted it to. There should be a shortcut in your applications folder, meaning you can run the app by typing "Liphium" into your search bar. Have fun!

#### Option 2: Installation through a PowerShell script

Because PowerShell doesn't allow you to run just any script you download off the internet (which is probably for the better) you're going to have to paste the script I provide below into your editor and just run it like that because there is just no other way. So let's get into it.

**Step 1**: Create a new file called `install.ps1` literally anywhere on your computer and paste the code from this [GitHub Gist I created](https://gist.github.com/Unbreathable/c476ee7c54b9356aaa214628d2a026e8) into there.

**Step 2**: Open Terminal (in Windows 11) or PowerShell (in Windows 10 + 11) and use the following command to run the script: `.\install.ps1`. This might take some time as it's going to download the newest version, unzip it and then run it. It's going to ask for Administrator permissions as it's going to add a shortcut to your start menu so you don't have to do anything weird to start the app.

**Step 3**: The app should now open itself and you should be ready to go by entering all the stuff you need for Liphium like your [town's address](/docs/concepts/towns) and more stuff like that.

### Uninstalling Liphium on Windows

So the time has come, huh? I guess not everyone likes Liphium and that's totally fine. Now, for uninstalling I didn't make a script cause I'm a lazy bastard so you'll just have to delete all the folders I tell you to. Luckily Liphium doesn't hide files all over your system so we're not going to have to delete so many directories.

Just as a reminder, **if you uninstall Liphium, all your keys and with that all of your data will never be accessible to you again unless you are logged in with another device on the same Liphium account**.

Now, if you really want to uninstall Liphium, just delete the following folders:

- %appdata%\com.liphium\chat_interface
- %temp%\liphium

If you now run the shortcut for Liphium again by typing "Liphium" into the Windows Search it should automatically ask you to remove the shortcut. Just click "Yes", and now Liphium is completely gone from your computer. Never to be seen again. It was nice having you!
