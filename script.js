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
  let swipeController = null;

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
    const kickerEl = document.querySelector('.selected-card .kicker');
    const descEl = document.querySelector('.selected-card__desc');
    const values = document.querySelectorAll('.coordinate-grid b');
    const captionEl = document.querySelector('.selected-card__image .image-caption');
    const elevationEl = document.querySelector('.detail-row:nth-of-type(1) b');
    const reliefEl = document.querySelector('.detail-row:nth-of-type(2) b');
    const irEl = document.querySelector('.detail-row:nth-of-type(3) b');

    if (kickerEl) {
      kickerEl.textContent = info.category ? `Геологический объект • ${info.category}` : 'Район посадки';
    }

    const titleText = info.shortName || info.crater || info.name;
    if (titleEl) titleEl.innerHTML = titleText.replace(' ', '<br>');

    const inCoverage = isMissionInCoverage(info, activeKey);

    if (descEl) {
      if (!inCoverage && activeKey === 'thermalNight') {
        descEl.innerHTML = `${info.desc}<br><br><span class="coverage-alert">По официальным данным NASA Mars Trek, ночная ИК-съемка THEMIS ограничена широтами от 65° S до 65° N. Район находится за границей ночной мозаики.</span><br><button class="switch-layer-btn" id="switch-to-day-btn">Переключить на дневную съемку</button>`;
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
    if (captionEl) captionEl.textContent = info.sol ? `${info.crater} (${info.sol})` : info.name;
    if (elevationEl && info.elevation) elevationEl.textContent = info.elevation;
    if (reliefEl) reliefEl.textContent = info.dimensions || 'MOLA, 463 м/пикс';
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

  // Official Martian Geological Landmarks Catalog
  const landmarkData = {
    olympus: {
      id: 'olympus',
      name: 'Гора Олимп (Olympus Mons)',
      shortName: 'Olympus Mons',
      type: 'Щитовой вулкан (крупнейший в Солнечной системе)',
      category: 'Вулкан',
      coords: [18.65, -133.8],
      elevation: '+21 229 м (над нулевым уровнем)',
      dimensions: 'Диаметр 600 км, кальдера 80 км',
      color: '#c084fc',
      iconText: '▲',
      desc: 'Высочайшая вулканическая гора в Солнечной системе. Ее колоссальное основание окружено отвесными базальными обрывами высотой до 8 км.',
    },
    valles: {
      id: 'valles',
      name: 'Долины Маринер (Valles Marineris)',
      shortName: 'Valles Marineris',
      type: 'Тектонический рифтовый каньон',
      category: 'Каньон',
      coords: [-13.9, -59.2],
      elevation: '-7 200 м (дно каньона Мелас)',
      dimensions: 'Длина 4 000 км, глубина до 10 км',
      color: '#f43f5e',
      iconText: '▼',
      desc: 'Гигантская система каньонов, протянувшаяся на четверть окружности Марса. В 10 раз длиннее и в 5 раз глубже земного Гранд-Каньона.',
    },
    noctis: {
      id: 'noctis',
      name: 'Лабиринт Ночи (Noctis Labyrinthus)',
      shortName: 'Noctis Labyrinthus',
      type: 'Сеть каньонов и грабенов',
      category: 'Каньон',
      coords: [-7.0, -102.2],
      elevation: '+3 200 м / -3 500 м',
      dimensions: 'Протяженность около 1 200 км',
      color: '#fb923c',
      iconText: '❖',
      desc: 'Впечатляющий лабиринт из глубоких ветвящихся каньонов и долин на стыке вулканической провинции Фарсида и Долин Маринер.',
    },
    hellas: {
      id: 'hellas',
      name: 'Равнина Эллада (Hellas Planitia)',
      shortName: 'Hellas Planitia',
      type: 'Гигантский импактный бассейн',
      category: 'Впадина',
      coords: [-42.4, 70.5],
      elevation: '-7 152 м (самая глубокая точка Марса)',
      dimensions: 'Диаметр чаши 2 300 км',
      color: '#38bdf8',
      iconText: '◌',
      desc: 'Древнейший и глубочайший ударный кратер Марса. Плотность атмосферы здесь выше, из-за чего на дне часто наблюдаются сезонные туманы.',
    },
    cydonia: {
      id: 'cydonia',
      name: 'Кидония (Cydonia Mensae)',
      shortName: 'Cydonia Mensae',
      type: 'Столовые горы (мезы)',
      category: 'Меза',
      coords: [40.75, -9.46],
      elevation: '-2 100 м (у подножия холмов)',
      dimensions: 'Область столовых гор ~800 км',
      color: '#eab308',
      iconText: '◈',
      desc: 'Район останцовых возвышенностей на равнине Ацидалия. Снимок аппарата «Викинг-1» в 1976 году создал известную оптическую иллюзию «Лица на Марсе».',
    },
    korolev: {
      id: 'korolev',
      name: 'Кратер Королёв (Korolev Crater)',
      shortName: 'Korolev Crater',
      type: 'Ледниковый ударный кратер',
      category: 'Кратер',
      coords: [73.0, 164.5],
      elevation: '-3 800 м (купол водяного льда)',
      dimensions: 'Диаметр 81 км, толща льда 1.8 км',
      color: '#67e8f9',
      iconText: '❄',
      desc: 'Кратер в приполярной зоне, круглый год покрытый нетающим ледником из 2 200 км³ водяного льда благодаря явлению холодной ловушки.',
    },
    alba: {
      id: 'alba',
      name: 'Гора Белая (Alba Mons)',
      shortName: 'Alba Mons',
      type: 'Низкопрофильный щитовой вулкан',
      category: 'Вулкан',
      coords: [40.5, -109.9],
      elevation: '+6 800 м (над нулевым уровнем)',
      dimensions: 'Диаметр основания свыше 1 000 км',
      color: '#fb7185',
      iconText: '▲',
      desc: 'Вулкан с самой обширной площадью основания в Солнечной системе, окруженный колоссальным кольцом концентрических грабенов и разломов.',
    },
  };

  function landmarkPopup(info) {
    const [lat, lon] = info.coords;
    return `
      <div class="popup-box">
        <span class="popup-label" style="color:${info.color}">${info.category}</span>
        <b class="popup-title">${info.name}</b>
        <span class="popup-mission" style="color:var(--text-muted)">${info.type}</span>
        <span class="popup-coords">${Math.abs(lat).toFixed(4)}° ${lat >= 0 ? 'N' : 'S'}, ${formatLongitude(lon)}</span>
        <div class="detail-row" style="margin-top:6px; height:auto; padding:4px 0; border-top:1px solid var(--line); border-bottom:0;">
          <span style="font-size:10px; color:var(--text-muted)">Высота:</span>
          <b style="font-size:11px; color:#d6c083">${info.elevation}</b>
        </div>
      </div>
    `;
  }

  function landmarkIcon(info) {
    return L.divIcon({
      className: 'landmark-marker',
      html: `<div class="landmark-marker__icon" style="--lm-color:${info.color};" title="${info.name}">${info.iconText}</div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
    });
  }

  const landmarkMarkers = {};
  const landmarkLayers = {};

  Object.entries(landmarkData).forEach(([id, info]) => {
    const marker = L.marker(info.coords, { icon: landmarkIcon(info) })
      .bindPopup(landmarkPopup(info))
      .on('click', () => {
        map.flyTo(info.coords, 5, { duration: 1.1 });
        mapCoordinates(info.coords);
        updateInfoCard(info);
        showMissionTab();
      });
    landmarkMarkers[id] = marker;
    landmarkLayers[id] = L.layerGroup([marker]).addTo(map);
  });

  document.querySelectorAll('.landmark-filter').forEach((input) => {
    input.addEventListener('change', () => {
      const layer = landmarkLayers[input.value];
      if (!layer) return;
      if (input.checked) layer.addTo(map);
      else map.removeLayer(layer);
    });
  });

  document.querySelectorAll('.landmark-option').forEach((opt) => {
    opt.addEventListener('click', (e) => {
      if (e.target.tagName === 'INPUT') return;
      const input = opt.querySelector('input');
      if (!input) return;
      const id = input.value;
      const info = landmarkData[id];
      if (info) {
        map.flyTo(info.coords, 5, { duration: 1.1 });
        mapCoordinates(info.coords);
        updateInfoCard(info);
        landmarkMarkers[id]?.openPopup();
        showMissionTab();
      }
    });
  });

  const toggleAllLandmarksBtn = document.querySelector('#landmarks-toggle-all');
  if (toggleAllLandmarksBtn) {
    let allShown = true;
    toggleAllLandmarksBtn.addEventListener('click', () => {
      allShown = !allShown;
      toggleAllLandmarksBtn.textContent = allShown ? 'Скрыть все' : 'Показать все';
      document.querySelectorAll('.landmark-filter').forEach((input) => {
        input.checked = allShown;
        input.dispatchEvent(new Event('change'));
      });
    });
  }

  document.querySelectorAll('input[name="basemap"]').forEach((input) => {
    input.addEventListener('change', () => {
      if (swipeController && swipeController.isActive()) {
        swipeController.disable();
      }
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

      // Check landing sites
      const missionMatch = Object.entries(markerStyles).find(([, item]) =>
        item.name.toLowerCase().includes(query) || item.crater.toLowerCase().includes(query)
      );

      if (missionMatch) {
        const [id, item] = missionMatch;
        const inCoverage = isMissionInCoverage(item, activeKey);
        if (!inCoverage && activeKey === 'thermalNight') {
          map.flyTo([65.0, item.coords[1]], 4, { duration: 1.2 });
        } else {
          map.flyTo(item.coords, 5, { duration: 1.2 });
        }
        missionLayers[id]?.getLayers()[0]?.openPopup();
        updateInfoCard(item);
        showMissionTab();
        return;
      }

      // Check landmarks catalog
      const landmarkMatch = Object.entries(landmarkData).find(([, item]) =>
        item.name.toLowerCase().includes(query) ||
        item.shortName.toLowerCase().includes(query) ||
        item.type.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      );

      if (landmarkMatch) {
        const [id, item] = landmarkMatch;
        map.flyTo(item.coords, 5, { duration: 1.2 });
        landmarkLayers[id]?.getLayers()[0]?.openPopup();
        updateInfoCard(item);
        showMissionTab();
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

  // =========================================================================
  // Swipe Comparison Tool (Split Screen: Multi-Layer Selector)
  // =========================================================================

  function initSwipeController() {
    const swipeContainer = document.querySelector('#swipe-container');
    const swipeDivider = document.querySelector('#swipe-divider');
    const swipeHandle = document.querySelector('#swipe-handle');
    const toggleSwipeBtn = document.querySelector('#btn-toggle-swipe');
    const sidebarSwipeBtn = document.querySelector('#sidebar-swipe-btn');

    const selectLeft = document.querySelector('#swipe-select-left');
    const selectRight = document.querySelector('#swipe-select-right');
    const dotLeft = document.querySelector('#swipe-dot-left');
    const dotRight = document.querySelector('#swipe-dot-right');
    const badgeLeft = document.querySelector('#swipe-badge-left');
    const badgeRight = document.querySelector('#swipe-badge-right');

    let isSwipeActive = false;
    let leftLayer = null;
    let rightLayer = null;
    let leftKey = selectLeft ? selectLeft.value : 'color';
    let rightKey = selectRight ? selectRight.value : 'relief';
    let isDragging = false;
    let currentX = null;

    const dotClasses = {
      color: 'dot-color',
      relief: 'dot-relief',
      thermalDay: 'dot-thermal',
      thermalNight: 'dot-night',
    };

    function updateDot(dotEl, key) {
      if (!dotEl) return;
      dotEl.className = 'swipe-badge__dot ' + (dotClasses[key] || 'dot-color');
    }

    function createSwipeTileLayer(key) {
      if (key === 'color') {
        return nasaTiles('Mars_Viking_MDIM21_ClrMosaic_global_232m', 'jpg', {
          bounds: globalBounds,
        });
      }
      if (key === 'relief') {
        return nasaTiles('Mars_MGS_MOLA_ClrShade_merge_global_463m', 'jpg', {
          bounds: globalBounds,
        });
      }
      if (key === 'thermalDay') {
        return nasaTiles('Mars_MO_THEMIS-IR-Day_mosaic_global_100m_v12_clon0_ly', 'png', {
          className: 'themis-layer',
          bounds: globalBounds,
        });
      }
      if (key === 'thermalNight') {
        return nasaTiles('THEMIS_NightIR_ControlledMosaics_100m_v2_oct2018', 'png', {
          className: 'themis-layer',
          bounds: nightBounds,
        });
      }
      return null;
    }

    function updateClip(x) {
      if (!isSwipeActive) return;

      const mapSize = map.getSize();
      const mapWidth = mapSize.x;
      if (x === undefined || x === null) {
        x = currentX !== null ? currentX : mapWidth / 2;
      }
      const clampedX = Math.max(10, Math.min(mapWidth - 10, x));
      currentX = clampedX;

      if (swipeDivider) {
        swipeDivider.style.left = `${clampedX}px`;
      }

      const nw = map.containerPointToLayerPoint([0, 0]);
      const se = map.containerPointToLayerPoint(mapSize);
      const clipX = nw.x + clampedX;

      const clipLeft = 'rect(' + [nw.y, clipX, se.y, nw.x].join('px,') + 'px)';
      const clipRight = 'rect(' + [nw.y, se.x, se.y, clipX].join('px,') + 'px)';

      if (leftLayer && leftLayer.getContainer()) {
        const c = leftLayer.getContainer();
        c.style.clip = clipLeft;
        c.style.clipPath = '';
      }

      if (rightLayer && rightLayer.getContainer()) {
        const c = rightLayer.getContainer();
        c.style.clip = clipRight;
        c.style.clipPath = '';
      }
    }

    function setLeftLayer(key) {
      leftKey = key;
      if (selectLeft && selectLeft.value !== key) selectLeft.value = key;
      updateDot(dotLeft, key);
      if (!isSwipeActive) return;

      if (leftLayer) {
        if (leftLayer.getContainer()) {
          leftLayer.getContainer().style.clip = '';
          leftLayer.getContainer().style.clipPath = '';
        }
        map.removeLayer(leftLayer);
      }

      leftLayer = createSwipeTileLayer(key);
      if (leftLayer) {
        leftLayer.addTo(map);
        leftLayer.on('load add', () => {
          if (isSwipeActive) updateClip();
        });
      }
      updateClip();
    }

    function setRightLayer(key) {
      rightKey = key;
      if (selectRight && selectRight.value !== key) selectRight.value = key;
      updateDot(dotRight, key);
      if (!isSwipeActive) return;

      if (rightLayer) {
        if (rightLayer.getContainer()) {
          rightLayer.getContainer().style.clip = '';
          rightLayer.getContainer().style.clipPath = '';
        }
        map.removeLayer(rightLayer);
      }

      rightLayer = createSwipeTileLayer(key);
      if (rightLayer) {
        rightLayer.addTo(map);
        rightLayer.on('load add', () => {
          if (isSwipeActive) updateClip();
        });
      }
      updateClip();
    }

    function enableSwipe() {
      if (isSwipeActive) return;
      isSwipeActive = true;

      // Close route selection mode if active to avoid event conflicts
      if (typeof setRouteMode === 'function' && typeof routeState !== 'undefined' && routeState.modeActive) {
        setRouteMode(false);
      }

      // Hide background basemap so layers don't overlap underneath
      if (activeBasemap && map.hasLayer(activeBasemap)) {
        map.removeLayer(activeBasemap);
      }

      setLeftLayer(leftKey);
      setRightLayer(rightKey);

      if (swipeContainer) swipeContainer.classList.remove('hidden');
      if (toggleSwipeBtn) toggleSwipeBtn.classList.add('active');
      if (sidebarSwipeBtn) sidebarSwipeBtn.classList.add('active');

      const initialX = Math.round(map.getSize().x / 2);
      updateClip(initialX);
    }

    function disableSwipe() {
      if (!isSwipeActive) return;
      isSwipeActive = false;

      if (leftLayer) {
        if (leftLayer.getContainer()) {
          leftLayer.getContainer().style.clip = '';
          leftLayer.getContainer().style.clipPath = '';
        }
        map.removeLayer(leftLayer);
        leftLayer = null;
      }

      if (rightLayer) {
        if (rightLayer.getContainer()) {
          rightLayer.getContainer().style.clip = '';
          rightLayer.getContainer().style.clipPath = '';
        }
        map.removeLayer(rightLayer);
        rightLayer = null;
      }

      // Restore active background basemap
      if (activeBasemap && !map.hasLayer(activeBasemap)) {
        activeBasemap.addTo(map);
      }

      if (swipeContainer) swipeContainer.classList.add('hidden');
      if (toggleSwipeBtn) toggleSwipeBtn.classList.remove('active');
      if (sidebarSwipeBtn) sidebarSwipeBtn.classList.remove('active');

      if (map.dragging) map.dragging.enable();
    }

    function toggleSwipe() {
      if (isSwipeActive) disableSwipe();
      else enableSwipe();
    }

    if (toggleSwipeBtn) toggleSwipeBtn.addEventListener('click', toggleSwipe);
    if (sidebarSwipeBtn) sidebarSwipeBtn.addEventListener('click', toggleSwipe);

    // Dropdown change listeners
    if (selectLeft) {
      selectLeft.addEventListener('change', (e) => setLeftLayer(e.target.value));
    }
    if (selectRight) {
      selectRight.addEventListener('change', (e) => setRightLayer(e.target.value));
    }

    const closeSwipeBtn = document.querySelector('#btn-close-swipe');
    if (closeSwipeBtn) {
      closeSwipeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        disableSwipe();
      });
    }

    // Stop Leaflet map interference on dropdown controls (NOT on the divider or handle!)
    if (window.L && L.DomEvent) {
      [selectLeft, selectRight, badgeLeft, badgeRight, closeSwipeBtn].forEach((el) => {
        if (el) {
          L.DomEvent.disableClickPropagation(el);
          L.DomEvent.disableScrollPropagation(el);
        }
      });
    }

    function getPointerX(e) {
      let clientX = e.clientX;
      if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
      } else if (e.changedTouches && e.changedTouches.length > 0) {
        clientX = e.changedTouches[0].clientX;
      }
      const rect = map.getContainer().getBoundingClientRect();
      return clientX - rect.left;
    }

    function onPointerDown(e) {
      if (!isSwipeActive) return;
      isDragging = true;
      if (map.dragging) map.dragging.disable();
      const x = getPointerX(e);
      updateClip(x);
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
    }

    function onPointerMove(e) {
      if (!isDragging || !isSwipeActive) return;
      const x = getPointerX(e);
      updateClip(x);
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
    }

    function onPointerUp() {
      if (isDragging) {
        isDragging = false;
        if (map.dragging) map.dragging.enable();
      }
    }

    if (swipeDivider) {
      swipeDivider.addEventListener('mousedown', onPointerDown);
      swipeDivider.addEventListener('touchstart', onPointerDown, { passive: false });
    }

    if (swipeHandle) {
      swipeHandle.addEventListener('mousedown', onPointerDown);
      swipeHandle.addEventListener('touchstart', onPointerDown, { passive: false });
    }

    window.addEventListener('mousemove', onPointerMove, { passive: false });
    window.addEventListener('touchmove', onPointerMove, { passive: false });
    window.addEventListener('mouseup', onPointerUp);
    window.addEventListener('touchend', onPointerUp);
    window.addEventListener('mouseleave', onPointerUp);

    if (swipeHandle) {
      swipeHandle.addEventListener('keydown', (e) => {
        if (!isSwipeActive) return;
        const step = map.getSize().x * 0.05;
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          updateClip((currentX || map.getSize().x / 2) - step);
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          updateClip((currentX || map.getSize().x / 2) + step);
        }
      });
    }

    // Re-clip on map movement, zoom, and resize
    map.on('move zoom viewreset', () => {
      if (isSwipeActive) updateClip();
    });

    map.on('resize', () => {
      if (isSwipeActive && currentX !== null) {
        updateClip(currentX);
      }
    });

    swipeController = {
      enable: enableSwipe,
      disable: disableSwipe,
      toggle: toggleSwipe,
      isActive: () => isSwipeActive,
    };
    return swipeController;
  }

  swipeController = initSwipeController();

  // =========================================================================
  // Safe Rover Routing System (SafeNav)
  // =========================================================================

  const MARS_RADIUS_KM = 3389.5;

  function haversineMars(p1, p2) {
    const toRad = Math.PI / 180;
    const dLat = (p2[0] - p1[0]) * toRad;
    const dLon = (p2[1] - p1[1]) * toRad;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(p1[0] * toRad) * Math.cos(p2[0] * toRad) * Math.sin(dLon / 2) ** 2;
    return MARS_RADIUS_KM * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  function formatCoordSimple(coord, isLat) {
    const val = Math.abs(coord).toFixed(2);
    if (isLat) return `${val}° ${coord >= 0 ? 'N' : 'S'}`;
    const normalized = ((coord + 180) % 360 + 360) % 360 - 180;
    return `${Math.abs(normalized).toFixed(2)}° ${normalized >= 0 ? 'E' : 'W'}`;
  }

  // Geological hazards on Mars: impassable chasms, volcanic scarps, and polar ice
  const martianHazards = [
    {
      id: 'valles-marineris',
      name: 'Каньон Долины Маринер (Valles Marineris)',
      desc: 'Грандиозная система каньонов глубиной до 10 км с отвесными стенами. Преодоление колесным шасси невозможно.',
      type: 'polygon',
      polygon: [
        [-3.0, -91.0],
        [-2.0, -75.0],
        [-4.5, -55.0],
        [-8.0, -42.0],
        [-15.0, -42.0],
        [-17.0, -58.0],
        [-15.0, -78.0],
        [-12.0, -92.0],
      ],
      bufferKm: 140,
    },
    {
      id: 'olympus-scarp',
      name: 'Базальный уступ горы Олимп (Olympus Mons Scarp)',
      desc: 'Вертикальные обрывы высотой 6-8 км, окружающие подножие крупнейшего вулкана Солнечной системы.',
      type: 'circle',
      center: [18.65, -133.8],
      radiusDeg: 6.8, // ~400 km radius
      bufferKm: 120,
    },
    {
      id: 'arsia-mons',
      name: 'Гора Арсия (Arsia Mons Caldera)',
      desc: 'Вулканический щит с экстремальными углами наклона (>25°) и лавовыми провалами.',
      type: 'circle',
      center: [-9.0, -120.5],
      radiusDeg: 4.2,
      bufferKm: 100,
    },
    {
      id: 'pavonis-mons',
      name: 'Гора Павлина (Pavonis Mons)',
      desc: 'Центральный щитовой вулкан провинции Фарсида. Крутые уступы кальдеры.',
      type: 'circle',
      center: [0.8, -113.0],
      radiusDeg: 3.8,
      bufferKm: 90,
    },
    {
      id: 'ascraeus-mons',
      name: 'Гора Аскрийская (Ascraeus Mons)',
      desc: 'Вулкан высотой 18 км с хаотическим лавовым рельефом.',
      type: 'circle',
      center: [11.8, -104.5],
      radiusDeg: 4.2,
      bufferKm: 90,
    },
    {
      id: 'elysium-mons',
      name: 'Купол Элизий (Elysium Mons)',
      desc: 'Вулканическая кальдера с радиальными грабенами и крутыми склонами.',
      type: 'circle',
      center: [25.0, 147.2],
      radiusDeg: 4.0,
      bufferKm: 90,
    },
    {
      id: 'hellas-scarps',
      name: 'Северный вал равнины Эллада (Hellas Basin Rim)',
      desc: 'Сверхглубокая импактная впадина (-7.2 км) с опасными осыпями и сильными пылевыми бурями.',
      type: 'circle',
      center: [-33.0, 68.0],
      radiusDeg: 7.5,
      bufferKm: 110,
    },
  ];

  function pointInPolygon(pt, poly) {
    let inside = false;
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      const xi = poly[i][1], yi = poly[i][0];
      const xj = poly[j][1], yj = poly[j][0];
      const intersect =
        yi > pt[0] !== yj > pt[0] &&
        pt[1] < ((xj - xi) * (pt[0] - yi)) / (yj - yi) + xi;
      if (intersect) inside = !inside;
    }
    return inside;
  }

  function getHazardCost(pt) {
    let totalPenalty = 0;
    let hitHazards = [];

    // Polar caps boundary penalty
    if (pt[0] > 78) {
      totalPenalty += 80000;
      hitHazards.push('Северная полярная ледяная шапка (критические температуры)');
    } else if (pt[0] < -76) {
      totalPenalty += 80000;
      hitHazards.push('Южная полярная шапка (сухой углекислотный лед)');
    }

    for (const h of martianHazards) {
      if (h.type === 'circle') {
        const d = haversineMars(pt, h.center);
        const coreDist = (h.radiusDeg * Math.PI * MARS_RADIUS_KM) / 180;
        if (d <= coreDist) {
          totalPenalty += 100000;
          hitHazards.push(h.name);
        } else if (d < coreDist + h.bufferKm) {
          const ratio = (coreDist + h.bufferKm - d) / h.bufferKm;
          totalPenalty += ratio * 450;
        }
      } else if (h.type === 'polygon') {
        if (pointInPolygon(pt, h.polygon)) {
          totalPenalty += 100000;
          hitHazards.push(h.name);
        } else {
          // Check proximity to polygon boundary points
          let minPolyDist = Infinity;
          for (let i = 0; i < h.polygon.length; i++) {
            const d = haversineMars(pt, h.polygon[i]);
            if (d < minPolyDist) minPolyDist = d;
          }
          if (minPolyDist < h.bufferKm) {
            const ratio = (h.bufferKm - minPolyDist) / h.bufferKm;
            totalPenalty += ratio * 450;
          }
        }
      }
    }

    return { penalty: totalPenalty, hitHazards };
  }

  // Binary Min-Heap for fast A* pathfinding
  class PriorityQueue {
    constructor() {
      this.heap = [];
    }
    push(item) {
      this.heap.push(item);
      this._up(this.heap.length - 1);
    }
    pop() {
      if (this.heap.length === 0) return null;
      const top = this.heap[0];
      const end = this.heap.pop();
      if (this.heap.length > 0) {
        this.heap[0] = end;
        this._down(0);
      }
      return top;
    }
    isEmpty() {
      return this.heap.length === 0;
    }
    _up(i) {
      while (i > 0) {
        const p = Math.floor((i - 1) / 2);
        if (this.heap[i].f < this.heap[p].f) {
          [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
          i = p;
        } else break;
      }
    }
    _down(i) {
      const len = this.heap.length;
      while (true) {
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        let min = i;
        if (left < len && this.heap[left].f < this.heap[min].f) min = left;
        if (right < len && this.heap[right].f < this.heap[min].f) min = right;
        if (min !== i) {
          [this.heap[i], this.heap[min]] = [this.heap[min], this.heap[i]];
          i = min;
        } else break;
      }
    }
  }

  function diffLon(lon1, lon2) {
    return ((lon2 - lon1 + 540) % 360) - 180;
  }

  function normLon(lon) {
    return ((lon + 180) % 360 + 360) % 360 - 180;
  }

  function splitPolylineAtAntimeridian(coords) {
    if (coords.length <= 1) return [coords];
    const segments = [];
    let currentSegment = [];

    for (let i = 0; i < coords.length; i++) {
      const pt = coords[i];
      if (currentSegment.length > 0) {
        const prev = currentSegment[currentSegment.length - 1];
        const dLon = pt[1] - prev[1];
        if (Math.abs(dLon) > 180) {
          const sign = prev[1] > 0 ? 1 : -1;
          const crossLat = (prev[0] + pt[0]) / 2;
          currentSegment.push([crossLat, sign * 180]);
          segments.push(currentSegment);
          currentSegment = [[crossLat, -sign * 180]];
        }
      }
      currentSegment.push(pt);
    }
    if (currentSegment.length > 0) segments.push(currentSegment);
    return segments;
  }

  function interpolateGreatCircle(p1, p2, steps = 30) {
    const points = [];
    const toRad = Math.PI / 180;
    const toDeg = 180 / Math.PI;
    const lat1 = p1[0] * toRad, lon1 = p1[1] * toRad;
    const lat2 = p2[0] * toRad, lon2 = p2[1] * toRad;

    const d = 2 * Math.asin(Math.sqrt(
      Math.sin((lat2 - lat1) / 2) ** 2 +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin((lon2 - lon1) / 2) ** 2
    ));

    if (d < 1e-6) return [p1, p2];

    for (let i = 0; i <= steps; i++) {
      const f = i / steps;
      const A = Math.sin((1 - f) * d) / Math.sin(d);
      const B = Math.sin(f * d) / Math.sin(d);
      const x = A * Math.cos(lat1) * Math.cos(lon1) + B * Math.cos(lat2) * Math.cos(lon2);
      const y = A * Math.cos(lat1) * Math.sin(lon1) + B * Math.cos(lat2) * Math.sin(lon2);
      const z = A * Math.sin(lat1) + B * Math.sin(lat2);
      const lat = Math.atan2(z, Math.sqrt(x * x + y * y)) * toDeg;
      const lon = normLon(Math.atan2(y, x) * toDeg);
      points.push([lat, lon]);
    }
    return points;
  }

  function smoothPath(points, iters = 2) {
    if (points.length <= 2) return points;
    let curr = points;
    for (let it = 0; it < iters; it++) {
      const smoothed = [curr[0]];
      for (let i = 0; i < curr.length - 1; i++) {
        const p0 = curr[i], p1 = curr[i + 1];
        const dLon = diffLon(p0[1], p1[1]);
        const q = [0.75 * p0[0] + 0.25 * p1[0], normLon(p0[1] + 0.25 * dLon)];
        const r = [0.25 * p0[0] + 0.75 * p1[0], normLon(p0[1] + 0.75 * dLon)];
        smoothed.push(q, r);
      }
      smoothed.push(curr[curr.length - 1]);
      curr = smoothed;
    }
    return curr;
  }

  function findSafeRoverPath(start, goal) {
    const directPoints = interpolateGreatCircle(start, goal, 35);
    const hazardsDirectHits = new Set();
    for (const pt of directPoints) {
      const check = getHazardCost(pt);
      check.hitHazards.forEach((h) => hazardsDirectHits.add(h));
    }

    const dLonUnwrapped = diffLon(start[1], goal[1]);
    const goalLonCont = start[1] + dLonUnwrapped;

    const latSpan = Math.abs(goal[0] - start[0]);
    const lonSpan = Math.abs(dLonUnwrapped);

    const padLat = Math.max(16, latSpan * 0.45);
    const padLon = Math.max(18, lonSpan * 0.45);

    const minLat = Math.max(-76, Math.min(start[0], goal[0]) - padLat);
    const maxLat = Math.min(78, Math.max(start[0], goal[0]) + padLat);
    const minLon = Math.min(start[1], goalLonCont) - padLon;
    const maxLon = Math.max(start[1], goalLonCont) + padLon;

    const maxSpan = Math.max(maxLat - minLat, maxLon - minLon);
    const step = Math.max(0.7, Math.min(1.8, maxSpan / 36));

    const rows = Math.round((maxLat - minLat) / step);
    const cols = Math.round((maxLon - minLon) / step);

    const getCoord = (r, c) => [minLat + r * step, normLon(minLon + c * step)];
    const getCell = (pt, isGoal) => {
      const targetLon = isGoal ? goalLonCont : pt[1];
      return [
        Math.max(0, Math.min(rows, Math.round((pt[0] - minLat) / step))),
        Math.max(0, Math.min(cols, Math.round((targetLon - minLon) / step))),
      ];
    };

    const startCell = getCell(start, false);
    const goalCell = getCell(goal, true);

    const key = (r, c) => `${r},${c}`;
    const openSet = new PriorityQueue();
    const gScore = new Map();
    const cameFrom = new Map();

    const startKey = key(startCell[0], startCell[1]);
    gScore.set(startKey, 0);
    openSet.push({
      r: startCell[0],
      c: startCell[1],
      f: haversineMars(getCoord(startCell[0], startCell[1]), goal),
    });

    const dirs = [
      [-1, 0], [1, 0], [0, -1], [0, 1],
      [-1, -1], [-1, 1], [1, -1], [1, 1],
    ];

    let targetReached = false;
    let endNode = null;
    let closestNode = null;
    let closestDist = Infinity;
    let iterations = 0;
    const maxIterations = 5500;

    while (!openSet.isEmpty() && iterations++ < maxIterations) {
      const current = openSet.pop();
      const currKey = key(current.r, current.c);
      const currPt = getCoord(current.r, current.c);
      const distToGoal = haversineMars(currPt, goal);

      if (distToGoal < closestDist) {
        closestDist = distToGoal;
        closestNode = current;
      }

      if (current.r === goalCell[0] && current.c === goalCell[1]) {
        targetReached = true;
        endNode = current;
        break;
      }

      const currG = gScore.get(currKey) ?? Infinity;

      for (const [dr, dc] of dirs) {
        const nr = current.r + dr;
        const nc = current.c + dc;
        if (nr < 0 || nr > rows || nc < 0 || nc > cols) continue;

        const neighborPt = getCoord(nr, nc);
        const { penalty } = getHazardCost(neighborPt);

        const dist = haversineMars(currPt, neighborPt);
        const tentG = currG + dist * (1 + penalty / 50);
        const neighborKey = key(nr, nc);

        if (tentG < (gScore.get(neighborKey) ?? Infinity)) {
          gScore.set(neighborKey, tentG);
          cameFrom.set(neighborKey, current);
          const h = haversineMars(neighborPt, goal);
          openSet.push({ r: nr, c: nc, f: tentG + h });
        }
      }
    }

    const pathCoords = [];
    const targetNode = endNode || closestNode;
    if (targetNode) {
      let curr = targetNode;
      while (curr) {
        pathCoords.push(getCoord(curr.r, curr.c));
        curr = cameFrom.get(key(curr.r, curr.c));
      }
      pathCoords.reverse();
    }

    if (pathCoords.length === 0) {
      pathCoords.push(...directPoints);
    } else {
      pathCoords.unshift(start);
      pathCoords.push(goal);
    }

    const smoothedPath = smoothPath(pathCoords, 2);

    let totalSafeKm = 0;
    for (let i = 0; i < smoothedPath.length - 1; i++) {
      totalSafeKm += haversineMars(smoothedPath[i], smoothedPath[i + 1]);
    }
    const directKm = haversineMars(start, goal);

    return {
      safePath: smoothedPath,
      directPath: directPoints,
      safeDistanceKm: totalSafeKm,
      directDistanceKm: directKm,
      hazardsAvoided: Array.from(hazardsDirectHits),
    };
  }

  // Route State
  let routeState = {
    modeActive: false,
    pointA: null, // [lat, lon]
    pointB: null, // [lat, lon]
    pointAName: null,
    pointBName: null,
    markerA: null,
    markerB: null,
    routeLayer: L.layerGroup().addTo(map),
    directLayer: L.layerGroup().addTo(map),
    hazardLayer: L.layerGroup().addTo(map),
    currentResult: null,
  };

  // Render Geological Hazards Overlay
  function initHazardZones() {
    martianHazards.forEach((h) => {
      let shape;
      const popupContent = `
        <div class="popup-box">
          <span class="popup-label" style="color:#ff6b6b">Зона геологического риска</span>
          <b class="popup-title">${h.name}</b>
          <span class="popup-coords" style="color:#e4916c">${h.desc}</span>
        </div>
      `;

      if (h.type === 'circle') {
        const radiusMeters = ((h.radiusDeg * Math.PI * MARS_RADIUS_KM) / 180) * 1000;
        shape = L.circle(h.center, {
          radius: radiusMeters,
          color: '#ff6b6b',
          weight: 1.5,
          dashArray: '4, 5',
          fillColor: '#fa5252',
          fillOpacity: 0.12,
        }).bindPopup(popupContent);
      } else if (h.type === 'polygon') {
        shape = L.polygon(h.polygon, {
          color: '#ff6b6b',
          weight: 1.5,
          dashArray: '4, 5',
          fillColor: '#fa5252',
          fillOpacity: 0.12,
        }).bindPopup(popupContent);
      }

      if (shape) routeState.hazardLayer.addLayer(shape);
    });
  }
  initHazardZones();

  // Custom Icon Makers
  function createRouteMarkerIcon(letter, type) {
    return L.divIcon({
      className: '',
      html: `<div class="route-map-marker route-map-marker--${type}" style="width:26px; height:26px;">${letter}</div>`,
      iconSize: [26, 26],
      iconAnchor: [13, 13],
    });
  }

  function setPointA(coords, name = null) {
    routeState.pointA = coords;
    routeState.pointAName = name;

    const labelEl = document.querySelector('#point-a-coords');
    if (labelEl) {
      labelEl.textContent = name
        ? `${name} (${formatCoordSimple(coords[0], true)}, ${formatCoordSimple(coords[1], false)})`
        : `${formatCoordSimple(coords[0], true)}, ${formatCoordSimple(coords[1], false)}`;
    }

    if (!routeState.markerA) {
      routeState.markerA = L.marker(coords, {
        icon: createRouteMarkerIcon('A', 'a'),
        draggable: true,
      })
        .addTo(map)
        .bindTooltip('Точка А (Старт марсохода)', { direction: 'top' });

      routeState.markerA.on('dragend', (e) => {
        const newPos = e.target.getLatLng();
        setPointA([newPos.lat, newPos.lng], 'Выбранная точка');
        if (routeState.pointB) calculateAndDrawRoute();
      });
    } else {
      routeState.markerA.setLatLng(coords);
    }

    checkCalcButtonState();
  }

  function setPointB(coords, name = null) {
    routeState.pointB = coords;
    routeState.pointBName = name;

    const labelEl = document.querySelector('#point-b-coords');
    if (labelEl) {
      labelEl.textContent = name
        ? `${name} (${formatCoordSimple(coords[0], true)}, ${formatCoordSimple(coords[1], false)})`
        : `${formatCoordSimple(coords[0], true)}, ${formatCoordSimple(coords[1], false)}`;
    }

    if (!routeState.markerB) {
      routeState.markerB = L.marker(coords, {
        icon: createRouteMarkerIcon('B', 'b'),
        draggable: true,
      })
        .addTo(map)
        .bindTooltip('Точка B (Цель экспедиции)', { direction: 'top' });

      routeState.markerB.on('dragend', (e) => {
        const newPos = e.target.getLatLng();
        setPointB([newPos.lat, newPos.lng], 'Выбранная точка');
        if (routeState.pointA) calculateAndDrawRoute();
      });
    } else {
      routeState.markerB.setLatLng(coords);
    }

    checkCalcButtonState();
  }

  function checkCalcButtonState() {
    const calcBtn = document.querySelector('#btn-calc-route');
    if (calcBtn) {
      calcBtn.disabled = !(routeState.pointA && routeState.pointB);
    }
  }

  function calculateAndDrawRoute() {
    if (!routeState.pointA || !routeState.pointB) return;

    routeState.routeLayer.clearLayers();
    routeState.directLayer.clearLayers();

    const result = findSafeRoverPath(routeState.pointA, routeState.pointB);
    routeState.currentResult = result;

    const safeSegments = splitPolylineAtAntimeridian(result.safePath);
    const directSegments = splitPolylineAtAntimeridian(result.directPath);

    // Outer glow line
    const outerGlow = L.polyline(safeSegments, {
      color: '#20c997',
      weight: 8,
      opacity: 0.35,
      lineCap: 'round',
      lineJoin: 'round',
    });

    // Inner glowing trajectory
    const innerTrack = L.polyline(safeSegments, {
      color: '#38d9a9',
      weight: 3.5,
      opacity: 0.95,
      lineCap: 'round',
      lineJoin: 'round',
    });

    routeState.routeLayer.addLayer(outerGlow);
    routeState.routeLayer.addLayer(innerTrack);

    // Direct path comparison
    const directLine = L.polyline(directSegments, {
      color: '#ff6b6b',
      weight: 2,
      dashArray: '5, 8',
      opacity: 0.75,
    });
    routeState.directLayer.addLayer(directLine);

    // Add intermediate milestone dots
    const sampleInterval = Math.max(1, Math.floor(result.safePath.length / 5));
    for (let i = sampleInterval; i < result.safePath.length - 1; i += sampleInterval) {
      const dot = L.circleMarker(result.safePath[i], {
        radius: 3.5,
        fillColor: '#38d9a9',
        color: '#111315',
        weight: 1.5,
        fillOpacity: 1,
      }).bindTooltip(`Контрольный ориентир ${Math.round((i / result.safePath.length) * 100)}% пути`, {
        direction: 'top',
      });
      routeState.routeLayer.addLayer(dot);
    }

    // Fit bounds smoothly to show the whole route
    const allPoints = [...result.safePath, ...result.directPath];
    map.fitBounds(L.latLngBounds(allPoints), { padding: [50, 50], maxZoom: 6 });

    // Update Sidebar Summary
    const summaryCard = document.querySelector('#route-summary-card');
    if (summaryCard) summaryCard.classList.remove('hidden');

    const distEl = document.querySelector('#summary-distance');
    if (distEl) distEl.textContent = `${Math.round(result.safeDistanceKm).toLocaleString('ru-RU')} км`;

    const sols = Math.max(1, Math.round(result.safeDistanceKm / 4.2));
    const timeEl = document.querySelector('#summary-time');
    if (timeEl) timeEl.textContent = `~${sols} солов`;

    const avoidedEl = document.querySelector('#summary-avoided-list');
    if (avoidedEl) {
      avoidedEl.textContent =
        result.hazardsAvoided.length > 0
          ? result.hazardsAvoided.join(', ')
          : 'Сложный рельеф обойден штатно';
    }

    updateTelemetryView(result);
  }

  function updateTelemetryView(result) {
    const distEl = document.querySelector('#telemetry-distance');
    const durEl = document.querySelector('#telemetry-duration');
    const directEl = document.querySelector('#telemetry-direct');
    const riskEl = document.querySelector('#telemetry-risk');
    const statusEl = document.querySelector('#telemetry-status');
    const titleEl = document.querySelector('#telemetry-title');
    const hazardsListEl = document.querySelector('#hazards-avoided-list');
    const waypointsEl = document.querySelector('#waypoints-timeline');

    if (distEl) distEl.textContent = `${Math.round(result.safeDistanceKm).toLocaleString('ru-RU')} км`;

    const sols = Math.max(1, Math.round(result.safeDistanceKm / 4.2));
    const earthDays = Math.round(sols * 1.027);
    if (durEl) durEl.textContent = `~${sols} солов (~${earthDays} сут.)`;

    const extraDist = Math.max(0, Math.round(result.safeDistanceKm - result.directDistanceKm));
    const extraPct = Math.round((extraDist / (result.directDistanceKm || 1)) * 100);
    if (directEl) {
      directEl.textContent = `${Math.round(result.directDistanceKm).toLocaleString('ru-RU')} км (+${extraPct}%)`;
    }

    if (riskEl) {
      riskEl.textContent = result.hazardsAvoided.length > 0 ? '99.4% (Безопасно)' : '99.9% (Оптимально)';
    }

    if (statusEl) statusEl.textContent = 'Траектория активна';
    if (titleEl) {
      const nameA = routeState.pointAName || 'Точка А';
      const nameB = routeState.pointBName || 'Точка Б';
      titleEl.textContent = `${nameA} → ${nameB}`;
    }

    if (hazardsListEl) {
      hazardsListEl.innerHTML = '';
      if (result.hazardsAvoided.length === 0) {
        hazardsListEl.innerHTML = `
          <div class="hazard-item" style="border-left-color: #38d9a9; background: rgba(56, 217, 169, 0.08);">
            <span class="hazard-item__name" style="color: #38d9a9">Прямой безопасный коридор</span>
            <span class="hazard-item__desc">Прямая линия не пересекает критических геологических провалов рельефа. Траектория оптимизирована.</span>
          </div>
        `;
      } else {
        result.hazardsAvoided.forEach((hazName) => {
          const item = document.createElement('div');
          item.className = 'hazard-item';
          item.innerHTML = `
            <span class="hazard-item__name">Обход: ${hazName}</span>
            <span class="hazard-item__desc">Траектория скорректирована для уклонения от отвесных стен и грабенов рельефа.</span>
          `;
          hazardsListEl.appendChild(item);
        });
      }
    }

    if (waypointsEl) {
      waypointsEl.innerHTML = '';
      const waypoints = [
        { label: 'Старт экспедиции', pt: routeState.pointA },
        { label: 'Коридор маневра', pt: result.safePath[Math.floor(result.safePath.length * 0.33)] },
        { label: 'Безопасный перевал', pt: result.safePath[Math.floor(result.safePath.length * 0.66)] },
        { label: 'Пункт назначения', pt: routeState.pointB },
      ];

      waypoints.forEach((wp, idx) => {
        const row = document.createElement('div');
        row.className = 'waypoint-row';
        row.innerHTML = `
          <span class="waypoint-row__name">${idx + 1}. ${wp.label}</span>
          <span class="waypoint-row__coords">${formatCoordSimple(wp.pt[0], true)}, ${formatCoordSimple(wp.pt[1], false)}</span>
        `;
        waypointsEl.appendChild(row);
      });
    }
  }

  // Route Mode UI Controller
  const routeModeBtn = document.querySelector('#btn-toggle-route-mode');
  const routePrompt = document.querySelector('#map-route-prompt');
  const routePromptText = document.querySelector('#route-prompt-text');
  const cancelRouteModeBtn = document.querySelector('#btn-cancel-route-mode');

  if (routePrompt && window.L && L.DomEvent) {
    L.DomEvent.disableClickPropagation(routePrompt);
    L.DomEvent.disableScrollPropagation(routePrompt);
  }

  function setRouteMode(active) {
    routeState.modeActive = active;
    if (routeModeBtn) {
      routeModeBtn.classList.toggle('active', active);
      const textSpan = document.querySelector('#route-mode-text');
      if (textSpan) {
        textSpan.textContent = active ? 'Режим выбора: кликните на карту' : 'Выбрать точки на карте';
      }
    }

    if (active) {
      // Mutual exclusivity: close swipe tool when user starts route point picking
      if (swipeController && swipeController.isActive()) {
        swipeController.disable();
      }
      if (routePrompt) routePrompt.classList.remove('hidden');
      updatePromptBanner();
      map.getContainer().style.cursor = 'crosshair';
    } else {
      if (routePrompt) routePrompt.classList.add('hidden');
      map.getContainer().style.cursor = '';
    }
  }

  function updatePromptBanner() {
    if (!routePromptText) return;
    if (!routeState.pointA) {
      routePromptText.textContent = 'Кликните на карту, чтобы установить Точку А (Старт)';
    } else if (!routeState.pointB) {
      routePromptText.textContent = 'Точка А установлена. Кликните для выбора Точки Б (Финиш)';
    } else {
      routePromptText.textContent = 'Точки заданы. Кликните для смены Точки Б или перетащите маркеры';
    }
  }

  if (routeModeBtn) {
    routeModeBtn.addEventListener('click', () => {
      setRouteMode(!routeState.modeActive);
    });
  }

  if (cancelRouteModeBtn) {
    cancelRouteModeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setRouteMode(false);
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (routeState && routeState.modeActive) {
        setRouteMode(false);
      } else if (swipeController && swipeController.isActive()) {
        swipeController.disable();
      }
    }
  });

  map.on('click', (e) => {
    if (!routeState.modeActive) return;

    const coords = [e.latlng.lat, e.latlng.lng];
    if (!routeState.pointA) {
      setPointA(coords, 'Пользовательская точка');
      updatePromptBanner();
    } else if (!routeState.pointB) {
      setPointB(coords, 'Пользовательская точка');
      setRouteMode(false);
      calculateAndDrawRoute();
    } else {
      // Re-place Point B
      setPointB(coords, 'Пользовательская точка');
      setRouteMode(false);
      calculateAndDrawRoute();
    }
  });

  // Calculate & Clear Buttons
  const calcRouteBtn = document.querySelector('#btn-calc-route');
  if (calcRouteBtn) {
    calcRouteBtn.addEventListener('click', calculateAndDrawRoute);
  }

  const clearRouteBtn = document.querySelector('#btn-clear-route');
  if (clearRouteBtn) {
    clearRouteBtn.addEventListener('click', () => {
      routeState.pointA = null;
      routeState.pointB = null;
      routeState.pointAName = null;
      routeState.pointBName = null;
      routeState.currentResult = null;

      if (routeState.markerA) {
        map.removeLayer(routeState.markerA);
        routeState.markerA = null;
      }
      if (routeState.markerB) {
        map.removeLayer(routeState.markerB);
        routeState.markerB = null;
      }

      routeState.routeLayer.clearLayers();
      routeState.directLayer.clearLayers();

      const labelA = document.querySelector('#point-a-coords');
      const labelB = document.querySelector('#point-b-coords');
      if (labelA) labelA.textContent = 'Не задано (кликните на карту)';
      if (labelB) labelB.textContent = 'Не задано (кликните на карту)';

      const summaryCard = document.querySelector('#route-summary-card');
      if (summaryCard) summaryCard.classList.add('hidden');

      setRouteMode(false);
      checkCalcButtonState();

      // Reset Telemetry card
      const hazardsListEl = document.querySelector('#hazards-avoided-list');
      if (hazardsListEl) hazardsListEl.innerHTML = '<div class="telemetry-empty">Маршрут еще не построен</div>';
      const waypointsEl = document.querySelector('#waypoints-timeline');
      if (waypointsEl) waypointsEl.innerHTML = '';
      const statusEl = document.querySelector('#telemetry-status');
      if (statusEl) statusEl.textContent = 'Ожидание точек';
    });
  }

  // Swap Points
  const swapBtn = document.querySelector('#btn-swap-points');
  if (swapBtn) {
    swapBtn.addEventListener('click', () => {
      if (!routeState.pointA && !routeState.pointB) return;
      const tempCoords = routeState.pointA;
      const tempName = routeState.pointAName;
      setPointA(routeState.pointB, routeState.pointBName);
      setPointB(tempCoords, tempName);
      if (routeState.pointA && routeState.pointB) calculateAndDrawRoute();
    });
  }

  // Preset Scenario Buttons
  const presetsData = {
    perseverance: { name: 'Perseverance (Jezero)', coords: jezero },
    curiosity: { name: 'Curiosity (Gale)', coords: [-4.5895, 137.4417] },
    insight: { name: 'InSight (Elysium)', coords: [4.5024, 135.6234] },
    valles: { name: 'Valles Marineris (Северный вал)', coords: [-1.0, -60.0] },
  };

  document.querySelectorAll('.preset-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      const startKey = chip.getAttribute('data-start');
      const endKey = chip.getAttribute('data-end');
      const startInfo = presetsData[startKey];
      const endInfo = presetsData[endKey];

      if (startInfo && endInfo) {
        setPointA(startInfo.coords, startInfo.name);
        setPointB(endInfo.coords, endInfo.name);
        setRouteMode(false);
        calculateAndDrawRoute();
      }
    });
  });

  // Toggles for hazard zones and direct comparison path
  const toggleHazards = document.querySelector('#toggle-hazards');
  if (toggleHazards) {
    toggleHazards.addEventListener('change', (e) => {
      if (e.target.checked) routeState.hazardLayer.addTo(map);
      else map.removeLayer(routeState.hazardLayer);
    });
  }

  const toggleDirect = document.querySelector('#toggle-direct-path');
  if (toggleDirect) {
    toggleDirect.addEventListener('change', (e) => {
      if (e.target.checked) routeState.directLayer.addTo(map);
      else map.removeLayer(routeState.directLayer);
    });
  }

  // Info Rail Tabs Logic
  const tabMission = document.querySelector('#tab-mission');
  const tabRoute = document.querySelector('#tab-route');
  const missionCard = document.querySelector('#mission-card');
  const telemetryView = document.querySelector('#route-telemetry-view');
  const railHeading = document.querySelector('#rail-heading');

  function showMissionTab() {
    if (tabMission) tabMission.classList.add('active');
    if (tabRoute) tabRoute.classList.remove('active');
    if (missionCard) missionCard.classList.remove('hidden');
    if (telemetryView) telemetryView.classList.add('hidden');
    if (railHeading) railHeading.textContent = 'Информация об объекте';
  }

  function showRouteTab() {
    if (tabMission) tabMission.classList.remove('active');
    if (tabRoute) tabRoute.classList.add('active');
    if (missionCard) missionCard.classList.add('hidden');
    if (telemetryView) telemetryView.classList.remove('hidden');
    if (railHeading) railHeading.textContent = 'Телеметрия SafeNav';
  }

  if (tabMission) tabMission.addEventListener('click', showMissionTab);
  if (tabRoute) tabRoute.addEventListener('click', showRouteTab);

  const btnShowTelemetry = document.querySelector('#btn-show-telemetry');
  if (btnShowTelemetry) {
    btnShowTelemetry.addEventListener('click', showRouteTab);
  }

  // Initial call
  updateMissionUIForActiveLayer();
})();
