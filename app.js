document.addEventListener('DOMContentLoaded', () => {
  // Ping Latency Meter
  const pingBtn = document.getElementById('pingBtn');
  const latencyMetric = document.getElementById('latencyMetric');

  pingBtn.addEventListener('click', async () => {
    pingBtn.disabled = true;
    pingBtn.innerText = 'Probing...';
    const start = Date.now();
    try {
      const res = await fetch(window.location.href, { cache: 'no-store' });
      const latency = Date.now() - start;
      latencyMetric.innerText = `${latency} ms`;
    } catch (e) {
      latencyMetric.innerText = 'Error';
    } finally {
      pingBtn.disabled = false;
      pingBtn.innerText = 'Ping Edge Node';
    }
  });

  // Counter State
  let count = 0;
  const counterVal = document.getElementById('counterVal');
  const incrementBtn = document.getElementById('incrementBtn');
  const decrementBtn = document.getElementById('decrementBtn');

  incrementBtn.addEventListener('click', () => {
    count++;
    counterVal.innerText = count;
  });

  decrementBtn.addEventListener('click', () => {
    count--;
    counterVal.innerText = count;
  });

  // Theme Switcher
  const toggleThemeBtn = document.getElementById('toggleThemeBtn');
  const themePreview = document.getElementById('themePreview');
  let isLight = false;

  toggleThemeBtn.addEventListener('click', () => {
    isLight = !isLight;
    if (isLight) {
      document.body.classList.add('light-theme');
      themePreview.innerText = 'Active Mode: Light Minimalist';
    } else {
      document.body.classList.remove('light-theme');
      themePreview.innerText = 'Active Mode: Dark Cyberpunk';
    }
  });
});
