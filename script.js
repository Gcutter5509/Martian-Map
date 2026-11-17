(() => {
  // =========================================================================
  // Internationalization (i18n) Engine - NASA Space Apps Compliant (EN / RU)
  // =========================================================================
  // Словарь переводов (i18n)
  const i18n = {
    en: {
      brand_subtitle: 'Interplanetary Atlas & Survival Guide',
      topbar_center: 'NASA Planetary Missions Dataset',
      sidebar_h1: 'Mars Atlas',
      sidebar_copy: 'Explore Martian topography, visible optical mosaics, thermal infrared layers, landing sites, and in-situ weather telemetry.',
      search_placeholder: 'Search crater, landmark or coordinates',
      layers_heading: 'Map Layers',
      layer_color_title: 'Optical Mosaic',
      layer_color_sub: 'Viking, visible spectrum',
      layer_relief_title: 'Relief & Altimetry',
      layer_relief_sub: 'MOLA, laser altimetry',
      layer_themis_day_title: 'Thermal IR (Day)',
      layer_themis_day_sub: 'THEMIS, daytime thermal',
      layer_themis_night_title: 'Thermal IR (Night)',
      layer_themis_night_sub: 'THEMIS, nighttime thermal',
      layer_ctx_title: 'High-Res Mosaic',
      layer_ctx_sub: 'MRO CTX, 6 m/px',
      btn_swipe_sidebar: 'Swipe: Optical / MOLA Relief',
      missions_heading: 'Landing Sites',
      landmarks_heading: 'Geological Landmarks',
      landmarks_toggle_all: 'Hide all',
      landmarks_toggle_show: 'Show all',
      landmark_olympus_name: 'Olympus Mons',
      landmark_olympus_sub: 'Tallest volcano in Solar System (69,650 ft / 13.2 mi)',
      landmark_valles_name: 'Valles Marineris',
      landmark_valles_sub: 'Grand canyon network (depth up to 32,800 ft / 6.2 mi)',
      landmark_noctis_name: 'Noctis Labyrinthus',
      landmark_noctis_sub: 'Fractured graben and valley network',
      landmark_hellas_name: 'Hellas Planitia',
      landmark_hellas_sub: 'Deepest impact basin (-23,465 ft / -4.4 mi)',
      landmark_cydonia_name: 'Cydonia Mensae',
      landmark_cydonia_sub: 'Mesa formations ("Face on Mars")',
      landmark_korolev_name: 'Korolev Crater',
      landmark_korolev_sub: '5,900 ft (1.1 mi) thick water ice dome',
      landmark_alba_name: 'Alba Mons',
      landmark_alba_sub: 'Volcano spanning over 620 miles diameter',
      route_heading: 'SafeNav Pathfinding',
      route_badge: 'Marswalk & Rover',
      route_hint: 'Multi-stop rover and Marswalk pathfinding: up to 8 stops, each leg routed around hazardous chasms and steep slopes.',
      route_mode_btn: 'Add stops on map',
      route_mode_active: 'Click map to add stops',
      point_a_label: 'Start (A)',
      point_b_label: 'Target (B)',
      point_unset: 'Not set (click map)',
      presets_label: 'Quick scenarios:',
      hazards_toggle_label: 'Show hazard zones (scarps/rifts)',
      direct_toggle_label: 'Compare with direct line',
      btn_calc_route: 'Calculate Safe Route',
      btn_clear_route: 'Reset',
      btn_clear_route_top: 'Delete Route',
      summary_tag: 'Trajectory calculated',
      summary_score: '99.2% safety rating',
      summary_avoided_label: 'Hazard zones bypassed:',
      btn_telemetry: 'Open route telemetry →',
      btn_reverse: 'Reverse',
      btn_optimize: 'Optimize order',
      btn_copy_link: 'Copy route link',
      roundtrip_toggle_label: 'Round trip (return to start)',
      route_edit_hint: 'Click the route line to insert a stop. Drag a marker to reroute, right-click it to remove.',
      telemetry_elev_title: 'Elevation Profile (NASA MOLA MEGDR):',
      data_status_label: 'NASA Mars Trek WMTS',
      map_upper_label: 'Coordinate System',
      map_upper_val: 'Areocentric (0° E)',
      map_center_label: 'Map Center · MOLA Elevation',
      swipe_label_left: 'Left:',
      swipe_label_right: 'Right:',
      route_prompt_text_a: 'Click map to set Point A (Start)',
      route_prompt_text_b: 'Click map to set Point B (Target)',
      loading_indicator: 'Loading layer...',
      rail_heading_mission: 'Object Information',
      rail_heading_weather: 'Weather & Climate',
      rail_heading_route: 'SafeNav Telemetry',
      tab_mission: 'Object',
      tab_weather: 'Weather',
      tab_route: 'Route',
      card_kicker_landing: 'Landing Site',
      card_kicker_landmark: 'Geological Landmark',
      card_lat: 'Latitude',
      card_lon: 'Longitude',
      card_elev: 'Elevation',
      card_relief: 'Relief',
      card_thermal: 'Infrared',
      btn_goto_weather_text: 'Local Weather Report',
      btn_goto_weather_sub: 'Climate & Physics →',
      card_open_trek: 'Open in NASA Mars Trek',
      rail_heading: 'Object Information',
      weather_stat_temp: 'Air Temperature',
      weather_stat_press: 'Atmospheric Pressure',
      weather_stat_wind: 'Wind Regime',
      weather_stat_dust: 'Dust & UV Radiation',
      weather_stat_density: 'Air Density',
      weather_stat_sound: 'Speed of Sound',
      weather_stat_boil: 'Water Boiling Point',
      weather_stat_radiation: 'Radiation & Solar Flux',
      weather_atmos_title: 'Martian Atmospheric Composition:',
      weather_micro_title: 'Local Microclimate Features:',
      weather_gravity_title: 'Martian Gravity Calculator (0.38 g):',
      weather_spacesuit_label: 'Include NASA xEMU Spacesuit (+287 lbs / 130 kg)',
      weather_local_gravity: 'Local Surface Gravity:',
      weather_hang_time: 'Hang time in air:',
      weather_earth_weight: 'Your weight on Earth:',
      weather_mars_weight: 'Weight at location:',
      weather_jump_height: 'Jump height:',
      weather_weight_unit: 'lbs',
      weather_jump_mult: '2.64× higher (~4.3 ft)',
      gas_co2: 'Carbon Dioxide (CO₂)',
      gas_n2: 'Nitrogen (N₂)',
      gas_ar: 'Argon (⁴⁰Ar)',
      gas_o2: 'Oxygen (O₂)',
      gas_co: 'Carbon Monoxide (CO)',
      gas_h2o: 'Water Vapor (H₂O)',
      preset_olympus_hellas: 'Olympus → Hellas',
      telemetry_waiting: 'Awaiting points',
      telemetry_calculated: 'Route Computed',
      telemetry_title: 'Rover Trajectory',
      telemetry_subtitle: 'Select waypoints on map or activate a scenario to calculate safe geodesic path.',
      telemetry_stat_dist: 'Distance (Mars)',
      telemetry_stat_time: 'Travel Time (Robotic)',
      telemetry_stat_direct: 'Direct Path',
      telemetry_stat_safety: 'Safety Index',
      telemetry_stat_bearing: 'Initial Azimuth',
      telemetry_stat_energy: 'Traction Energy',
      telemetry_stat_latency: 'DSN Radio Latency',
      telemetry_stat_manned_time: 'Crew & Marswalk Time',
      telemetry_hazards_title: 'Geological Trajectory Analysis:',
      telemetry_waypoints_title: 'Route Stops & Legs:',
      telemetry_no_route: 'No route calculated yet',
      rail_note_title: 'Map Navigation',
      rail_note_text: 'Switch layers, inspect landing sites, or drag swipe handle for multispectral comparative analysis.',
      zoom_label: 'Scale',
      zoom_global: 'Global View',
      zoom_regional: 'Regional View',
      zoom_local: 'Local View (Detail)',
      zoom_highres_ctx: 'High-Res CTX (6 m/px)',
      zoom_ultrahres_hirise: 'HiRISE Ultra-Res (25 cm/px)',
      layer_opt_viking: 'Optical (Viking)',
      layer_opt_mola: 'Relief (MOLA)',
      layer_opt_themis_day: 'Thermal Day (THEMIS)',
      layer_opt_themis_night: 'Thermal Night (THEMIS)',
      layer_opt_ctx: 'High-Res CTX (6m)',
    },
    ru: {
      brand_subtitle: 'Атлас поверхности Марса',
      topbar_center: 'Данные космических миссий NASA',
      sidebar_h1: 'Карта Марса',
      sidebar_copy: 'Исследуйте рельеф, оптические и инфракрасные снимки поверхности, а также районы посадки исследовательских аппаратов.',
      search_placeholder: 'Поиск кратера или координат',
      layers_heading: 'Слои карты',
      layer_color_title: 'Оптическая мозаика',
      layer_color_sub: 'Viking, видимый спектр',
      layer_relief_title: 'Рельеф и высоты',
      layer_relief_sub: 'MOLA, высотная карта',
      layer_themis_day_title: 'ИК-карта (день)',
      layer_themis_day_sub: 'THEMIS, дневная съемка',
      layer_themis_night_title: 'ИК-карта (ночь)',
      layer_themis_night_sub: 'THEMIS, ночная съемка',
      layer_ctx_title: 'Сверхдетальная мозаика',
      layer_ctx_sub: 'MRO CTX, 6 м/пикс',
      btn_swipe_sidebar: 'Шторка: Оптика / Рельеф MOLA',
      missions_heading: 'Посадочные площадки',
      landmarks_heading: 'Достопримечательности',
      landmarks_toggle_all: 'Скрыть все',
      landmarks_toggle_show: 'Показать все',
      landmark_olympus_name: 'Гора Олимп (Olympus Mons)',
      landmark_olympus_sub: 'Высочайший вулкан (21,2 км)',
      landmark_valles_name: 'Долины Маринер (Valles Marineris)',
      landmark_valles_sub: 'Большой каньон (глубина до 10 км)',
      landmark_noctis_name: 'Лабиринт Ночи (Noctis Labyrinthus)',
      landmark_noctis_sub: 'Сетка каньонов и грабенов',
      landmark_hellas_name: 'Равнина Эллада (Hellas Planitia)',
      landmark_hellas_sub: 'Глубочайшая впадина (-7,1 км)',
      landmark_cydonia_name: 'Кидония (Cydonia Mensae)',
      landmark_cydonia_sub: 'Столовые горы («Лицо на Марсе»)',
      landmark_korolev_name: 'Кратер Королёв (Korolev Crater)',
      landmark_korolev_sub: 'Купол водяного льда толщиной 1,8 км',
      landmark_alba_name: 'Гора Белая (Alba Mons)',
      landmark_alba_sub: 'Вулкан диаметром свыше 1 000 км',
      route_heading: 'Безопасный маршрут',
      route_badge: 'Marswalk & Rover',
      route_hint: 'Маршрут для марсоходов и пеших выходов через несколько точек (до 8): каждый участок обходит опасные каньоны и крутые склоны.',
      route_mode_btn: 'Добавить точки на карте',
      route_mode_active: 'Кликайте по карте — добавляйте точки',
      point_a_label: 'Старт',
      point_b_label: 'Финиш',
      point_unset: 'Не задано (кликните на карту)',
      presets_label: 'Быстрые сценарии:',
      hazards_toggle_label: 'Показывать опасные зоны (обрывы)',
      direct_toggle_label: 'Сравнить с прямой линией',
      btn_calc_route: 'Рассчитать безопасный путь',
      btn_clear_route: 'Сбросить',
      btn_clear_route_top: 'Удалить маршрут',
      summary_tag: 'Траектория рассчитана',
      summary_score: '99.2% безопасность',
      summary_avoided_label: 'Обойдено зон риска:',
      btn_telemetry: 'Открыть телеметрию маршрута →',
      btn_reverse: 'Развернуть',
      btn_optimize: 'Оптимизировать порядок',
      btn_copy_link: 'Скопировать ссылку на маршрут',
      roundtrip_toggle_label: 'Кольцевой маршрут (возврат к старту)',
      route_edit_hint: 'Кликните по линии маршрута, чтобы вставить точку. Перетащите маркер, чтобы изменить путь; правый клик — удалить.',
      telemetry_elev_title: 'Профиль высот (NASA MOLA MEGDR):',
      data_status_label: 'Данные NASA Mars Trek',
      map_upper_label: 'Система координат',
      map_upper_val: 'Ареоцентрическая (0° E)',
      map_center_label: 'Центр карты · высота MOLA',
      swipe_label_left: 'Слева:',
      swipe_label_right: 'Справа:',
      route_prompt_text_a: 'Кликните на карту, чтобы установить Точку А (Старт)',
      route_prompt_text_b: 'Кликните на карту, чтобы установить Точку Б (Финиш)',
      loading_indicator: 'Загрузка слоя...',
      rail_heading_mission: 'Информация об объекте',
      rail_heading_weather: 'Метеосводка и климат',
      rail_heading_route: 'Телеметрия SafeNav',
      tab_mission: 'Объект',
      tab_weather: 'Метео',
      tab_route: 'Маршрут',
      card_kicker_landing: 'Район посадки',
      card_kicker_landmark: 'Геологический объект',
      card_lat: 'Широта',
      card_lon: 'Долгота',
      card_elev: 'Высота',
      card_relief: 'Рельеф',
      card_thermal: 'ИК-съемка',
      btn_goto_weather_text: 'Метеосводка района',
      btn_goto_weather_sub: 'Климат и физика →',
      card_open_trek: 'Открыть в NASA Mars Trek',
      rail_heading: 'Информация об объекте',
      weather_stat_temp: 'Температура воздуха',
      weather_stat_press: 'Атмосферное давление',
      weather_stat_wind: 'Ветровой режим',
      weather_stat_dust: 'Запыленность & UV',
      weather_stat_density: 'Плотность атмосферы',
      weather_stat_sound: 'Скорость звука',
      weather_stat_boil: 'Точка кипения воды',
      weather_stat_radiation: 'Радиация и инсоляция',
      weather_atmos_title: 'Состав марсианской атмосферы:',
      weather_micro_title: 'Микроклиматические особенности точки:',
      weather_gravity_title: 'Гравитационный калькулятор (0.38 g):',
      weather_spacesuit_label: 'Учесть скафандр NASA xEMU (+130 кг / 287 lbs)',
      weather_local_gravity: 'Локальная гравитация:',
      weather_hang_time: 'Время зависания в прыжке:',
      weather_earth_weight: 'Ваш вес на Земле:',
      weather_mars_weight: 'Вес на точке:',
      weather_jump_height: 'Высота прыжка:',
      weather_weight_unit: 'кг',
      weather_jump_mult: 'в 2.64× выше (~1.3 м)',
      gas_co2: 'Углекислый газ (CO₂)',
      gas_n2: 'Азот (N₂)',
      gas_ar: 'Аргон (⁴⁰Ar)',
      gas_o2: 'Кислород (O₂)',
      gas_co: 'Угарный газ (CO)',
      gas_h2o: 'Водяной пар (H₂O)',
      preset_olympus_hellas: 'Олимп → Эллада',
      telemetry_waiting: 'Ожидание точек',
      telemetry_calculated: 'Маршрут построен',
      telemetry_title: 'Маршрут марсохода',
      telemetry_subtitle: 'Выберите точки на карте или активируйте готовый сценарий для расчета безопасной траектории.',
      telemetry_stat_dist: 'Дистанция (Марс)',
      telemetry_stat_time: 'Время перехода (марсоход)',
      telemetry_stat_direct: 'Прямой путь',
      telemetry_stat_safety: 'Безопасность',
      telemetry_stat_bearing: 'Начальный азимут',
      telemetry_stat_energy: 'Энергия тяги',
      telemetry_stat_latency: 'Задержка радиосвязи (DSN)',
      telemetry_stat_manned_time: 'Экипаж / Marswalk EVA',
      telemetry_hazards_title: 'Геологический анализ траектории:',
      telemetry_waypoints_title: 'Точки и участки маршрута:',
      telemetry_no_route: 'Маршрут еще не построен',
      rail_note_title: 'Навигация по карте',
      rail_note_text: 'Переключайте слои и выбирайте посадочные площадки для детального просмотра параметров рельефа.',
      zoom_label: 'Масштаб',
      zoom_global: 'Общий вид',
      zoom_regional: 'Региональный вид',
      zoom_local: 'Детальный масштаб',
      zoom_highres_ctx: 'Высокое разрешение (CTX 6 м/пикс)',
      zoom_ultrahres_hirise: 'HiRISE Ультра (25 см/пикс)',
      layer_opt_viking: 'Оптика (Viking)',
      layer_opt_mola: 'Рельеф (MOLA)',
      layer_opt_themis_day: 'ИК день (THEMIS)',
      layer_opt_themis_night: 'ИК ночь (THEMIS)',
      layer_opt_ctx: 'Высокое разрешение CTX (6 м)',
    }
  };

  // Текущий язык интерфейса
  let currentLang = localStorage.getItem('martian_lang') || 'en';

  // Получение локализованной строки
  function t(val) {
    if (!val) return '';
    if (typeof val === 'object') return val[currentLang] || val.en || '';
    return val;
  }

  // =========================================================================
  // Цифровая модель рельефа NASA MGS MOLA MEGDR (4 пикс/°) — mola-megdr-4ppd.js
  // =========================================================================

  // Декодирование исходного файла MEGT90N000CB.IMG (16-бит, старший байт первым)
  const molaDem = (() => {
    const src = window.MOLA_MEGDR;
    if (!src || typeof src.b64 !== 'string') return null;
    try {
      const bin = atob(src.b64);
      const count = src.width * src.height;
      if (bin.length !== count * 2) return null;
      const data = new Int16Array(count);
      for (let i = 0, j = 0; i < count; i++, j += 2) {
        // Int16Array сам приводит 0..65535 к знаковому значению
        data[i] = (bin.charCodeAt(j) << 8) | bin.charCodeAt(j + 1);
      }
      return { data, width: src.width, height: src.height, ppd: src.ppd };
    } catch {
      return null;
    }
  })();
  const hasMola = molaDem !== null;
  const MOLA_KM_PER_DEG = (Math.PI * 3389.5) / 180;

  // Высота над ареоидом в метрах (билинейная интерполяция по центрам пикселей).
  // Строка 1 — 89.875° с.ш., столбец 1 — 0.125° в.д.; долгота замыкается по кругу.
  function molaElevation(lat, lon) {
    if (!molaDem) return 0;
    const { data, width, height, ppd } = molaDem;
    const x = (((lon % 360) + 360) % 360) * ppd - 0.5;
    const y = (90 - lat) * ppd - 0.5;
    const x0 = Math.floor(x);
    const y0 = Math.floor(y);
    const fx = x - x0;
    const fy = y - y0;
    const col0 = ((x0 % width) + width) % width;
    const col1 = (col0 + 1) % width;
    const row0 = Math.max(0, Math.min(height - 1, y0)) * width;
    const row1 = Math.max(0, Math.min(height - 1, y0 + 1)) * width;
    const top = data[row0 + col0] * (1 - fx) + data[row0 + col1] * fx;
    const bottom = data[row1 + col0] * (1 - fx) + data[row1 + col1] * fx;
    return top * (1 - fy) + bottom * fy;
  }

  // Региональный уклон в градусах: градиент высоты на базе ±0.25° (~30 км).
  // Это уклон рельефа в масштабе сетки MOLA, а не локальный уклон под колесами.
  function molaSlopeDeg(lat, lon) {
    if (!molaDem) return 0;
    const d = 0.25;
    const cosLat = Math.max(0.05, Math.cos((lat * Math.PI) / 180));
    const dLon = Math.min(5, d / cosLat);
    const latN = Math.min(89.9, lat + d);
    const latS = Math.max(-89.9, lat - d);
    const dzdy = (molaElevation(latN, lon) - molaElevation(latS, lon)) / ((latN - latS) * MOLA_KM_PER_DEG * 1000);
    const dzdx = (molaElevation(lat, lon + dLon) - molaElevation(lat, lon - dLon)) / (2 * dLon * MOLA_KM_PER_DEG * cosLat * 1000);
    return (Math.atan(Math.hypot(dzdx, dzdy)) * 180) / Math.PI;
  }

  // Наибольший региональный уклон в окрестности точки (центр + 4 смещения на r градусов)
  function molaAreaSlopeDeg(pt, r) {
    const cosLat = Math.max(0.05, Math.cos((pt[0] * Math.PI) / 180));
    const rLon = Math.min(5, r / cosLat);
    return Math.max(
      molaSlopeDeg(pt[0], pt[1]),
      molaSlopeDeg(Math.min(89, pt[0] + r), pt[1]),
      molaSlopeDeg(Math.max(-89, pt[0] - r), pt[1]),
      molaSlopeDeg(pt[0], pt[1] + rLon),
      molaSlopeDeg(pt[0], pt[1] - rLon),
    );
  }

  // Форматирование высоты (м для RU, футы для EN)
  function formatElev(m, isRu) {
    if (!hasMola) return '—';
    return isRu
      ? `${m >= 0 ? '+' : ''}${Math.round(m).toLocaleString('ru-RU')} м`
      : `${m >= 0 ? '+' : ''}${Math.round(m * 3.28084).toLocaleString('en-US')} ft`;
  }
  // Элементы статуса и загрузки
  const status = document.querySelector('#data-status');
  const loader = document.querySelector('#loading-indicator');

  // Проверка доступности Leaflet
  if (!window.L) {
    const isRu = currentLang === 'ru';
    if (status) status.textContent = isRu ? 'Карта недоступна (проверьте сеть)' : 'Map unavailable (check network connection)';
    if (loader) {
      loader.textContent = isRu ? 'Не удалось загрузить библиотеку карты' : 'Failed to load Leaflet map library';
      loader.classList.remove('hidden');
    }
    return;
  }

  // Official NASA Mars Trek Extents:
  // Global layers cover -180° to 180° lon and -90° to 90° lat.
  // THEMIS Night controlled mosaic covers -180° to 180° lon and -65.0006576° to 65.0007535° lat.
  // Координатные границы карты
  const globalBounds = L.latLngBounds([[-90, -180], [90, 180]]);
  const nightBounds = L.latLngBounds([[-65.0006576, -180], [65.0007535, 180]]);

  // Инициализация карты Leaflet
  const jezero = [18.4447, 77.4508];
  const map = L.map('map', {
    center: jezero,
    zoom: 4,
    crs: L.CRS.EPSG4326,
    minZoom: 1,
    maxZoom: 14,
    zoomControl: false,
    attributionControl: false,
    maxBounds: globalBounds,
    maxBoundsViscosity: 1.0,
  });

  // Фабрика тайловых слоев NASA WMTS
  const nasaTiles = (layer, ext = 'jpg', options = {}) => L.tileLayer(
    `https://trek.nasa.gov/tiles/Mars/EQ/${layer}/1.0.0/default/default028mm/{z}/{y}/{x}.${ext}`,
    {
      minZoom: 1,
      maxZoom: 14,
      maxNativeZoom: options.maxNativeZoom || 7,
      tileSize: 256,
      noWrap: true,
      keepBuffer: 3,
      bounds: options.bounds || globalBounds,
      ...options,
    }
  );

  // Конфигурация базовых слоев
  const layerConfigs = {
    color: {
      layer: nasaTiles('Mars_Viking_MDIM21_ClrMosaic_global_232m', 'jpg', { bounds: globalBounds, maxNativeZoom: 7, maxZoom: 14 }),
      name: { en: 'Viking (Visible Spectrum)', ru: 'Viking (видимый диапазон)' },
      bounds: globalBounds,
      minLat: -90,
      maxLat: 90,
      irContext: { en: 'Viking MDIM 2.1 (761 ft/px)', ru: 'Viking MDIM 2.1 (232 м/пикс)' },
    },
    relief: {
      layer: nasaTiles('Mars_MGS_MOLA_ClrShade_merge_global_463m', 'jpg', { bounds: globalBounds, maxNativeZoom: 7, maxZoom: 14 }),
      name: { en: 'MOLA (Relief & Altimetry)', ru: 'MOLA (рельеф и высоты)' },
      bounds: globalBounds,
      minLat: -90,
      maxLat: 90,
      irContext: { en: 'MOLA laser altimetry (1,519 ft/px)', ru: 'MOLA лазерная альтиметрия (463 м/пикс)' },
    },
    thermalDay: {
      layer: nasaTiles('Mars_MO_THEMIS-IR-Day_mosaic_global_100m_v12_clon0_ly', 'png', {
        className: 'themis-layer',
        bounds: globalBounds,
        maxNativeZoom: 8,
        maxZoom: 14,
      }),
      name: { en: 'THEMIS (Thermal IR Day)', ru: 'THEMIS (дневная ИК-съемка)' },
      bounds: globalBounds,
      minLat: -90,
      maxLat: 90,
      irContext: { en: 'THEMIS Day IR (328 ft/px, 90° S — 90° N)', ru: 'THEMIS Day IR (100 м/пикс, 90° S — 90° N)' },
    },
    thermalNight: {
      layer: nasaTiles('THEMIS_NightIR_ControlledMosaics_100m_v2_oct2018', 'png', {
        className: 'themis-layer',
        bounds: nightBounds,
        maxNativeZoom: 9,
        maxZoom: 14,
      }),
      name: { en: 'THEMIS (Thermal IR Night)', ru: 'THEMIS (ночная ИК-съемка)' },
      bounds: nightBounds,
      minLat: -65.0006576,
      maxLat: 65.0007535,
      irContext: { en: 'THEMIS Night IR (328 ft/px, NASA coverage: 65° S — 65° N)', ru: 'THEMIS Night IR (100 м/пикс, покрытие NASA: 65° S — 65° N)' },
    },
    ctx: {
      layer: nasaTiles('Mars_Viking_MDIM21_ClrMosaic_global_232m', 'jpg', {
        bounds: globalBounds,
        maxNativeZoom: 7,
        maxZoom: 14,
      }),
      name: { en: 'High-Res CTX Mosaic (6m)', ru: 'Сверхдетальная мозаика CTX (6 м)' },
      bounds: globalBounds,
      minLat: -90,
      maxLat: 90,
      irContext: { en: 'MRO CTX Mosaic (19.7 ft/px, 6 m/px in landing sites)', ru: 'Мозаика MRO CTX (6 м/пикс в районах посадок)' },
    },
  };

  // Базовые картографические слои
  const basemaps = {
    color: layerConfigs.color.layer,
    relief: layerConfigs.relief.layer,
    thermalDay: layerConfigs.thermalDay.layer,
    thermalNight: layerConfigs.thermalNight.layer,
    ctx: layerConfigs.ctx.layer,
  };

  // Текущий активный слой
  let activeKey = 'color';
  let activeBasemap = basemaps.color.addTo(map);
  let swipeController = null;

  // =========================================================================
  // Authentic NASA CTX Mosaics (Option B: 5-6 m/px Context Imagery)
  // =========================================================================
  // Каталог детальных мозаик CTX (6 м/пикс)
  const ctxMosaics = [
    {
      id: 'jezero_ctx',
      name: { en: 'Jezero Crater CTX (6 m/px)', ru: 'Кратер Езеро CTX (6 м/пикс)' },
      layer: 'JEZ_ctx_B_soc_008_orthoMosaic_6m_Eqc_latTs0_lon0',
      bounds: L.latLngBounds([[18.2110, 77.1605], [18.7212, 77.6992]]),
      maxNativeZoom: 13,
      ext: 'png',
    },
    {
      id: 'insight_ctx',
      name: { en: 'InSight Elysium CTX (6 m/px)', ru: 'Элизий InSight CTX (6 м/пикс)' },
      layer: 'InSightCTXMosaic_112917',
      bounds: L.latLngBounds([[4.13727, 134.75369], [4.93600, 136.94436]]),
      maxNativeZoom: 13,
      ext: 'png',
    },
  ];

  // Подключение тайловых слоев CTX
  const ctxTileLayers = ctxMosaics.map((m) => {
    const lyr = L.tileLayer(
      `https://trek.nasa.gov/tiles/Mars/EQ/${m.layer}/1.0.0/default/default028mm/{z}/{y}/{x}.${m.ext}`,
      {
        minZoom: 8,
        maxZoom: 14,
        maxNativeZoom: m.maxNativeZoom,
        tileSize: 256,
        bounds: m.bounds,
        noWrap: true,
        keepBuffer: 3,
        opacity: 1.0,
        zIndex: 400,
      }
    ).addTo(map);

    lyr.on('tileerror', (e) => {
      if (e && e.tile) e.tile.style.display = 'none';
    });
    return { ...m, tileLayer: lyr };
  });

  // =========================================================================
  // Authentic NASA HiRISE Ultra-Resolution Mosaics (Option C: 25 cm/px)
  // =========================================================================
  // Каталог сверхдетальных мозаик HiRISE (25 см/пикс)
  const hiriseMosaics = [
    {
      id: 'perseverance',
      name: { en: 'Jezero Delta (Perseverance)', ru: 'Дельта Езеро (Perseverance)' },
      layer: 'JEZ_hirise_soc_006_orthoMosaic_25cm_Eqc_latTs0_lon0_first_dd',
      bounds: L.latLngBounds([[18.3068, 77.2229], [18.6693, 77.5840]]),
      maxNativeZoom: 14,
      ext: 'png',
    },
    {
      id: 'curiosity',
      name: { en: 'Gale Crater (Curiosity)', ru: 'Кратер Гейл (Curiosity)' },
      layer: 'curiosity_hirise_mosaic',
      bounds: L.latLngBounds([[-5.1084, 136.7834], [-4.0661, 138.0688]]),
      maxNativeZoom: 14,
      ext: 'png',
    },
    {
      id: 'opportunity',
      name: { en: 'Meridiani Planum (Opportunity)', ru: 'Плато Меридиана (Opportunity)' },
      layer: 'opportunity_hirise_mosaic',
      bounds: L.latLngBounds([[-2.2, -5.8], [-1.7, -5.2]]),
      maxNativeZoom: 14,
      ext: 'png',
    },
    {
      id: 'spirit',
      name: { en: 'Gusev Crater (Spirit)', ru: 'Кратер Гусев (Spirit)' },
      layer: 'spirit_hirise_mosaic',
      bounds: L.latLngBounds([[-14.8, 175.2], [-14.3, 175.7]]),
      maxNativeZoom: 14,
      ext: 'png',
    },
    {
      id: 'phoenix',
      name: { en: 'Vastitas Borealis (Phoenix)', ru: 'Северная равнина (Phoenix)' },
      layer: 'phoenix_hirise_mosaic',
      bounds: L.latLngBounds([[68.0, -126.0], [68.5, -125.5]]),
      maxNativeZoom: 14,
      ext: 'png',
    },
    {
      id: 'pathfinder',
      name: { en: 'Ares Vallis (Sojourner)', ru: 'Долина Арес (Sojourner)' },
      layer: 'sojourner_hirise_mosaic',
      bounds: L.latLngBounds([[19.0, -33.8], [19.6, -33.2]]),
      maxNativeZoom: 14,
      ext: 'png',
    },
  ];

  // Подключение тайловых слоев HiRISE
  const hiriseTileLayers = hiriseMosaics.map((m) => {
    const lyr = L.tileLayer(
      `https://trek.nasa.gov/tiles/Mars/EQ/${m.layer}/1.0.0/default/default028mm/{z}/{y}/{x}.${m.ext}`,
      {
        minZoom: 10,
        maxZoom: 14,
        maxNativeZoom: m.maxNativeZoom,
        tileSize: 256,
        bounds: m.bounds,
        noWrap: true,
        keepBuffer: 3,
        opacity: 0,
        className: 'hirise-transition-layer',
        zIndex: 450,
      }
    ).addTo(map);

    lyr.on('tileerror', (e) => {
      if (e && e.tile) e.tile.style.display = 'none';
    });
    return { ...m, tileLayer: lyr };
  });

  // Обновление индикатора масштаба
  function updateZoomReadout(activeMosaic, hiriseOpacity) {
    const readout = document.querySelector('#zoom-readout');
    if (!readout) return;
    const z = map.getZoom();
    const bounds = map.getBounds();
    const isRu = currentLang === 'ru';

    if (activeMosaic && hiriseOpacity >= 0.6) {
      readout.textContent = isRu ? 'HiRISE Ультра (25 см/пикс)' : 'HiRISE Ultra-Res (25 cm/px)';
    } else if (activeMosaic && hiriseOpacity > 0) {
      readout.textContent = isRu ? 'Переход: CTX → HiRISE' : 'Transition: CTX → HiRISE';
    } else {
      const inCtx = ctxMosaics.some((c) => c.bounds.intersects(bounds));
      if (inCtx && z >= 9) {
        readout.textContent = isRu ? 'CTX Детальный (6 м/пикс)' : 'CTX High-Res (6 m/px)';
      } else if (z >= 10) {
        if (activeKey === 'ctx') {
          readout.textContent = isRu ? 'CTX Детальный (6 м/пикс)' : 'CTX High-Res (6 m/px)';
        } else {
          readout.textContent = isRu ? 'Детальный масштаб' : 'Local Detail View';
        }
      } else if (z >= 6) {
        readout.textContent = isRu ? 'Локальный масштаб' : 'Local View (Detail)';
      } else if (z >= 3) {
        readout.textContent = isRu ? 'Региональный вид' : 'Regional View';
      } else {
        readout.textContent = isRu ? 'Общий вид' : 'Global View';
      }
    }
  }

  // Плавное проявление слоя HiRISE при приближении
  function updateHiRiseTransition() {
    const z = map.getZoom();
    const bounds = map.getBounds();
    const isRu = currentLang === 'ru';

    // Opacity schedule for seamless cross-fade:
    // z <= 10: 0% HiRISE (Option B / CTX 6m or basemap is fully shown)
    // z = 11: 25% HiRISE
    // z = 12: 60% HiRISE
    // z = 13: 85% HiRISE
    // z >= 14: 100% HiRISE (Option C / HiRISE 25cm ultra-resolution)
    let opacity = 0;
    if (z >= 14) opacity = 1.0;
    else if (z === 13) opacity = 0.85;
    else if (z === 12) opacity = 0.60;
    else if (z === 11) opacity = 0.25;
    else opacity = 0;

    let activeMosaic = null;

    hiriseTileLayers.forEach((item) => {
      const inView = item.bounds.intersects(bounds);
      const targetOpacity = inView ? opacity : 0;
      item.tileLayer.setOpacity(targetOpacity);
      if (inView && targetOpacity > 0 && !activeMosaic) {
        activeMosaic = item;
      }
    });

    // Update UI Badge
    const hiriseBadge = document.querySelector('#hirise-active-badge');
    const hiriseText = document.querySelector('#hirise-badge-text');
    if (hiriseBadge && hiriseText) {
      if (activeMosaic && opacity > 0) {
        hiriseBadge.classList.remove('hidden');
        const pct = Math.round(opacity * 100);
        const nameStr = t(activeMosaic.name);
        hiriseText.textContent = isRu
          ? `HiRISE 25 см/пикс: ${nameStr} (${pct}%)`
          : `HiRISE 25cm/px: ${nameStr} (${pct}%)`;
      } else {
        hiriseBadge.classList.add('hidden');
      }
    }

    updateZoomReadout(activeMosaic, opacity);
  }

  map.on('zoom move zoomend moveend', updateHiRiseTransition);

  // Visual coverage boundary indicator for THEMIS Night (NASA 65° N and 65° S limits)
  // Границы ночной съемки THEMIS (±65°)
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

  // Обработка загрузки тайлов базовых слоев
  Object.entries(basemaps).forEach(([key, layer]) => {
    layer.on('loading', () => {
      if (key === activeKey) {
        loader.textContent = `${currentLang === 'ru' ? 'Загрузка:' : 'Loading:'} ${t(layerConfigs[key].name)}...`;
        loader.classList.remove('hidden');
        status.textContent = `${currentLang === 'ru' ? 'Загрузка:' : 'Loading:'} ${t(layerConfigs[key].name)}`;
      }
    });

    layer.on('load', () => {
      if (key !== activeKey) return;
      loader.classList.add('hidden');
      status.textContent = `${currentLang === 'ru' ? 'Слой:' : 'Layer:'} ${t(layerConfigs[key].name)}`;
      const mapAttribution = document.querySelector('#map-attribution');
      if (mapAttribution) {
        mapAttribution.textContent = `${currentLang === 'ru' ? 'Слой:' : 'Layer:'} NASA ${t(layerConfigs[key].name)}`;
      }
    });

    layer.on('tileerror', () => {
      if (key !== activeKey) return;
    });
  });

  // Состояние маршрута и тайминги привязки
  let routeState = null;
  let lastSnapTime = 0;

  // Каталог посадочных площадок миссий
  const markerStyles = {
    perseverance: {
      color: '#dd9168',
      name: 'Perseverance',
      crater: { en: 'Jezero Crater', ru: 'Jezero Crater' },
      coords: jezero,
      sol: 'Mars 2020',
      elevation: { en: '-8,448 ft (-1.60 mi below datum)', ru: '-2 575 м (ниже нулевого уровня)' },
      desc: {
        en: 'Ancient river delta on the border of Isidis Planitia. Touchdown site of NASA Perseverance rover exploring paleolake astrobiology.',
        ru: 'Древняя речная дельта на границе равнины Исиды. Место посадки марсохода Perseverance.'
      },
    },
    curiosity: {
      color: '#d6c083',
      name: 'Curiosity',
      crater: { en: 'Gale Crater', ru: 'Gale Crater' },
      coords: [-4.5895, 137.4417],
      sol: 'MSL',
      elevation: { en: '-14,600 ft (-2.76 mi crater floor)', ru: '-4 450 м (дно кратера)' },
      desc: {
        en: '96-mile-diameter (154 km) impact crater hosting central mound Aeolis Mons (Mount Sharp). Landing site of Curiosity rover.',
        ru: 'Импактный кратер диаметром 154 км с центральной горой Эолида (горой Шарпа). Место посадки марсохода Curiosity.'
      },
    },
    insight: {
      color: '#87a9b2',
      name: 'InSight',
      crater: { en: 'Elysium Planitia', ru: 'Elysium Planitia' },
      coords: [4.5024, 135.6234],
      sol: 'InSight',
      elevation: { en: '-8,530 ft (-1.62 mi below datum)', ru: '-2 600 м (ниже нулевого уровня)' },
      desc: {
        en: 'Smooth volcanic plains near the Martian equator. Operational site of the InSight geophysical lander and SEIS seismometer.',
        ru: 'Гладкая вулканическая равнина вблизи марсианского экватора. Место работы геофизического зонда InSight.'
      },
    },
    phoenix: {
      color: '#bd8da1',
      name: 'Phoenix',
      crater: { en: 'Vastitas Borealis', ru: 'Vastitas Borealis' },
      coords: [68.2188, -125.7518],
      sol: 'Phoenix',
      elevation: { en: '-13,450 ft (-2.55 mi lowlands)', ru: '-4 100 м (северная равнина)' },
      desc: {
        en: 'Circumpolar plains of Mars northern lowlands. Touchdown site of NASA Phoenix lander verifying subsurface water ice.',
        ru: 'Приполярная равнина Северного полушария. Место посадки спускаемого аппарата Phoenix для изучения подповерхностного льда.'
      },
    },
    opportunity: {
      color: '#81b29a',
      name: 'Opportunity',
      crater: { en: 'Meridiani Planum', ru: 'Meridiani Planum (Меридиана)' },
      coords: [-1.9483, -5.5266],
      sol: 'MER-B',
      elevation: { en: '-4,724 ft (-0.89 mi below datum)', ru: '-1 440 м (ниже нулевого уровня)' },
      desc: {
        en: 'Equatorial hematite plain. Legendary marathon rover that operated for 5,352 sols (over 14 years), traversing 28.06 miles (45.16 km) and verifying past liquid water.',
        ru: 'Экваториальная равнина серого гематита. Легендарный марсоход-рекордсмен, проработавший 5 352 сола (14 лет), прошедший 45,16 км и доказавший присутствие жидкой воды в прошлом.'
      },
    },
    spirit: {
      color: '#f4a261',
      name: 'Spirit',
      crater: { en: 'Gusev Crater', ru: 'Gusev Crater (Гусев)' },
      coords: [-14.5684, 175.4726],
      sol: 'MER-A',
      elevation: { en: '-6,266 ft (-1.19 mi crater floor)', ru: '-1 910 м (дно кратера)' },
      desc: {
        en: '103-mile-diameter (166 km) crater hosting Columbia Hills. Spirit rover operated for 2,210 sols, discovering hydrothermal silica deposits and paleovolcanic fumaroles.',
        ru: 'Кратер диаметром 166 км с возвышенностями Колумбия. Марсоход Spirit проработал 2 210 солов, открыв гидротермальные кремнеземные отложения древних фумарол.'
      },
    },
    viking1: {
      color: '#e07a5f',
      name: 'Viking 1',
      crater: { en: 'Chryse Planitia', ru: 'Chryse Planitia (Хриса)' },
      coords: [22.2692, -47.9493],
      sol: 'Viking 1',
      elevation: { en: '-11,900 ft (-2.25 mi below datum)', ru: '-3 627 м (ниже нулевого уровня)' },
      desc: {
        en: 'Smooth volcanic and outflow sedimentary plains. First operational lander on Mars surface, conducting pioneer biology tests and continuous meteorological tracking.',
        ru: 'Низменная равнина древних паводковых русел. Первый успешно работавший аппарат на поверхности Марса, передавший первые цветные панорамы и зафиксировавший метеоциклы.'
      },
    },
    pathfinder: {
      color: '#f2cc8f',
      name: 'Pathfinder',
      crater: { en: 'Ares Vallis', ru: 'Ares Vallis (Долина Арес)' },
      coords: [19.3274, -33.5502],
      sol: 'Pathfinder',
      elevation: { en: '-11,991 ft (-2.27 mi below datum)', ru: '-3 655 м (ниже нулевого уровня)' },
      desc: {
        en: 'Catastrophic outflow flood channel. Carl Sagan Memorial Station landing site, deploying Sojourner — humanity\'s first wheeled rover to explore another world.',
        ru: 'Русло грандиозного катастрофического древнего паводка. Место посадки мемориальной станции Карла Сагана и марсохода Соджорнер — первого колесного планетохода человечества.'
      },
    },
    zhurong: {
      color: '#e76f51',
      name: 'Zhurong',
      crater: { en: 'Utopia Planitia', ru: 'Utopia Planitia (Утопия)' },
      coords: [25.0660, 109.9250],
      sol: 'Tianwen-1',
      elevation: { en: '-13,448 ft (-2.55 mi lowlands)', ru: '-4 099 м (северная равнина)' },
      desc: {
        en: 'Vast northern sedimentary basin. Touchdown site of China\'s Zhurong rover; ground-penetrating radar imaged buried sedimentary layers formed by catastrophic paleofloods.',
        ru: 'Гигантская северная осадочная низменность. Место посадки марсохода «Чжужун» (Тяньвэнь-1), георадар которого обнаружил слои древних катастрофических наводнений.'
      },
    },
  };

  // Хранилище маркеров и слоев миссий
  const missionMarkers = {};
  const missionLayers = {};

  // DOM-иконка маркера посадочной площадки
  function pointIcon(color, isOutOfCoverage = false) {
    const extraClass = isOutOfCoverage ? ' mission-marker__dot--out-of-bounds' : '';
    const outTip = isOutOfCoverage ? (currentLang === 'ru' ? 'Вне зоны покрытия текущей карты' : 'Out of current basemap coverage') : '';
    return L.divIcon({
      className: 'mission-marker',
      html: `<span style="--marker:${color};" class="mission-marker__dot${extraClass}" title="${outTip}"></span>`,
      iconSize: [38, 38],
      iconAnchor: [19, 19],
    });
  }

  // Форматирование ареоцентрической долготы
  function formatLongitude(longitude) {
    const normalized = ((longitude + 180) % 360 + 360) % 360 - 180;
    return `${Math.abs(normalized).toFixed(4)}° ${normalized >= 0 ? 'E' : 'W'}`;
  }

  // Проверка видимости объекта в текущем слое
  function isMissionInCoverage(info, key) {
    const config = layerConfigs[key];
    const lat = info.coords[0];
    return lat >= config.minLat && lat <= config.maxLat;
  }

  // Шаблон всплывающего окна миссии
  function popup(info) {
    const [lat, lon] = info.coords;
    const inCoverage = isMissionInCoverage(info, activeKey);
    const coverageWarning = !inCoverage
      ? `<div class="popup-warning">${currentLang === 'ru' ? 'Внимание: район находится севернее границы ночной съемки NASA THEMIS (граница: 65° N).' : 'Warning: site is north of NASA THEMIS Night coverage boundary (limit: 65° N).'}</div>`
      : '';

    return `
      <div class="popup-box">
        <span class="popup-label" style="color:${info.color}">${currentLang === 'ru' ? 'Посадочная площадка' : 'Landing Site'}</span>
        <b class="popup-title">${t(info.crater)}</b>
        <span class="popup-mission">${t(info.name)} (${info.sol})</span>
        <span class="popup-coords">${Math.abs(lat).toFixed(4)}° ${lat >= 0 ? 'N' : 'S'}, ${formatLongitude(lon)}</span>
        <div class="detail-row" style="margin-top:6px; height:auto; padding:4px 0; border-top:1px solid var(--line); border-bottom:0;">
          <span style="font-size:10px; color:var(--text-muted)">${currentLang === 'ru' ? 'Высота:' : 'Elevation:'}</span>
          <b style="font-size:11px; color:var(--text)">${t(info.elevation)}</b>
        </div>
        ${coverageWarning}
      </div>
    `;
  }

  // Отображение координат центра карты
  function mapCoordinates(coords) {
    const coordEl = document.querySelector('#map-coordinates b');
    if (coordEl) {
      const coordsText = `${Math.abs(coords[0]).toFixed(2)}° ${coords[0] >= 0 ? 'N' : 'S'}, ${formatLongitude(coords[1])}`;
      // Высота центра карты по MOLA MEGDR
      coordEl.textContent = hasMola
        ? `${coordsText} · ${formatElev(molaElevation(coords[0], coords[1]), currentLang === 'ru')}`
        : coordsText;
    }
  }

  let lastFocusedObject = null;

  // Заполнение инфокарточки объекта
  function updateInfoCard(info) {
    if (!info) return;
    lastFocusedObject = info;
    const titleEl = document.querySelector('.selected-card h2');
    const kickerEl = document.querySelector('.selected-card .kicker');
    const descEl = document.querySelector('.selected-card__desc');
    const values = document.querySelectorAll('.coordinate-grid b');
    const captionEl = document.querySelector('.selected-card__image .image-caption');
    const elevationEl = document.querySelector('.detail-row:nth-of-type(1) b');
    const reliefEl = document.querySelector('.detail-row:nth-of-type(2) b');
    const irEl = document.querySelector('.detail-row:nth-of-type(3) b');

    if (kickerEl) {
      kickerEl.textContent = info.category
        ? (currentLang === 'ru' ? `Геологический объект • ${t(info.category)}` : `Geological Landmark • ${t(info.category)}`)
        : (currentLang === 'ru' ? 'Район посадки' : 'Landing Site');
    }

    const titleText = info.shortName || t(info.crater) || t(info.name);
    if (titleEl) titleEl.innerHTML = titleText.replace(' ', '<br>');

    const inCoverage = isMissionInCoverage(info, activeKey);

    if (descEl) {
      if (!inCoverage && activeKey === 'thermalNight') {
        const warnText = currentLang === 'ru'
          ? 'По официальным данным NASA Mars Trek, ночная ИК-съемка THEMIS ограничена широтами от 65° S до 65° N. Район находится за границей ночной мозаики.'
          : 'According to official NASA Mars Trek records, THEMIS Night IR is constrained to 65° S – 65° N. This site lies beyond nighttime coverage.';
        const btnText = currentLang === 'ru' ? 'Переключить на дневную съемку' : 'Switch to Daytime Thermal';
        descEl.innerHTML = `${t(info.desc)}<br><br><span class="coverage-alert">${warnText}</span><br><button class="switch-layer-btn" id="switch-to-day-btn">${btnText}</button>`;
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
      } else if (hiriseMosaics.some((m) => m.id === info.id)) {
        const btnText = currentLang === 'ru' ? '🔍 Приблизить к HiRISE (25 см/пикс)' : '🔍 Zoom to HiRISE (25cm/px)';
        descEl.innerHTML = `${t(info.desc)}<br><button type="button" class="btn-hirise-inspect" id="btn-inspect-hirise">${btnText}</button>`;
        const btnInspect = document.querySelector('#btn-inspect-hirise');
        if (btnInspect) {
          btnInspect.addEventListener('click', () => {
            map.flyTo(info.coords, 14, { duration: 1.5 });
          });
        }
      } else if (info.id === 'insight') {
        const btnText = currentLang === 'ru' ? '🔍 Приблизить к CTX (6 м/пикс)' : '🔍 Zoom to CTX (6m/px)';
        descEl.innerHTML = `${t(info.desc)}<br><button type="button" class="btn-hirise-inspect" id="btn-inspect-hirise">${btnText}</button>`;
        const btnInspect = document.querySelector('#btn-inspect-hirise');
        if (btnInspect) {
          btnInspect.addEventListener('click', () => {
            map.flyTo(info.coords, 13, { duration: 1.5 });
          });
        }
      } else {
        descEl.textContent = t(info.desc);
      }
    }
    if (values[0]) values[0].textContent = `${Math.abs(info.coords[0]).toFixed(4)}° ${info.coords[0] >= 0 ? 'N' : 'S'}`;
    if (values[1]) values[1].textContent = formatLongitude(info.coords[1]);

    if (captionEl) {
      captionEl.textContent = info.sol ? `${t(info.crater || info.name)} (${info.sol})` : t(info.name);
    }

    if (elevationEl) {
      elevationEl.textContent = t(info.elevation) || '—';
    }
    if (reliefEl) {
      reliefEl.textContent = t(info.dimensions) || (currentLang === 'ru' ? 'MOLA, 463 м/пикс' : 'MOLA, 1,519 ft/px');
    }
    if (irEl) {
      if (!inCoverage && activeKey === 'thermalNight') {
        irEl.textContent = currentLang === 'ru' ? 'Вне зоны съемки (NASA: до 65° N)' : 'Out of coverage (NASA limit: 65° N)';
      } else {
        irEl.textContent = t(layerConfigs[activeKey].irContext);
      }
    }
  }

  // Обновление доступности маркеров для текущего слоя
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
      const optionEl = document.querySelector(`.mission-option[data-mission="${id}"]`);
      if (optionEl) {
        const smallEl = optionEl.querySelector('small');
        if (smallEl) {
          if (!inCoverage && activeKey === 'thermalNight') {
            const outText = currentLang === 'ru' ? 'Вне покрытия (до 65° N)' : 'Out of coverage (limit: 65° N)';
            smallEl.innerHTML = `${info.name} (${info.sol}) <span class="mission-status-out">${outText}</span>`;
          } else {
            smallEl.textContent = `${info.name} (${info.sol})`;
          }
        }
      }
    });
  }

  // Подсветка активного пункта в меню
  function highlightSidebarItem(type, id) {
    document.querySelectorAll('.mission-option, .landmark-option').forEach((el) => {
      el.classList.remove('active');
    });
    const selector = type === 'mission'
      ? `.mission-option[data-mission="${id}"]`
      : `.landmark-option[data-landmark="${id}"]`;
    const target = document.querySelector(selector);
    if (target) {
      target.classList.add('active');
    }
  }

  // Фокусировка карты на миссии
  function focusMission(id) {
    const info = markerStyles[id];
    if (!info) return;

    // Ensure marker layer is visible on the map
    if (missionLayers[id] && !map.hasLayer(missionLayers[id])) {
      missionLayers[id].addTo(map);
    }

    // Средний масштаб (Regional/medium zoom: 5)
    const targetZoom = 5;
    const inCoverage = isMissionInCoverage(info, activeKey);
    if (!inCoverage && activeKey === 'thermalNight') {
      map.flyTo([65.0, info.coords[1]], targetZoom, { duration: 1.1 });
    } else {
      map.flyTo(info.coords, targetZoom, { duration: 1.1 });
    }

    mapCoordinates(info.coords);
    updateInfoCard(info);
    if (typeof updateWeatherView === 'function') {
      updateWeatherView(id);
    }
    if (missionMarkers[id]) {
      missionMarkers[id].openPopup();
    }
    showMissionTab();
    highlightSidebarItem('mission', id);
  }

  // Добавление маркеров миссий на карту
  Object.entries(markerStyles).forEach(([id, info]) => {
    info.id = id;
    const marker = L.marker(info.coords, { icon: pointIcon(info.color) })
      .bindPopup(popup(info))
      .on('click', (e) => {
        if (routeState && routeState.modeActive) {
          if (e && e.originalEvent) {
            L.DomEvent.stopPropagation(e);
          }
          lastSnapTime = Date.now();
          setTimeout(() => {
            marker.closePopup();
            map.closePopup();
          }, 0);
          const nameObj = {
            en: info.crater ? `${info.name} (${info.crater.en || info.crater})` : info.name,
            ru: info.crater ? `${info.name} (${info.crater.ru || info.crater})` : info.name,
          };
          handleRoutePointSelection(info.coords, nameObj);
          showSnapFeedback(nameObj, info.coords);
          return;
        }
        focusMission(id);
      });
    marker.on('popupopen', () => {
      if (routeState && routeState.modeActive) {
        marker.closePopup();
      }
    });
    missionMarkers[id] = marker;
    missionLayers[id] = L.layerGroup([marker]).addTo(map);
  });

  // Каталог геологических ориентиров Марса
  const landmarkData = {
    olympus: {
      id: 'olympus',
      name: { en: 'Olympus Mons', ru: 'Гора Олимп (Olympus Mons)' },
      shortName: 'Olympus Mons',
      type: { en: 'Shield volcano (largest in Solar System)', ru: 'Щитовой вулкан (крупнейший в Солнечной системе)' },
      category: { en: 'Volcano', ru: 'Вулкан' },
      coords: [18.65, -133.8],
      elevation: { en: '+69,649 ft (+13.19 mi above datum)', ru: '+21 229 м (над нулевым уровнем)' },
      dimensions: { en: 'Diameter 373 mi, caldera 50 mi', ru: 'Диаметр 600 км, кальдера 80 км' },
      color: '#a99bc9',
      iconText: '▲',
      desc: {
        en: 'Highest volcanic peak in the Solar System. Its colossal base is surrounded by sheer basal scarps up to 26,000 ft (5 miles) high.',
        ru: 'Высочайшая вулканическая гора в Солнечной системе. Ее колоссальное основание окружено отвесными базальными обрывами высотой до 8 км.'
      },
    },
    valles: {
      id: 'valles',
      name: { en: 'Valles Marineris', ru: 'Долины Маринер (Valles Marineris)' },
      shortName: 'Valles Marineris',
      type: { en: 'Tectonic rift canyon system', ru: 'Тектонический рифтовый каньон' },
      category: { en: 'Canyon', ru: 'Каньон' },
      coords: [-13.9, -59.2],
      elevation: { en: '-23,620 ft (-4.47 mi canyon floor)', ru: '-7 200 м (дно каньона Мелас)' },
      dimensions: { en: 'Length 2,500 mi, depth up to 32,800 ft (6.2 mi)', ru: 'Длина 4 000 км, глубина до 10 км' },
      color: '#cf8380',
      iconText: '▼',
      desc: {
        en: 'Gigantic canyon network spanning 2,500 miles (one-quarter of Mars). Ten times longer and five times deeper than Earth Grand Canyon.',
        ru: 'Гигантская система каньонов, протянувшаяся на четверть окружности Марса. В 10 раз длиннее и в 5 раз глубже земного Гранд-Каньона.'
      },
    },
    noctis: {
      id: 'noctis',
      name: { en: 'Noctis Labyrinthus', ru: 'Лабиринт Ночи (Noctis Labyrinthus)' },
      shortName: 'Noctis Labyrinthus',
      type: { en: 'Intersecting grabens and canyon valley network', ru: 'Сеть каньонов и грабенов' },
      category: { en: 'Canyon', ru: 'Каньон' },
      coords: [-7.0, -102.2],
      elevation: { en: '+10,500 ft / -11,500 ft', ru: '+3 200 м / -3 500 м' },
      dimensions: { en: 'Span approx 750 miles', ru: 'Протяженность около 1 200 км' },
      color: '#cf8380',
      iconText: '❖',
      desc: {
        en: 'Vast maze-like system of deep, steep-walled valleys formed by volcano-tectonic rifting between Tharsis and Valles Marineris.',
        ru: 'Впечатляющий лабиринт из глубоких ветвящихся каньонов и долин на стыке вулканической провинции Фарсида и Долин Маринер.'
      },
    },
    hellas: {
      id: 'hellas',
      name: { en: 'Hellas Planitia', ru: 'Равнина Эллада (Hellas Planitia)' },
      shortName: 'Hellas Planitia',
      type: { en: 'Giant impact basin', ru: 'Гигантский импактный бассейн' },
      category: { en: 'Basin', ru: 'Впадина' },
      coords: [-42.4, 70.5],
      elevation: { en: '-23,465 ft (-4.44 mi below datum)', ru: '-7 152 м (самая глубокая точка Марса)' },
      dimensions: { en: 'Basin diameter 1,430 miles', ru: 'Диаметр чаши 2 300 км' },
      color: '#87a9b2',
      iconText: '◌',
      desc: {
        en: 'Oldest and deepest surviving impact basin on Mars plunging 4.4 miles deep. Elevated atmospheric pressure frequently fosters morning frost and seasonal fogs.',
        ru: 'Древнейший и глубочайший ударный кратер Марса. Плотность атмосферы здесь выше, из-за чего на дне часто наблюдаются сезонные туманы.'
      },
    },
    cydonia: {
      id: 'cydonia',
      name: { en: 'Cydonia Mensae', ru: 'Кидония (Cydonia Mensae)' },
      shortName: 'Cydonia Mensae',
      type: { en: 'Eroded mesa formations', ru: 'Столовые горы (мезы)' },
      category: { en: 'Mesa', ru: 'Меза' },
      coords: [40.75, -9.46],
      elevation: { en: '-6,890 ft (mesa base)', ru: '-2 100 м (у подножия холмов)' },
      dimensions: { en: 'Mesa region approx 500 miles', ru: 'Область столовых гор ~800 км' },
      color: '#d6c083',
      iconText: '◈',
      desc: {
        en: 'Prominent transition zone between southern highlands and northern plains, celebrated for the historical 1976 Viking 1 optical illusion.',
        ru: 'Район останцовых возвышенностей на равнине Ацидалия. Снимок аппарата «Викинг-1» в 1976 году создал известную оптическую иллюзию «Лица на Марсе».'
      },
    },
    korolev: {
      id: 'korolev',
      name: { en: 'Korolev Crater', ru: 'Кратер Королёв (Korolev Crater)' },
      shortName: 'Korolev Crater',
      type: { en: 'Glaciated impact crater', ru: 'Ледниковый ударный кратер' },
      category: { en: 'Crater', ru: 'Кратер' },
      coords: [73.0, 164.5],
      elevation: { en: '-12,467 ft (ice dome summit)', ru: '-3 800 м (вершина ледяного купола)' },
      dimensions: { en: 'Diameter 50.6 mi, ice thickness 5,900 ft (1.1 mi)', ru: 'Диаметр 81,4 км, толщина льда 1,8 км' },
      color: '#a3c9cf',
      iconText: '❄',
      desc: {
        en: 'High-latitude polar impact crater filled by an eternal 5,900 ft (1.1 mi) thick reservoir of 528 cubic miles (2,200 km³) of pristine water ice.',
        ru: 'Приполярный ударный кратер, заполненный постоянным куполом чистого водяного льда объемом 2 200 км³.'
      },
    },
    alba: {
      id: 'alba',
      name: { en: 'Alba Mons', ru: 'Гора Белая (Alba Mons)' },
      shortName: 'Alba Mons',
      type: { en: 'Low-profile volcanic construct', ru: 'Низкопрофильный вулкан-гигант' },
      category: { en: 'Volcano', ru: 'Вулкан' },
      coords: [40.5, -109.9],
      elevation: { en: '+22,310 ft (+4.23 mi caldera)', ru: '+6 800 м (кальдера)' },
      dimensions: { en: 'Diameter over 620 miles', ru: 'Диаметр свыше 1 000 км' },
      color: '#a99bc9',
      iconText: '▲',
      desc: {
        en: 'Unique low-relief shield volcano with a diameter exceeding 620 miles, having the largest surface area footprint of any volcanic edifice in the Solar System.',
        ru: 'Уникальный пологий щитовой вулкан с колоссальной площадью основания, сопоставимой по территории с США.'
      },
    },
  };

  // Шаблон всплывающего окна ориентира
  function landmarkPopup(info) {
    const [lat, lon] = info.coords;
    return `
      <div class="popup-box">
        <span class="popup-label" style="color:${info.color}">${t(info.category)}</span>
        <b class="popup-title">${t(info.name)}</b>
        <span class="popup-mission" style="color:var(--text-muted)">${t(info.type)}</span>
        <span class="popup-coords">${Math.abs(lat).toFixed(4)}° ${lat >= 0 ? 'N' : 'S'}, ${formatLongitude(lon)}</span>
        <div class="detail-row" style="margin-top:6px; height:auto; padding:4px 0; border-top:1px solid var(--line); border-bottom:0;">
          <span style="font-size:10px; color:var(--text-muted)">${currentLang === 'ru' ? 'Высота:' : 'Elevation:'}</span>
          <b style="font-size:11px; color:var(--text)">${t(info.elevation)}</b>
        </div>
        <div class="detail-row" style="height:auto; padding:2px 0 4px 0; border-bottom:0;">
          <span style="font-size:10px; color:var(--text-muted)">${currentLang === 'ru' ? 'Размеры:' : 'Dimensions:'}</span>
          <b style="font-size:11px; color:var(--text)">${t(info.dimensions)}</b>
        </div>
      </div>
    `;
  }

  // DOM-иконка маркера ориентира
  function landmarkIcon(info) {
    return L.divIcon({
      className: 'landmark-marker',
      html: `<div class="landmark-marker__icon" style="--lm-color:${info.color};" title="${t(info.name)}">${info.iconText}</div>`,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
    });
  }

  const landmarkMarkers = {};
  const landmarkLayers = {};

  // Фокусировка карты на ориентире
  function focusLandmark(id) {
    const info = landmarkData[id];
    if (!info) return;

    // Ensure marker layer is visible on the map
    if (landmarkLayers[id] && !map.hasLayer(landmarkLayers[id])) {
      landmarkLayers[id].addTo(map);
    }

    // Средний масштаб (Regional/medium zoom: 4 для гигантских формаций, 5 для остальных)
    const targetZoom = (id === 'olympus' || id === 'valles' || id === 'hellas') ? 4 : 5;
    map.flyTo(info.coords, targetZoom, { duration: 1.1 });

    mapCoordinates(info.coords);
    updateInfoCard(info);
    if (typeof updateWeatherView === 'function') {
      updateWeatherView(id);
    }
    if (landmarkMarkers[id]) {
      landmarkMarkers[id].openPopup();
    }
    showMissionTab();
    highlightSidebarItem('landmark', id);
  }

  // Добавление маркеров ориентиров на карту
  Object.entries(landmarkData).forEach(([id, info]) => {
    const marker = L.marker(info.coords, { icon: landmarkIcon(info) })
      .bindPopup(landmarkPopup(info))
      .on('click', (e) => {
        if (routeState && routeState.modeActive) {
          if (e && e.originalEvent) {
            L.DomEvent.stopPropagation(e);
          }
          lastSnapTime = Date.now();
          setTimeout(() => {
            marker.closePopup();
            map.closePopup();
          }, 0);
          handleRoutePointSelection(info.coords, info.name);
          showSnapFeedback(info.name, info.coords);
          return;
        }
        focusLandmark(id);
      });
    marker.on('popupopen', () => {
      if (routeState && routeState.modeActive) {
        marker.closePopup();
      }
    });
    landmarkMarkers[id] = marker;
    landmarkLayers[id] = L.layerGroup([marker]).addTo(map);
  });

  // Обработчики кликов по ориентирам в меню
  document.querySelectorAll('.landmark-option').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-landmark');
      if (id) {
        focusLandmark(id);
      }
    });
  });

  // Переключение базовых слоев карты
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

      if (input.value === 'ctx') {
        const center = map.getCenter();
        const distToJezero = map.distance(center, jezero);
        if (distToJezero > 1500000) {
          map.flyTo(jezero, 11, { duration: 1.5 });
        }
      }

      const loadPrefix = currentLang === 'ru' ? 'Загрузка:' : 'Loading:';
      loader.textContent = `${loadPrefix} ${t(targetConfig.name)}...`;
      loader.classList.remove('hidden');
      status.textContent = `${loadPrefix} ${t(targetConfig.name)}`;

      const attribution = document.querySelector('#map-attribution');
      if (attribution) {
        attribution.textContent = `${currentLang === 'ru' ? 'Слой:' : 'Layer:'} NASA ${t(targetConfig.name)}`;
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

  // Обработчики кликов по миссиям в меню
  document.querySelectorAll('.mission-option').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-mission');
      if (id) {
        focusMission(id);
      }
    });
  });

  // Кнопки масштабирования и сброса вида
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

  // =========================================================================
  // Fullscreen Map Controller (F, F11, Button)
  // =========================================================================

  const mapStage = document.querySelector('.map-stage');
  const fullscreenBtn = document.querySelector('#btn-toggle-fullscreen');

  // Проверка полноэкранного режима
  function isMapFullscreen() {
    return Boolean(
      document.fullscreenElement ||
      (mapStage && mapStage.classList.contains('is-fullscreen'))
    );
  }

  // Обновление кнопки полного экрана
  function updateFullscreenUI(active) {
    if (fullscreenBtn) {
      fullscreenBtn.classList.toggle('active', active);
      fullscreenBtn.textContent = active ? '⤓' : '⛶';
      const isRu = currentLang === 'ru';
      fullscreenBtn.setAttribute(
        'title',
        isRu
          ? (active ? 'Выйти из полноэкранного режима (F, F11 или Esc)' : 'Полноэкранный режим (F или F11)')
          : (active ? 'Exit fullscreen mode (F, F11 or Esc)' : 'Fullscreen mode (F or F11)')
      );
    }
  }

  // Пересчет размеров контейнера карты
  function invalidateMap() {
    setTimeout(() => map.invalidateSize(), 50);
    setTimeout(() => map.invalidateSize(), 200);
  }

  // Вход в полноэкранный режим
  function enterFullscreen() {
    if (!mapStage) return;
    if (mapStage.requestFullscreen) {
      mapStage.requestFullscreen().catch(() => {
        mapStage.classList.add('is-fullscreen');
        updateFullscreenUI(true);
        invalidateMap();
      });
    } else {
      mapStage.classList.add('is-fullscreen');
      updateFullscreenUI(true);
      invalidateMap();
    }
  }

  // Выход из полноэкранного режима
  function exitFullscreen() {
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
    if (mapStage) {
      mapStage.classList.remove('is-fullscreen');
    }
    updateFullscreenUI(false);
    invalidateMap();
  }

  // Переключение полноэкранного режима
  function toggleFullscreen() {
    if (isMapFullscreen()) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  }

  if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', toggleFullscreen);
  }

  // Слушатель системного изменения режима экрана
  document.addEventListener('fullscreenchange', () => {
    const isFs = Boolean(document.fullscreenElement);
    if (mapStage) {
      mapStage.classList.toggle('is-fullscreen', isFs);
    }
    updateFullscreenUI(isFs);
    invalidateMap();
  });

  map.on('move', () => mapCoordinates([map.getCenter().lat, map.getCenter().lng]));
  map.on('zoomend', () => {
    updateZoomReadout();
  });

  // Поиск по названию или координатам
  const search = document.querySelector('#coordinate-search');
  if (search) {
    search.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter') return;
      const query = search.value.trim().toLowerCase();

      // Check landing sites
      const missionMatch = Object.entries(markerStyles).find(([, item]) => {
        const nameMatch = (item.name || '').toLowerCase().includes(query);
        const craterMatch = typeof item.crater === 'object'
          ? ((item.crater.en || '').toLowerCase().includes(query) || (item.crater.ru || '').toLowerCase().includes(query))
          : (item.crater || '').toLowerCase().includes(query);
        return nameMatch || craterMatch;
      });

      if (missionMatch) {
        const [id] = missionMatch;
        focusMission(id);
        return;
      }

      // Check landmarks catalog
      const landmarkMatch = Object.entries(landmarkData).find(([, item]) => {
        const nameMatch = typeof item.name === 'object'
          ? ((item.name.en || '').toLowerCase().includes(query) || (item.name.ru || '').toLowerCase().includes(query))
          : (item.name || '').toLowerCase().includes(query);
        const shortNameMatch = (item.shortName || '').toLowerCase().includes(query);
        const typeMatch = typeof item.type === 'object'
          ? ((item.type.en || '').toLowerCase().includes(query) || (item.type.ru || '').toLowerCase().includes(query))
          : (item.type || '').toLowerCase().includes(query);
        const catMatch = typeof item.category === 'object'
          ? ((item.category.en || '').toLowerCase().includes(query) || (item.category.ru || '').toLowerCase().includes(query))
          : (item.category || '').toLowerCase().includes(query);
        return nameMatch || shortNameMatch || typeMatch || catMatch;
      });

      if (landmarkMatch) {
        const [id] = landmarkMatch;
        focusLandmark(id);
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

  // Контроллер инструмента сравнения «Шторка»
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
      ctx: 'dot-ctx',
    };

    // Индикатор цвета выбранного слоя
    function updateDot(dotEl, key) {
      if (!dotEl) return;
      dotEl.className = 'swipe-badge__dot ' + (dotClasses[key] || 'dot-color');
    }

    // Создание тайлового слоя для шторки
    function createSwipeTileLayer(key) {
      if (key === 'color') {
        return nasaTiles('Mars_Viking_MDIM21_ClrMosaic_global_232m', 'jpg', {
          bounds: globalBounds,
          maxNativeZoom: 7,
          maxZoom: 14,
        });
      }
      if (key === 'relief') {
        return nasaTiles('Mars_MGS_MOLA_ClrShade_merge_global_463m', 'jpg', {
          bounds: globalBounds,
          maxNativeZoom: 7,
          maxZoom: 14,
        });
      }
      if (key === 'thermalDay') {
        return nasaTiles('Mars_MO_THEMIS-IR-Day_mosaic_global_100m_v12_clon0_ly', 'png', {
          className: 'themis-layer',
          bounds: globalBounds,
          maxNativeZoom: 8,
          maxZoom: 14,
        });
      }
      if (key === 'thermalNight') {
        return nasaTiles('THEMIS_NightIR_ControlledMosaics_100m_v2_oct2018', 'png', {
          className: 'themis-layer',
          bounds: nightBounds,
          maxNativeZoom: 9,
          maxZoom: 14,
        });
      }
      if (key === 'ctx') {
        return nasaTiles('Mars_Viking_MDIM21_ClrMosaic_global_232m', 'jpg', {
          bounds: globalBounds,
          maxNativeZoom: 7,
          maxZoom: 14,
        });
      }
      return null;
    }

    // Обрезка слоев по положению разделителя
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

    // Установка левого слоя сравнения
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

    // Установка правого слоя сравнения
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

    // Включение режима шторки
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

    // Выключение режима шторки
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

    // Переключение режима шторки
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

    // Расчет горизонтальной координаты указателя
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

    // Начало перетаскивания шторки
    function onPointerDown(e) {
      if (!isSwipeActive) return;
      isDragging = true;
      if (map.dragging) map.dragging.disable();
      const x = getPointerX(e);
      updateClip(x);
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
    }

    // Перемещение разделителя шторки
    function onPointerMove(e) {
      if (!isDragging || !isSwipeActive) return;
      const x = getPointerX(e);
      updateClip(x);
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
    }

    // Окончание перетаскивания шторки
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

  // =========================================================================
  // Official NASA / IAU Planetary Constants & Physics Engine
  // =========================================================================

  // Физические константы Марса
  const MARS_CONSTANTS = {
    R_MEAN_KM: 3389.50,            // IAU mean volumetric radius
    R_EQUATOR_KM: 3396.19,         // IAU equatorial radius (a)
    R_POLAR_KM: 3376.20,           // IAU polar radius (b)
    FLATTENING: 0.005886,          // Flattening f = (a - b) / a (1 / 169.81)
    G_EARTH: 9.80665,              // Standard terrestrial gravity (m/s^2)
    G_MARS_MEAN: 3.72076,          // Mean surface gravity (m/s^2, 0.37943 g_Earth)
    G_MARS_EQ: 3.7112,             // Equatorial surface gravity (m/s^2)
    G_MARS_POLAR: 3.7580,          // Polar surface gravity (m/s^2)
    FREE_AIR_GRADIENT: -0.002195,  // Free-air gravity elevation lapse rate (m/s^2 per km)
    R_SPEC: 191.843,               // Specific gas constant for 95.32% CO2 (J/(kg*K))
    GAMMA_CO2: 1.29,               // Adiabatic heat capacity ratio Cp/Cv at 215 K
    SOLAR_CONSTANT: 586.2,         // Top-of-atmosphere solar flux at 1.524 AU (W/m^2)
    C_LIGHT: 299792.458,           // Speed of light in vacuum (km/s)
    AU_KM: 149597870.7,            // km per Astronomical Unit
    D_EARTH_MEAN_AU: 1.506,        // Mean Earth-Mars orbital distance (AU)
    ROVER_ROBOTIC_SPEED_KMSOL: 0.35, // Nominal autonomous exploration drive (km/sol, ~140 m/h)
    ROVER_CREW_SPEED_KMSOL: 25.0,    // Nominal pressurized crew rover drive (km/sol, ~8-10 km/h)
    ROVER_ROBOTIC_MASS: 1025,        // kg (Perseverance / Curiosity class)
    ROVER_CREW_MASS: 3000,           // kg (NASA Space Exploration Vehicle crew rover)
    CRR_REGOLITH: 0.05,              // Rolling resistance coefficient on basaltic sandy regolith
    DRIVETRAIN_EFFICIENCY: 0.85,     // Electrical-to-mechanical traction efficiency
    SPACESUIT_MASS_KG: 130,          // NASA xEMU planetary exploration suit + PLSS life support
  };

  const MARS_RADIUS_KM = MARS_CONSTANTS.R_MEAN_KM;

  // Расчет локальной гравитации
  function calcLocalGravity(latDeg, elevMeters) {
    const phi = (latDeg * Math.PI) / 180;
    const gLat = MARS_CONSTANTS.G_MARS_EQ + (MARS_CONSTANTS.G_MARS_POLAR - MARS_CONSTANTS.G_MARS_EQ) * (Math.sin(phi) ** 2);
    const elevKm = elevMeters / 1000.0;
    return gLat + MARS_CONSTANTS.FREE_AIR_GRADIENT * elevKm;
  }

  // Расчет плотности атмосферы
  function calcAirDensity(pPa, tempC) {
    const tempK = tempC + 273.15;
    return (pPa / (MARS_CONSTANTS.R_SPEC * tempK)) * 1000.0; // g/m^3
  }

  // Расчет скорости звука
  function calcSpeedOfSound(tempC) {
    const tempK = tempC + 273.15;
    return Math.sqrt(MARS_CONSTANTS.GAMMA_CO2 * MARS_CONSTANTS.R_SPEC * tempK); // m/s
  }

  // Расчет точки кипения воды
  function calcWaterBoilingPoint(pPa) {
    if (pPa < 611.65) return null; // Sublimation regime (< 6.12 hPa triple point)
    const lnP = Math.log(pPa / 611.65);
    return (237.3 * lnP) / (17.27 - lnP); // deg C
  }

  // Расчет начального азимута
  function calcInitialBearing(p1, p2) {
    const toRad = Math.PI / 180;
    const lat1 = p1[0] * toRad, lat2 = p2[0] * toRad;
    const dLon = ((p2[1] - p1[1] + 540) % 360 - 180) * toRad;
    const y = Math.sin(dLon) * Math.cos(lat2);
    const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
    const bRad = Math.atan2(y, x);
    return (bRad * (180 / Math.PI) + 360) % 360;
  }

  // Форматирование азимута по сторонам света
  function formatBearingCompass(deg) {
    const cardinals = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    const idx = Math.round(deg / 22.5) % 16;
    return `${deg.toFixed(1)}° (${cardinals[idx]})`;
  }

  // Расчет расстояния на сфере Марса
  function haversineMars(p1, p2) {
    const toRad = Math.PI / 180;
    const dLat = (p2[0] - p1[0]) * toRad;
    const dLon = (p2[1] - p1[1]) * toRad;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(p1[0] * toRad) * Math.cos(p2[0] * toRad) * Math.sin(dLon / 2) ** 2;
    return MARS_RADIUS_KM * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  // Упрощенное форматирование координат
  function formatCoordSimple(coord, isLat) {
    const val = Math.abs(coord).toFixed(2);
    if (isLat) return `${val}° ${coord >= 0 ? 'N' : 'S'}`;
    const normalized = ((coord + 180) % 360 + 360) % 360 - 180;
    return `${Math.abs(normalized).toFixed(2)}° ${normalized >= 0 ? 'E' : 'W'}`;
  }

  // Каталог опасных геологических зон рельефа
  const martianHazards = [
    {
      id: 'valles-marineris',
      name: { en: 'Valles Marineris Chasm', ru: 'Каньон Долины Маринер (Valles Marineris)' },
      desc: {
        en: 'Colossal rift canyon up to 32,800 ft (10 km) deep with near-vertical cliff walls. Unnavigable by wheeled rovers.',
        ru: 'Грандиозная система каньонов глубиной до 10 км с отвесными стенами. Преодоление колесным шасси невозможно.'
      },
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
      name: { en: 'Olympus Mons Basal Scarp', ru: 'Базальный уступ горы Олимп (Olympus Mons Scarp)' },
      desc: {
        en: 'Vertical cliff scarps rising 20,000–26,000 ft (6–8 km) encircling the base of the Solar System\'s tallest volcano.',
        ru: 'Вертикальные обрывы высотой 6-8 км, окружающие подножие крупнейшего вулкана Солнечной системы.'
      },
      type: 'circle',
      center: [18.65, -133.8],
      radiusDeg: 6.8, // ~400 km radius
      bufferKm: 120,
    },
    {
      id: 'arsia-mons',
      name: { en: 'Arsia Mons Caldera Scarp', ru: 'Гора Арсия (Arsia Mons Caldera)' },
      desc: {
        en: 'Volcanic shield caldera with extreme slopes exceeding 25° and rugged collapsed lava tubes.',
        ru: 'Вулканический щит с экстремальными углами наклона (>25°) и лавовыми провалами.'
      },
      type: 'circle',
      center: [-9.0, -120.5],
      radiusDeg: 4.2,
      bufferKm: 100,
    },
    {
      id: 'pavonis-mons',
      name: { en: 'Pavonis Mons Shield', ru: 'Гора Павлина (Pavonis Mons)' },
      desc: {
        en: 'Central Tharsis shield volcano with treacherous nested caldera scarps and hazardous fissure swarms.',
        ru: 'Центральный щитовой вулкан провинции Фарсида. Крутые уступы кальдеры.'
      },
      type: 'circle',
      center: [0.8, -113.0],
      radiusDeg: 3.8,
      bufferKm: 90,
    },
    {
      id: 'ascraeus-mons',
      name: { en: 'Ascraeus Mons Edifice', ru: 'Гора Аскрийская (Ascraeus Mons)' },
      desc: {
        en: 'Volcanic mountain reaching 59,000 ft (18 km) elevation with treacherous chaotic block fields.',
        ru: 'Вулкан высотой 18 км с хаотическим лавовым рельефом.'
      },
      type: 'circle',
      center: [11.8, -104.5],
      radiusDeg: 4.2,
      bufferKm: 90,
    },
    {
      id: 'elysium-mons',
      name: { en: 'Elysium Mons Caldera', ru: 'Купол Элизий (Elysium Mons)' },
      desc: {
        en: 'Volcanic dome featuring steep volcanic flanks and radiating graben systems.',
        ru: 'Вулканическая кальдера с радиальными грабенами и крутыми склонами.'
      },
      type: 'circle',
      center: [25.0, 147.2],
      radiusDeg: 4.0,
      bufferKm: 90,
    },
    {
      id: 'hellas-scarps',
      name: { en: 'Hellas Basin Northern Rim', ru: 'Северный вал равнины Эллада (Hellas Basin Rim)' },
      desc: {
        en: 'Superdeep impact basin plunging to -23,465 ft (-7.2 km) with loose scree fields and ferocious regional dust storms.',
        ru: 'Сверхглубокая импактная впадина (-7.2 км) с опасными осыпями и сильными пылевыми бурями.'
      },
      type: 'circle',
      center: [-33.0, 68.0],
      radiusDeg: 7.5,
      bufferKm: 110,
    },
  ];

  // Проверка попадания точки в полигон (Ray casting)
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

  // Названия полярных зон (общие ссылки, чтобы корректно работала дедупликация)
  const POLAR_NORTH_HAZARD = { en: 'North Polar Ice Cap (Extreme cold)', ru: 'Северная полярная ледяная шапка (критические температуры)' };
  const POLAR_SOUTH_HAZARD = { en: 'South Polar Cap (Dry ice CO₂)', ru: 'Южная полярная шапка (сухой углекислотный лед)' };
  const POLAR_NORTH_LIMIT = 78;
  const POLAR_SOUTH_LIMIT = -76;
  const KM_PER_DEG = (Math.PI * MARS_RADIUS_KM) / 180;

  // Расстояние от точки до отрезка a-b в км (локальная равнопромежуточная проекция)
  function distToSegmentKm(pt, a, b) {
    const cosLat = Math.cos((pt[0] * Math.PI) / 180);
    const ax = (((a[1] - pt[1] + 540) % 360) - 180) * cosLat * KM_PER_DEG;
    const ay = (a[0] - pt[0]) * KM_PER_DEG;
    const bx = (((b[1] - pt[1] + 540) % 360) - 180) * cosLat * KM_PER_DEG;
    const by = (b[0] - pt[0]) * KM_PER_DEG;
    const dx = bx - ax;
    const dy = by - ay;
    const len2 = dx * dx + dy * dy;
    const k = len2 > 0 ? Math.max(0, Math.min(1, -(ax * dx + ay * dy) / len2)) : 0;
    return Math.hypot(ax + k * dx, ay + k * dy);
  }

  // Запас до границы зоны риска в км (отрицательный — точка внутри зоны)
  function hazardClearanceKm(pt, h) {
    if (h.type === 'circle') {
      return haversineMars(pt, h.center) - h.radiusDeg * KM_PER_DEG;
    }
    let minDist = Infinity;
    for (let i = 0, j = h.polygon.length - 1; i < h.polygon.length; j = i++) {
      const d = distToSegmentKm(pt, h.polygon[j], h.polygon[i]);
      if (d < minDist) minDist = d;
    }
    return pointInPolygon(pt, h.polygon) ? -minDist : minDist;
  }

  // Оценка штрафа за пересечение зон риска
  function getHazardCost(pt) {
    let penalty = 0;
    let clearanceKm = Infinity;
    const hitHazards = [];

    // Полярные шапки
    const northClearance = (POLAR_NORTH_LIMIT - pt[0]) * KM_PER_DEG;
    const southClearance = (pt[0] - POLAR_SOUTH_LIMIT) * KM_PER_DEG;
    clearanceKm = Math.min(northClearance, southClearance);
    if (northClearance < 0) {
      penalty += 80000;
      hitHazards.push(POLAR_NORTH_HAZARD);
    } else if (southClearance < 0) {
      penalty += 80000;
      hitHazards.push(POLAR_SOUTH_HAZARD);
    }

    for (const h of martianHazards) {
      const c = hazardClearanceKm(pt, h);
      if (c < clearanceKm) clearanceKm = c;
      if (c <= 0) {
        penalty += 100000;
        hitHazards.push(h.name);
      } else if (c < h.bufferKm) {
        penalty += (1 - c / h.bufferKm) * 450;
      }
    }

    return { penalty, hitHazards, clearanceKm };
  }

  // Очередь с приоритетом для алгоритма A*
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

  // Разность долгот с учетом знака
  function diffLon(lon1, lon2) {
    return ((lon2 - lon1 + 540) % 360) - 180;
  }

  // Нормализация долготы [-180, 180]
  function normLon(lon) {
    return ((lon + 180) % 360 + 360) % 360 - 180;
  }

  // Разделение полилинии по антимеридиану
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

  // Интерполяция дуги большого круга
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

  // Сглаживание траектории (алгоритм Чайкина)
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

  // Рельеф MOLA в стоимости пути. Региональный уклон (база ~30 км): медиана по планете
  // ~0.3°, 95-й процентиль ~2°, 99-й ~4°; стены Долин Маринер — 9–12°.
  const STEEP_SLOPE_DEG = 4;
  const terrainCostFactor = (slopeDeg) => Math.min(8, (slopeDeg / 2.5) ** 2);

  // Проверка, что дуга большого круга a-b не заходит в зоны риска и на крутой рельеф
  function isArcClear(a, b, allowPenalty) {
    const km = haversineMars(a, b);
    const samples = interpolateGreatCircle(a, b, Math.max(2, Math.min(80, Math.ceil(km / 30))));
    // Спрямление не должно срезать путь через рельеф круче, чем на концах отрезка
    const slopeLimit = Math.max(STEEP_SLOPE_DEG, molaSlopeDeg(a[0], a[1]), molaSlopeDeg(b[0], b[1]));
    for (const p of samples) {
      if (molaSlopeDeg(p[0], p[1]) > slopeLimit) return false;
      if (getHazardCost(p).penalty > allowPenalty) return false;
    }
    return true;
  }

  // Спрямление сеточного пути: убирает «лесенку», оставляя только нужные повороты
  function pullPath(points) {
    if (points.length <= 2) return points;
    const LOOKAHEAD = 40;
    const ALLOW_PENALTY = 60;
    const out = [points[0]];
    let i = 0;
    while (i < points.length - 1) {
      let next = i + 1;
      for (let j = Math.min(points.length - 1, i + LOOKAHEAD); j > i + 1; j--) {
        if (isArcClear(points[i], points[j], ALLOW_PENALTY)) {
          next = j;
          break;
        }
      }
      out.push(points[next]);
      i = next;
    }
    return out;
  }

  // Уплотнение пути точками вдоль дуг большого круга
  function densifyPath(points, spacingKm = 80) {
    if (points.length <= 1) return points;
    const out = [points[0]];
    for (let i = 0; i < points.length - 1; i++) {
      const km = haversineMars(points[i], points[i + 1]);
      const arc = interpolateGreatCircle(points[i], points[i + 1], Math.max(1, Math.ceil(km / spacingKm)));
      for (let k = 1; k < arc.length; k++) out.push(arc[k]);
    }
    return out;
  }

  // Поиск безопасного участка маршрута SafeNav (алгоритм A* по сетке + спрямление)
  function findSafeRoverPath(start, goal) {
    const directKm = haversineMars(start, goal);
    const directPoints = interpolateGreatCircle(start, goal, Math.max(35, Math.ceil(directKm / 60)));
    const hazardsDirectHits = new Set();
    for (const pt of directPoints) {
      getHazardCost(pt).hitHazards.forEach((h) => hazardsDirectHits.add(h));
    }

    const dLonUnwrapped = diffLon(start[1], goal[1]);
    const goalLonCont = start[1] + dLonUnwrapped;

    const latSpan = Math.abs(goal[0] - start[0]);
    const lonSpan = Math.abs(dLonUnwrapped);

    const padLat = Math.max(16, latSpan * 0.45);
    const padLon = Math.max(18, lonSpan * 0.45);

    const minLat = Math.max(POLAR_SOUTH_LIMIT, Math.min(start[0], goal[0]) - padLat);
    const maxLat = Math.min(POLAR_NORTH_LIMIT, Math.max(start[0], goal[0]) + padLat);
    const minLon = Math.min(start[1], goalLonCont) - padLon;
    const maxLon = Math.max(start[1], goalLonCont) + padLon;

    const maxSpan = Math.max(maxLat - minLat, maxLon - minLon);
    const step = Math.max(0.7, Math.min(1.8, maxSpan / 36));

    const rows = Math.max(1, Math.round((maxLat - minLat) / step));
    const cols = Math.max(1, Math.round((maxLon - minLon) / step));
    const width = cols + 1;
    const size = (rows + 1) * width;

    const getCoord = (idx) => [
      minLat + Math.floor(idx / width) * step,
      normLon(minLon + (idx % width) * step),
    ];
    const getCell = (lat, lonCont) => {
      const r = Math.max(0, Math.min(rows, Math.round((lat - minLat) / step)));
      const c = Math.max(0, Math.min(cols, Math.round((lonCont - minLon) / step)));
      return r * width + c;
    };

    const startIdx = getCell(start[0], start[1]);
    const goalIdx = getCell(goal[0], goalLonCont);

    const gScore = new Float64Array(size).fill(Infinity);
    const cameFrom = new Int32Array(size).fill(-1);
    const closed = new Uint8Array(size);
    const penaltyCache = new Float32Array(size).fill(-1);
    const elevCache = new Float32Array(size).fill(NaN);

    const cellPenalty = (idx, pt) => {
      if (penaltyCache[idx] < 0) penaltyCache[idx] = getHazardCost(pt).penalty;
      return penaltyCache[idx];
    };
    const terrainCache = new Float32Array(size).fill(-1);
    const cellElev = (idx, pt) => {
      if (Number.isNaN(elevCache[idx])) elevCache[idx] = molaElevation(pt[0], pt[1]);
      return elevCache[idx];
    };
    // Крутизна рельефа MOLA в пределах ячейки сетки
    const cellTerrain = (idx, pt) => {
      if (terrainCache[idx] < 0) terrainCache[idx] = terrainCostFactor(molaAreaSlopeDeg(pt, step / 3));
      return terrainCache[idx];
    };

    const openSet = new PriorityQueue();
    gScore[startIdx] = 0;
    openSet.push({ idx: startIdx, f: haversineMars(getCoord(startIdx), goal) });

    const dirs = [
      [-1, 0], [1, 0], [0, -1], [0, 1],
      [-1, -1], [-1, 1], [1, -1], [1, 1],
    ];

    let reached = false;
    let closestIdx = startIdx;
    let closestDist = Infinity;

    while (!openSet.isEmpty()) {
      const current = openSet.pop();
      const idx = current.idx;
      if (closed[idx]) continue;
      closed[idx] = 1;

      const pt = getCoord(idx);
      const distToGoal = haversineMars(pt, goal);
      if (distToGoal < closestDist) {
        closestDist = distToGoal;
        closestIdx = idx;
      }
      if (idx === goalIdx) {
        reached = true;
        break;
      }

      const r = Math.floor(idx / width);
      const c = idx % width;
      const currG = gScore[idx];
      const currElev = cellElev(idx, pt);

      for (const [dr, dc] of dirs) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr < 0 || nr > rows || nc < 0 || nc > cols) continue;
        const nIdx = nr * width + nc;
        if (closed[nIdx]) continue;

        const nPt = getCoord(nIdx);
        const dist = haversineMars(pt, nPt);
        if (dist < 1e-6) continue;

        // Стоимость: длина × (зоны риска + крутизна рельефа MOLA + перепад высот по ходу)
        const grade = Math.abs(cellElev(nIdx, nPt) - currElev) / (dist * 1000);
        const tentG = currG + dist * (1 + cellPenalty(nIdx, nPt) / 50 + cellTerrain(nIdx, nPt) + Math.min(2, grade * 20));

        if (tentG < gScore[nIdx]) {
          gScore[nIdx] = tentG;
          cameFrom[nIdx] = idx;
          openSet.push({ idx: nIdx, f: tentG + haversineMars(nPt, goal) });
        }
      }
    }

    // Восстановление пути по сетке
    const cells = [];
    for (let cur = reached ? goalIdx : closestIdx; cur !== -1; cur = cameFrom[cur]) {
      cells.push(getCoord(cur));
    }
    cells.reverse();

    // Крайние ячейки заменяются точными координатами старта и финиша
    const inner = reached ? cells.slice(1, -1) : cells.slice(1);
    const rawPath = [start, ...inner, goal];

    const smoothedPath = smoothPath(densifyPath(pullPath(rawPath), 80), 2);

    // Итоговая статистика вдоль траектории
    let totalSafeKm = 0;
    let coreKm = 0;
    let bufferKm = 0;
    let minHazardClearance = Infinity;
    const hazardsCrossed = new Set();
    for (let i = 0; i < smoothedPath.length - 1; i++) {
      const a = smoothedPath[i];
      const b = smoothedPath[i + 1];
      const seg = haversineMars(a, b);
      totalSafeKm += seg;
      const mid = [(a[0] + b[0]) / 2, normLon(a[1] + diffLon(a[1], b[1]) / 2)];
      const cost = getHazardCost(mid);
      if (cost.hitHazards.length > 0) {
        coreKm += seg;
        cost.hitHazards.forEach((h) => hazardsCrossed.add(h));
      } else if (cost.penalty > 0) {
        bufferKm += seg;
      }
      if (cost.clearanceKm < minHazardClearance) minHazardClearance = cost.clearanceKm;
    }

    return {
      safePath: smoothedPath,
      directPath: directPoints,
      safeDistanceKm: totalSafeKm,
      directDistanceKm: directKm,
      hazardsAvoided: Array.from(hazardsDirectHits).filter((h) => !hazardsCrossed.has(h)),
      hazardsCrossed: Array.from(hazardsCrossed),
      minHazardClearanceKm: Math.max(0, Math.round(minHazardClearance)),
      coreKm,
      bufferKm,
    };
  }

  // Кэш рассчитанных участков: перетаскивание одной точки не пересчитывает остальные
  const routeLegCache = new Map();
  function routeLeg(a, b) {
    const cacheKey = `${a[0].toFixed(5)},${a[1].toFixed(5)}|${b[0].toFixed(5)},${b[1].toFixed(5)}`;
    let leg = routeLegCache.get(cacheKey);
    if (!leg) {
      if (routeLegCache.size > 80) routeLegCache.clear();
      leg = findSafeRoverPath(a, b);
      routeLegCache.set(cacheKey, leg);
    }
    return leg;
  }

  // Расчет маршрута через несколько точек: участки считаются независимо и склеиваются
  function planRoute(points) {
    const legs = [];
    for (let i = 0; i < points.length - 1; i++) {
      legs.push(routeLeg(points[i], points[i + 1]));
    }

    const safePath = [];
    const directPath = [];
    const avoided = new Set();
    const crossed = new Set();
    let safeDistanceKm = 0;
    let directDistanceKm = 0;
    let coreKm = 0;
    let bufferKm = 0;
    let minClearance = Infinity;

    legs.forEach((leg, i) => {
      safePath.push(...(i === 0 ? leg.safePath : leg.safePath.slice(1)));
      directPath.push(...(i === 0 ? leg.directPath : leg.directPath.slice(1)));
      leg.hazardsAvoided.forEach((h) => avoided.add(h));
      leg.hazardsCrossed.forEach((h) => crossed.add(h));
      safeDistanceKm += leg.safeDistanceKm;
      directDistanceKm += leg.directDistanceKm;
      coreKm += leg.coreKm;
      bufferKm += leg.bufferKm;
      if (leg.minHazardClearanceKm < minClearance) minClearance = leg.minHazardClearanceKm;
    });

    return {
      legs,
      points,
      safePath,
      directPath,
      safeDistanceKm,
      directDistanceKm,
      hazardsAvoided: Array.from(avoided).filter((h) => !crossed.has(h)),
      hazardsCrossed: Array.from(crossed),
      minHazardClearanceKm: minClearance,
      coreKm,
      bufferKm,
    };
  }

  // Состояние навигационной подсистемы
  const MAX_ROUTE_STOPS = 8;
  const STOP_LETTERS = 'ABCDEFGH';
  const CUSTOM_STOP_NAME = { en: 'Custom Waypoint', ru: 'Выбранная точка' };

  routeState = {
    modeActive: false,
    stops: [], // [{ coords: [lat, lon], name, marker }]
    roundTrip: false,
    routeLayer: L.layerGroup().addTo(map),
    directLayer: L.layerGroup().addTo(map),
    hazardLayer: L.layerGroup().addTo(map),
    currentResult: null,
  };

  const hazardMarkers = [];
  // Шаблон всплывающего окна опасной зоны
  function hazardPopupContent(h) {
    return `
      <div class="popup-box">
        <span class="popup-label" style="color:var(--danger)">${currentLang === 'ru' ? 'Зона геологического риска' : 'Geological Hazard Zone'}</span>
        <b class="popup-title">${t(h.name)}</b>
        <span class="popup-coords" style="color:var(--text-muted)">${t(h.desc)}</span>
      </div>
    `;
  }

  // Отрисовка зон риска на карте
  function initHazardZones() {
    martianHazards.forEach((h) => {
      let shape;
      if (h.type === 'circle') {
        const radiusMeters = ((h.radiusDeg * Math.PI * MARS_RADIUS_KM) / 180) * 1000;
        shape = L.circle(h.center, {
          radius: radiusMeters,
          color: '#e0705f',
          weight: 1.5,
          dashArray: '4, 5',
          fillColor: '#e0705f',
          fillOpacity: 0.12,
        }).bindPopup(hazardPopupContent(h));
      } else if (h.type === 'polygon') {
        shape = L.polygon(h.polygon, {
          color: '#e0705f',
          weight: 1.5,
          dashArray: '4, 5',
          fillColor: '#e0705f',
          fillOpacity: 0.12,
        }).bindPopup(hazardPopupContent(h));
      }

      if (shape) {
        shape._hazardData = h;
        hazardMarkers.push(shape);
        routeState.hazardLayer.addLayer(shape);
      }
    });
  }
  initHazardZones();

  // DOM-иконка маркера точки маршрута
  function createRouteMarkerIcon(letter, type) {
    return L.divIcon({
      className: 'route-map-marker-container',
      html: `<div class="route-map-marker route-map-marker--${type}">${letter}</div>`,
      iconSize: [38, 38],
      iconAnchor: [19, 19],
    });
  }

  const samePoint = (a, b) => Math.abs(a[0] - b[0]) < 0.0001 && Math.abs(a[1] - b[1]) < 0.0001;
  const stopName = (stop) => (stop && stop.name ? t(stop.name) : '');
  const formatStopCoords = (coords) => `${formatCoordSimple(coords[0], true)}, ${formatCoordSimple(coords[1], false)}`;

  // Роль точки в маршруте: старт (a), финиш (b) или промежуточная (via)
  function stopRole(index, total) {
    if (index === 0) return 'a';
    if (index === total - 1 || total < 2) return 'b';
    return 'via';
  }

  function stopRoleLabel(role, index) {
    const isRu = currentLang === 'ru';
    if (role === 'a') return isRu ? 'Старт' : 'Start';
    if (role === 'b') return isRu ? 'Финиш' : 'Finish';
    return isRu ? `Остановка ${index}` : `Stop ${index}`;
  }

  // Точки маршрута с учетом возврата к старту (кольцевой маршрут)
  function getRoutePoints() {
    const pts = routeState.stops.map((s) => s.coords);
    if (routeState.roundTrip && pts.length >= 2) pts.push(pts[0]);
    return pts;
  }

  // Строка списка точек маршрута
  function buildStopRow(index, stop, total) {
    const isRu = currentLang === 'ru';
    const role = stopRole(index, Math.max(total, 2));
    const row = document.createElement('div');
    row.className = 'route-point';

    const badge = document.createElement('span');
    badge.className = `point-badge point-badge--${role}`;
    badge.textContent = STOP_LETTERS[index];
    row.appendChild(badge);

    const details = document.createElement('div');
    details.className = 'point-details';
    const label = document.createElement('span');
    label.className = 'point-label';
    label.textContent = stopRoleLabel(role, index);
    const coords = document.createElement('span');
    coords.className = 'point-coords';
    if (stop) {
      const name = stopName(stop);
      const coordsStr = formatStopCoords(stop.coords);
      coords.textContent = name ? `${name} (${coordsStr})` : coordsStr;
      coords.title = coords.textContent;
    } else {
      coords.textContent = i18n[currentLang].point_unset;
    }
    details.append(label, coords);
    row.appendChild(details);

    if (stop) {
      const actions = document.createElement('div');
      actions.className = 'point-actions';
      const mkBtn = (act, glyph, title, disabled) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'point-action-btn';
        btn.dataset.act = act;
        btn.dataset.idx = String(index);
        btn.textContent = glyph;
        btn.title = title;
        btn.setAttribute('aria-label', title);
        btn.disabled = disabled;
        return btn;
      };
      actions.append(
        mkBtn('up', '↑', isRu ? 'Переместить выше' : 'Move up', index === 0),
        mkBtn('down', '↓', isRu ? 'Переместить ниже' : 'Move down', index === total - 1),
        mkBtn('remove', '✕', isRu ? 'Удалить точку' : 'Remove stop', false),
      );
      row.appendChild(actions);
    }
    return row;
  }

  // Обновление интерфейса точек маршрута (список + маркеры на карте)
  function updateRoutePointsUI() {
    const stops = routeState.stops;
    const list = document.querySelector('#route-stops-list');
    if (list) {
      list.textContent = '';
      stops.forEach((stop, i) => list.appendChild(buildStopRow(i, stop, stops.length)));
      for (let i = stops.length; i < 2; i++) list.appendChild(buildStopRow(i, null, stops.length));
    }

    stops.forEach((stop, i) => {
      if (!stop.marker) return;
      const role = stopRole(i, stops.length);
      const name = stopName(stop);
      stop.marker.setIcon(createRouteMarkerIcon(STOP_LETTERS[i], role));
      stop.marker.setTooltipContent(`${STOP_LETTERS[i]} · ${stopRoleLabel(role, i)}${name ? ` — ${name}` : ''}`);
    });

    checkCalcButtonState();
  }

  // Добавление точки маршрута. Возвращает 'ok' | 'max' | 'duplicate'
  function addStop(coords, name = null, index = routeState.stops.length) {
    const stops = routeState.stops;
    if (stops.length >= MAX_ROUTE_STOPS) return 'max';
    const prev = stops[index - 1];
    const next = stops[index];
    if ((prev && samePoint(prev.coords, coords)) || (next && samePoint(next.coords, coords))) return 'duplicate';

    const stop = { coords, name: name || CUSTOM_STOP_NAME, marker: null };
    stop.marker = L.marker(coords, {
      icon: createRouteMarkerIcon('', 'via'),
      draggable: true,
      zIndexOffset: 500,
    })
      .addTo(map)
      .bindTooltip('', { direction: 'top' });

    stop.marker.on('dragend', (e) => {
      const newPos = e.target.getLatLng();
      const snapped = findNearestMarkedPoint(newPos, 35);
      if (snapped) {
        stop.coords = snapped.coords;
        stop.name = snapped.name;
        showSnapFeedback(snapped.name, snapped.coords);
      } else {
        stop.coords = [newPos.lat, normLon(newPos.lng)];
        stop.name = CUSTOM_STOP_NAME;
      }
      stop.marker.setLatLng(stop.coords);
      updateRoutePointsUI();
      refreshRoute(false);
    });

    // Правый клик по маркеру удаляет точку
    stop.marker.on('contextmenu', () => {
      const i = routeState.stops.indexOf(stop);
      if (i >= 0) removeStop(i);
    });

    stops.splice(index, 0, stop);
    updateRoutePointsUI();
    return 'ok';
  }

  // Удаление точки маршрута
  function removeStop(index) {
    const [stop] = routeState.stops.splice(index, 1);
    if (stop && stop.marker) map.removeLayer(stop.marker);
    updateRoutePointsUI();
    updatePromptBanner();
    refreshRoute(false);
  }

  // Перестановка точки в списке (dir: -1 вверх, +1 вниз)
  function moveStop(index, dir) {
    const stops = routeState.stops;
    const target = index + dir;
    if (target < 0 || target >= stops.length) return;
    [stops[index], stops[target]] = [stops[target], stops[index]];
    updateRoutePointsUI();
    refreshRoute(false);
  }

  // Оптимизация порядка промежуточных точек (перебор; старт и финиш закреплены)
  function optimizeStopOrder() {
    const stops = routeState.stops;
    const n = stops.length;
    if (n < 4) return false;

    const fixedEnd = !routeState.roundTrip;
    const mids = [];
    for (let i = 1; i < (fixedEnd ? n - 1 : n); i++) mids.push(i);

    const dist = stops.map((a) => stops.map((b) => haversineMars(a.coords, b.coords)));
    const tail = (last) => (fixedEnd ? dist[last][n - 1] : dist[last][0]);

    let bestOrder = mids.slice();
    let bestCost = Infinity;
    const used = new Array(n).fill(false);
    const order = [];

    const search = (last, cost) => {
      if (cost >= bestCost) return;
      if (order.length === mids.length) {
        const total = cost + tail(last);
        if (total < bestCost - 1e-6) {
          bestCost = total;
          bestOrder = order.slice();
        }
        return;
      }
      for (const m of mids) {
        if (used[m]) continue;
        used[m] = true;
        order.push(m);
        search(m, cost + dist[last][m]);
        order.pop();
        used[m] = false;
      }
    };
    search(0, 0);

    const changed = bestOrder.some((m, i) => m !== mids[i]);
    if (!changed) return false;

    routeState.stops = [stops[0], ...bestOrder.map((m) => stops[m]), ...(fixedEnd ? [stops[n - 1]] : [])];
    updateRoutePointsUI();
    refreshRoute(true);
    return true;
  }

  // Проверка готовности к расчету пути
  function checkCalcButtonState() {
    const n = routeState.stops.length;
    const calcBtn = document.querySelector('#btn-calc-route');
    if (calcBtn) calcBtn.disabled = n < 2;
    const reverseBtn = document.querySelector('#btn-swap-points');
    if (reverseBtn) reverseBtn.disabled = n < 2;
    const optimizeBtn = document.querySelector('#btn-optimize-route');
    if (optimizeBtn) optimizeBtn.disabled = n < 4;
  }

  let lastRouteResult = null;

  const formatKmOrMi = (km, isRu) => (isRu
    ? `${(Math.round(km * 10) / 10).toLocaleString('ru-RU')} км`
    : `${(Math.round(km * 0.621371 * 10) / 10).toLocaleString('en-US')} mi`);

  // Индекс безопасности: доля пути внутри зон риска и в буферных поясах + минимальный запас
  function calcSafetyScore(result) {
    const total = result.safeDistanceKm || 1;
    let score = 100 - 35 * (result.coreKm / total) - 10 * (result.bufferKm / total);
    if (result.minHazardClearanceKm < 40) score -= 2;
    else if (result.minHazardClearanceKm < 80) score -= 1;
    if (result.coreKm > 0) score = Math.min(score, 89);
    return Math.max(40, Math.min(99.9, score));
  }

  function safetyLabel(score, isRu) {
    if (score >= 97) return isRu ? 'Безопасно' : 'Safe';
    if (score >= 90) return isRu ? 'Осторожно' : 'Caution';
    return isRu ? 'Высокий риск' : 'High risk';
  }

  // Высоты MOLA вдоль траектории: профиль, набор/спуск и наибольший уклон по ходу
  function buildElevationSeries(path) {
    const samples = [];
    let km = 0;
    let min = Infinity;
    let max = -Infinity;
    let ascent = 0;
    let descent = 0;
    let maxGradeDeg = 0;
    for (let i = 0; i < path.length; i++) {
      const elev = molaElevation(path[i][0], path[i][1]);
      if (i > 0) {
        const segKm = haversineMars(path[i - 1], path[i]);
        km += segKm;
        const d = elev - samples[i - 1].elev;
        if (d > 0) ascent += d;
        else descent -= d;
        if (segKm > 1) {
          const grade = (Math.atan(Math.abs(d) / (segKm * 1000)) * 180) / Math.PI;
          if (grade > maxGradeDeg) maxGradeDeg = grade;
        }
      }
      if (elev < min) min = elev;
      if (elev > max) max = elev;
      samples.push({ km, elev });
    }
    return { samples, totalKm: km, min, max, ascent, descent, maxGradeDeg };
  }

  // Профиль высот вдоль траектории по данным MOLA MEGDR
  function renderElevationProfile(result, series) {
    const container = document.querySelector('#elevation-profile');
    if (!container) return;
    const isRu = currentLang === 'ru';
    if (!hasMola) {
      container.innerHTML = `<div class="telemetry-empty">${isRu ? 'Данные MOLA не загружены (нет файла mola-megdr-4ppd.js)' : 'MOLA data not loaded (mola-megdr-4ppd.js is missing)'}</div>`;
      return;
    }
    if (!series || series.samples.length < 2) {
      container.innerHTML = `<div class="telemetry-empty">${i18n[currentLang].telemetry_no_route}</div>`;
      return;
    }

    const { samples, min, max, ascent, descent, maxGradeDeg } = series;
    const totalKm = series.totalKm || 1;
    const range = Math.max(1, max - min);

    const W = 260;
    const H = 64;
    const PAD = 4;
    const x = (v) => (v / totalKm) * W;
    const y = (v) => PAD + (1 - (v - min) / range) * (H - PAD * 2);
    const line = samples.map((s, i) => `${i ? 'L' : 'M'}${x(s.km).toFixed(1)},${y(s.elev).toFixed(1)}`).join(' ');
    const area = `${line} L${W},${H} L0,${H} Z`;

    // Вертикальные отметки промежуточных точек
    let stopLines = '';
    let acc = 0;
    result.legs.slice(0, -1).forEach((leg) => {
      acc += leg.safeDistanceKm;
      const sx = x(Math.min(acc, totalKm)).toFixed(1);
      stopLines += `<line class="elev-profile__stop" x1="${sx}" y1="0" x2="${sx}" y2="${H}"/>`;
    });

    container.innerHTML = `
      <div class="elev-profile">
        <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" role="img" aria-label="${isRu ? 'Профиль высот маршрута' : 'Route elevation profile'}">
          <path class="elev-profile__area" d="${area}"/>
          ${stopLines}
          <path class="elev-profile__line" d="${line}"/>
        </svg>
        <div class="elev-profile__meta">
          <span>${isRu ? 'Макс.' : 'Max'} <b>${formatElev(max, isRu)}</b></span>
          <span>${isRu ? 'Мин.' : 'Min'} <b>${formatElev(min, isRu)}</b></span>
          <span>${isRu ? 'Набор' : 'Ascent'} <b>${formatElev(ascent, isRu)}</b></span>
          <span>${isRu ? 'Спуск' : 'Descent'} <b>${formatElev(-descent, isRu)}</b></span>
          <span>${isRu ? 'Макс. уклон по ходу' : 'Max along-track grade'} <b>${maxGradeDeg.toFixed(1)}°</b></span>
          <span>${isRu ? 'Шаг сетки' : 'Grid spacing'} <b>${isRu ? '~15 км' : '~9 mi'}</b></span>
        </div>
      </div>
    `;
  }

  // Расчет и вывод телеметрии перехода
  function renderRouteMetrics(result) {
    if (!result) return;
    lastRouteResult = result;

    const isRu = currentLang === 'ru';
    const stops = routeState.stops;
    const setText = (sel, text) => {
      const el = document.querySelector(sel);
      if (el) el.textContent = text;
    };

    // 1. Robotic Rover (Perseverance / AutoNav nominal 0.35 km/sol)
    const roboticSols = Math.max(1, Math.round(result.safeDistanceKm / MARS_CONSTANTS.ROVER_ROBOTIC_SPEED_KMSOL));
    const roboticEarthDays = Math.round(roboticSols * 1.02749);

    // 2. Manned Crew Rover (NASA Space Exploration Vehicle nominal 25 km/sol)
    const crewSols = Math.max(1, Math.round(result.safeDistanceKm / MARS_CONSTANTS.ROVER_CREW_SPEED_KMSOL));
    const crewEarthDays = Math.round(crewSols * 1.02749);
    // 3. Marswalk EVA sorties (nominal 12 km per 6-hr EVA sortie)
    const marswalkSorties = Math.max(1, Math.ceil(result.safeDistanceKm / 12));

    // Высоты MOLA вдоль траектории
    const series = buildElevationSeries(result.safePath);

    // Traction energy requirement: rolling resistance plus climbing the MOLA ascent
    // E = m * g * (Crr * d + ascent) / eff
    const joulesRobotic = (MARS_CONSTANTS.ROVER_ROBOTIC_MASS * MARS_CONSTANTS.G_MARS_MEAN * (MARS_CONSTANTS.CRR_REGOLITH * result.safeDistanceKm * 1000 + series.ascent)) / MARS_CONSTANTS.DRIVETRAIN_EFFICIENCY;
    const kwhRobotic = Math.round(joulesRobotic / 3.6e6);
    const mjRobotic = Math.round(joulesRobotic / 1e6);

    // NASA DSN Radio Latency (One-way and Round Trip)
    const secOneway = (MARS_CONSTANTS.D_EARTH_MEAN_AU * MARS_CONSTANTS.AU_KM) / MARS_CONSTANTS.C_LIGHT;
    const minOneway = Math.floor(secOneway / 60);
    const remSecOneway = Math.round(secOneway % 60);
    const minRtt = Math.round((secOneway * 2) / 60);

    const safetyScoreVal = calcSafetyScore(result);
    const distStr = formatKmOrMi(result.safeDistanceKm, isRu);

    // Сводная карточка в боковой панели
    const summaryCard = document.querySelector('#route-summary-card');
    if (summaryCard) summaryCard.classList.remove('hidden');

    setText('#summary-score', isRu ? `${safetyScoreVal.toFixed(1)}% безопасность` : `${safetyScoreVal.toFixed(1)}% safety rating`);
    setText('#summary-distance', distStr);
    setText('#summary-time', isRu ? `~${roboticSols.toLocaleString('ru-RU')} солов (марсоход)` : `~${roboticSols.toLocaleString('en-US')} sols (rover)`);
    setText('#summary-avoided-list', result.hazardsAvoided.length > 0
      ? result.hazardsAvoided.map((h) => t(h)).join(', ')
      : (isRu ? 'Обход не потребовался' : 'No detour required'));

    // Вкладка телеметрии
    setText('#telemetry-distance', distStr);
    setText('#telemetry-duration', isRu
      ? `~${roboticSols.toLocaleString('ru-RU')} солов (~${roboticEarthDays.toLocaleString('ru-RU')} сут.)`
      : `~${roboticSols.toLocaleString('en-US')} sols (~${roboticEarthDays.toLocaleString('en-US')} earth days)`);

    const extraKm = Math.max(0, result.safeDistanceKm - result.directDistanceKm);
    const extraPct = Math.round((extraKm / (result.directDistanceKm || 1)) * 100);
    setText('#telemetry-direct', `${formatKmOrMi(result.directDistanceKm, isRu)} (+${extraPct}%)`);
    setText('#telemetry-risk', `${safetyScoreVal.toFixed(1)}% (${safetyLabel(safetyScoreVal, isRu)})`);
    if (result.points.length >= 2) {
      setText('#telemetry-bearing', formatBearingCompass(calcInitialBearing(result.points[0], result.points[1])));
    }
    setText('#telemetry-energy', `${kwhRobotic.toLocaleString()} kWh (${mjRobotic.toLocaleString()} MJ)`);
    setText('#telemetry-latency', isRu
      ? `~${minOneway}м ${remSecOneway}с (RTT ~${minRtt}м)`
      : `~${minOneway}m ${remSecOneway}s (RTT ~${minRtt}m)`);
    setText('#telemetry-crew-time', isRu
      ? `~${crewSols} солов (~${crewEarthDays} сут. / ${marswalkSorties} выходов EVA)`
      : `~${crewSols} sols (~${crewEarthDays} days / ${marswalkSorties} EVA sorties)`);
    setText('#telemetry-status', isRu ? 'Траектория активна' : 'Trajectory Active');

    // Заголовок: A → … → B
    const names = stops.map((s, i) => stopName(s) || `${isRu ? 'Точка' : 'Point'} ${STOP_LETTERS[i]}`);
    if (names.length >= 2) {
      const middle = names.length - 2;
      const title = middle > 1
        ? `${names[0]} → … (+${middle}) → ${names[names.length - 1]}`
        : names.join(' → ');
      setText('#telemetry-title', routeState.roundTrip ? `${title} ↺` : title);
    }
    const legCount = result.legs.length;
    setText('#telemetry-subtitle', isRu
      ? `Точек: ${stops.length} · участков: ${legCount}${routeState.roundTrip ? ' · кольцевой маршрут' : ''}. Кликните по линии маршрута, чтобы вставить точку; перетащите маркер, чтобы изменить путь.`
      : `${stops.length} stops · ${legCount} leg${legCount === 1 ? '' : 's'}${routeState.roundTrip ? ' · round trip' : ''}. Click the route line to insert a stop; drag a marker to reroute.`);

    renderElevationProfile(result, series);

    // Геологический анализ: обойденные и неизбежно пересеченные зоны
    const hazardsListEl = document.querySelector('#hazards-avoided-list');
    if (hazardsListEl) {
      hazardsListEl.textContent = '';
      const addItem = (cls, name, desc) => {
        const item = document.createElement('div');
        item.className = cls;
        const nameEl = document.createElement('span');
        nameEl.className = 'hazard-item__name';
        nameEl.textContent = name;
        const descEl = document.createElement('span');
        descEl.className = 'hazard-item__desc';
        descEl.textContent = desc;
        item.append(nameEl, descEl);
        hazardsListEl.appendChild(item);
      };

      result.hazardsCrossed.forEach((haz) => {
        addItem(
          'hazard-item',
          `${isRu ? 'Пересечение: ' : 'Crossing: '}${t(haz)}`,
          isRu
            ? `Точка маршрута лежит внутри зоны риска — обход невозможен. Внутри зоны: ${formatKmOrMi(result.coreKm, true)}.`
            : `A stop lies inside this hazard zone, so it cannot be bypassed. Distance inside zones: ${formatKmOrMi(result.coreKm, false)}.`,
        );
      });
      result.hazardsAvoided.forEach((haz) => {
        addItem(
          'hazard-item hazard-item--avoided',
          `${isRu ? 'Обход: ' : 'Bypassing: '}${t(haz)}`,
          isRu
            ? 'Прямая линия пересекает эту зону — траектория скорректирована для уклонения от уступов и грабенов.'
            : 'The direct line crosses this zone — trajectory adjusted to avoid cliff scarps and grabens.',
        );
      });
      if (result.hazardsCrossed.length === 0 && result.hazardsAvoided.length === 0) {
        addItem(
          'hazard-item hazard-item--safe',
          isRu ? 'Прямой безопасный коридор' : 'Direct Safe Corridor',
          isRu
            ? 'Прямые геодезические линии между точками не пересекают зон риска.'
            : 'Direct geodesic lines between stops do not cross any hazard zone.',
        );
      }
      if (Number.isFinite(result.minHazardClearanceKm)) {
        addItem(
          'hazard-item hazard-item--safe',
          isRu ? 'Минимальный запас до зоны риска' : 'Minimum hazard clearance',
          formatKmOrMi(result.minHazardClearanceKm, isRu),
        );
      }
    }

    // Список точек маршрута с длинами участков
    const waypointsEl = document.querySelector('#waypoints-timeline');
    if (waypointsEl) {
      waypointsEl.textContent = '';
      let cumulativeKm = 0;
      result.points.forEach((pt, i) => {
        const isReturn = routeState.roundTrip && i === result.points.length - 1;
        const stopIdx = isReturn ? 0 : i;
        const stop = stops[stopIdx];
        const leg = i > 0 ? result.legs[i - 1] : null;
        if (leg) cumulativeKm += leg.safeDistanceKm;

        const row = document.createElement('div');
        row.className = 'waypoint-row';

        const head = document.createElement('div');
        head.className = 'waypoint-row__head';
        const nameEl = document.createElement('span');
        nameEl.className = 'waypoint-row__name';
        const baseName = stopName(stop) || formatStopCoords(pt);
        nameEl.textContent = `${STOP_LETTERS[stopIdx]}. ${baseName}${isReturn ? (isRu ? ' (возврат)' : ' (return)') : ''}`;
        const elevEl = document.createElement('span');
        elevEl.className = 'waypoint-row__elev';
        elevEl.textContent = formatElev(molaElevation(pt[0], pt[1]), isRu);
        head.append(nameEl, elevEl);

        const coordsEl = document.createElement('span');
        coordsEl.className = 'waypoint-row__coords';
        coordsEl.textContent = leg
          ? `${formatStopCoords(pt)} · ${isRu ? 'участок' : 'leg'} ${formatKmOrMi(leg.safeDistanceKm, isRu)} · ${isRu ? 'всего' : 'total'} ${formatKmOrMi(cumulativeKm, isRu)}`
          : formatStopCoords(pt);

        row.append(head, coordsEl);
        waypointsEl.appendChild(row);
      });
    }
  }

  // Сброс рассчитанного маршрута (точки остаются)
  function resetRouteOutput() {
    routeState.routeLayer.clearLayers();
    routeState.directLayer.clearLayers();
    routeState.currentResult = null;
    lastRouteResult = null;

    const summaryCard = document.querySelector('#route-summary-card');
    if (summaryCard) summaryCard.classList.add('hidden');

    ['#telemetry-distance', '#telemetry-duration', '#telemetry-direct', '#telemetry-risk',
      '#telemetry-bearing', '#telemetry-energy', '#telemetry-latency', '#telemetry-crew-time'].forEach((sel) => {
      const el = document.querySelector(sel);
      if (el) el.textContent = '—';
    });

    const lang = i18n[currentLang] || {};
    const emptyHtml = `<div class="telemetry-empty">${lang.telemetry_no_route || 'No route calculated yet'}</div>`;
    const hazardsListEl = document.querySelector('#hazards-avoided-list');
    if (hazardsListEl) hazardsListEl.innerHTML = emptyHtml;
    const profileEl = document.querySelector('#elevation-profile');
    if (profileEl) profileEl.innerHTML = emptyHtml;
    const waypointsEl = document.querySelector('#waypoints-timeline');
    if (waypointsEl) waypointsEl.textContent = '';
    const statusEl = document.querySelector('#telemetry-status');
    if (statusEl) statusEl.textContent = lang.telemetry_waiting || 'Awaiting points';
    const titleEl = document.querySelector('#telemetry-title');
    if (titleEl) titleEl.textContent = lang.telemetry_title || 'Rover Trajectory';
    const subtitleEl = document.querySelector('#telemetry-subtitle');
    if (subtitleEl) subtitleEl.textContent = lang.telemetry_subtitle || '';

    updateTopClearRouteButton(routeState.stops.length > 0);
    updateShareHash();
  }

  // Пересчет маршрута после изменения точек
  function refreshRoute(fit = true) {
    if (routeState.stops.length >= 2) calculateAndDrawRoute({ fit });
    else resetRouteOutput();
  }

  // Построение и отрисовка маршрута
  function calculateAndDrawRoute(opts) {
    if (routeState.stops.length < 2) return;
    const fit = !(opts && opts.fit === false);

    routeState.routeLayer.clearLayers();
    routeState.directLayer.clearLayers();

    const result = planRoute(getRoutePoints());
    routeState.currentResult = result;

    const isRu = currentLang === 'ru';
    const canInsert = routeState.stops.length < MAX_ROUTE_STOPS;
    const insertTip = isRu ? 'Клик — вставить точку маршрута здесь' : 'Click to insert a stop here';

    result.legs.forEach((leg, legIndex) => {
      const safeSegments = splitPolylineAtAntimeridian(leg.safePath);

      // Широкая подложка — она же зона клика для вставки точки
      const outerGlow = L.polyline(safeSegments, {
        color: '#6fd3b3',
        weight: 10,
        opacity: 0.3,
        lineCap: 'round',
        lineJoin: 'round',
      });
      const innerTrack = L.polyline(safeSegments, {
        color: '#6fd3b3',
        weight: 3.5,
        opacity: 0.95,
        lineCap: 'round',
        lineJoin: 'round',
        interactive: false,
      });

      if (canInsert) {
        outerGlow.bindTooltip(insertTip, { sticky: true, direction: 'top' });
        outerGlow.on('click', (e) => {
          L.DomEvent.stopPropagation(e);
          lastSnapTime = Date.now();
          const res = addStop([e.latlng.lat, normLon(e.latlng.lng)], CUSTOM_STOP_NAME, legIndex + 1);
          if (res === 'ok') {
            updatePromptBanner();
            calculateAndDrawRoute({ fit: false });
          }
        });
      }

      routeState.routeLayer.addLayer(outerGlow);
      routeState.routeLayer.addLayer(innerTrack);

      // Прямая линия для сравнения
      routeState.directLayer.addLayer(L.polyline(splitPolylineAtAntimeridian(leg.directPath), {
        color: '#e0705f',
        weight: 2,
        dashArray: '5, 8',
        opacity: 0.75,
        interactive: false,
      }));
    });

    if (fit) {
      map.fitBounds(L.latLngBounds([...result.safePath, ...result.directPath]), { padding: [50, 50], maxZoom: 6 });
    }

    renderRouteMetrics(result);
    updateTopClearRouteButton(true);
    updateShareHash();
  }

  // Элементы управления режимом выбора точек
  const routeModeBtn = document.querySelector('#btn-toggle-route-mode');
  const routePrompt = document.querySelector('#map-route-prompt');
  const routePromptText = document.querySelector('#route-prompt-text');
  const cancelRouteModeBtn = document.querySelector('#btn-cancel-route-mode');

  if (routePrompt && window.L && L.DomEvent) {
    L.DomEvent.disableClickPropagation(routePrompt);
    L.DomEvent.disableScrollPropagation(routePrompt);
  }

  // Переключение режима выбора точек на карте
  function setRouteMode(active) {
    routeState.modeActive = active;
    if (routeModeBtn) {
      routeModeBtn.classList.toggle('active', active);
      const textSpan = document.querySelector('#route-mode-text');
      if (textSpan) {
        textSpan.textContent = active ? (i18n[currentLang]?.route_mode_active || 'Click map to place points') : (i18n[currentLang]?.route_mode_btn || 'Select points on map');
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

  // Текст подсказки для следующего действия
  function nextStopHint() {
    const isRu = currentLang === 'ru';
    const n = routeState.stops.length;
    if (n === 0) {
      return isRu ? 'Кликните на карту, чтобы установить старт (A)' : 'Click map to set the start (A)';
    }
    if (n >= MAX_ROUTE_STOPS) {
      return isRu
        ? `Максимум ${MAX_ROUTE_STOPS} точек. Перетащите маркеры или удалите точку`
        : `Maximum of ${MAX_ROUTE_STOPS} stops. Drag markers or remove a stop`;
    }
    const letter = STOP_LETTERS[n];
    if (n === 1) {
      return isRu ? `Кликните, чтобы добавить точку ${letter}` : `Click map to add stop ${letter}`;
    }
    return isRu
      ? `Кликните, чтобы добавить точку ${letter} · Esc — завершить`
      : `Click to add stop ${letter} · Esc to finish`;
  }

  // Обновление текста подсказки на карте
  function updatePromptBanner() {
    if (routePromptText) routePromptText.textContent = nextStopHint();
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

  // Обработка горячих клавиш (F, F11, Esc)
  window.addEventListener('keydown', (e) => {
    const tag = document.activeElement ? document.activeElement.tagName : '';
    const isInput = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';

    // F key toggle (when not typing in an input and without Ctrl/Alt/Meta)
    if (!isInput && !e.ctrlKey && !e.altKey && !e.metaKey && e.code === 'KeyF') {
      e.preventDefault();
      toggleFullscreen();
      return;
    }

    // F11 key toggle
    if (e.key === 'F11') {
      e.preventDefault();
      toggleFullscreen();
      return;
    }

    if (e.key === 'Escape') {
      if (isMapFullscreen()) {
        exitFullscreen();
        return;
      }
      if (routeState && routeState.modeActive) {
        setRouteMode(false);
      } else if (swipeController && swipeController.isActive()) {
        swipeController.disable();
      }
    }
  });

  // Обработка выбора точки маршрута: каждая новая точка добавляется в конец
  function handleRoutePointSelection(coords, name = null) {
    if (!routeState) return false;

    const res = addStop(coords, name);
    if (res === 'duplicate') {
      if (routePromptText) {
        routePromptText.textContent = currentLang === 'ru'
          ? 'Эта точка уже выбрана предыдущей. Выберите другую'
          : 'This point is already the previous stop. Choose a different one';
      }
      return false;
    }
    updatePromptBanner();
    if (res !== 'ok') return false;

    // Во время выбора точек карта не перецентрируется
    refreshRoute(false);
    return true;
  }

  // Визуальный отклик примагничивания к объекту
  function showSnapFeedback(name, coords) {
    if (!map || !coords) return;
    const snapPulse = L.circleMarker(coords, {
      radius: 18,
      fillColor: '#6fd3b3',
      fillOpacity: 0.5,
      color: '#6fd3b3',
      weight: 2,
      className: 'snap-pulse-marker',
      interactive: false,
    }).addTo(map);

    setTimeout(() => {
      if (map && map.hasLayer(snapPulse)) {
        map.removeLayer(snapPulse);
      }
    }, 750);

    const last = routeState.stops[routeState.stops.length - 1];
    if (routePromptText && last && samePoint(last.coords, coords)) {
      routePromptText.textContent = `✓ ${t(name)} · ${nextStopHint()}`;
    }
  }

  // Поиск ближайшего объекта для привязки
  function findNearestMarkedPoint(latlng, maxPixelDist = 35) {
    if (!map || !latlng) return null;
    let clickPt;
    try {
      clickPt = map.latLngToContainerPoint(latlng);
    } catch {
      return null;
    }
    let bestPoint = null;
    let minDistance = Infinity;

    // Check all landing sites
    if (typeof markerStyles !== 'undefined') {
      Object.entries(markerStyles).forEach(([id, info]) => {
        if (!info.coords) return;
        const targetPt = map.latLngToContainerPoint(info.coords);
        const dist = clickPt.distanceTo(targetPt);
        if (dist < minDistance && dist <= maxPixelDist) {
          minDistance = dist;
          bestPoint = {
            id,
            type: 'mission',
            coords: info.coords,
            name: {
              en: info.crater ? `${info.name} (${info.crater.en || info.crater})` : info.name,
              ru: info.crater ? `${info.name} (${info.crater.ru || info.crater})` : info.name,
            },
            dist,
          };
        }
      });
    }

    // Check all landmarks
    if (typeof landmarkData !== 'undefined') {
      Object.entries(landmarkData).forEach(([id, info]) => {
        if (!info.coords) return;
        const targetPt = map.latLngToContainerPoint(info.coords);
        const dist = clickPt.distanceTo(targetPt);
        if (dist < minDistance && dist <= maxPixelDist) {
          minDistance = dist;
          bestPoint = {
            id,
            type: 'landmark',
            coords: info.coords,
            name: info.name,
            dist,
          };
        }
      });
    }

    return bestPoint;
  }

  // Клик по карте в режиме маршрута
  map.on('click', (e) => {
    if (!routeState || !routeState.modeActive) return;

    // Avoid duplicate event if marker click was just handled
    if (Date.now() - lastSnapTime < 150) return;

    const snapped = findNearestMarkedPoint(e.latlng, 35);
    if (snapped) {
      lastSnapTime = Date.now();
      handleRoutePointSelection(snapped.coords, snapped.name);
      showSnapFeedback(snapped.name, snapped.coords);
    } else {
      handleRoutePointSelection([e.latlng.lat, e.latlng.lng], { en: 'Custom Waypoint', ru: 'Выбранная точка' });
    }
  });

  // Изменение курсора при наведении на объекты
  map.on('mousemove', (e) => {
    if (routeState && routeState.modeActive) {
      const snapped = findNearestMarkedPoint(e.latlng, 35);
      map.getContainer().style.cursor = snapped ? 'pointer' : 'crosshair';
    }
  });

  // Кнопка запуска расчета маршрута
  const calcRouteBtn = document.querySelector('#btn-calc-route');
  if (calcRouteBtn) {
    calcRouteBtn.addEventListener('click', calculateAndDrawRoute);
  }

  // Видимость верхней кнопки удаления маршрута
  function updateTopClearRouteButton(visible) {
    const btn = document.querySelector('#btn-top-clear-route');
    if (btn) {
      btn.classList.toggle('hidden', !visible);
    }
  }

  // Очистка и сброс текущего маршрута
  function clearRoute() {
    if (!routeState) return;

    routeState.stops.forEach((stop) => {
      if (stop.marker) map.removeLayer(stop.marker);
    });
    routeState.stops = [];

    setRouteMode(false);
    updateRoutePointsUI();
    resetRouteOutput();
  }

  const topClearRouteBtn = document.querySelector('#btn-top-clear-route');
  if (topClearRouteBtn) {
    topClearRouteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      clearRoute();
    });
  }

  const clearRouteBtn = document.querySelector('#btn-clear-route');
  if (clearRouteBtn) {
    clearRouteBtn.addEventListener('click', clearRoute);
  }

  // Действия в списке точек: переместить / удалить
  const stopsListEl = document.querySelector('#route-stops-list');
  if (stopsListEl) {
    stopsListEl.addEventListener('click', (e) => {
      const btn = e.target.closest('.point-action-btn');
      if (!btn || btn.disabled) return;
      const idx = Number(btn.dataset.idx);
      if (btn.dataset.act === 'up') moveStop(idx, -1);
      else if (btn.dataset.act === 'down') moveStop(idx, 1);
      else if (btn.dataset.act === 'remove') removeStop(idx);
    });
  }

  // Разворот маршрута в обратную сторону
  const swapBtn = document.querySelector('#btn-swap-points');
  if (swapBtn) {
    swapBtn.addEventListener('click', () => {
      if (routeState.stops.length < 2) return;
      routeState.stops.reverse();
      updateRoutePointsUI();
      refreshRoute(false);
    });
  }

  // Оптимизация порядка промежуточных точек
  const optimizeBtn = document.querySelector('#btn-optimize-route');
  if (optimizeBtn) {
    optimizeBtn.addEventListener('click', () => {
      const changed = optimizeStopOrder();
      const label = optimizeBtn.querySelector('[data-i18n]') || optimizeBtn;
      const isRu = currentLang === 'ru';
      label.textContent = changed
        ? (isRu ? 'Порядок оптимизирован ✓' : 'Order optimized ✓')
        : (isRu ? 'Порядок уже оптимален' : 'Already optimal');
      setTimeout(() => {
        label.textContent = i18n[currentLang].btn_optimize;
      }, 1600);
    });
  }

  // Кольцевой маршрут (возврат к старту)
  const toggleRoundTrip = document.querySelector('#toggle-round-trip');
  if (toggleRoundTrip) {
    toggleRoundTrip.addEventListener('change', (e) => {
      routeState.roundTrip = e.target.checked;
      refreshRoute(true);
    });
  }

  // Пресеты готовых сценариев маршрутов
  const presetsData = {
    perseverance: { name: { en: 'Perseverance (Jezero)', ru: 'Perseverance (Езеро)' }, coords: jezero },
    curiosity: { name: { en: 'Curiosity (Gale)', ru: 'Curiosity (Гейл)' }, coords: [-4.5895, 137.4417] },
    insight: { name: { en: 'InSight (Elysium)', ru: 'InSight (Элизий)' }, coords: [4.5024, 135.6234] },
    zhurong: { name: { en: 'Zhurong (Utopia)', ru: 'Чжужун (Утопия)' }, coords: [25.066, 109.925] },
    viking1: { name: { en: 'Viking 1 (Chryse)', ru: 'Viking 1 (Хриса)' }, coords: [22.2692, -47.9493] },
    pathfinder: { name: { en: 'Pathfinder (Ares Vallis)', ru: 'Pathfinder (Долина Ареса)' }, coords: [19.3274, -33.5502] },
    opportunity: { name: { en: 'Opportunity (Meridiani)', ru: 'Opportunity (Меридиани)' }, coords: [-1.9483, -5.5266] },
    valles: { name: { en: 'Valles Marineris (North Rim)', ru: 'Долины Маринер (Северный вал)' }, coords: [-1.0, -60.0] },
    olympus: { name: { en: 'Olympus Mons Caldera', ru: 'Гора Олимп (Olympus Mons)' }, coords: [18.65, -133.8] },
    hellas: { name: { en: 'Hellas Planitia Basin Floor', ru: 'Равнина Эллада (Hellas Planitia)' }, coords: [-42.4, 70.5] },
  };

  // Замена всех точек маршрута набором [{ coords, name }]
  function setRouteStops(list) {
    routeState.stops.forEach((stop) => {
      if (stop.marker) map.removeLayer(stop.marker);
    });
    routeState.stops = [];
    list.slice(0, MAX_ROUTE_STOPS).forEach((item) => addStop(item.coords, item.name));
    setRouteMode(false);
    refreshRoute(true);
  }

  // Обработчики кликов по готовым сценариям (data-stops="a,b,c")
  document.querySelectorAll('.preset-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      const keys = (chip.getAttribute('data-stops') || '').split(',').map((k) => k.trim()).filter(Boolean);
      const list = keys.map((k) => presetsData[k]).filter(Boolean);
      if (list.length >= 2) setRouteStops(list);
    });
  });

  // -------------------------------------------------------------------------
  // Ссылка на маршрут: точки хранятся в адресе (#route=lat,lon;lat,lon&loop=1)
  // -------------------------------------------------------------------------

  function updateShareHash() {
    try {
      const base = window.location.pathname + window.location.search;
      const stops = routeState.stops;
      if (stops.length >= 2) {
        const encoded = stops.map((s) => `${s.coords[0].toFixed(4)},${s.coords[1].toFixed(4)}`).join(';');
        window.history.replaceState(null, '', `${base}#route=${encoded}${routeState.roundTrip ? '&loop=1' : ''}`);
      } else if (window.location.hash.startsWith('#route=')) {
        window.history.replaceState(null, '', base);
      }
    } catch {
      // Адресная строка недоступна (например, в песочнице) — маршрут работает и без ссылки
    }
  }

  // Имя известного объекта по координатам (для восстановления маршрута из ссылки)
  function resolveStopName(coords) {
    const near = (c) => Math.abs(c[0] - coords[0]) < 0.02 && Math.abs(diffLon(c[1], coords[1])) < 0.02;
    for (const info of Object.values(markerStyles)) {
      if (info.coords && near(info.coords)) {
        return {
          en: info.crater ? `${info.name} (${info.crater.en || info.crater})` : info.name,
          ru: info.crater ? `${info.name} (${info.crater.ru || info.crater})` : info.name,
        };
      }
    }
    for (const info of Object.values(landmarkData)) {
      if (info.coords && near(info.coords)) return info.name;
    }
    for (const info of Object.values(presetsData)) {
      if (near(info.coords)) return info.name;
    }
    return CUSTOM_STOP_NAME;
  }

  function restoreRouteFromHash() {
    const match = /route=([^&]+)/.exec(window.location.hash);
    if (!match) return;
    const list = [];
    decodeURIComponent(match[1]).split(';').forEach((pair) => {
      const [lat, lon] = pair.split(',').map(Number);
      if (Number.isFinite(lat) && Number.isFinite(lon) && Math.abs(lat) <= 90 && Math.abs(lon) <= 360) {
        const coords = [lat, normLon(lon)];
        list.push({ coords, name: resolveStopName(coords) });
      }
    });
    if (list.length < 2) return;

    routeState.roundTrip = /[&#]loop=1/.test(window.location.hash);
    if (toggleRoundTrip) toggleRoundTrip.checked = routeState.roundTrip;
    setRouteStops(list);
  }

  // Копирование ссылки на маршрут
  const copyLinkBtn = document.querySelector('#btn-copy-route-link');
  if (copyLinkBtn) {
    copyLinkBtn.addEventListener('click', async () => {
      const isRu = currentLang === 'ru';
      let ok = false;
      try {
        await navigator.clipboard.writeText(window.location.href);
        ok = true;
      } catch {
        ok = false;
      }
      copyLinkBtn.textContent = ok
        ? (isRu ? 'Ссылка скопирована ✓' : 'Link copied ✓')
        : (isRu ? 'Скопируйте ссылку из адресной строки' : 'Copy the link from the address bar');
      setTimeout(() => {
        copyLinkBtn.textContent = i18n[currentLang].btn_copy_link;
      }, 1800);
    });
  }

  updateRoutePointsUI();
  restoreRouteFromHash();

  // Переключатели зон риска и прямого пути
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

  // =========================================================================
  // Meteorological Data & Weather Station Controller
  // =========================================================================

  // База данных метеорологических станций
  const weatherData = {
    perseverance: {
      name: { en: 'Jezero Crater', ru: 'Jezero Crater (Езеро)' },
      station: { en: 'NASA Mars 2020 • MEDA Instrument Suite', ru: 'NASA Mars 2020 • Прибор MEDA' },
      sol: 'Sol 1320',
      coordsText: {
        en: '18.4447° N, 77.4508° E • Elevation -8,448 ft (-2,575 m)',
        ru: '18.4447° N, 77.4508° E • Высота -2 575 м'
      },
      temp: { en: '-72.4°F (-58°C)', ru: '-58°C (-72.4°F)' },
      tempRange: { en: 'Day 5.0°F • Night -115.6°F', ru: 'День -15°C • Ночь -82°C' },
      pressure: { en: '0.109 psi (7.5 hPa)', ru: '7.5 hPa (750 Па)' },
      pressureSub: { en: '0.22 inHg • 0.0074 atm', ru: '0.0074 атм • 0.22 inHg' },
      wind: { en: '10.7 mph (4.8 m/s)', ru: '4.8 м/с (17.3 км/ч)' },
      windSub: { en: 'Gusts up to 42.5 mph • WNW', ru: 'Порывы до 19 м/с • WNW' },
      tau: 'τ = 0.42',
      uvSub: { en: 'Moderate • UV Index 9', ru: 'Умеренно • УФ-индекс 9' },
      density: { en: '18.2 g/m³ (1.48% Earth)', ru: '18.2 г/м³ (1.48% Земли)' },
      densitySub: { en: 'Dynamic pressure: ~68× weaker than Earth', ru: 'Аэродинамический напор: в 68× слабее земного' },
      sound: { en: '516 mph (230.7 m/s)', ru: '230.7 м/с (831 км/ч)' },
      soundSub: { en: 'SuperCam acoustic dispersion: +10 m/s >400Hz', ru: 'SuperCam дисперсия: +10 м/с выше 400 Гц' },
      boil: { en: '37.1°F (+2.8°C)', ru: '+2.8°C (37.1°F)' },
      boilSub: { en: 'Armstrong Limit: Liquid phase permitted', ru: 'Предел Армстронга: жидкая фаза возможна' },
      radiation: { en: '0.67 mSv/sol', ru: '0.67 мЗв/сол (ГКЛ)' },
      radiationSub: { en: '357 W/m² solar • MSL RAD benchmark', ru: '357 Вт/м² инсоляция • Архив RAD' },
      physicsLat: 18.4447,
      physicsElev: -2575,
      microclimate: {
        en: 'Diurnal convective dust devils up to 3,280 ft (1 km) high. The MEDA instrument suite detects microbaric waves and seasonal pressure oscillations as CO₂ freezes out at polar caps.',
        ru: 'Суточные ветровые вихри («пылевые дьяволы») высотой до 1 км. Прибор MEDA фиксирует микробаровые волны и сезонное падение давления при замерзании CO₂ на полярных шапках.'
      },
    },
    curiosity: {
      name: { en: 'Gale Crater', ru: 'Gale Crater (Гейл)' },
      station: { en: 'NASA MSL • REMS Meteorological Station', ru: 'NASA MSL • Станция REMS' },
      sol: 'Sol 4360',
      coordsText: {
        en: '4.5895° S, 137.4417° E • Elevation -14,600 ft (-4,450 m)',
        ru: '4.5895° S, 137.4417° E • Высота -4 450 м'
      },
      temp: { en: '-61.6°F (-52°C)', ru: '-52°C (-61.6°F)' },
      tempRange: { en: 'Day 17.6°F • Night -108.4°F', ru: 'День -8°C • Ночь -78°C' },
      pressure: { en: '0.122 psi (8.4 hPa)', ru: '8.4 hPa (840 Па)' },
      pressureSub: { en: '0.25 inHg • 0.0083 atm', ru: '0.0083 атм • 0.25 inHg' },
      wind: { en: '7.8 mph (3.5 m/s)', ru: '3.5 м/с (12.6 км/ч)' },
      windSub: { en: 'Gusts up to 31.3 mph • slope breeze', ru: 'Порывы до 14 м/с • бриз со склона' },
      tau: 'τ = 0.55',
      uvSub: { en: 'Equatorial • UV Index 10', ru: 'Экваториальный • УФ-индекс 10' },
      density: { en: '19.8 g/m³ (1.62% Earth)', ru: '19.8 г/м³ (1.62% Земли)' },
      densitySub: { en: 'Crater floor air trap: denser microclimate', ru: 'Ловушка дна кратера: повышенная плотность' },
      sound: { en: '523 mph (233.9 m/s)', ru: '233.9 м/с (842 км/ч)' },
      soundSub: { en: 'Equatorial warm boundary layer speed', ru: 'Скорость в экваториальном теплом слое' },
      boil: { en: '40.0°F (+4.4°C)', ru: '+4.4°C (40.0°F)' },
      boilSub: { en: 'Elevated barometric boiling threshold', ru: 'Повышенный порог закипания на дне' },
      radiation: { en: '0.64 mSv/sol', ru: '0.64 мЗв/сол (ГКЛ)' },
      radiationSub: { en: '337 W/m² solar • RAD 12-yr baseline', ru: '337 Вт/м² инсоляция • База данных RAD' },
      physicsLat: -4.5895,
      physicsElev: -4450,
      microclimate: {
        en: 'Intra-crater wind circulation: daytime warm upslope breezes along Mount Sharp and nocturnal drainage of cold air to crater floor. Seasonal methane background pulses.',
        ru: 'Кратерная ветровая циркуляция: теплый восходящий поток днем по склонам горы Эолида (Шарпа) и ночной сток холодного воздуха на дно кратера. Сезонные колебания фонового метана.'
      },
    },
    insight: {
      name: { en: 'Elysium Planitia', ru: 'Elysium Planitia (Элизий)' },
      station: { en: 'NASA InSight • TWINS Sensors', ru: 'NASA InSight • Сенсоры TWINS' },
      sol: { en: 'Mission Archive', ru: 'Архив миссии' },
      coordsText: {
        en: '4.5024° N, 135.6234° E • Elevation -8,530 ft (-2,600 m)',
        ru: '4.5024° N, 135.6234° E • Высота -2 600 м'
      },
      temp: { en: '-79.6°F (-62°C)', ru: '-62°C (-79.6°F)' },
      tempRange: { en: 'Day 1.4°F • Night -128.2°F', ru: 'День -17°C • Ночь -89°C' },
      pressure: { en: '0.107 psi (7.4 hPa)', ru: '7.4 hPa (740 Па)' },
      pressureSub: { en: '0.22 inHg • 0.0073 atm', ru: '0.0073 атм • 0.22 inHg' },
      wind: { en: '11.6 mph (5.2 m/s)', ru: '5.2 м/с (18.7 км/ч)' },
      windSub: { en: 'Gusts up to 49.2 mph • SW', ru: 'Порывы до 22 м/с • SW' },
      tau: 'τ = 0.48',
      uvSub: { en: 'Equatorial • UV Index 9', ru: 'Экваториальный • УФ-индекс 9' },
      density: { en: '18.3 g/m³ (1.49% Earth)', ru: '18.3 г/м³ (1.49% Земли)' },
      densitySub: { en: 'Smooth basalt plains unobstructed drag', ru: 'Открытое ветровое поле базальтовых равнин' },
      sound: { en: '511 mph (228.6 m/s)', ru: '228.6 м/с (823 км/ч)' },
      soundSub: { en: 'Infrasound vortex regime (SEIS telemetry)', ru: 'Инфразвуковой режим вихрей SEIS' },
      boil: { en: '36.8°F (+2.6°C)', ru: '+2.6°C (36.8°F)' },
      boilSub: { en: 'Armstrong Limit: Transient water viable', ru: 'Предел Армстронга: вода метастабильна' },
      radiation: { en: '0.68 mSv/sol', ru: '0.68 мЗв/сол' },
      radiationSub: { en: '361 W/m² solar • Unshielded plains', ru: '361 Вт/м² инсоляция • Открытая равнина' },
      physicsLat: 4.5024,
      physicsElev: -2600,
      microclimate: {
        en: 'Smooth volcanic expanse: TWINS and SEIS recorded thousands of microbaric vortex encounters and low-frequency infrasound from unobstructed Martian surface winds.',
        ru: 'Гладкая вулканическая равнина: датчики TWINS и сейсмометр SEIS зарегистрировали тысячи микровихрей давления и инфразвуковые колебания открытого марсианского ветра.'
      },
    },
    phoenix: {
      name: { en: 'Vastitas Borealis', ru: 'Vastitas Borealis (Северная равнина)' },
      station: { en: 'NASA Phoenix • MET Station & Lidar', ru: 'NASA Phoenix • Станция MET и Лидар' },
      sol: { en: 'Mission Archive', ru: 'Архив миссии' },
      coordsText: {
        en: '68.2188° N, 125.7518° W • Elevation -13,450 ft (-4,100 m)',
        ru: '68.2188° N, 125.7518° W • Высота -4 100 м'
      },
      temp: { en: '-108.4°F (-78°C)', ru: '-78°C (-108.4°F)' },
      tempRange: { en: 'Day -23.8°F • Night -140.8°F', ru: 'День -31°C • Ночь -96°C' },
      pressure: { en: '0.117 psi (8.1 hPa)', ru: '8.1 hPa (810 Па)' },
      pressureSub: { en: '0.24 inHg • 0.0080 atm', ru: '0.0080 атм • 0.24 inHg' },
      wind: { en: '9.2 mph (4.1 m/s)', ru: '4.1 м/с (14.8 км/ч)' },
      windSub: { en: 'Gusts up to 35.8 mph • E', ru: 'Порывы до 16 м/с • E' },
      tau: 'τ = 0.28',
      uvSub: { en: 'Circumpolar • UV Index 3', ru: 'Приполярный • УФ-индекс 3' },
      density: { en: '21.6 g/m³ (1.77% Earth)', ru: '21.6 г/м³ (1.77% Земли)' },
      densitySub: { en: 'Cryogenic air compression effect', ru: 'Криогенное сжатие плотного холодного воздуха' },
      sound: { en: '492 mph (219.8 m/s)', ru: '219.8 м/с (791 км/ч)' },
      soundSub: { en: 'Sub-zero acoustic slowdown in polar air', ru: 'Акустическое замедление в морозном воздухе' },
      boil: { en: '39.1°F (+3.9°C)', ru: '+3.9°C (39.1°F)' },
      boilSub: { en: 'Subsurface permafrost ice equilibrium', ru: 'Равновесие приповерхностного мерзлотного льда' },
      radiation: { en: '0.71 mSv/sol', ru: '0.71 мЗв/сол' },
      radiationSub: { en: '102 W/m² solar • High-latitude slant', ru: '102 Вт/м² инсоляция • Наклонные лучи' },
      physicsLat: 68.2188,
      physicsElev: -4100,
      microclimate: {
        en: 'Subarctic polar belt: the MET atmospheric lidar detected precipitation of water-ice crystal virga from 13,100 ft (4 km) altitude sublimating prior to ground impact.',
        ru: 'Субарктический приполярный пояс: атмосферный лазерный лидар MET зафиксировал снегопад из кристаллов водяного льда на высоте 4 км, сублимирующий до касания поверхности (вирга).'
      },
    },
    opportunity: {
      name: { en: 'Meridiani Planum', ru: 'Meridiani Planum (Меридиана)' },
      station: { en: 'NASA MER-B • Mini-TES & APXS', ru: 'NASA MER-B • Приборы Mini-TES и APXS' },
      sol: { en: 'Mission Archive (5,352 Sols)', ru: 'Архив миссии (5 352 сола)' },
      coordsText: {
        en: '1.9483° S, 5.5266° W • Elevation -4,724 ft (-1,440 m)',
        ru: '1.9483° S, 5.5266° W • Высота -1 440 м'
      },
      temp: { en: '-67.0°F (-55°C)', ru: '-55°C (-67.0°F)' },
      tempRange: { en: 'Day 24.8°F • Night -112.0°F', ru: 'День -4°C • Ночь -80°C' },
      pressure: { en: '0.090 psi (6.2 hPa)', ru: '6.2 hPa (620 Па)' },
      pressureSub: { en: '0.18 inHg • 0.0061 atm', ru: '0.0061 атм • 0.18 inHg' },
      wind: { en: '8.5 mph (3.8 m/s)', ru: '3.8 м/с (13.7 км/ч)' },
      windSub: { en: 'Gusts up to 40.3 mph • Dust Storm Alley', ru: 'Порывы до 18 м/с • Сезонные бури' },
      tau: 'τ = 0.60',
      uvSub: { en: 'Equatorial • UV Index 10', ru: 'Экваториальный • УФ-индекс 10' },
      density: { en: '14.8 g/m³ (1.21% Earth)', ru: '14.8 г/м³ (1.21% Земли)' },
      densitySub: { en: 'Plateau elevation attenuation', ru: 'Разрежение на возвышенном плато' },
      sound: { en: '518 mph (231.5 m/s)', ru: '231.5 м/с (833 км/ч)' },
      soundSub: { en: 'Equatorial plain acoustic velocity', ru: 'Акустическая скорость экваториальных равнин' },
      boil: { en: '32.3°F (+0.2°C)', ru: '+0.2°C (32.3°F)' },
      boilSub: { en: 'Triple point margin (near freezing limit)', ru: 'На грани тройной точки воды' },
      radiation: { en: '0.66 mSv/sol', ru: '0.66 мЗв/сол' },
      radiationSub: { en: '321 W/m² solar • 2018 storm blackout site', ru: '321 Вт/м² инсоляция • Эпицентр бури 2018' },
      physicsLat: -1.9483,
      physicsElev: -1440,
      microclimate: {
        en: 'Expansive gray hematite plains with ripple dunes. In 2018, an apocalyptic planet-encircling dust storm (τ > 10.8) starved Opportunity of solar power, culminating a historic 28.06-mile odyssey.',
        ru: 'Бескрайние гематитовые равнины с рябью песчаных дюн. В 2018 году глобальная пылевая буря планетарного масштаба (τ > 10.8) обесточила марсоход, завершив исторический 14-летний марафон.'
      },
    },
    spirit: {
      name: { en: 'Gusev Crater', ru: 'Gusev Crater (Гусев)' },
      station: { en: 'NASA MER-A • Athena Science Suite', ru: 'NASA MER-A • Комплекс Athena' },
      sol: { en: 'Mission Archive (2,210 Sols)', ru: 'Архив миссии (2 210 солов)' },
      coordsText: {
        en: '14.5684° S, 175.4726° E • Elevation -6,266 ft (-1,910 m)',
        ru: '14.5684° S, 175.4726° E • Высота -1 910 м'
      },
      temp: { en: '-72.4°F (-58°C)', ru: '-58°C (-72.4°F)' },
      tempRange: { en: 'Day 21.2°F • Night -115.6°F', ru: 'День -6°C • Ночь -82°C' },
      pressure: { en: '0.099 psi (6.8 hPa)', ru: '6.8 hPa (680 Па)' },
      pressureSub: { en: '0.20 inHg • 0.0067 atm', ru: '0.0067 атм • 0.20 inHg' },
      wind: { en: '10.1 mph (4.5 m/s)', ru: '4.5 м/с (16.2 км/ч)' },
      windSub: { en: 'Vortices up to 47.0 mph • Dust Devil Alley', ru: 'Вихри до 21 м/с • Аллея вихрей' },
      tau: 'τ = 0.52',
      uvSub: { en: 'High Insolation • UV Index 9', ru: 'Высокая инсоляция • УФ-индекс 9' },
      density: { en: '16.5 g/m³ (1.34% Earth)', ru: '16.5 г/м³ (1.34% Земли)' },
      densitySub: { en: 'Thermal convective updrafts', ru: 'Термические восходящие конвективные потоки' },
      sound: { en: '516 mph (230.7 m/s)', ru: '230.7 м/с (831 км/ч)' },
      soundSub: { en: 'Boundary layer acoustic profile', ru: 'Акустический профиль приземного слоя' },
      boil: { en: '34.6°F (+1.5°C)', ru: '+1.5°C (34.6°F)' },
      boilSub: { en: 'Armstrong Limit: Narrow liquid window', ru: 'Предел Армстронга: узкое окно жидкой фазы' },
      radiation: { en: '0.67 mSv/sol', ru: '0.67 мЗв/сол' },
      radiationSub: { en: '332 W/m² solar • Columbia Hills flank', ru: '332 Вт/м² инсоляция • Склоны Колумбия' },
      physicsLat: -14.5684,
      physicsElev: -1910,
      microclimate: {
        en: 'Dust Devil Alley: Spirit recorded hundreds of active convective whirlwinds sweeping across Gusev floor, periodically cleaning dust off solar arrays and exposing ancient hydrothermal opaline silica.',
        ru: '«Аллея пылевых дьяволов»: Spirit заснял сотни активных вихрей, регулярно сдувавших пыль с солнечных батарей и обнаживших чистейшие гидротермальные кремнеземы древних гейзеров.'
      },
    },
    viking1: {
      name: { en: 'Chryse Planitia', ru: 'Chryse Planitia (Хриса)' },
      station: { en: 'NASA Viking 1 • Meteorology Instrument Package', ru: 'NASA Viking 1 • Метеокомплекс' },
      sol: { en: 'Mission Archive (1976–1982)', ru: 'Архив миссии (1976–1982)' },
      coordsText: {
        en: '22.2692° N, 47.9493° W • Elevation -11,900 ft (-3,627 m)',
        ru: '22.2692° N, 47.9493° W • Высота -3 627 м'
      },
      temp: { en: '-81.4°F (-63°C)', ru: '-63°C (-81.4°F)' },
      tempRange: { en: 'Day 6.8°F • Night -122.8°F', ru: 'День -14°C • Ночь -86°C' },
      pressure: { en: '0.110 psi (7.6 hPa)', ru: '7.6 hPa (760 Па)' },
      pressureSub: { en: '0.22 inHg • 0.0075 atm', ru: '0.0075 атм • 0.22 inHg' },
      wind: { en: '9.4 mph (4.2 m/s)', ru: '4.2 м/с (15.1 км/ч)' },
      windSub: { en: 'Storm gusts up to 58.2 mph (26 m/s)', ru: 'Штормовые порывы до 26 м/с' },
      tau: 'τ = 0.50',
      uvSub: { en: 'Subtropical • UV Index 8', ru: 'Субтропический • УФ-индекс 8' },
      density: { en: '18.9 g/m³ (1.54% Earth)', ru: '18.9 г/м³ (1.54% Земли)' },
      densitySub: { en: 'Lowland basin air concentration', ru: 'Концентрация воздуха в котловине Хриса' },
      sound: { en: '511 mph (228.3 m/s)', ru: '228.3 м/с (822 км/ч)' },
      soundSub: { en: 'Historic first in-situ acoustic medium', ru: 'Исторически первая измеренная среда' },
      boil: { en: '37.4°F (+3.0°C)', ru: '+3.0°C (37.4°F)' },
      boilSub: { en: 'Stable barometric liquid window', ru: 'Стабильное барометрическое окно' },
      radiation: { en: '0.67 mSv/sol', ru: '0.67 мЗв/сол' },
      radiationSub: { en: '316 W/m² solar • Historic touchdown site', ru: '316 Вт/м² инсоляция • Первая посадка' },
      physicsLat: 22.2692,
      physicsElev: -3627,
      microclimate: {
        en: 'Pioneer Martian weather station: recorded the first complete multi-year planetary barometric cycle, revealing that 25% of the entire Martian atmosphere freezes out seasonally onto the polar caps.',
        ru: 'Первая метеостанция на Марсе: зафиксировала полный многолетний цикл давления и доказала, что четверть всей атмосферы Марса циклически замерзает в полярные шапки зимой.'
      },
    },
    pathfinder: {
      name: { en: 'Ares Vallis', ru: 'Ares Vallis (Долина Арес)' },
      station: { en: 'NASA Pathfinder • ASI/MET Atmospheric Package', ru: 'NASA Pathfinder • Пакет ASI/MET' },
      sol: { en: 'Mission Archive (1997)', ru: 'Архив миссии (1997)' },
      coordsText: {
        en: '19.3274° N, 33.5502° W • Elevation -11,991 ft (-3,655 m)',
        ru: '19.3274° N, 33.5502° W • Высота -3 655 м'
      },
      temp: { en: '-85.0°F (-65°C)', ru: '-65°C (-85.0°F)' },
      tempRange: { en: 'Day 14.0°F • Night -126.4°F', ru: 'День -10°C • Ночь -88°C' },
      pressure: { en: '0.103 psi (7.1 hPa)', ru: '7.1 hPa (710 Па)' },
      pressureSub: { en: '0.21 inHg • 0.0070 atm', ru: '0.0070 атм • 0.21 inHg' },
      wind: { en: '8.9 mph (4.0 m/s)', ru: '4.0 м/с (14.4 км/ч)' },
      windSub: { en: 'Morning turbulence up to 33.6 mph', ru: 'Утренняя турбулентность до 15 м/с' },
      tau: 'τ = 0.45',
      uvSub: { en: 'Moderate • UV Index 8', ru: 'Умеренный • УФ-индекс 8' },
      density: { en: '17.8 g/m³ (1.45% Earth)', ru: '17.8 г/м³ (1.45% Земли)' },
      densitySub: { en: 'Outflow channel micro-depression', ru: 'Микродепрессия паводкового русла' },
      sound: { en: '507 mph (226.7 m/s)', ru: '226.7 м/с (816 км/ч)' },
      soundSub: { en: 'ASI/MET mast temperature sound tracking', ru: 'Градиент мачты ASI/MET' },
      boil: { en: '35.7°F (+2.1°C)', ru: '+2.1°C (35.7°F)' },
      boilSub: { en: 'Armstrong Limit: Liquid phase permitted', ru: 'Предел Армстронга: жидкая фаза возможна' },
      radiation: { en: '0.67 mSv/sol', ru: '0.67 мЗв/сол' },
      radiationSub: { en: '343 W/m² solar • Carl Sagan Station', ru: '343 Вт/м² инсоляция • Станция Сагана' },
      physicsLat: 19.3274,
      physicsElev: -3655,
      microclimate: {
        en: 'Outflow flood deposits: ASI/MET recorded abrupt early-morning temperature surges of up to 27°F (15°C) within minutes as warm thermal plumes detached from sunlit boulders.',
        ru: 'Катастрофические осадочные валуны: датчики зафиксировали резкие утренние скачки температуры на 15°C за считанные минуты при подъеме прогретых тепловых микроплюмов от камней.'
      },
    },
    zhurong: {
      name: { en: 'Utopia Planitia', ru: 'Utopia Planitia (Утопия)' },
      station: { en: 'CNSA Tianwen-1 • MCS Meteorological Station', ru: 'CNSA Тяньвэнь-1 • Станция MCS' },
      sol: { en: 'Mission Archive (2021–2022)', ru: 'Архив миссии (2021–2022)' },
      coordsText: {
        en: '25.0660° N, 109.9250° E • Elevation -13,448 ft (-4,099 m)',
        ru: '25.0660° N, 109.9250° E • Высота -4 099 м'
      },
      temp: { en: '-76.0°F (-60°C)', ru: '-60°C (-76.0°F)' },
      tempRange: { en: 'Day 10.4°F • Night -121.0°F', ru: 'День -12°C • Ночь -85°C' },
      pressure: { en: '0.116 psi (8.0 hPa)', ru: '8.0 hPa (800 Па)' },
      pressureSub: { en: '0.24 inHg • 0.0079 atm', ru: '0.0079 атм • 0.24 inHg' },
      wind: { en: '8.7 mph (3.9 m/s)', ru: '3.9 м/с (14.0 км/ч)' },
      windSub: { en: 'Gusts up to 38.0 mph • NE', ru: 'Порывы до 17 м/с • NE' },
      tau: 'τ = 0.48',
      uvSub: { en: 'Subtropical Lowlands • UV 8', ru: 'Северная низменность • УФ 8' },
      density: { en: '19.6 g/m³ (1.60% Earth)', ru: '19.6 г/м³ (1.60% Земли)' },
      densitySub: { en: 'Sedimentary basin air density', ru: 'Плотный воздух осадочного бассейна' },
      sound: { en: '514 mph (229.8 m/s)', ru: '229.8 м/с (827 км/ч)' },
      soundSub: { en: 'Low-frequency acoustic resonance', ru: 'Низкочастотный акустический резонанс' },
      boil: { en: '38.7°F (+3.7°C)', ru: '+3.7°C (38.7°F)' },
      boilSub: { en: 'Armstrong Limit: Liquid phase permitted', ru: 'Предел Армстронга: жидкая фаза возможна' },
      radiation: { en: '0.67 mSv/sol', ru: '0.67 мЗв/сол' },
      radiationSub: { en: '313 W/m² solar • Vast sedimentary plain', ru: '313 Вт/м² инсоляция • Равнина Утопия' },
      physicsLat: 25.066,
      physicsElev: -4099,
      microclimate: {
        en: 'Southern Utopia sedimentary plain: thick subsurface water-ice regolith. Zhurong rover observed severe seasonal winter cold dormancy with thin frost crusting on solar wings.',
        ru: 'Южная осадочная равнина Утопии: мощные подповерхностные пласты водяного льда. Зимой марсоход зафиксировал экстремальные заморозки с выпадением тонкой ледяной корки на солнечные панели.'
      },
    },
    olympus: {
      name: { en: 'Olympus Mons', ru: 'Гора Олимп (Olympus Mons)' },
      station: { en: 'MCD Orbital Model • Elevation +13.19 mi (+69,649 ft)', ru: 'Орбитальная модель MCD • Высота +21.2 км' },
      sol: { en: 'Ls 180° (Equinox)', ru: 'Ls 180° (Равноденствие)' },
      coordsText: {
        en: '18.65° N, 133.80° W • Elevation +69,649 ft (+13.19 mi)',
        ru: '18.65° N, 133.80° W • Высота +21 229 м'
      },
      temp: { en: '-139.0°F (-95°C)', ru: '-95°C (-139.0°F)' },
      tempRange: { en: 'Day -54.4°F • Night -184.0°F', ru: 'День -48°C • Ночь -120°C' },
      pressure: { en: '0.009 psi (0.6 hPa)', ru: '0.6 hPa (60 Па — вакуум)' },
      pressureSub: { en: '0.018 inHg • Near vacuum (60 Pa)', ru: '0.0006 атм • 0.018 inHg' },
      wind: { en: '32.4 mph (14.5 m/s)', ru: '14.5 м/с (52.2 км/ч)' },
      windSub: { en: 'Jet streams up to 100.7 mph (45 m/s)', ru: 'Струйные течения до 45 м/с' },
      tau: 'τ = 0.12',
      uvSub: { en: 'Extreme • UV Index 12+', ru: 'Критический • УФ-индекс 12+' },
      density: { en: '1.8 g/m³ (0.14% Earth)', ru: '1.8 г/м³ (0.14% Земли)' },
      densitySub: { en: 'Near-vacuum: Wings & parachutes ineffective', ru: 'Вакуум: парашюты и крылья не создают тяги' },
      sound: { en: '470 mph (210.0 m/s)', ru: '210.0 м/с (756 км/ч)' },
      soundSub: { en: 'Severe acoustic attenuation in near-vacuum', ru: 'Резкое затухание звука в разрежении' },
      boil: { en: 'N/A (Sublimation < 6.1 hPa)', ru: 'Возгонка (P < 6.1 гПа — тройная точка)' },
      boilSub: { en: 'Water boils instantly at 33°F (+0.5°C)', ru: 'Вода закипает мгновенно при +0.5°C' },
      radiation: { en: '0.78 mSv/sol', ru: '0.78 мЗв/сол (критический поток)' },
      radiationSub: { en: '489 W/m² solar • Summit towers above 80% air', ru: '489 Вт/м² инсоляция • Вершина над 80% воздуха' },
      physicsLat: 18.65,
      physicsElev: 21229,
      microclimate: {
        en: 'Summit towers above 80% of Mars atmosphere. Ambient density is near-vacuum; boiling point of water drops to 33°F (+0.5°C), instantly vaporizing. Flank slopes spawn colossal orographic clouds.',
        ru: 'Вершина возвышается над 80% марсианской атмосферы. Плотность воздуха экстремально низкая, вода закипает при +0.5°C и сразу возгоняется. У подножия образуются грандиозные ледяные орографические облака.'
      },
    },
    valles: {
      name: { en: 'Valles Marineris', ru: 'Долины Маринер (Valles Marineris)' },
      station: { en: 'MCD Orbital Model • Melas Chasma', ru: 'Орбитальная модель MCD • Каньон Мелас' },
      sol: { en: 'Ls 180° (Equinox)', ru: 'Ls 180° (Равноденствие)' },
      coordsText: {
        en: '13.90° S, 59.20° W • Depth -23,620 ft (-4.47 mi)',
        ru: '13.90° S, 59.20° W • Глубина -7 200 м'
      },
      temp: { en: '-54.4°F (-48°C)', ru: '-48°C (-54.4°F)' },
      tempRange: { en: 'Day 24.8°F • Night -97.6°F', ru: 'День -4°C • Ночь -72°C' },
      pressure: { en: '0.148 psi (10.2 hPa)', ru: '10.2 hPa (1 020 Па)' },
      pressureSub: { en: '0.30 inHg • 0.0101 atm', ru: '0.0101 атм • 0.30 inHg' },
      wind: { en: '18.8 mph (8.4 m/s)', ru: '8.4 м/с (30.2 км/ч)' },
      windSub: { en: 'Katabatic channel drainage winds', ru: 'Катабатические ветры вдоль русла' },
      tau: 'τ = 0.65',
      uvSub: { en: 'Canyon wall shielding • UV 8', ru: 'Экранирован стенами • УФ 8' },
      density: { en: '23.6 g/m³ (1.93% Earth)', ru: '23.6 г/м³ (1.93% Земли)' },
      densitySub: { en: 'Dense air floor cushion effect', ru: 'Плотная газовая подушка дна каньона' },
      sound: { en: '528 mph (236.0 m/s)', ru: '236.0 м/с (850 км/ч)' },
      soundSub: { en: 'Deep chasm warm acoustic waveguide', ru: 'Теплый акустический волновод каньона' },
      boil: { en: '45.0°F (+7.2°C)', ru: '+7.2°C (45.0°F)' },
      boilSub: { en: 'Enhanced liquid stability corridor', ru: 'Расширенная зона стабильности жидкости' },
      radiation: { en: '0.58 mSv/sol', ru: '0.58 мЗв/сол' },
      radiationSub: { en: '291 W/m² solar • Significant cliff shadow', ru: '291 Вт/м² инсоляция • Экранирование скалами' },
      physicsLat: -13.9,
      physicsElev: -7200,
      microclimate: {
        en: 'Deepest canyon chasm: morning floors fill with dense water-ice fog. Due to elevated pressure, daytime temperatures can approach 32°F (0°C) on sun-facing screes.',
        ru: 'Глубочайший рифтовый каньон: утреннее дно заполняется плотными туманами из водяного льда. Из-за повышенного давления температура днем способна приближаться к нулевой отметке.'
      },
    },
    noctis: {
      name: { en: 'Noctis Labyrinthus', ru: 'Лабиринт Ночи (Noctis Labyrinthus)' },
      station: { en: 'MCD Orbital Model • Graben Grid', ru: 'Орбитальная модель MCD • Сетка грабенов' },
      sol: { en: 'Ls 180° (Equinox)', ru: 'Ls 180° (Равноденствие)' },
      coordsText: {
        en: '7.00° S, 102.20° W • Elevation +10,500 ft (+3,200 m)',
        ru: '7.00° S, 102.20° W • Высота +3 200 м'
      },
      temp: { en: '-90.4°F (-68°C)', ru: '-68°C (-90.4°F)' },
      tempRange: { en: 'Day -7.6°F • Night -137.2°F', ru: 'День -22°C • Ночь -94°C' },
      pressure: { en: '0.075 psi (5.2 hPa)', ru: '5.2 hPa (520 Па)' },
      pressureSub: { en: '0.15 inHg • 0.0051 atm', ru: '0.0051 атм • 0.15 inHg' },
      wind: { en: '15.2 mph (6.8 m/s)', ru: '6.8 м/с (24.5 км/ч)' },
      windSub: { en: 'Turbulent canyon eddies', ru: 'Сложные лабиринтные завихрения' },
      tau: 'τ = 0.38',
      uvSub: { en: 'Highland • UV Index 10', ru: 'Высокогорный • УФ-индекс 10' },
      density: { en: '13.2 g/m³ (1.08% Earth)', ru: '13.2 г/м³ (1.08% Земли)' },
      densitySub: { en: 'Highland plateau rarefaction', ru: 'Разрежение высокогорного плато' },
      sound: { en: '503 mph (224.8 m/s)', ru: '224.8 м/с (809 км/ч)' },
      soundSub: { en: 'Complex graben echo reflections', ru: 'Сложные эхо-отражения стен грабенов' },
      boil: { en: 'N/A (Sublimation < 6.1 hPa)', ru: 'Возгонка (P < 6.1 гПа — тройная точка)' },
      boilSub: { en: 'Rapid ice sublimation in dry troughs', ru: 'Быстрая возгонка льда в сухих провалах' },
      radiation: { en: '0.70 mSv/sol', ru: '0.70 мЗв/сол' },
      radiationSub: { en: '397 W/m² solar • High-altitude exposure', ru: '397 Вт/м² инсоляция • Высокогорная экспозиция' },
      physicsLat: -7.0,
      physicsElev: 1000,
      microclimate: {
        en: 'Intersecting grabens create closed wind recirculation cells. Early mornings see brief moisture condensation forming delicate cirrus-like plumes above narrow troughs.',
        ru: 'Сетка каньонов создает замкнутые ветровые вихри. Ранним утром в узких тектонических провалах наблюдается кратковременная конденсация паров в тонкие перистые микрооблака.'
      },
    },
    hellas: {
      name: { en: 'Hellas Planitia', ru: 'Равнина Эллада (Hellas Planitia)' },
      station: { en: 'MCD Orbital Model • Basin Floor', ru: 'Орбитальная модель MCD • Дно бассейна' },
      sol: { en: 'Ls 180° (Equinox)', ru: 'Ls 180° (Равноденствие)' },
      coordsText: {
        en: '42.40° S, 70.50° E • Floor -23,465 ft (-4.44 mi)',
        ru: '42.40° S, 70.50° E • Дно -7 152 м'
      },
      temp: { en: '-49.0°F (-45°C)', ru: '-45°C (-49.0°F)' },
      tempRange: { en: 'Day 28.4°F • Night -101.2°F', ru: 'День -2°C • Ночь -74°C' },
      pressure: { en: '0.171 psi (11.8 hPa)', ru: '11.8 hPa (1 180 Па — максимум)' },
      pressureSub: { en: '0.35 inHg • Martian maximum (1,180 Pa)', ru: '0.0116 атм • 0.35 inHg' },
      wind: { en: '25.1 mph (11.2 m/s)', ru: '11.2 м/с (40.3 км/ч)' },
      windSub: { en: 'Storm gusts up to 78.3 mph (35 m/s)', ru: 'Порывы до 35 м/с • Штормовой' },
      tau: 'τ = 0.85',
      uvSub: { en: 'Dust-attenuated • UV 7', ru: 'Пылевое рассеяние • УФ 7' },
      density: { en: '27.0 g/m³ (2.20% Earth)', ru: '27.0 г/м³ (2.20% Земли)' },
      densitySub: { en: 'Planetary density apex (2.2% Earth)', ru: 'Максимум плотности атмосферы Марса' },
      sound: { en: '531 mph (237.6 m/s)', ru: '237.6 м/с (855 км/ч)' },
      soundSub: { en: 'Highest speed of sound on Mars', ru: 'Наивысшая скорость звука на планете' },
      boil: { en: '48.9°F (+9.4°C)', ru: '+9.4°C (48.9°F)' },
      boilSub: { en: 'Broadest liquid water stability zone', ru: 'Наиширочайшая зона жидкой фазы' },
      radiation: { en: '0.52 mSv/sol', ru: '0.52 мЗв/сол' },
      radiationSub: { en: '137 W/m² solar • Thick column air shield', ru: '137 Вт/м² инсоляция • Защитный слой атмосферы' },
      physicsLat: -42.4,
      physicsElev: -7152,
      microclimate: {
        en: 'Barometric apex of Mars: at pressures reaching 0.18 psi (12.4 hPa), liquid water can transiently exist above 32°F (0°C) in metastable state. Principal breeding zone for planet-encircling dust storms.',
        ru: 'Барометрический рекорд Марса: при давлении до 12.4 гПа вода может теоретически существовать в метастабильной жидкой фазе при температуре выше 0°C. Главный очаг зарождения глобальных пылевых бурь.'
      },
    },
    cydonia: {
      name: { en: 'Cydonia Mensae', ru: 'Кидония (Cydonia Mensae)' },
      station: { en: 'MCD Orbital Model • Mesa Field', ru: 'Орбитальная модель MCD • Останцовые горы' },
      sol: { en: 'Ls 180° (Equinox)', ru: 'Ls 180° (Равноденствие)' },
      coordsText: {
        en: '40.75° N, 9.46° W • Elevation -6,890 ft (-2,100 m)',
        ru: '40.75° N, 9.46° W • Высота -2 100 м'
      },
      temp: { en: '-86.8°F (-66°C)', ru: '-66°C (-86.8°F)' },
      tempRange: { en: 'Day -11.2°F • Night -130.0°F', ru: 'День -24°C • Ночь -90°C' },
      pressure: { en: '0.104 psi (7.2 hPa)', ru: '7.2 hPa (720 Па)' },
      pressureSub: { en: '0.21 inHg • 0.0071 atm', ru: '0.0071 атм • 0.21 inHg' },
      wind: { en: '12.3 mph (5.5 m/s)', ru: '5.5 м/с (19.8 км/ч)' },
      windSub: { en: 'Gusts up to 40.3 mph • W', ru: 'Порывы до 18 м/с • W' },
      tau: 'τ = 0.44',
      uvSub: { en: 'Moderate • UV Index 6', ru: 'Умеренный • УФ-индекс 6' },
      density: { en: '18.1 g/m³ (1.48% Earth)', ru: '18.1 г/м³ (1.48% Земли)' },
      densitySub: { en: 'Dichotomy transition aerodynamic zone', ru: 'Аэродинамика перехода дихотомии' },
      sound: { en: '506 mph (225.9 m/s)', ru: '225.9 м/с (813 км/ч)' },
      soundSub: { en: 'Acoustic reflection off mesa walls', ru: 'Акустическое эхо от столовых возвышенностей' },
      boil: { en: '36.1°F (+2.3°C)', ru: '+2.3°C (36.1°F)' },
      boilSub: { en: 'Armstrong Limit: Liquid phase permitted', ru: 'Предел Армстронга: жидкая фаза возможна' },
      radiation: { en: '0.67 mSv/sol', ru: '0.67 мЗв/сол' },
      radiationSub: { en: '248 W/m² solar • Northern plains border', ru: '248 Вт/м² инсоляция • Граница равнины Ацидалия' },
      physicsLat: 40.75,
      physicsElev: -2100,
      microclimate: {
        en: 'Boundary between southern cratered uplands and Acidalia Planitia. Regular frontal winds sweep past isolated mesas, carving prominent streaks and yardang fields.',
        ru: 'Граница между южными плато и низменностью Ацидалия. Регулярные фронтальные пылевые ветры огибают столовые возвышенности, формируя длинные ветровые полосы и дюны.'
      },
    },
    korolev: {
      name: { en: 'Korolev Crater', ru: 'Кратер Королёв (Korolev Crater)' },
      station: { en: 'ESA / NASA Model • Circumpolar Glacier', ru: 'ESA / NASA Модель • Приполярный ледник' },
      sol: { en: 'Polar Summer', ru: 'Полярное лето' },
      coordsText: {
        en: '73.00° N, 164.50° E • Elevation -12,467 ft (-3,800 m)',
        ru: '73.00° N, 164.50° E • Высота -3 800 м'
      },
      temp: { en: '-122.8°F (-86°C)', ru: '-86°C (-122.8°F)' },
      tempRange: { en: 'Day -43.6°F • Night -169.6°F', ru: 'День -42°C • Ночь -112°C' },
      pressure: { en: '0.113 psi (7.8 hPa)', ru: '7.8 hPa (780 Па)' },
      pressureSub: { en: '0.23 inHg • 0.0077 atm', ru: '0.0077 атм • 0.23 inHg' },
      wind: { en: '7.2 mph (3.2 m/s)', ru: '3.2 м/с (11.5 км/ч)' },
      windSub: { en: 'Cold descending katabatic flow', ru: 'Холодный нисходящий сток' },
      tau: 'τ = 0.22',
      uvSub: { en: 'Polar • UV Index 2', ru: 'Полярный • УФ-индекс 2' },
      density: { en: '21.7 g/m³ (1.77% Earth)', ru: '21.7 г/м³ (1.77% Земли)' },
      densitySub: { en: 'Dense chilled cold-trap air dome', ru: 'Тяжелый купол морозной ловушки' },
      sound: { en: '480 mph (214.7 m/s)', ru: '214.7 м/с (773 км/ч)' },
      soundSub: { en: 'Deep cryogenic acoustic deceleration', ru: 'Глубокое криогенное замедление' },
      boil: { en: '38.1°F (+3.4°C)', ru: '+3.4°C (38.1°F)' },
      boilSub: { en: 'Protected water ice sublimation barrier', ru: 'Экранирование ледника от сублимации' },
      radiation: { en: '0.72 mSv/sol', ru: '0.72 мЗв/сол' },
      radiationSub: { en: '81 W/m² solar • High polar latitude', ru: '81 Вт/м² инсоляция • Полярная ночь/лето' },
      physicsLat: 73.0,
      physicsElev: -3800,
      microclimate: {
        en: 'Natural "cold trap": an evergreen dome of dense chilled air stays pinned inside the crater, shielding 528 cubic miles (2,200 km³) of water ice from sublimation year-round.',
        ru: 'Природная «холодная ловушка»: купол тяжелого охлажденного воздуха лежит на дне кратера, экранируя 2 200 км³ водяного льда от сублимации и разрушения круглый год.'
      },
    },
    alba: {
      name: { en: 'Alba Mons', ru: 'Гора Белая (Alba Mons)' },
      station: { en: 'MCD Orbital Model • Northern Flank', ru: 'Орбитальная модель MCD • Северный склон' },
      sol: { en: 'Ls 180° (Equinox)', ru: 'Ls 180° (Равноденствие)' },
      coordsText: {
        en: '40.50° N, 109.90° W • Elevation +22,310 ft (+6,800 m)',
        ru: '40.50° N, 109.90° W • Высота +6 800 м'
      },
      temp: { en: '-103.0°F (-75°C)', ru: '-75°C (-103.0°F)' },
      tempRange: { en: 'Day -18.4°F • Night -151.6°F', ru: 'День -28°C • Ночь -102°C' },
      pressure: { en: '0.057 psi (3.9 hPa)', ru: '3.9 hPa (390 Па)' },
      pressureSub: { en: '0.12 inHg • 0.0038 atm', ru: '0.0038 атм • 0.12 inHg' },
      wind: { en: '20.4 mph (9.1 m/s)', ru: '9.1 м/с (32.8 км/ч)' },
      windSub: { en: 'Orographic waves up to 62.6 mph (28 m/s)', ru: 'Орографические волны до 28 м/с' },
      tau: 'τ = 0.32',
      uvSub: { en: 'High Altitude • UV Index 8', ru: 'Высокогорный • УФ-индекс 8' },
      density: { en: '10.3 g/m³ (0.84% Earth)', ru: '10.3 г/м³ (0.84% Земли)' },
      densitySub: { en: 'Summit caldera rarefied atmosphere', ru: 'Разреженная атмосфера кальдеры' },
      sound: { en: '495 mph (221.4 m/s)', ru: '221.4 м/с (797 км/ч)' },
      soundSub: { en: 'High-altitude volcanic acoustic profile', ru: 'Высокогорный вулканический профиль' },
      boil: { en: 'N/A (Sublimation < 6.1 hPa)', ru: 'Возгонка (P < 6.1 гПа — тройная точка)' },
      boilSub: { en: 'Armstrong Limit: Water sublimates to vapor', ru: 'Предел Армстронга: вода сублимирует в пар' },
      radiation: { en: '0.74 mSv/sol', ru: '0.74 мЗв/сол' },
      radiationSub: { en: '293 W/m² solar • Broad 1,000 km volcanic construct', ru: '293 Вт/м² инсоляция • Щитовой вулкан 1 000 км' },
      physicsLat: 40.5,
      physicsElev: 6800,
      microclimate: {
        en: 'Broad volcanic edifice spanning 620 miles (1,000 km) generates gravity-wave perturbations in the mesosphere, creating persistent high-altitude ice-cloud streamers.',
        ru: 'Низкопрофильный гигантский вулкан диаметром 1 000 км формирует волновые орографические потоки в марсианской мезосфере с образованием протяженных ледяных шлейфов.'
      },
    },
  };

  // Активная метеостанция
  let activeWeatherKey = 'perseverance';

  // Отображение погоды выбранной локации
  function updateWeatherView(key) {
    if (key && weatherData[key]) {
      activeWeatherKey = key;
    }
    const data = weatherData[activeWeatherKey] || weatherData.perseverance;

    const badgeEl = document.querySelector('#weather-station-badge');
    const solEl = document.querySelector('#weather-sol-tag');
    const nameEl = document.querySelector('#weather-location-name');
    const coordsEl = document.querySelector('#weather-coords-sub');
    const tempEl = document.querySelector('#weather-temp');
    const tempRangeEl = document.querySelector('#weather-temp-range');
    const pressureEl = document.querySelector('#weather-pressure');
    const pressureSubEl = document.querySelector('#weather-pressure-sub');
    const windEl = document.querySelector('#weather-wind');
    const windSubEl = document.querySelector('#weather-wind-sub');
    const tauEl = document.querySelector('#weather-tau');
    const uvSubEl = document.querySelector('#weather-uv-sub');
    const densityEl = document.querySelector('#weather-density');
    const densitySubEl = document.querySelector('#weather-density-sub');
    const soundEl = document.querySelector('#weather-sound');
    const soundSubEl = document.querySelector('#weather-sound-sub');
    const boilEl = document.querySelector('#weather-boil');
    const boilSubEl = document.querySelector('#weather-boil-sub');
    const radEl = document.querySelector('#weather-radiation');
    const radSubEl = document.querySelector('#weather-radiation-sub');
    const microclimateEl = document.querySelector('#weather-microclimate');

    if (badgeEl) badgeEl.textContent = t(data.station);
    if (solEl) solEl.textContent = t(data.sol);
    if (nameEl) nameEl.textContent = t(data.name);
    if (coordsEl) coordsEl.textContent = t(data.coordsText);
    if (tempEl) tempEl.textContent = t(data.temp);
    if (tempRangeEl) tempRangeEl.textContent = t(data.tempRange);
    if (pressureEl) pressureEl.textContent = t(data.pressure);
    if (pressureSubEl) pressureSubEl.textContent = t(data.pressureSub);
    if (windEl) windEl.textContent = t(data.wind);
    if (windSubEl) windSubEl.textContent = t(data.windSub);
    if (tauEl) tauEl.textContent = t(data.tau);
    if (uvSubEl) uvSubEl.textContent = t(data.uvSub);
    if (densityEl) densityEl.textContent = t(data.density);
    if (densitySubEl) densitySubEl.textContent = t(data.densitySub);
    if (soundEl) soundEl.textContent = t(data.sound);
    if (soundSubEl) soundSubEl.textContent = t(data.soundSub);
    if (boilEl) boilEl.textContent = t(data.boil);
    if (boilSubEl) boilSubEl.textContent = t(data.boilSub);
    if (radEl) radEl.textContent = t(data.radiation);
    if (radSubEl) radSubEl.textContent = t(data.radiationSub);
    if (microclimateEl) microclimateEl.textContent = t(data.microclimate);

    calculateGravity();
  }

  let includeSpacesuit = false;

  // Калькулятор гравитации и прыжка на Марсе
  function calculateGravity() {
    const input = document.querySelector('#earth-weight-input');
    const unitBadge = document.querySelector('#earth-weight-unit');
    const marsWeightEl = document.querySelector('#mars-weight-val');
    const marsGravityEl = document.querySelector('#mars-gravity-val');
    const marsJumpEl = document.querySelector('#mars-jump-val');
    const marsHangEl = document.querySelector('#mars-hang-val');
    const suitCheckbox = document.querySelector('#toggle-spacesuit');
    if (!input) return;

    if (suitCheckbox) {
      includeSpacesuit = suitCheckbox.checked;
    }

    const val = parseFloat(input.value) || 0;
    const isRu = currentLang === 'ru';
    const isLbs = !isRu;

    if (unitBadge) {
      unitBadge.textContent = isLbs ? 'lbs' : 'кг';
    }

    // Determine current location latitude & elevation
    let lat = 18.4447, elev = -2575; // Default Jezero
    const activeData = weatherData[activeWeatherKey];
    if (activeData && activeData.physicsLat !== undefined) {
      lat = activeData.physicsLat;
      elev = activeData.physicsElev;
    } else if (lastFocusedObject && lastFocusedObject.coords) {
      lat = lastFocusedObject.coords[0];
      elev = molaElevation(lastFocusedObject.coords[0], lastFocusedObject.coords[1]);
    }

    const gLocal = calcLocalGravity(lat, elev);
    const gRatio = gLocal / MARS_CONSTANTS.G_EARTH;

    // Body mass in kg
    const bodyKg = isLbs ? val * 0.453592 : val;
    const suitKg = includeSpacesuit ? MARS_CONSTANTS.SPACESUIT_MASS_KG : 0;
    const totalEarthKg = bodyKg + suitKg;
    const totalMarsKg = totalEarthKg * gRatio;
    const displayMarsVal = isLbs ? (totalMarsKg * 2.20462).toFixed(1) : totalMarsKg.toFixed(1);

    if (marsWeightEl) {
      const suitNote = includeSpacesuit ? (isRu ? ' (со скафандром)' : ' (suited)') : '';
      marsWeightEl.textContent = `${displayMarsVal} ${isLbs ? 'lbs' : 'кг'}${suitNote}`;
    }

    if (marsGravityEl) {
      marsGravityEl.textContent = `${gLocal.toFixed(3)} ${isRu ? 'м/с²' : 'm/s²'} (${gRatio.toFixed(3)} g)`;
    }

    // Jump height & hang time
    const jumpMult = (MARS_CONSTANTS.G_EARTH / gLocal);
    const baseJumpM = 0.50; // Standard 50 cm vertical jump
    const marsJumpM = baseJumpM * jumpMult;
    const marsJumpFt = marsJumpM * 3.28084;
    const hangMult = Math.sqrt(jumpMult);

    if (marsJumpEl) {
      marsJumpEl.textContent = isRu
        ? `в ${jumpMult.toFixed(2)}× выше (~${marsJumpM.toFixed(1)} м)`
        : `${jumpMult.toFixed(2)}× higher (~${marsJumpFt.toFixed(1)} ft)`;
    }

    if (marsHangEl) {
      marsHangEl.textContent = isRu
        ? `в ${hangMult.toFixed(2)}× дольше зависание`
        : `${hangMult.toFixed(2)}× longer hang time`;
    }
  }

  // Слушатели ввода параметров калькулятора
  const earthWeightInput = document.querySelector('#earth-weight-input');
  if (earthWeightInput) {
    earthWeightInput.addEventListener('input', calculateGravity);
  }
  const toggleSpacesuit = document.querySelector('#toggle-spacesuit');
  if (toggleSpacesuit) {
    toggleSpacesuit.addEventListener('change', calculateGravity);
  }

  // Переключение вкладок правой инфопанели
  const tabMission = document.querySelector('#tab-mission');
  const tabWeather = document.querySelector('#tab-weather');
  const tabRoute = document.querySelector('#tab-route');
  const missionCard = document.querySelector('#mission-card');
  const weatherView = document.querySelector('#weather-view');
  const telemetryView = document.querySelector('#route-telemetry-view');
  const railHeading = document.querySelector('#rail-heading');

  // Переключение на вкладку объекта
  function showMissionTab() {
    if (tabMission) tabMission.classList.add('active');
    if (tabWeather) tabWeather.classList.remove('active');
    if (tabRoute) tabRoute.classList.remove('active');
    if (missionCard) missionCard.classList.remove('hidden');
    if (weatherView) weatherView.classList.add('hidden');
    if (telemetryView) telemetryView.classList.add('hidden');
    if (railHeading) railHeading.textContent = i18n[currentLang].rail_heading_mission;
  }

  // Переключение на вкладку погоды
  function showWeatherTab() {
    if (tabMission) tabMission.classList.remove('active');
    if (tabWeather) tabWeather.classList.add('active');
    if (tabRoute) tabRoute.classList.remove('active');
    if (missionCard) missionCard.classList.add('hidden');
    if (weatherView) weatherView.classList.remove('hidden');
    if (telemetryView) telemetryView.classList.add('hidden');
    if (railHeading) railHeading.textContent = i18n[currentLang].rail_heading_weather;
    updateWeatherView();
  }

  // Переключение на вкладку телеметрии
  function showRouteTab() {
    if (tabMission) tabMission.classList.remove('active');
    if (tabWeather) tabWeather.classList.remove('active');
    if (tabRoute) tabRoute.classList.add('active');
    if (missionCard) missionCard.classList.add('hidden');
    if (weatherView) weatherView.classList.add('hidden');
    if (telemetryView) telemetryView.classList.remove('hidden');
    if (railHeading) railHeading.textContent = i18n[currentLang].rail_heading_route;
  }

  if (tabMission) tabMission.addEventListener('click', showMissionTab);
  if (tabWeather) tabWeather.addEventListener('click', showWeatherTab);
  if (tabRoute) tabRoute.addEventListener('click', showRouteTab);

  const btnGotoWeather = document.querySelector('#btn-goto-weather');
  if (btnGotoWeather) {
    btnGotoWeather.addEventListener('click', showWeatherTab);
  }

  const btnShowTelemetry = document.querySelector('#btn-show-telemetry');
  if (btnShowTelemetry) {
    btnShowTelemetry.addEventListener('click', showRouteTab);
  }

  let prevLang = null;

  // Переключение языка интерфейса (RU / EN)
  function setLanguage(lang) {
    if (lang !== 'en' && lang !== 'ru') lang = 'en';
    currentLang = lang;
    localStorage.setItem('martian_lang', lang);
    document.documentElement.lang = lang;

    const btnEn = document.querySelector('#lang-en');
    const btnRu = document.querySelector('#lang-ru');
    if (btnEn) btnEn.classList.toggle('active', lang === 'en');
    if (btnRu) btnRu.classList.toggle('active', lang === 'ru');

    // Update static DOM elements
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (i18n[lang] && i18n[lang][key]) {
        el.textContent = i18n[lang][key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (i18n[lang] && i18n[lang][key]) {
        el.setAttribute('placeholder', i18n[lang][key]);
      }
    });

    const topClearBtn = document.querySelector('#btn-top-clear-route');
    if (topClearBtn) {
      topClearBtn.title = lang === 'ru' ? 'Удалить текущий маршрут' : 'Delete current route';
      topClearBtn.setAttribute('aria-label', lang === 'ru' ? 'Удалить текущий маршрут' : 'Delete current route');
    }

    // Update gravity weight input value when switching between kg and lbs
    const weightInput = document.querySelector('#earth-weight-input');
    if (weightInput) {
      if (prevLang && prevLang !== lang) {
        const val = parseFloat(weightInput.value);
        if (!isNaN(val) && val > 0) {
          if (lang === 'en' && prevLang === 'ru') {
            // kg to lbs
            weightInput.value = Math.round(val * 2.20462);
          } else if (lang === 'ru' && prevLang === 'en') {
            // lbs to kg
            weightInput.value = Math.round(val / 2.20462);
          }
        }
      } else if (!prevLang) {
        weightInput.value = lang === 'ru' ? '70' : '154';
      }
    }
    prevLang = lang;
    calculateGravity();

    // Update rail heading for active tab
    if (railHeading) {
      if (tabWeather && tabWeather.classList.contains('active')) {
        railHeading.textContent = i18n[lang].rail_heading_weather;
      } else if (tabRoute && tabRoute.classList.contains('active')) {
        railHeading.textContent = i18n[lang].rail_heading_route;
      } else {
        railHeading.textContent = i18n[lang].rail_heading_mission;
      }
    }

    // Update swipe selectors
    const selectLeft = document.querySelector('#swipe-select-left');
    const selectRight = document.querySelector('#swipe-select-right');
    const optMap = {
      color: i18n[lang].layer_opt_viking,
      relief: i18n[lang].layer_opt_mola,
      thermalDay: i18n[lang].layer_opt_themis_day,
      thermalNight: i18n[lang].layer_opt_themis_night,
      ctx: i18n[lang].layer_opt_ctx,
    };
    [selectLeft, selectRight].forEach((sel) => {
      if (!sel) return;
      Array.from(sel.options).forEach((opt) => {
        if (optMap[opt.value]) opt.textContent = optMap[opt.value];
      });
    });

    // Update map status and attribution
    if (status) {
      status.textContent = `${lang === 'ru' ? 'Слой:' : 'Layer:'} ${t(layerConfigs[activeKey].name)}`;
    }
    const mapAttribution = document.querySelector('#map-attribution');
    if (mapAttribution) {
      mapAttribution.textContent = `${lang === 'ru' ? 'Слой:' : 'Layer:'} NASA ${t(layerConfigs[activeKey].name)}`;
    }

    // Update prompt banner if active
    if (typeof updatePromptBanner === 'function') {
      updatePromptBanner();
    }

    // Update zoom readout and HiRISE transition badge
    updateZoomReadout();
    if (typeof updateHiRiseTransition === 'function') {
      updateHiRiseTransition();
    }

    // Update mission markers popups
    Object.entries(markerStyles).forEach(([id, info]) => {
      const marker = missionMarkers[id];
      if (marker) {
        marker.setPopupContent(popup(info));
      }
    });

    // Update landmark markers popups
    Object.entries(landmarkData).forEach(([id, info]) => {
      const marker = landmarkMarkers[id];
      if (marker) {
        marker.setPopupContent(landmarkPopup(info));
      }
    });

    // Update hazard markers popups
    hazardMarkers.forEach((shape) => {
      if (shape._hazardData) {
        shape.setPopupContent(hazardPopupContent(shape._hazardData));
      }
    });

    // Update map centre readout (elevation units depend on language)
    mapCoordinates([map.getCenter().lat, map.getCenter().lng]);

    // Update route points UI
    updateRoutePointsUI();

    // Re-render route metrics if route is currently displayed
    if (lastRouteResult) {
      renderRouteMetrics(lastRouteResult);
    }

    // Update active card and weather
    if (lastFocusedObject) {
      updateInfoCard(lastFocusedObject);
    } else if (markerStyles.perseverance) {
      updateInfoCard(markerStyles.perseverance);
    }
    updateWeatherView();
  }

  // Кнопки переключения языка
  const langBtnEn = document.querySelector('#lang-en');
  const langBtnRu = document.querySelector('#lang-ru');
  if (langBtnEn) {
    langBtnEn.addEventListener('click', () => setLanguage('en'));
  }
  if (langBtnRu) {
    langBtnRu.addEventListener('click', () => setLanguage('ru'));
  }

  // Первичная инициализация приложения
  setLanguage(currentLang);
  updateMissionUIForActiveLayer();
})();
