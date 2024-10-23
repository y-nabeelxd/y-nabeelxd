document.getElementById('theme-toggle').addEventListener('click', () => {
  const body = document.body;
  if (body.classList.contains('dark-theme')) {
    body.classList.replace('dark-theme', 'light-theme');
    document.getElementById('theme-toggle').textContent = '🌙';
  } else {
    body.classList.replace('light-theme', 'dark-theme');
    document.getElementById('theme-toggle').textContent = '☀️';
  }
});
