# NOVASPLOIT-UI

> **A customized sci-fi desktop terminal and system-monitoring interface, inspired by Stark Industries.**

NOVASPLOIT-UI is a community customization of [eDEX-UI](https://github.com/GitSquared/edex-ui). It keeps the spirit of eDEX-UI's futuristic terminal interface while introducing NovaSploit branding and a Stark Industries-inspired visual direction.

This is an **independent, unofficial derivative project**. It is not affiliated with or endorsed by the original eDEX-UI authors, Marvel, or Stark Industries.

## Overview

NOVASPLOIT-UI is for people who enjoy immersive, science-fiction-inspired desktop interfaces and want their terminal to feel like a workstation from a fictional high-tech lab.

The project is based on the eDEX-UI codebase and its Electron application architecture. It is a visual and technical customization, not a replacement for a real system monitor, security tool, or operating-system shell.

## Features

- **NovaSploit identity** with a customized application presentation.
- **Stark Industries-inspired HUD** with a cyan, futuristic visual style.
- **Terminal panel** integrated into the desktop interface.
- **System and filesystem visualizations** inherited from the upstream project, depending on the current build and platform.
- **Electron-based desktop application** that can be developed and packaged for Linux.
- **Open-source lineage** with upstream attribution and licensing preserved.

The exact feature set may change between commits and releases. Consult the source code and release notes for the behaviour of a specific build.

## Credits and project lineage

NOVASPLOIT-UI is derived from **eDEX-UI**, originally created by **GitSquared (Gabriel Saillard)** and contributors.

- **Upstream repository:** https://github.com/GitSquared/edex-ui
- **Upstream license:** GNU General Public License v3.0 (GPL-3.0)
- **This repository:** an independent community customization with NovaSploit branding and interface changes.

Thank you to the eDEX-UI authors and contributors for making the upstream project available as open-source software.

NOVASPLOIT-UI is not an official continuation of eDEX-UI. The names and marks of third parties remain the property of their respective owners. The Stark Industries-inspired theme is fan styling and does not imply Marvel or Stark Industries endorsement.

## Download and use on Linux

### Option 1: Download a packaged release

When a Linux AppImage or another Linux package is published, download it from this repository's **GitHub Releases** page:

`https://github.com/<YOUR-USERNAME>/NOVASPLOIT-UI/releases`

Replace `<YOUR-USERNAME>` with the GitHub account that hosts this repository. If no release is published yet, there is no official prebuilt download available from this project.

For an AppImage:

1. Download the `.AppImage` asset from the release.
2. Open a terminal in the download directory.
3. Make the file executable and run it:

   ```bash
   chmod +x NOVASPLOIT-UI-*.AppImage
   ./NOVASPLOIT-UI-*.AppImage
   ```

Some Linux distributions may require FUSE compatibility libraries for AppImage execution. If it fails to launch, read the error message and your distribution's AppImage/FUSE documentation rather than running the file with `sudo`.

Only download release assets from the project's official Releases page. Review the release notes and verify checksums if the release provides them.

### Option 2: Run from source

Clone the repository and its Git submodules:

```bash
git clone --recurse-submodules https://github.com/<YOUR-USERNAME>/NOVASPLOIT-UI.git
cd NOVASPLOIT-UI
```

Install and run dependencies from the directory whose `package.json` defines the relevant application scripts. This project inherits an older Electron/native-module stack, so its working Node.js, npm, Python, and compiler versions may differ from current distributions.

Before running install or start commands:

1. Read the root and nested `package.json` files and their lockfiles.
2. Follow the scripts and dependency instructions for the checked-out revision.
3. Use a compatible Node.js/npm toolchain for the pinned Electron version.
4. Ensure your distribution has the compiler toolchain required by native dependencies such as `node-pty`.

Do not assume that a modern Node.js/Python combination will build this legacy project without compatibility fixes. Avoid applying arbitrary patches from untrusted sources. If you document a required patch, keep it minimal, explain why it is needed, and record it in the repository.

### Linux compatibility

Linux distributions package Electron, FUSE, system libraries, and build tools differently. A release may work on one distribution and need extra libraries on another. NOVASPLOIT-UI does not currently promise compatibility with every Linux distribution or desktop environment.

Please include your distribution/version and relevant error output when reporting a reproducible issue.

## Download

The latest Linux x86-64 release is available on the [NOVASPLOIT-UI Releases page](https://github.com/YOUR-USERNAME/NOVASPLOIT-UI/releases/latest).

**Download:** [NovaSploit-UI-x64.AppImage](https://github.com/YOUR-USERNAME/NOVASPLOIT-UI/releases/latest/download/NovaSploit-UI-x64.AppImage)

After downloading, open a terminal in the download directory and run:

```bash
chmod +x NovaSploit-UI-x64.AppImage
./NovaSploit-UI-x64.AppImage
```

For download integrity verification, download the SHA-256 checksum file from the same release and run:

```bash
sha256sum -c NovaSploit-UI-x64.AppImage.sha256
```

This build targets 64-bit x86-64 Linux systems. AppImage may require compatible FUSE support on some distributions.

## Development notes

- **Framework:** Electron desktop application.
- **Upstream base:** eDEX-UI.
- **Native dependency:** the upstream project uses native modules such as `node-pty`; these may need rebuilding against the exact Electron version used by the app.
- **Legacy toolchain:** the upstream project uses an older Electron generation. Node.js, npm, Python, node-gyp, and native-module versions must be treated as a compatible set.
- **Submodules:** clone with `--recurse-submodules` so icon assets are checked out. If needed later, run:

  ```bash
  git submodule update --init --recursive
  ```

- **Builds and releases:** packaged artifacts should be generated from the published source revision. If distributing an AppImage or another binary, provide the corresponding source and required license notices as described by GPL-3.0.
- **Changes:** this is a derivative project. Keep upstream attribution, mark significant modifications and relevant dates where required, and document NovaSploit-specific changes clearly.

Build commands and packaging targets can vary by revision. Check the actual package scripts before copying commands from older guides.

## Reporting issues

For general bugs and feature requests, open a GitHub issue with:

- Linux distribution and version.
- NOVASPLOIT-UI release or Git commit.
- Relevant Node.js/Electron versions if running from source.
- Steps to reproduce and the complete, relevant error output.

Please remove access tokens, passwords, private data, and other secrets from logs before posting.

For security-sensitive reports, follow [SECURITY.md](SECURITY.md) if that file is present in the repository. Do not publish a working exploit or sensitive user data in a public issue.

## Licensing

NOVASPLOIT-UI is a modified derivative of eDEX-UI and is distributed under the **GNU General Public License, version 3 (GPL-3.0)**, subject to the terms of that license and the separate licenses of included third-party components and assets.

- The full GPL-3.0 text is provided in [`LICENSE`](LICENSE).
- Preserve applicable upstream copyright, license, and warranty notices.
- Modified versions must carry the notices required by GPL-3.0, including prominent modification notices and relevant dates.
- If distributing binaries, provide the corresponding source and comply with the applicable GPL source, license, and notice requirements.
- Third-party fonts, icons, images, and other assets may have their own license terms. Review them separately.

This README is project documentation, not legal advice. Do not describe this project as officially endorsed by the upstream authors or by any third-party brand owner.
