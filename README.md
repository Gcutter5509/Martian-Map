# Martian Map — Interactive Mars Surface Atlas

An interactive planetary atlas of the Martian surface built upon official NASA Solar System Treks WMTS (Web Map Tile Service) endpoints and mission datasets. It enables scientific exploration of visible optical mosaics, laser altimetry topography (MOLA), day and night thermal infrared data (THEMIS), and validated landing site coordinates.

---

## Quick Start (Run Locally)

The application requires no build steps or heavy dependencies. You can run it with any static web server:

```bash
# Clone the repository
git clone https://github.com/Gcutter5509/Martian-Map.git
cd Martian-Map

# Start a local web server (Python 3)
python3 -m http.server 8000
```

Open your browser and navigate to: **[http://localhost:8000](http://localhost:8000)**

*Note: An active internet connection is required to fetch NASA WMTS map tiles and the Leaflet library.*

---

## Official NASA Datasets & Services

All planetary map layers and coordinates are retrieved directly from NASA's official planetary data repositories:

1. **Optical Basemap:**
   - **Viking MDIM 2.1 Color Mosaic** (`Mars_Viking_MDIM21_ClrMosaic_global_232m`): 232 m/pixel global visible color mosaic.
   - Endpoint: [NASA Solar System Treks WMTS](https://trek.nasa.gov/tiles/Mars/EQ/Mars_Viking_MDIM21_ClrMosaic_global_232m/1.0.0/default/default028mm/{z}/{y}/{x}.jpg)

2. **Topographic Altimetry:**
   - **MOLA Color Hillshade** (`Mars_MGS_MOLA_ClrShade_merge_global_463m`): 463 m/pixel elevation and relief map from Mars Global Surveyor Mars Orbiter Laser Altimeter.
   - Endpoint: [NASA Solar System Treks WMTS](https://trek.nasa.gov/tiles/Mars/EQ/Mars_MGS_MOLA_ClrShade_merge_global_463m/1.0.0/default/default028mm/{z}/{y}/{x}.jpg)

3. **Thermal Infrared (Daytime):**
   - **THEMIS Day IR Controlled Mosaic** (`Mars_MO_THEMIS-IR-Day_mosaic_global_100m_v12_clon0_ly`): 100 m/pixel day thermal emission imagery from 2001 Mars Odyssey, spanning global latitudes ($90^\circ\text{S} - 90^\circ\text{N}$).
   - Endpoint: [NASA Solar System Treks WMTS](https://trek.nasa.gov/tiles/Mars/EQ/Mars_MO_THEMIS-IR-Day_mosaic_global_100m_v12_clon0_ly/1.0.0/default/default028mm/{z}/{y}/{x}.png)

4. **Thermal Infrared (Nighttime):**
   - **THEMIS Night IR Controlled Mosaic** (`THEMIS_NightIR_ControlledMosaics_100m_v2_oct2018`): 100 m/pixel nighttime thermal inertia imagery from 2001 Mars Odyssey.
   - Official NASA Bounding Box: $-180^\circ\text{ to }180^\circ\text{ Lon}, -65.0^\circ\text{ to }65.0^\circ\text{ Lat}$ (polar night surface temperatures drop below 140 K instrument threshold).
   - Endpoint: [NASA Solar System Treks WMTS](https://trek.nasa.gov/tiles/Mars/EQ/THEMIS_NightIR_ControlledMosaics_100m_v2_oct2018/1.0.0/default/default028mm/{z}/{y}/{x}.png)

5. **Landing Site Bookmarks & Coordinates:**
   - Verified against NASA Trek Search Items API (`https://trek.nasa.gov/mars/TrekServices/ws/index/eq/searchItems`):
     - **Perseverance (Mars 2020):** Jezero Crater ($18.4447^\circ\text{ N}, 77.4508^\circ\text{ E}$)
     - **Curiosity (MSL):** Gale Crater ($-4.5895^\circ\text{ S}, 137.4417^\circ\text{ E}$)
     - **InSight:** Elysium Planitia ($4.5024^\circ\text{ N}, 135.6234^\circ\text{ E}$)
     - **Phoenix:** Vastitas Borealis ($68.2188^\circ\text{ N}, -125.7518^\circ\text{ W}$)

---

## Technical Architecture

- `index.html` — Clean, semantic UI with responsive 3-pane layout (Navigation sidebar, Interactive map stage, Object info rail).
- `style.css` — Modern, accessible theme using the Inter typeface, customized Leaflet controls, and responsive breakpoints for mobile/desktop.
- `script.js` — Leaflet.js engine configured with `L.CRS.EPSG4326` (Equirectangular Simple Cylindrical), handling layer bounds, coordinate transformations, mission filtering, and search.

---

## License

Created for the NASA International Space Apps Challenge. Planetary data and imagery courtesy of NASA / JPL-Caltech / USGS / ASU.
