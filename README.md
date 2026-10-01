<div align="center">

# mbw9 — CS2 External (Premium Build v3.3)

![Platform](https://img.shields.io/badge/Platform-Windows%2010%20%7C%2011%20(x64)-0078D6?style=for-the-badge&logo=windows)
![Graphics](https://img.shields.io/badge/Renderer-DirectX%2011%20%2B%20ImGui-blueviolet?style=for-the-badge)
![Security](https://img.shields.io/badge/Bypass-Usermode%20NTAPI%20(No%20Driver)-success?style=for-the-badge)
![Stream Proof](https://img.shields.io/badge/Stream%20Proof-OBS%20%2F%20Discord%20Safe-orange?style=for-the-badge)
![Game](https://img.shields.io/badge/CS2-Updated%20(Build%2014188)-red?style=for-the-badge)

<p align="center">
  <b>High-performance, driverless external overlay for Counter-Strike 2.</b><br>
  Equipped with DirectX 11 rendering, ultra-low latency NTAPI memory reads, full tactical radar, smart aimbot, and customizable crosshairs.
</p>

[![Website](https://img.shields.io/badge/Website-Live%20Demo-00d4ff?style=for-the-badge&logo=githubpages&logoColor=white)](https://abdoomrini.github.io/cs2-mbw9-release/)
[![Discord](https://img.shields.io/badge/Discord-Join%20Server-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/j88M4gwdG)

---

<img src="menu-image.png" alt="mbw9 Menu Preview" width="900" style="border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.5);" />

</div>

---

## ⚡ Quick Start

### 1. Requirements
* **Operating System**: Windows 10 (1903+) or Windows 11 (64-bit).
* **Game**: Counter-Strike 2 running in *Fullscreen Windowed* (Borderless) or *Windowed* mode.
* **Privileges**: Administrator rights (required for usermode `NtReadVirtualMemory` access).
* **Dependencies**: None! Statically linked (`/MT`), no VC++ redistributable or kernel drivers needed.

### 2. Files Setup
Extract all files into the **exact same directory**:

| File / Folder | Description |
| :--- | :--- |
| `External.exe` | Main application executable |
| `LOGO.png` | Menu brand header & sidebar visual |
| `fa-solid-900.ttf` | FontAwesome 6 icon glyphs |
| `fa-solid-900.otf` | Fallback icon font |
| `radar_data.json` | World-to-map calibration coordinates |
| `map/` | High-resolution tactical 2D radar maps (11 competitive maps) |

### 3. Usage
1. Launch **Counter-Strike 2** first and enter the main menu or a game.
2. Right-click **`External.exe`** and select **Run as Administrator**.
3. Press **`INSERT`** on your keyboard to toggle the menu open or closed.
4. Customize your settings across the navigation tabs on the left.

---

## ⌨️ Default Keybindings

| Key | Function | Description |
| :---: | :--- | :--- |
| `INSERT` | **Toggle Menu** | Show or hide the configuration interface |
| `ALT` | **Triggerbot** | Hold to engage automatic firing when on target (configurable) |
| `F5` | **Spectator Map** | Toggle the tactical 2D overview map while spectating |
| `TAB` | **Filter Positions** | Toggle enemy-only filtering in the Player Positions window |
| `Mouse Drag` | **Reposition Panels** | Move Menu, Radar, Bomb HUD, Spectator Map anywhere |

---

## 🌟 Feature Breakdown

### 👁️ Visuals (ESP)
* **2D Bounding Box**: Classic full box or corner frame with customizable thickness, corner length, and team-specific colors.
* **Dynamic Health Bar**: Left/Right/Top/Bottom positioning with automatic Green-to-Red health gradients.
* **Bone Skeleton**: High-precision bone joints with head-point indicators and background drop-shadows.
* **Player Info Badges**: Real-time Player Name, Active Weapon with icon, Distance (meters), C4 Carrier tag, and Flash/Blind state.
* **Snaplines & Indicators**: Target tracer lines from Top, Bottom, or Screen Center + 360° offscreen directional arrows.
* **Pixel Tuning**: Dedicated advanced customization panel for pixel-level offset adjustment on every element.

### 🎯 Combat & Aimbot
* **Smart Aimbot**: Smoothing curve, dynamic FOV circle, and bone selection (Head, Neck, Chest, Pelvis).
* **Target Priority**: Nearest to Crosshair or Lowest HP targeting algorithms.
* **Advanced Safety Checks**: Visibility verification (spotted mask), Smoke Check, and Flash Check.
* **Recoil Control System (RCS)**: Standalone or aim-assisted pitch/yaw recoil compensation with shot-delay activation.
* **Humanizer Engine**: Natural micro-overshoot, aim deceleration, reaction-time jitter, and target velocity prediction.
* **pSilent Engine**: Silent aim calculation with 3D spherical FOV and tick synchronization.

### ⚡ Triggerbot
* **Instant & Magnet Trigger**: Fires automatically upon crosshair intersection.
* **Scoped Only Filter**: Optional safety filter strictly active when snipers are zoomed in.
* **Delay Variance**: Humanized pre-fire and post-fire millisecond randomize delays.
* **Pistol Rapid Fire & Burst**: Automatic cycle for semi-automatic handguns and rifles.

### 🗺️ Radar & Tactical Minimap
* **Standalone 2D Radar**: Floating, draggable radar window with clean player blips, health colors, and look-direction cones.
* **Player Positions HUD**: Real-time in-game callout display (e.g. *Banana*, *A Site*, *Catwalk*, *Apartments*).
* **Spectator Map**: Tactical bird's-eye map displaying all player positions when eliminated or spectating (`F5`).

### 💣 World & Objective
* **Bomb HUD Panel**: Floating draggable C4 countdown timer, defuse kit detection, and lethal radius indicator (**SAFE / LETHAL**).
* **Planted C4 3D ESP**: World-space marker highlighting plant site (**A** or **B**) and remaining detonation seconds.
* **Grenade Warning & Projectiles**: Real-time grenade tracking with trajectory lines and offscreen danger alerts.
* **Dropped Weapons & Items**: World labels for dropped rifles, pistols, grenades, and bomb carrier drops with ammo counts.

### ⚙️ Crosshairs & Misc
* **Custom Crosshairs**:
  * **Styles**: Classic Cross & new **Static Quadrant**.
  * **Outline System**: Toggleable outline with dedicated color picker and thickness control.
  * **Negative Gap Support**: Fine-tune crosshair gaps down into negative spacing.
  * **Scope Dot Control**: Custom scope reticle center dot with scale and RGBA color adjustment.
  * **Freeze Time Grenade Crosshair**: Automatically displays grenade lineup crosshair during freeze time.
* **Movement**: Automatic Bunny Hop with strafe synchronization.
* **Camera Customization**: In-game FOV Changer (60°–140°) and View Offset tuning (X/Y/Z).
* **Visual Protections**: No Flash effect with variable opacity slider (0% to 100%).
* **Silent Reload**: CS2 quiet reload mechanic automation (inaudible to enemy players).
* **Stream-Proof**: Hardware-level `WDA_EXCLUDEFROMCAPTURE` protects against Discord, OBS, and Twitch capture tools.

### 💾 Profile Management & Engine
* **Config Profiles**: Save and load instant presets to `.ini` format.
* **Native File Dialog**: Load and export configurations directly from standard Windows File Explorer dialogs.
* **Tick Cache**: 125 Hz thread-safe seqlock entity snapshot system reducing memory access calls by 25×.

---

## 🛠️ Architecture & Specifications

| Component | Specification |
| :--- | :--- |
| **Memory Engine** | Direct usermode NTAPI (`NtReadVirtualMemory`), zero drivers |
| **Graphics API** | DirectX 11 transparent overlay with ImGui docking style |
| **Capture Protection** | `WDA_EXCLUDEFROMCAPTURE` display affinity |
| **Cache Architecture** | Multi-threaded tick cache (~125 Hz) with seqlock synchronization |
| **Toolchain** | Visual Studio 2022 (`/O2 /GL /MT /std:c++17`) |
| **Architecture** | Native x64 |

---

## 📋 Changelog (v3.3)

* **Crosshair Engine Expansion**:
  * Added **Crosshair Outline** with custom color palette and thickness slider.
  * Added new **Static Quadrant** style option.
  * Allowed **negative gap values** for classic dynamic crosshairs.
  * Added **Custom Scope Dot** scale multiplier and RGBA color settings.
  * Added **Freeze-Time Grenade Crosshair** toggle for instant smoke setups.
* **Menu & UI Refinements**:
  * Cleaned up Misc and Combat section layouts for a sleek, clutter-free look.
  * Updated preview assets with the latest high-resolution interface captures.
* **Engine Sync**:
  * Synced offsets with Valve CS2 client update (Build 14188).
  * Optimized memory reading throughput in entity loop.

---

## 💬 Community & Support

Join the community Discord server for updates, profiles, and assistance:

[![Discord Server](https://img.shields.io/badge/Discord-Join%20Chat-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/j88M4gwdG)

---

## ⚠️ Disclaimer

This project is created strictly for **educational and reverse-engineering research purposes**. Using third-party software in online matchmaking violates Valve's Terms of Service and may result in account penalties. Use at your own risk.
