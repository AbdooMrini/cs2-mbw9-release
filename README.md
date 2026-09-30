# mbw9 — CS2 External Cheat (Premium Build v3.3)

> External CS2 cheat — DirectX 11 overlay, ImGui UI, NTAPI memory reads, no driver needed.

![Menu Preview](menu-image.png)

---

## Changelog

### v3.3 — Sep 30 2026
- **CS2 Update sync** — Valve patch Sep 30 (MISC section)
  - Fixed pixel-gaps in various Rush rooms *(map geometry)*
  - Clipping adjustments in T/CT Castle rooms *(map geometry)*
- Silent Reload section updated to Sep 30 build
- CS2 Update notes panel added in Misc tab
- Version string bumped to v3.3

### v3.2 — Aug 2026
- Full release sync: `map/`, `radar_data.json`, font files
- Player Positions tactical window
- Spectator Minimap (F5, auto-shows when spectating)
- Silent Reload mechanic (CS2 hold-reload, silent for enemies)
- FOV Changer + View Offsets (X/Y/Z)
- Pro Player Humanize v2 + Silent Aim pSilent Engine
- Config save/load with file dialog

### v3.1 — Aug 2026 (Initial public release)
- Initial release

---

## Download & Setup

### Required Files
All files must be in the **same folder**:

| File | Purpose |
|------|---------|
| `External.exe` | The cheat executable |
| `fa-solid-900.ttf` | FontAwesome icon font (menu icons) |
| `fa-solid-900.otf` | FontAwesome icon font (fallback) |
| `LOGO.png` | Logo displayed in menu header & sidebar |
| `radar_data.json` | Map coordinate data for radar & positions |
| `map/` folder | Radar map images (11 maps) |

### How to Run

1. Launch **Counter-Strike 2** and enter the main menu or a game.
2. Right-click **`External.exe`** → **Run as administrator**.
3. Press **`INSERT`** to open/close the menu.
4. Configure features from the tabs on the left.

### Requirements

| | |
|---|---|
| **OS** | Windows 10 (1903+) or Windows 11 — x64 only |
| **GPU** | DirectX 11 compatible |
| **RAM** | 4 GB minimum |
| **Privileges** | Administrator (NTAPI memory access) |

> **No drivers, no DLLs, no VC++ redist needed.**  
> Statically linked (`/MT`), uses `NtReadVirtualMemory` directly from usermode.  
> Overlay uses `WDA_EXCLUDEFROMCAPTURE` — **invisible to OBS, Discord, streaming software.**

> Windows Defender may flag the exe — add a folder exclusion if needed.

---

## Menu Controls

| Key | Action |
|-----|--------|
| `INSERT` | Toggle menu open / close |
| `ALT` (default) | Triggerbot hotkey |
| `F5` | Toggle Spectator Minimap |
| `TAB` | Toggle enemy-only in Player Positions window |
| Mouse drag | Move menu / radar / bomb panel / spectator map |

---

## Features

### 👁️ Visuals (ESP)

**General & Activation**
- Master ESP toggle
- Enemy Only / Visible Only (spotted) filters

**Bounding Box**
- 2D Box — Full or Corner style
- Per-team colors, box thickness, corner length

**Health Bar**
- Dynamic color by HP (green → red)
- Position: Left / Right / Top / Bottom
- Configurable thickness, background track

**Skeleton & Bones**
- Full bone skeleton with configurable thickness
- Head joint dot, shadow/outline background

**Player Details & Text ESP**
- Player Name, Distance, Active Weapon
- C4 Carrier badge, Flashed/Blind badge
- Per-element position, scale, color, background toggle

**Snaplines & Offscreen Indicators**
- Snaplines (origin: Top / Bottom / Center, thickness, color)
- Offscreen arrows (radius, size, color)

**Advanced Customisation**
- Pixel-level X/Y fine-tuning for every element (health bar, name, weapon, distance, C4 badge, blind badge)

---

### 🌍 World & C4

**Bomb Panel HUD**
- Draggable HUD panel with explosion timer
- Defuse timer + kit status (with/without kit)
- SAFE / NOT SAFE damage indicator
- Configurable position, opacity, background opacity

**Planted C4 3D Badge**
- Shows plant site (A/B) and countdown in-world

**Grenades & Projectiles**
- Grenade warnings (incoming flash, HE, molotov)
- Projectile tracking
- Offscreen arrows for all grenades on map

**Dropped Weapons & Items**
- Item name, distance, ammo count
- Weapon color, offscreen arrows
- Dropped C4 badge
- Max scan distance slider

**Hostages & Map Objects**
- Show hostages, show map elements

---

### 🎯 Aimbot

