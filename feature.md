# mbw9 — Premium Build v3.2

Application externe CS2 (overlay DirectX 11 + ImGui) avec lecture mémoire NTAPI.

---

## Onglets du menu

### 1. Visuals (ESP)
**General & Activation**
- Enable Visuals (ESP)
- Enemy Only
- Visible Only (Spotted)

**Bounding Box**
- Show 2D Box
- Box Style (Full / Corner)
- Box Thickness
- Corner Length (mode corner)
- Couleur ennemi / équipe

**Health Bar**
- Show Health Bar
- Dynamic Color by HP
- Bar Position (Left / Right / Top / Bottom)
- Bar Thickness
- Background Track + couleur

**Skeleton & Bones**
- Show Skeleton
- Bone Thickness
- Head Joint Dot
- Couleur ennemi / équipe
- Shadow / Outline BG + couleur

**Player Details & Text ESP**
- Player Name (position, scale, couleur ennemi/équipe, background)
- Distance (position, scale, couleur, background)
- Active Weapon (position, scale, couleur, background)
- C4 Carrier Badge (position, scale, couleur)
- Flashed / Blind Badge (position, scale, couleur)

**Snaplines & Offscreen Indicators**
- Show Snaplines (origin: Top/Bottom/Center, thickness, couleur)
- Offscreen Arrows (radius, size, couleur)

**Advanced Customisation**
- Pixel Fine-Tuning Offsets (X/Y pour health, name, weapon, distance, C4 badge, blind badge)

---

### 2. World & C4
**Bomb & C4**
- Bomb Panel HUD (draggable, position X/Y, opacity, bg opacity, reset)
- Planted C4 (3D ESP) (scale, couleur)

**Grenades & Projectiles**
- Grenade Warnings
- Projectiles
- Show All on Map (Offscreen Arrows) (radius, arrow size)

**Dropped Weapons & Items**
- Dropped Weapons
- Item Name / Item Distance / Item Ammo
- Weapon Color
- Show All on Map (Offscreen Arrows) (radius, arrow size)
- Dropped C4 Badge (scale, couleur)
- Max Scan Distance

**Hostages & Map Objects**
- Show Hostages
- Show Map Elements

---

### 3. Aimbot
**General & Activation**
- Enable Aimbot
- Aim On Key (+ keybind)
- Enemy Only
- Visible Only
- Flash Check
- Smoke Check

**Targeting & FOV**
- Target Hitbox (Head / Neck / Chest / Pelvis)
- Target Selection (Closest to Crosshair / Lowest Health)
- Field of View (FOV)
- Aim Smoothing
- Draw FOV Circle (couleur, épaisseur)

**Recoil Control System (RCS)**
- Enable RCS
- Compensate On Target Only
- RCS Strength
- RCS Smoothing
- Start After Shots

**Legit Movement & Humanization**
- Humanize Smoothing (acquisition delay, micro jitter, speed variance)
- Pro Player Humanize v2 (micro overshoot, distance scaling, base reaction, reaction variance, micro correction delay, decelerate near target)
- Target Velocity Prediction (prediction time)

**Silent Aim (pSilent Engine)**
- Enable Silent Aim
- Use Key (+ keybind)
- Silent FOV / Silent Smooth
- 3D Sphere FOV (radius)
- Silent Hitbox
- Enemy Only / Visible Only / Flash Check / Smoke Check
- Pro Silent Mode (jitter, tick sync)
- Silent Prediction (pred time)
- Draw Silent FOV (couleur, épaisseur)

---

### 4. Triggerbot
**General & Activation**
- Enable Triggerbot
- Use Hotkey (+ keybind)
- Enemy Only
- Only Scoped (Snipers)

**Timing & Reaction Delays**
- Base Delay
- Humanize Delays (delay min, delay max)

**Firing & Shooting Modes**
- Auto Pistol (Rapid Fire) (fire rate)
- Burst Fire Mode (burst count, burst delay)

---

### 5. Radar
**General & Window Control**
- Enable External Radar
- Reset Radar Position

**Dimensions & Scale**
- Radar Size / Radar Zoom / Scan Range / Player Blip Size

**Appearance & Opacity**
- Radar Opacity / Background Opacity

**Tracking & Overlays**
- Deathmatch Mode
- Show Player Names
- Show Direction (Laser)
- Show Health Colors
- Smooth Blip Movement

---

### 6. Nade Helper
- Show Saved Spots
- Match Grenade Type
- Draw Distance / Use Distance
- Show Grenade Prediction (pred steps, pred interval)
- Save Current Spot / Delete Nearest / Clear All
- Load Spots from File / Save Spots to File

---

### 7. Misc
**Movement**
- Enable Bunny Hop
- Auto Strafe (Grand Pas) + strafe sensitivity

**Crosshair  [Sep 30 2026 Update]**
- Enable Custom Crosshair
- Always Visible (All Weapons)
- Style: Classic Cross / Static Quadrant (NEW — Sep 30 2026)
- Length / Gap (negative gaps now allowed) / Thickness
- Color (alpha bar)
- Outline: enabled, outline thickness, outline color (NEW — Sep 30 2026)
- Scope Dot: enabled, scale, color (NEW — Sep 30 2026, in share code)
- Grenade crosshair during freeze time (NEW — Sep 30 2026, insta-smokes)

**No Flash**
- Enable No Flash + flash alpha

**Spectators & Stream Protection**
- Spectator List
- Hide from Capture (anti-stream)

---

### 8. Performance
**Per-Tick Entity Cache**
- Enable Tick Cache
- Refresh Interval

**Overlay & Rendering**
- VSync
- Disable Overlays When Menu Open

**System Info**
- FPS, syscalls/sec, entités scannées

---

### 9. Config
- Save / Load profile (par nom)
- Load from File / Save to File
- Exit

---

## Fonctionnalités hors menu (automatiques)

- **Overlay click-through** transparent topmost sur la fenêtre CS2
- **Lecture mémoire NTAPI** (NtReadVirtualMemory batché)
- **Tick cache** : snapshot partagé à 125 Hz, seqlock pour l'overlay
- **Entity chunk cache** : cache des pointeurs de chunks par frame
- **Class name cache** : mémoïsation des noms de classe d'entités
- **Icône exe** : `app.ico` embarquée via `app.rc`
- **Logo menu** : chargé depuis les ressources de l'exe, affiché dans la barre de titre et la sidebar
- **Stream proof** : overlay exclu de la capture (WDA_EXCLUDEFROMCAPTURE)
