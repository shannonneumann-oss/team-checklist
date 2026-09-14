(function () {
  const modes = ['system', 'light', 'dark'];
  const labels = {
    system: 'Theme: System',
    light: 'Theme: Light',
    dark: 'Theme: Dark'
  };
  const body = document.body;
  const button = document.querySelector('.theme-toggle');

  function applyMode(mode) {
    const selectedMode = modes.includes(mode) ? mode : 'system';
    body.dataset.colorMode = selectedMode;
    body.classList.toggle('theme-vue-light', selectedMode === 'light');
    button.textContent = labels[selectedMode];
    button.setAttribute('aria-label', `${labels[selectedMode]}. Click to change theme.`);
    localStorage.setItem('vue-theme-mode', selectedMode);
  }

  const savedMode = localStorage.getItem('vue-theme-mode') || 'system';
  applyMode(savedMode);

  button.addEventListener('click', function () {
    const currentIndex = modes.indexOf(body.dataset.colorMode);
    applyMode(modes[(currentIndex + 1) % modes.length]);
  });
})();
