---
title: "Storage locations"
description: "Where Liphium stores your files, the local database & more."
menus:
  3general:
    weight: 6
---

{{< hint >}}
You can generally not find app data from within the file explorer on mobile platforms. I want to introduce ways of browsing stored files and mopre from within the app in the future, but right now this feature is not available. That's why all of the options listed here are not available on mobile.
{{< /hint >}}

Liphium generally only stores data in one central place. Depending on the platform this place can be quite different though. So for everyone trying to delete all of their old data or just wanting to look around in the data the app stores: Here's where you can find all of this information.

### Finding where your files are stored

**1.** Go to your settings by clicking {{< icon >}}settings{{< /icon >}} right in the bottom left on desktop or in the bottom bar of the mobile app.

**2.** Click on the "{{< icon >}}folder{{< /icon >}} Files" tab.

**3.** Click on "{{< icon >}}launch{{< /icon >}} Open save folder", "{{< icon >}}launch{{< /icon >}} Open file folder" or "{{< icon >}}launch{{< /icon >}} Open cache folder".

If you want to know what the difference between those 3 folders for files are you can read the section below.

### Why are there 3 different file folders?

Liphium guesses how long files are stored based on where they are downloaded from. For this reason, there are 3 different directories for file storage. Let's look at what they are used for.

- **Saved files**: Mostly images that are stored permanently and barely change like profile pictures or any future things that can be kept forever because they are needed regularly.

- **Normal files**: Files that are cached from being attached to messages or similar. You can even set a limit on how big this cache should be in the {{< icon >}}folder{{< /icon >}} Files settings.

- **Cached files**: Files that are needed only once like cards in a Tabletop session. Since they are stored in the temp folder, the expectation is that the operating system or the user will come clean them up one day.

### How to find the app data folder

Liphium stores a lot of data, like your local database, in a central folder that has different locations based on your operating system. The easiest way to get to it is by following the above guide on how to find where your files are stored, then clicking on "{{< icon >}}launch{{< /icon >}} Open file folder" and just navigating back a folder.

If you don't have Liphium installed anymore, here are the specific locations per currently supported platform. If a platform is missing, please let us know by [opening a discussion or issue](https://github.com/Liphium).

**Windows**

- %appdata%\com.liphium\chat_interface
- %temp%\liphium
