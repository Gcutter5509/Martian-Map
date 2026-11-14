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

  // Official NASA Mars Trek Extents:
  // Global layers cover -180° to 180° lon and -90° to 90° lat.
  // THEMIS Night controlled mosaic covers -180° to 180° lon and -65.0006576° to 65.0007535° lat.
  const globalBounds = L.latLngBounds([[-90, -180], [90, 180]]);
  const nightBounds = L.latLngBounds([[-65.0006576, -180], [65.0007535, 180]]);

  const jezero = [18.4447, 77.4508];
  const map = L.map('map', {
    center: jezero,
    zoom: 4,
    crs: L.CRS.EPSG4326,
    minZoom: 1,
    maxZoom: 9,
    zoomControl: false,
    attributionControl: false,
    maxBounds: globalBounds,
    maxBoundsViscosity: 1.0,
  });

  const nasaTiles = (layer, ext = 'jpg', options = {}) => L.tileLayer(
    `https://trek.nasa.gov/tiles/Mars/EQ/${layer}/1.0.0/default/default028mm/{z}/{y}/{x}.${ext}`,
    {
      minZoom: 1,
      maxZoom: 9,
      maxNativeZoom: 9,
      tileSize: 256,
      noWrap: true,
      keepBuffer: 3,
      bounds: options.bounds || globalBounds,
      ...options,
    }
  );

  const layerConfigs = {
    color: {
      layer: nasaTiles('Mars_Viking_MDIM21_ClrMosaic_global_232m', 'jpg', { bounds: globalBounds }),
      name: 'Viking (видимый диапазон)',
      bounds: globalBounds,
      minLat: -90,
      maxLat: 90,
      irContext: 'Viking MDIM 2.1 (232 м/пикс)',
    },
    relief: {
      layer: nasaTiles('Mars_MGS_MOLA_ClrShade_merge_global_463m', 'jpg', { bounds: globalBounds }),
      name: 'MOLA (рельеф и высоты)',
      bounds: globalBounds,
      minLat: -90,
      maxLat: 90,
      irContext: 'MOLA лазерная альтиметрия (463 м/пикс)',
    },
    thermalDay: {
      layer: nasaTiles('Mars_MO_THEMIS-IR-Day_mosaic_global_100m_v12_clon0_ly', 'png', {
        className: 'themis-layer',
        bounds: globalBounds,
      }),
      name: 'THEMIS (дневная ИК-съемка)',
      bounds: globalBounds,
      minLat: -90,
      maxLat: 90,
      irContext: 'THEMIS Day IR (100 м/пикс, 90° S — 90° N)',
    },
    thermalNight: {
      layer: nasaTiles('THEMIS_NightIR_ControlledMosaics_100m_v2_oct2018', 'png', {
        className: 'themis-layer',
        bounds: nightBounds,
      }),
      name: 'THEMIS (ночная ИК-съемка)',
      bounds: nightBounds,
      minLat: -65.0006576,
      maxLat: 65.0007535,
      irContext: 'THEMIS Night IR (100 м/пикс, покрытие NASA: 65° S — 65° N)',
    },
  };

  const basemaps = {
    color: layerConfigs.color.layer,
    relief: layerConfigs.relief.layer,
    thermalDay: layerConfigs.thermalDay.layer,
    thermalNight: layerConfigs.thermalNight.layer,
  };

  let activeKey = 'color';
  let activeBasemap = basemaps.color.addTo(map);

  // Visual coverage boundary indicator for THEMIS Night (NASA 65° N and 65° S limits)
  const nightCoverageLines = L.layerGroup([
    L.polyline([[65.0, -180], [65.0, 180]], {
      color: '#d88a62',
      weight: 1.5,
      dashArray: '6, 6',
      opacity: 0.85,
    }),
    L.polyline([[-65.0, -180], [-65.0, 180]], {
      color: '#d88a62',
      weight: 1.5,
      dashArray: '6, 6',
      opacity: 0.85,
    }),
  ]);

  Object.entries(basemaps).forEach(([key, layer]) => {
    layer.on('loading', () => {
      if (key === activeKey) {
        loader.textContent = `Загрузка: ${layerConfigs[key].name}...`;
        loader.classList.remove('hidden');
        status.textContent = `Загрузка: ${layerConfigs[key].name}`;
      }
    });

    layer.on('load', () => {
      if (key !== activeKey) return;
      loader.classList.add('hidden');
      status.textContent = `Слой: ${layerConfigs[key].name}`;
    });

    layer.on('tileerror', () => {
      if (key !== activeKey) return;
    });
  });

  // Official landing sites and coordinates from NASA Trek API bookmarks
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

  const missionMarkers = {};
  const missionLayers = {};

  function pointIcon(color, isOutOfCoverage = false) {
    const extraClass = isOutOfCoverage ? ' mission-marker__dot--out-of-bounds' : '';
    return L.divIcon({
      className: 'mission-marker',
      html: `<span style="--marker:${color};" class="mission-marker__dot${extraClass}" title="${isOutOfCoverage ? 'Вне зоны покрытия текущей карты' : ''}"></span>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
    });
  }

  function formatLongitude(longitude) {
    const normalized = ((longitude + 180) % 360 + 360) % 360 - 180;
    return `${Math.abs(normalized).toFixed(4)}° ${normalized >= 0 ? 'E' : 'W'}`;
  }

  function isMissionInCoverage(info, key) {
    const config = layerConfigs[key];
    const lat = info.coords[0];
    return lat >= config.minLat && lat <= config.maxLat;
  }

  function popup(info) {
    const [lat, lon] = info.coords;
    const inCoverage = isMissionInCoverage(info, activeKey);
    const coverageWarning = !inCoverage
      ? `<div class="popup-warning">Внимание: район 68.2° N находится севернее границы ночной съемки NASA THEMIS (граница: 65° N).</div>`
      : '';

    return `
      <div class="popup-box">
        <span class="popup-label" style="color:${info.color}">Посадочная площадка</span>
        <b class="popup-title">${info.crater}</b>
        <span class="popup-mission">${info.name} (${info.sol})</span>
        <span class="popup-coords">${Math.abs(lat).toFixed(4)}° ${lat >= 0 ? 'N' : 'S'}, ${formatLongitude(lon)}</span>
        ${coverageWarning}
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
    const irEl = document.querySelector('.detail-row:nth-of-type(3) b');

    const inCoverage = isMissionInCoverage(info, activeKey);

    if (titleEl) titleEl.innerHTML = info.crater.replace(' ', '<br>');
    if (descEl) {
      if (!inCoverage && activeKey === 'thermalNight') {
        descEl.innerHTML = `${info.desc}<br><br><span class="coverage-alert">По официальным данным NASA Mars Trek, ночная ИК-съемка THEMIS ограничена широтами от 65° S до 65° N. Район Phoenix (68.22° N) находится за границей ночной мозаики.</span><br><button class="switch-layer-btn" id="switch-to-day-btn">Переключить на дневную съемку</button>`;
        const switchBtn = document.querySelector('#switch-to-day-btn');
        if (switchBtn) {
          switchBtn.addEventListener('click', () => {
            const dayRadio = document.querySelector('input[name="basemap"][value="thermalDay"]');
            if (dayRadio) {
              dayRadio.checked = true;
              dayRadio.dispatchEvent(new Event('change'));
            }
          });
        }
      } else {
        descEl.textContent = info.desc;
      }
    }
    if (values[0]) values[0].textContent = `${Math.abs(info.coords[0]).toFixed(4)}° ${info.coords[0] >= 0 ? 'N' : 'S'}`;
    if (values[1]) values[1].textContent = formatLongitude(info.coords[1]);
    if (captionEl) captionEl.textContent = `${info.crater} (${info.sol})`;
    if (elevationEl && info.elevation) elevationEl.textContent = info.elevation;
    if (irEl) {
      if (!inCoverage && activeKey === 'thermalNight') {
        irEl.textContent = 'Вне зоны съемки (NASA: до 65° N)';
      } else {
        irEl.textContent = layerConfigs[activeKey].irContext;
      }
    }
  }

  function updateMissionUIForActiveLayer() {
    const config = layerConfigs[activeKey];

    Object.entries(markerStyles).forEach(([id, info]) => {
      const inCoverage = isMissionInCoverage(info, activeKey);
      const marker = missionMarkers[id];
      if (marker) {
        marker.setIcon(pointIcon(info.color, !inCoverage));
        marker.setPopupContent(popup(info));
      }

      // Update sidebar mission subtext
      const optionEl = document.querySelector(`.mission-option input[value="${id}"]`);
      if (optionEl) {
        const smallEl = optionEl.closest('.mission-option')?.querySelector('small');
        if (smallEl) {
          if (!inCoverage && activeKey === 'thermalNight') {
            smallEl.innerHTML = `${info.name} (${info.sol}) <span class="mission-status-out">Вне покрытия (до 65° N)</span>`;
          } else {
            smallEl.textContent = `${info.name} (${info.sol})`;
          }
        }
      }
    });
  }

  Object.entries(markerStyles).forEach(([id, info]) => {
    const marker = L.marker(info.coords, { icon: pointIcon(info.color) })
      .bindPopup(popup(info))
      .on('click', () => {
        const inCoverage = isMissionInCoverage(info, activeKey);
        if (!inCoverage && activeKey === 'thermalNight') {
          // Pan to northern border with view of Phoenix area
          map.flyTo([65.0, info.coords[1]], 4, { duration: 1.1 });
        } else {
          map.flyTo(info.coords, 5, { duration: 1.1 });
        }
        mapCoordinates(info.coords);
        updateInfoCard(info);
      });
    missionMarkers[id] = marker;
    missionLayers[id] = L.layerGroup([marker]).addTo(map);
  });

  document.querySelectorAll('input[name="basemap"]').forEach((input) => {
    input.addEventListener('change', () => {
      const targetConfig = layerConfigs[input.value];
      if (!targetConfig || input.value === activeKey) return;

      map.removeLayer(activeBasemap);
      activeKey = input.value;
      activeBasemap = basemaps[activeKey].addTo(map);

      // Adjust map maxBounds to match NASA API coverage
      map.setMaxBounds(targetConfig.bounds);

      // Show/hide boundary overlay for Night IR
      if (activeKey === 'thermalNight') {
        nightCoverageLines.addTo(map);
        // If current center is outside 65°, smoothly adjust inside bounds
        const currentCenter = map.getCenter();
        if (Math.abs(currentCenter.lat) > 65.0) {
          map.panTo([currentCenter.lat > 0 ? 64.0 : -64.0, currentCenter.lng]);
        }
      } else {
        map.removeLayer(nightCoverageLines);
      }

      loader.textContent = `Загрузка: ${targetConfig.name}...`;
      loader.classList.remove('hidden');
      status.textContent = `Загрузка: ${targetConfig.name}`;

      const attribution = document.querySelector('#map-attribution');
      if (attribution) {
        attribution.textContent = `Слой: NASA, ${targetConfig.name}`;
      }

      updateMissionUIForActiveLayer();

      // Refresh currently open card
      const titleEl = document.querySelector('.selected-card h2');
      if (titleEl) {
        const craterName = titleEl.textContent.replace('\n', ' ').trim();
        const currentMission = Object.values(markerStyles).find(
          (m) => m.crater.toLowerCase() === craterName.toLowerCase()
        );
        if (currentMission) {
          updateInfoCard(currentMission);
        }
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
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      const targetBounds = layerConfigs[activeKey].bounds;
      map.fitBounds(targetBounds);
    });
  }

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
        const inCoverage = isMissionInCoverage(match[1], activeKey);
        if (!inCoverage && activeKey === 'thermalNight') {
          map.flyTo([65.0, match[1].coords[1]], 4, { duration: 1.2 });
        } else {
          map.flyTo(match[1].coords, 5, { duration: 1.2 });
        }
        missionLayers[match[0]].getLayers()[0]?.openPopup();
        updateInfoCard(match[1]);
        return;
      }

      const pair = query.match(/(-?\d+(?:\.\d+)?)\s*[,; ]\s*(-?\d+(?:\.\d+)?)/);
      if (pair) {
        const lat = Number(pair[1]);
        const lon = Number(pair[2]);
        const config = layerConfigs[activeKey];
        if (lat >= config.minLat && lat <= config.maxLat && lon >= -180 && lon <= 180) {
          map.flyTo([lat, lon], 5, { duration: 1.2 });
          mapCoordinates([lat, lon]);
        }
      }
    });
  }

  // Initial call
  updateMissionUIForActiveLayer();
})();