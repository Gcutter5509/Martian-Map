# Martian Map — Interplanetary Survival Guide for Future Astronauts

[![NASA Space Apps Challenge](https://img.shields.io/badge/NASA%20Space%20Apps-Challenge%20Submission-blue.svg)](https://www.spaceappschallenge.org/)
[![License: CC-BY-4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Planetary Data: NASA / USGS / ASU](https://img.shields.io/badge/Planetary%20Data-NASA%20%2F%20USGS%20%2F%20ASU-red.svg)](https://trek.nasa.gov/mars/)

> **Challenge:** Interplanetary Survival Guide: Martian Map  
> **Project:** AresNav / Martian Map — Interactive Planetary Atlas, Autonomous SafeNav Routing & Climate Survival Terminal

An advanced multi-layered interactive Mars atlas designed for future astronauts and mission planners. Built upon official NASA Solar System Treks WMTS (Web Map Tile Service) endpoints and validated planetary science archives, the application synthesizes visible optical mosaics, laser altimetry topography (MOLA), day/night thermal infrared data (THEMIS), in-situ meteorological station telemetry (MEDA, REMS, TWINS, MET), and autonomous geodesic pathfinding avoiding impassable Martian chasms.

---

## Quick Start (Run Locally)

The application requires **zero build steps, zero compilation, and zero `node_modules`**. It is written with vanilla HTML5, CSS3, and modern JavaScript, running instantly in any modern web browser.

### Option 1: Python 3 (Recommended)
```bash
# 1. Clone the repository
git clone https://github.com/Gcutter5509/Martian-Map.git
cd Martian-Map

# 2. Start a local HTTP server
python3 -m http.server 8000
```
Open **[http://localhost:8000](http://localhost:8000)** in your browser.

### Option 2: Node.js (npx)
```bash
npx serve .
# or
npx http-server -p 8000
```

### Option 3: VS Code Live Server
Right-click `index.html` inside VS Code and choose **"Open with Live Server"**.

*Note: An active internet connection is required to fetch NASA WMTS tile streams and the Leaflet library.*

---

## Official NASA Datasets & Scientific Resources

All planetary map layers, physical constants, coordinates, and meteorological telemetry are retrieved from or calibrated against official NASA and international planetary science repositories:

### 1. Global Basemap Tile Layers (NASA Solar System Treks WMTS)

> [!NOTE]  
> The `{z}/{y}/{x}` placeholders in the WMTS URLs represent dynamic OGC tile matrix coordinates (Zoom level, Tile row, Tile column) calculated automatically by Leaflet. Direct browser navigation to raw template URLs without numerical indices returns an HTTP 404 from the NASA server because `{z}`, `{y}`, and `{x}` must be resolved to specific tile indices. Use the **Live Sample Tile** links below to inspect individual 200 OK image tiles directly in your browser, or explore them interactively in our app and on the [NASA Mars Trek Portal](https://trek.nasa.gov/mars/).

- **Visible Optical Imagery:**  
  *Viking MDIM 2.1 Color Mosaic* (`Mars_Viking_MDIM21_ClrMosaic_global_232m`): 232 m/pixel global visible color mosaic.  
  - WMTS Template: `https://trek.nasa.gov/tiles/Mars/EQ/Mars_Viking_MDIM21_ClrMosaic_global_232m/1.0.0/default/default028mm/{z}/{y}/{x}.jpg`
  - Direct Preview: [Live Sample Tile (z=1, y=0, x=0 — 200 OK)](https://trek.nasa.gov/tiles/Mars/EQ/Mars_Viking_MDIM21_ClrMosaic_global_232m/1.0.0/default/default028mm/1/0/0.jpg)

- **Topographic Laser Altimetry:**  
  *MOLA Color Hillshade* (`Mars_MGS_MOLA_ClrShade_merge_global_463m`): 463 m/pixel elevation and relief map from Mars Global Surveyor Mars Orbiter Laser Altimeter.  
  - WMTS Template: `https://trek.nasa.gov/tiles/Mars/EQ/Mars_MGS_MOLA_ClrShade_merge_global_463m/1.0.0/default/default028mm/{z}/{y}/{x}.jpg`
  - Direct Preview: [Live Sample Tile (z=1, y=0, x=0 — 200 OK)](https://trek.nasa.gov/tiles/Mars/EQ/Mars_MGS_MOLA_ClrShade_merge_global_463m/1.0.0/default/default028mm/1/0/0.jpg)

- **Thermal Infrared (Daytime Emission):**  
  *THEMIS Day IR Controlled Mosaic* (`Mars_MO_THEMIS-IR-Day_mosaic_global_100m_v12_clon0_ly`): 100 m/pixel day thermal emission imagery from 2001 Mars Odyssey, spanning global latitudes ($90^\circ\text{S} - 90^\circ\text{N}$).  
  - WMTS Template: `https://trek.nasa.gov/tiles/Mars/EQ/Mars_MO_THEMIS-IR-Day_mosaic_global_100m_v12_clon0_ly/1.0.0/default/default028mm/{z}/{y}/{x}.png`
  - Direct Preview: [Live Sample Tile (z=1, y=0, x=0 — 200 OK)](https://trek.nasa.gov/tiles/Mars/EQ/Mars_MO_THEMIS-IR-Day_mosaic_global_100m_v12_clon0_ly/1.0.0/default/default028mm/1/0/0.png)

- **Thermal Infrared (Nighttime Inertia):**  
  *THEMIS Night IR Controlled Mosaic* (`THEMIS_NightIR_ControlledMosaics_100m_v2_oct2018`): 100 m/pixel nighttime thermal inertia imagery from 2001 Mars Odyssey. Scientific latitude limit: $65.0^\circ\text{S} - 65.0^\circ\text{N}$.  
  - WMTS Template: `https://trek.nasa.gov/tiles/Mars/EQ/THEMIS_NightIR_ControlledMosaics_100m_v2_oct2018/1.0.0/default/default028mm/{z}/{y}/{x}.png`
  - Direct Preview: [Live Sample Tile (z=1, y=0, x=0 — 200 OK)](https://trek.nasa.gov/tiles/Mars/EQ/THEMIS_NightIR_ControlledMosaics_100m_v2_oct2018/1.0.0/default/default028mm/1/0/0.png)

### 2. In-Situ Weather Stations & Planetary Climate Archives
- **NASA Mars 2020 Perseverance (Jezero Crater):**  
  *MEDA (Mars Environmental Dynamics Analyzer)* instrument suite telemetry: ambient and ground temperatures, atmospheric pressure cycles, wind speeds, and dust optical depth ($\tau$).  
  Reference: [NASA PDS Atmospheres Node — MEDA](https://pds-atmospheres.nmsu.edu/)
- **NASA Mars Science Laboratory Curiosity (Gale Crater):**  
  *REMS (Rover Environmental Monitoring Station)* meteorological data: Mount Sharp thermal circulations, diurnal pressure swings, and UV flux.  
  Reference: [NASA PDS Atmospheres Node — REMS](https://pds-atmospheres.nmsu.edu/)
- **NASA InSight Lander (Elysium Planitia):**  
  *TWINS (Temperature and Winds for InSight)* and *SEIS* atmospheric infrasound archive: smooth volcanic plains vortex dynamics and seasonal barometric drops.  
  Reference: [NASA PDS Geosciences Node — InSight](https://pds-geosciences.wustl.edu/)
- **NASA Phoenix Lander (Vastitas Borealis):**  
  *MET (Meteorology Station)* and atmospheric Lidar data: arctic polar conditions, water-ice crystal virga at 4 km, and subsurface ice frost.  
  Reference: [NASA PDS Atmospheres Node — Phoenix](https://pds-atmospheres.nmsu.edu/)
- **Orbital Climate Model for Geological Landmarks:**  
  Atmospheric scale height ($H \approx 11.1\text{ km}$) and barometric pressure gradients calibrated via the *Mars Climate Database (MCD v5.3 / LMD/CNRS & NASA Ames)*: from $0.6\text{ hPa}$ ($60\text{ Pa}$) near-vacuum atop Olympus Mons to $11.8\text{ hPa}$ ($1,180\text{ Pa}$) at the floor of Hellas Planitia.

### 3. Physical Constants & Geodesic Parameters
- **Mean Volumetric Radius:** $R_{\text{Mars}} = 3,389.5\text{ km}$ (IAU/IAG Working Group on Cartographic Coordinates and Rotational Elements).
- **Surface Gravity:** $g_{\text{Mars}} \approx 3.72076\text{ m/s}^2$ ($0.3794g_{\text{Earth}}$).
- **Diurnal Sol Duration:** $24\text{ hours, } 39\text{ minutes, } 35.244\text{ seconds}$ ($1.02749$ Earth days).

---

## Key Survival & Exploration Features

### 1. Multispectral Dual-Dropdown Swipe Comparison Tool
A hardware-accelerated split-screen swipe tool enabling comparative exploration of any two planetary datasets simultaneously (*Viking MDIM 2.1 Optical*, *MOLA Altimetry Relief*, *THEMIS Day IR*, and *THEMIS Night IR*). Dual dropdown selectors in the top corners let astronauts configure both left and right layers on the fly to detect subsurface rock densities, thermal inertia anomalies, and terrain hazards.

### 2. Autonomous Rover SafeNav (Planetary Pathfinding)
An autonomous rover trajectory planner designed for realistic planetary traversing:
- **Great-Circle Geodesics:** True spherical distance calculations ($R = 3,389.5\text{ km}$).
- **Geological Barrier Avoidance:** Prevents rovers from entering fatal Martian chasms and vertical scarps (Valles Marineris rift walls, Olympus Mons basal scarps, Tharsis Montes calderas, and polar ice sheets).
- **Interactive Drag & Presets:** Click anywhere on the map or launch preset traverses (Jezero → Gale, InSight → Jezero, Gale → Valles Marineris) with real-time waypoint dragging and full route telemetry.

### 3. Astronaut Meteorological & Climate Terminal (`Weather` Tab)
A dedicated survival console providing point-specific atmospheric telemetry for landing sites and landmarks:
- **Diurnal Extremes:** Day/night temperatures, barometric pressures, local wind speeds, and UV radiation indices.
- **Atmospheric Gas Composition:** Interactive proportional visualization ($CO_2$ 95.32%, $N_2$ 2.6%, $Ar$ 1.9%, $O_2$ 0.16%).
- **Microclimate Insights:** Local physical phenomena including dust devil activity, cold-air drainage traps, and polar ice sublimation.
- **Interactive 0.38g Gravity Calculator:** Real-time weight conversion and jump height multipliers for EVA equipment load planning.

### 4. Martian Geological Landmarks Catalog
Comprehensive scientific profiles with official MOLA elevations and dimensions:
- **Olympus Mons:** Solar System's tallest shield volcano ($+21,229\text{ m}$).
- **Valles Marineris:** Grand rift canyon network up to $10\text{ km}$ deep and $4,000\text{ km}$ long.
- **Noctis Labyrinthus:** Intricate maze of volcano-tectonic grabens and fractured valleys.
- **Hellas Planitia:** Deepest Martian impact crater ($-7,152\text{ m}$).
- **Cydonia Mensae:** Eroded mesa formations of the historical 1976 Viking 1 optical illusion.
- **Korolev Crater:** Permanent $1.8\text{ km}$ thick reservoir of $2,200\text{ km}^3$ pristine water ice.
- **Alba Mons:** Volcano with the largest surface area footprint in the Solar System.

### 5. International Bilingual UI (EN / RU) & Fullscreen Mode
- **Instant Language Switcher:** Seamlessly switch between English and Russian with 1 click (`[ EN | RU ]`). Defaulting to English ensures seamless evaluation by international NASA Space Apps judges.
- **Fullscreen Exploration:** Press `F` or `F11` (or click `⛶` on the map) to enter immersive full-screen planetary cartography mode.

---

## Artificial Intelligence Attribution

In strict compliance with the **NASA Space Apps Challenge Generative AI Policy**, we transparently disclose all AI assistance utilized during project development:

- **AI Tools Used:** Antigravity (Advanced AI Coding Assistant by Google DeepMind).
- **Exact Scope of AI Assistance:**
  1. **API Endpoint & Format Diagnostics:** Diagnosed and corrected tile URL format mismatches for THEMIS thermal layers from `.jpg` to `.png`, resolving 404 tile stream errors.
  2. **NASA Trek API Verification:** Assisted in querying NASA Trek's `searchItems` service to confirm official layer bounding boxes (identifying the scientific $65^\circ\text{S} - 65^\circ\text{N}$ limit of THEMIS nighttime IR) and cross-checking landing site coordinates.
  3. **Leaflet Engine & Math Clamping:** Implemented boundary clamping (`maxBoundsViscosity`), fixed Leaflet pointer event propagation on swipe slider handles, and assisted with great-circle spherical trigonometric formulas.
  4. **CSS Layout & Theming:** Aided in responsive CSS glassmorphism styling and Inter typography.
  5. **Documentation & Bilingual Proofreading:** Proofread English documentation, Project Page summaries, and 30-second pitch script.
- **Authenticity Statement:**  
  **Zero AI hallucinations were used for scientific data.** All coordinates, elevations, atmospheric parameters, and layer endpoints were pulled directly from official NASA, USGS, ASU, and IAU planetary science archives. The project concept, survival architecture, and routing mechanics were directed and implemented by the team.

---

## Technical Architecture

```
MartianMap/
├── index.html       # Semantic HTML5 with 3-pane layout, bilingual tags, and accessible widgets
├── style.css        # Responsive dark UI, Inter font stack, Leaflet controls, and CSS variables
├── script.js        # Leaflet EPSG:4326 engine, A* geodesic router, MCD weather model, i18n
└── README.md        # Complete setup documentation and NASA resource citations
```

---

## License & Credits

Created for the **NASA International Space Apps Challenge**.  
Planetary data, altimetry, and imagery courtesy of **NASA / JPL-Caltech / USGS / ASU / ESA**.
