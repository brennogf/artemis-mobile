# Artemis Mobile

This repository contains "Artemis Mobile", a lightweight Expo/React Native app that lets you list and control profiles on an Artemis RGB server using its REST API.

## For End Users

Artemis Mobile provides a simple UI to view Artemis profiles and toggle a profile's "suspend" state remotely.

- APK: I will publish a ready-to-install APK in this repository's Releases section on GitHub. You can download the latest APK from the Releases page.

Quick steps to use the APK:

1. Download the latest APK from the repository Releases.
2. On your Android device, enable installation from unknown sources (or use the package installer in modern Android versions).
3. Install the APK and open the app.
4. In Settings, enter your Artemis server IP (and port if different from the default 9696).
5. On the Home screen you can view available profiles and toggle their suspend state.

Notes:

- The app communicates directly with your Artemis server over HTTP. Make sure your mobile device is on the same network as the Artemis server.
- If the app cannot access the Artemis server, add an exception in your computer's firewall/antivirus.

## For Developers

Prerequisites

- Node.js v22.20+
- npm
- Expo: you can use via npx (`npx expo`) or install the CLI globally

Install dependencies:

```bash
npm install
```

Run the app in development:

```bash
npx expo start
```

---

Made with ♥ by Brenno Givigier :wave: [Get in touch!](https://www.linkedin.com/in/brenno-givigier/)