**General**
- Enable toggle + Aim-On-Key (configurable keybind)
- Enemy Only / Visible Only / Flash Check / Smoke Check

**Targeting & FOV**
- Hitbox: Head / Neck / Chest / Pelvis
- Target selection: Closest to crosshair or Lowest HP
- FOV slider + smoothing
- Draw FOV circle (color, thickness)

**Recoil Control System (RCS)**
- Enable RCS / Compensate on target only
- RCS Strength, RCS Smoothing
- Start After N Shots

**Humanization**
- Acquisition delay, micro jitter, speed variance
- Pro Player Humanize v2: micro overshoot, distance scaling, base reaction, reaction variance, correction delay, decelerate near target
- Target velocity prediction (prediction time)

**Silent Aim (pSilent Engine)**
- Enable + Use-Key keybind
- Silent FOV / Silent Smooth
- 3D Sphere FOV radius
- Silent Hitbox selector
- Enemy Only / Visible Only / Flash Check / Smoke Check
- Pro Silent Mode: jitter, tick sync
- Silent Prediction (prediction time)
- Draw Silent FOV circle

---

### ⚡ Triggerbot

- Enable + Hotkey
- Enemy Only / Only Scoped (snipers)
- Base delay + humanized random delays (min/max)
- Auto Pistol rapid fire (fire rate)
- Burst Fire Mode (burst count, burst delay)

---

### 🗺️ Radar

- External 2D radar window (draggable, resizable)
- Player blips with names, direction cones, health colors
- Radar size, zoom, scan range, blip size sliders
- Opacity & background opacity
- Deathmatch mode, smooth blip movement
- Reset radar position

---

### 💣 Nade Helper

- Show saved grenade lineup spots per map
- Match grenade type filter
- Draw distance / use distance sliders
- Grenade trajectory prediction (prediction steps, interval)
- Save current spot / Delete nearest / Clear all
- Import / Export spots from file

---

### ⚙️ Misc

**Movement**
- Bunny Hop (auto-jump)
- Auto Strafe (grand pas) + strafe sensitivity

**Camera & View**
- FOV Changer (60°–140°)
- View Offset X / Y / Z (camera position fine-tuning)

**Crosshair**
- Custom crosshair overlay for all weapon types
- Length, gap, thickness, color
- Always visible toggle (rifles, pistols, SMGs, snipers)

**No Flash**
- No Flash with configurable alpha (0–100%)

**Silent Reload** *(CS2 mechanic — Sep 30 update)*
- Auto hold-reload when clip is empty
- Enemies cannot hear you reloading
- Configurable keybind (0 = auto)
- Silent Un-scope info toggle

**CS2 Update Notes** *(Sep 30 2026)*
- Valve patch notes displayed in-menu
- Map geometry only: Rush pixel-gaps fixed, Castle clipping adjusted

**Spectators & Stream Protection**
- Spectator list overlay (who is watching you)
- Hide from Capture — overlay excluded from screen recording (OBS, Discord, etc.)

---

### 📍 Positions (Tactical)

**Player Positions Window**
- Real-time CS2 zone label per player (A Site, Banana, Mid, CT Spawn…)
- Enemy Only / All Players toggle (TAB key)
- Draggable, configurable opacity

**Spectator Minimap**
- Full 2D radar map with zone labels and player dots
- Auto-shows when spectating another player
- F5 hotkey toggle
- Show player names, zone positions, health colors
- Configurable dot radius, opacity, map size and position

---

### 📊 Performance

- **Per-Tick Entity Cache** — 125 Hz snapshot (seqlock-protected), reduces driver calls by ~25×
- **Tick Cache Refresh Interval** — configurable 1–32 ms
- **VSync toggle**
- **Disable Overlays When Menu Open** (hides ESP, radar, bomb panel, spectator list)
- **System Info** — overlay FPS, timer resolution, memory backend info

---

### 💾 Config

- Save / Load named profiles
- Load from File / Save to File (native Windows file dialog)
- Delete profiles
- Exit button

---

## Technical

| | |
|---|---|
| **Memory backend** | `NtReadVirtualMemory` (direct NTAPI, no driver) |
| **Overlay** | DirectX 11 + ImGui, transparent topmost window |
| **Stream proof** | `WDA_EXCLUDEFROMCAPTURE` — invisible to capture software |
| **Entity cache** | Per-tick seqlock snapshot at ~125 Hz |
| **Build** | MSVC 2022, `/O2 /GL /MT /std:c++17`, statically linked |
| **Arch** | x64 only |

---

## Support

Questions or bugs → join the Discord:

### [Join Discord](https://discord.gg/A34uD5RKa)

---

## Disclaimer

This software is provided for **educational purposes only**.  
Use at your own risk. The author is not responsible for any bans or consequences from use.
