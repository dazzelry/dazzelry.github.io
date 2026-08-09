const form = document.querySelector('#guestbook-form');
const message = document.querySelector('.form-message');
const playButton = document.querySelector('.play-button');
const count = document.querySelector('#visitor-count');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = new FormData(form).get('name').trim();
    message.textContent = `Thanks for stopping by, ${name}! ♡`;
    form.reset();
  });
}

if (playButton) {
  playButton.addEventListener('click', () => {
    const playing = playButton.textContent === '❚❚';
    playButton.textContent = playing ? '▶' : '❚❚';
    playButton.setAttribute('aria-label', playing ? 'Play decorative music player' : 'Pause decorative music player');
  });
}

if (count) {
  const base = 128;
  count.textContent = String(base + Math.floor(Math.random() * 9)).padStart(6, '0');
}
