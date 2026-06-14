/* ============================================
   O'STIN Dashboard — Charts & Navigation (v2)
   Compact, data-labeled, high-contrast
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ─── Brand palette (high-contrast, distinct) ───
  const C = {
    ostin:    '#20357e',
    zara:     '#1a1a1a',
    hm:       '#cc0000',
    mango:    '#e68a00',
    gloria:   '#2e8b57',
    befree:   '#0099cc',
    zarina:   '#8b5cf6',
    loveRep:  '#e84393',
    zolla:    '#95a5a6',
    lime:     '#27ae60'
  };
  const labels = ["O'STIN","Zara","H&M","Mango","GloriaJeans","Befree","Zarina","Love Rep.","Zolla","Lime"];
  const colors = Object.values(C);

  // ─── Chart.js defaults ───
  Chart.defaults.font.family = "'Inter', Arial, sans-serif";
  Chart.defaults.font.size = 12;
  Chart.defaults.color = '#374151';
  Chart.defaults.plugins.legend.labels.usePointStyle = true;
  Chart.defaults.plugins.legend.labels.padding = 14;
  Chart.defaults.plugins.legend.labels.font = { size: 11, family: "'Inter', sans-serif" };

  // ─── Datalabels defaults ───
  if (ChartDataLabels) {
    Chart.defaults.plugins.datalabels = {
      anchor: 'end',
      align: 'end',
      offset: 2,
      font: { size: 10, weight: '700', family: 'Inter' },
      color: '#374151',
      formatter: function(v) { return v > 0 ? v.toFixed(1) + '%' : ''; }
    };
  }

  function vBar(id, data, title, opts) {
    var el = document.getElementById(id);
    if (!el) return;
    var bgColors = colors.map(function(c, i) {
      return i === 0 ? '#20357e' : c + '66';
    });
    var borderColors = colors.map(function(c, i) {
      return i === 0 ? '#20357e' : c + '99';
    });
    var cfg = {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: bgColors,
          borderColor: borderColors,
          borderWidth: [2.5, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          borderRadius: 4,
          maxBarThickness: 40
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: { display: false },
          title: { display: !!title, text: title, font: { size: 13, weight: '700', family: 'Inter' }, padding: { bottom: 10 } },
          datalabels: {
            anchor: 'end',
            align: 'top',
            offset: 2,
            font: function(ctx) {
              return { size: 11, weight: ctx.dataIndex === 0 ? '900' : '600', family: 'Inter' };
            },
            color: function(ctx) {
              return ctx.dataIndex === 0 ? '#20357e' : '#6b7280';
            },
            formatter: function(v) { return v > 0 ? v.toFixed(1) + '%' : ''; }
          }
        },
        scales: {
          x: { grid: { display: false }, ticks: { font: { size: 11, family: 'Inter', weight: '600' }, maxRotation: 45 } },
          y: { beginAtZero: true, max: (opts && opts.maxY) || undefined, ticks: { callback: function(v) { return v + '%'; }, font: { size: 10, family: 'Inter' } }, title: { display: true, text: 'Видимость, %', font: { size: 10, family: 'Inter' }, color: '#6b7280' } }
        },
        layout: { padding: { top: 20 } }
      }
    };
    if (opts && opts.colors) cfg.data.datasets[0].backgroundColor = opts.colors.map(function(c) { return c + 'cc'; });
    if (opts && opts.colors) cfg.data.datasets[0].borderColor = opts.colors;
    new Chart(el, cfg);
  }

  function hBar(id, labelsArr, data, title, barColor) {
    var el = document.getElementById(id);
    if (!el) return;
    new Chart(el, {
      type: 'bar',
      data: {
        labels: labelsArr,
        datasets: [{
          data: data,
          backgroundColor: (barColor || C.ostin) + 'aa',
          borderColor: barColor || C.ostin,
          borderWidth: 1.5,
          borderRadius: 3,
          maxBarThickness: 16
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        plugins: {
          legend: { display: false },
          title: { display: !!title, text: title, font: { size: 12, weight: '700', family: 'Inter' }, padding: { bottom: 6 } },
          datalabels: {
            anchor: 'end',
            align: 'end',
            offset: 4,
            font: { size: 10, weight: '700', family: 'Inter' },
            color: '#111827',
            formatter: function(v) { return v > 0 ? v.toFixed(1) + '%' : ''; }
          }
        },
        scales: {
          x: { beginAtZero: true, max: 30, ticks: { callback: function(v) { return v + '%'; }, font: { size: 10, family: 'Inter' } }, grid: { color: '#f0f0f0' }, title: { display: true, text: 'Видимость, %', font: { size: 10, family: 'Inter' }, color: '#6b7280' } },
          y: { grid: { display: false }, ticks: { font: { size: 10, family: 'Inter', weight: '500' } } }
        },
        layout: { padding: { right: 30 } }
      }
    });
  }

  // ═══ CHART 1: Google AI ═══
  vBar('chartGoogleAI', [8.0, 3.0, 3.7, 2.0, 13.0, 12.3, 11.7, 5.3, 1.3, 7.0], '', { maxY: 16 });

  // ═══ CHART 2: Models Aggregated ═══
  vBar('chartModelsSummary', [8.47, 25.13, 24.47, 18.40, 5.53, 5.47, 4.20, 3.13, 2.20, 2.40], '', { maxY: 30 });

  // ═══ CHART 3: O'STIN by Model ═══
  (function() {
    var el = document.getElementById('chartOstinByModel');
    if (!el) return;
    new Chart(el, {
      type: 'bar',
      data: {
        labels: ['Deepseek', 'Perplexity', 'GigaChat', 'YandexGPT', 'ChatGPT'],
        datasets: [{
          data: [13.0, 24.33, 3.67, 1.33, 0],
          backgroundColor: ['#20357ecc','#22c55ecc','#e68a00cc','#8b5cf6cc','#cc0000cc'],
          borderColor: ['#20357e','#22c55e','#e68a00','#8b5cf6','#cc0000'],
          borderWidth: 1,
          borderRadius: 3,
          maxBarThickness: 40
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: { display: false },
          datalabels: {
            anchor: 'end', align: 'top', offset: 2,
            font: { size: 12, weight: '700', family: "'Inter', sans-serif" }, color: '#111827',
            formatter: function(v) { return v > 0 ? v.toFixed(1) + '%' : '0%'; }
          }
        },
        scales: {
          x: { grid: { display: false }, ticks: { font: { size: 11, family: "'Inter', sans-serif", weight: '600' } } },
          y: { beginAtZero: true, max: 28, ticks: { callback: function(v) { return v + '%'; }, font: { size: 10, family: "'Inter', sans-serif" } }, title: { display: true, text: 'Видимость, %', font: { size: 10, family: "'Inter', sans-serif" }, color: '#6b7280' } }
        },
        layout: { padding: { top: 16 } }
      }
    });
  })();

  // ═══ CHART 4-5: Deepseek ═══
  vBar('chartDeepseek', [13.0, 53.0, 48.0, 43.3, 16.0, 15.0, 10.0, 6.3, 4.7, 3.7], '', { maxY: 58 });
  hBar('chartDeepseekNiches',
    ['Общие','Брюки-М','Рубашки-М','Шорты-М','Футб.-М','Брюки-Мал','Футб.-Мал','Брюки-Ж','Шорты-Ж','Футб.-Ж','Блузки-Ж','Шорты-Д','Платья-Д','Юбки-Д','Платья-Ж','Юбки-Ж','Футб.-Д','Шорты-Мал'],
    [14.6, 7.8, 10.0, 8.0, 15.0, 16.0, 15.0, 3.0, 2.4, 7.6, 6.3, 12.0, 1.8, 5.0, 2.2, 1.2, 0, 0],
    "O'STIN по нишам (Deepseek)", C.ostin);

  // ═══ CHART 6-7: Perplexity ═══
  vBar('chartPerplexity', [24.33, 10.67, 10.67, 7.67, 10.67, 10.67, 7.0, 7.67, 4.67, 7.33], '', { maxY: 28 });
  hBar('chartPerplexityNiches',
    ['Общие','Брюки-М','Рубашки-М','Шорты-М','Футб.-М','Брюки-Мал','Футб.-Мал','Брюки-Ж','Шорты-Ж','Футб.-Ж','Блузки-Ж','Шорты-Д','Платья-Д','Юбки-Д','Платья-Ж','Юбки-Ж','Футб.-Д','Шорты-Мал'],
    [14.6, 7.8, 10.0, 8.0, 15.0, 16.0, 15.0, 3.0, 2.4, 7.6, 6.3, 12.0, 1.8, 5.0, 2.2, 1.2, 0, 0],
    "O'STIN по нишам (Perplexity)", C.gloria);

  // ═══ CHART 8-9: GigaChat ═══
  vBar('chartGigachat', [3.67, 30.33, 29.33, 20.0, 0.33, 0, 0.33, 0, 1.33, 0], '', { maxY: 34 });
  hBar('chartGigachatNiches',
    ['Общие','Брюки-М','Рубашки-М','Шорты-М','Футб.-М','Брюки-Мал','Футб.-Мал','Брюки-Ж','Шорты-Ж','Футб.-Ж','Блузки-Ж','Шорты-Д','Платья-Д','Юбки-Д','Платья-Ж','Юбки-Ж','Футб.-Д','Шорты-Мал'],
    [14.6, 7.8, 10.0, 8.0, 15.0, 16.0, 15.0, 3.0, 2.4, 7.6, 6.3, 12.0, 1.8, 5.0, 2.2, 1.2, 0, 0],
    "O'STIN по нишам (GigaChat-2)", C.mango);

  // ═══ CHART 10-11: YandexGPT ═══
  vBar('chartYandexgpt', [1.33, 10.33, 11.0, 5.67, 0.33, 1.0, 1.33, 0.67, 0, 0.33], '', { maxY: 13 });
  hBar('chartYandexgptNiches',
    ['Общие','Брюки-М','Рубашки-М','Шорты-М','Футб.-М','Брюки-Мал','Футб.-Мал','Брюки-Ж','Шорты-Ж','Футб.-Ж','Блузки-Ж','Шорты-Д','Платья-Д','Юбки-Д','Платья-Ж','Юбки-Ж','Футб.-Д','Шорты-Мал'],
    [14.6, 7.8, 10.0, 8.0, 15.0, 16.0, 15.0, 3.0, 2.4, 7.6, 6.3, 12.0, 1.8, 5.0, 2.2, 1.2, 0, 0],
    "O'STIN по нишам (YandexGPT)", C.zarina);

  // ═══ CHART 12: ChatGPT ═══
  vBar('chartChatgpt', [0, 21.33, 24.33, 15.33, 0.33, 0.67, 2.33, 1.0, 0.33, 0.67], '', { maxY: 28 });

  // ═══ CHART 13: Radar ═══
  (function() {
    var el = document.getElementById('chartMatrixRadar');
    if (!el) return;
    new Chart(el, {
      type: 'radar',
      data: {
        labels: ['Google AI', 'Deepseek', 'Perplexity', 'GigaChat', 'YandexGPT', 'ChatGPT'],
        datasets: [
          { label: "O'STIN", data: [7.3,13.0,24.33,3.67,1.33,0], borderColor: C.ostin, backgroundColor: 'rgba(32,53,126,0.12)', borderWidth: 2, pointRadius: 3, pointBackgroundColor: C.ostin },
          { label: 'Zara', data: [3.0,53.0,10.67,30.33,10.33,21.33], borderColor: C.zara, backgroundColor: 'rgba(0,0,0,0.04)', borderWidth: 1.5, pointRadius: 2 },
          { label: 'H&M', data: [3.7,48.0,10.67,29.33,11.0,24.33], borderColor: C.hm, backgroundColor: 'rgba(204,0,0,0.04)', borderWidth: 1.5, pointRadius: 2 },
          { label: 'Mango', data: [2.0,43.3,7.67,20.0,5.67,15.33], borderColor: C.mango, backgroundColor: 'rgba(230,138,0,0.04)', borderWidth: 1.5, pointRadius: 2 }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'top', labels: { font: { size: 11, family: "'Inter', sans-serif", weight: '600' } } } },
        scales: { r: { beginAtZero: true, max: 55, ticks: { callback: function(v) { return v + '%'; }, font: { size: 9, family: "'Inter', sans-serif" }, stepSize: 10 }, pointLabels: { font: { size: 11, family: "'Inter', sans-serif", weight: '600' } } } }
      }
    });
  })();

  // ═══ CHART 14: Niches Grouped ═══
  (function() {
    var el = document.getElementById('chartNicheOstin');
    if (!el) return;
    var nicheLabels = ['Общие','Брюки-М','Рубашки-М','Шорты-М','Футб.-М','Брюки-Мал','Футб.-Мал','Брюки-Ж','Шорты-Ж','Футб.-Ж','Блузки-Ж','Шорты-Д','Платья-Д','Юбки-Д','Платья-Ж','Юбки-Ж'];
    new Chart(el, {
      type: 'bar',
      data: {
        labels: nicheLabels,
        datasets: [
          { label: "O'STIN", data: [14.6,7.8,10.0,8.0,15.0,16.0,15.0,3.0,2.4,7.6,6.3,12.0,1.8,5.0,2.2,1.2], backgroundColor: C.ostin + 'cc', borderRadius: 3, maxBarThickness: 14 },
          { label: 'Zara', data: [45.7,13.9,15.0,14.7,25.0,8.0,25.0,23.6,12.9,19.4,18.8,4.0,7.3,10.0,15.6,14.1], backgroundColor: C.zara + '88', borderRadius: 3, maxBarThickness: 14 },
          { label: 'H&M', data: [52.4,10.4,11.7,6.7,35.0,12.0,35.0,8.5,10.6,19.4,11.3,8.0,9.1,15.0,15.6,10.6], backgroundColor: C.hm + '88', borderRadius: 3, maxBarThickness: 14 }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top', labels: { font: { size: 11, family: "'Inter', sans-serif", weight: '600' } } },
          title: { display: false },
          datalabels: { display: false }
        },
        scales: {
          x: { grid: { display: false }, ticks: { font: { size: 10, family: "'Inter', sans-serif" }, maxRotation: 60 } },
          y: { beginAtZero: true, max: 58, ticks: { callback: function(v) { return v + '%'; }, font: { size: 10, family: "'Inter', sans-serif" } }, title: { display: true, text: 'Видимость, %', font: { size: 10, family: "'Inter', sans-serif" }, color: '#6b7280' } }
        }
      }
    });
  })();

  // ─── Scrollspy ───
  var sections = document.querySelectorAll('.screen');
  var navItems = document.querySelectorAll('.sidebar nav a');
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        navItems.forEach(function(n) { n.classList.remove('active'); });
        var link = document.querySelector('.sidebar nav a[href="#' + e.target.id + '"]');
        if (link) link.classList.add('active');
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });
  sections.forEach(function(s) { obs.observe(s); });

  navItems.forEach(function(a) {
    a.addEventListener('click', function(e) {
      e.preventDefault();
      var t = document.querySelector(this.getAttribute('href'));
      if (t) t.scrollIntoView({ behavior: 'smooth' });
    });
  });
});