(() => {
  const status = document.querySelector('#data-status');
  const loader = document.querySelector('#loading-indicator');

  if (!window.L) {
    if (status) status.textContent = 'Карта недоступна (проверьте сеть)';
    if (loader) {
      loader.textContent = 'Не удалось загрузить библиотеку карты';
      loader.classList.remove('hidden');
    }
    return;
  }

  const jezero = [18.4447, 77.4508];
  const map = L.map('map', {
    center: jezero,
    zoom: 4,
    crs: L.CRS.EPSG4326,
    minZoom: 1,
    maxZoom: 9,
    zoomControl: false,
    attributionControl: false,
    worldCopyJump: true,
    maxBounds: [[-90, -360], [90, 360]],
    maxBoundsViscosity: 0.85,
  });

  const nasaTiles = (layer, ext = 'jpg', options = {}) => L.tileLayer(
    `https://trek.nasa.gov/tiles/Mars/EQ/${layer}/1.0.0/default/default028mm/{z}/{y}/{x}.${ext}`,
    {
      minZoom: 1,
      maxZoom: 9,
      maxNativeZoom: 9,
      tileSize: 256,
      noWrap: false,
      keepBuffer: 3,
      ...options,
    }
  );

  // THEMIS controlled mosaics cover latitudes between 65° S and 65° N
  const themisBounds = [[-65.0, -180.0], [65.0, 180.0]];

  const basemaps = {
    color: nasaTiles('Mars_Viking_MDIM21_ClrMosaic_global_232m', 'jpg'),
    relief: nasaTiles('Mars_MGS_MOLA_ClrShade_merge_global_463m', 'jpg'),
    thermalDay: nasaTiles('THEMIS_DayIR_ControlledMosaics_100m_v2_oct2018', 'png', {
      className: 'themis-layer',
      bounds: themisBounds,
    }),
    thermalNight: nasaTiles('THEMIS_NightIR_ControlledMosaics_100m_v2_oct2018', 'png', {
      className: 'themis-layer',
      bounds: themisBounds,
    }),
  };

  const layerNames = {
    color: 'Viking (видимый диапазон)',
    relief: 'MOLA (рельеф и высоты)',
    thermalDay: 'THEMIS (дневная ИК-съемка)',
    thermalNight: 'THEMIS (ночная ИК-съемка)',
  };

  let activeKey = 'color';
  let activeBasemap = basemaps.color.addTo(map);

  Object.entries(basemaps).forEach(([key, layer]) => {
    layer.on('loading', () => {
      if (key === activeKey) {
        loader.textContent = `Загрузка: ${layerNames[key]}...`;
        loader.classList.remove('hidden');
        status.textContent = `Загрузка: ${layerNames[key]}`;
      }
    });

    layer.on('load', () => {
      if (key !== activeKey) return;
      loader.classList.add('hidden');
      status.textContent = `Слой: ${layerNames[key]}`;
    });

    layer.on('tileerror', () => {
      if (key !== activeKey) return;
      // Gracefully maintain status without alarming technical errors
    });
  });

  const markerStyles = {
    perseverance: {
      color: '#dd9168',
      name: 'Perseverance',
      crater: 'Jezero Crater',
      coords: jezero,
      sol: 'Mars 2020',
      elevation: '-2 575 м (ниже нулевого уровня)',
      desc: 'Древняя речная дельта на границе равнины Исиды. Место посадки марсохода Perseverance.',
    },
    curiosity: {
      color: '#d6c083',
      name: 'Curiosity',
      crater: 'Gale Crater',
      coords: [-4.5895, 137.4417],
      sol: 'MSL',
      elevation: '-4 450 м (дно кратера)',
      desc: 'Импактный кратер диаметром 154 км с центральной горой Эолида (горой Шарпа). Место посадки марсохода Curiosity.',
    },
    insight: {
      color: '#87a9b2',
      name: 'InSight',
      crater: 'Elysium Planitia',
      coords: [4.5024, 135.6234],
      sol: 'InSight',
      elevation: '-2 600 м (ниже нулевого уровня)',
      desc: 'Гладкая вулканическая равнина вблизи марсианского экватора. Место работы геофизического зонда InSight.',
    },
    phoenix: {
      color: '#bd8da1',
      name: 'Phoenix',
      crater: 'Vastitas Borealis',
      coords: [68.2188, -125.7518],
      sol: 'Phoenix',
      elevation: '-4 100 м (северная равнина)',
      desc: 'Приполярная равнина Северного полушария. Место посадки спускаемого аппарата Phoenix для изучения подповерхностного льда.',
    },
  };

  const missionLayers = {};

  function pointIcon(color) {
    return L.divIcon({
      className: 'mission-marker',
      html: `<span style="--marker:${color};" class="mission-marker__dot"></span>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
    });
  }

  function formatLongitude(longitude) {
    const normalized = ((longitude + 180) % 360 + 360) % 360 - 180;
    return `${Math.abs(normalized).toFixed(4)}° ${normalized >= 0 ? 'E' : 'W'}`;
  }

  function popup(info) {
    const [lat, lon] = info.coords;
    return `
      <div class="popup-box">
        <span class="popup-label" style="color:${info.color}">Посадочная площадка</span>
        <b class="popup-title">${info.crater}</b>
        <span class="popup-mission">${info.name} (${info.sol})</span>
        <span class="popup-coords">${Math.abs(lat).toFixed(4)}° ${lat >= 0 ? 'N' : 'S'}, ${formatLongitude(lon)}</span>
      </div>
    `;
  }

  function mapCoordinates(coords) {
    const coordEl = document.querySelector('#map-coordinates b');
    if (coordEl) {
      coordEl.textContent = `${Math.abs(coords[0]).toFixed(2)}° ${coords[0] >= 0 ? 'N' : 'S'}, ${formatLongitude(coords[1])}`;
    }
  }

  function updateInfoCard(info) {
    const titleEl = document.querySelector('.selected-card h2');
    const descEl = document.querySelector('.selected-card__desc');
    const values = document.querySelectorAll('.coordinate-grid b');
    const captionEl = document.querySelector('.selected-card__image .image-caption');
    const elevationEl = document.querySelector('.detail-row:nth-of-type(1) b');

    if (titleEl) titleEl.innerHTML = info.crater.replace(' ', '<br>');
    if (descEl) descEl.textContent = info.desc;
    if (values[0]) values[0].textContent = `${Math.abs(info.coords[0]).toFixed(4)}° ${info.coords[0] >= 0 ? 'N' : 'S'}`;
    if (values[1]) values[1].textContent = formatLongitude(info.coords[1]);
    if (captionEl) captionEl.textContent = `${info.crater} (${info.sol})`;
    if (elevationEl && info.elevation) elevationEl.textContent = info.elevation;
  }

  Object.entries(markerStyles).forEach(([id, info]) => {
    const marker = L.marker(info.coords, { icon: pointIcon(info.color) })
      .bindPopup(popup(info))
      .on('click', () => {
        map.flyTo(info.coords, 5, { duration: 1.1 });
        mapCoordinates(info.coords);
        updateInfoCard(info);
      });
    missionLayers[id] = L.layerGroup([marker]).addTo(map);
  });

  document.querySelectorAll('input[name="basemap"]').forEach((input) => {
    input.addEventListener('change', () => {
      const next = basemaps[input.value];
      if (!next || next === activeBasemap) return;

      map.removeLayer(activeBasemap);
      activeKey = input.value;
      activeBasemap = next.addTo(map);

      loader.textContent = `Загрузка: ${layerNames[activeKey]}...`;
      loader.classList.remove('hidden');
      status.textContent = `Загрузка: ${layerNames[activeKey]}`;

      const attribution = document.querySelector('#map-attribution');
      if (attribution) {
        attribution.textContent = `Слой: NASA, ${layerNames[input.value]}`;
      }
    });
  });

  document.querySelectorAll('.mission-filter').forEach((input) => {
    input.addEventListener('change', () => {
      const layer = missionLayers[input.value];
      if (!layer) return;
      if (input.checked) {
        layer.addTo(map);
      } else {
        map.removeLayer(layer);
      }
    });
  });

  const zoomInBtn = document.querySelector('#zoom-in');
  const zoomOutBtn = document.querySelector('#zoom-out');
  const resetBtn = document.querySelector('#reset-view');

  if (zoomInBtn) zoomInBtn.addEventListener('click', () => map.zoomIn());
  if (zoomOutBtn) zoomOutBtn.addEventListener('click', () => map.zoomOut());
  if (resetBtn) resetBtn.addEventListener('click', () => map.setView([12, 0], 2));

  map.on('move', () => mapCoordinates([map.getCenter().lat, map.getCenter().lng]));
  map.on('zoomend', () => {
    const readout = document.querySelector('#zoom-readout');
    if (readout) {
      readout.textContent = map.getZoom() <= 2 ? 'Общий вид' : `Уровень ${map.getZoom()}`;
    }
  });

  const search = document.querySelector('#coordinate-search');
  if (search) {
    search.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter') return;
      const query = search.value.trim().toLowerCase();

      const match = Object.entries(markerStyles).find(([, item]) =>
        item.name.toLowerCase().includes(query) || item.crater.toLowerCase().includes(query)
      );

      if (match) {
        map.flyTo(match[1].coords, 5, { duration: 1.2 });
        missionLayers[match[0]].getLayers()[0]?.openPopup();
        updateInfoCard(match[1]);
        return;
      }

      const pair = query.match(/(-?\d+(?:\.\d+)?)\s*[,; ]\s*(-?\d+(?:\.\d+)?)/);
      if (pair) {
        const lat = Number(pair[1]);
        const lon = Number(pair[2]);
        if (lat >= -90 && lat <= 90 && lon >= -360 && lon <= 360) {
          map.flyTo([lat, lon > 180 ? lon - 360 : lon], 5, { duration: 1.2 });
          mapCoordinates([lat, lon]);
        }
      }
    });
  }
})();