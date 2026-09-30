document.querySelectorAll('video').forEach((video) => {
  video.addEventListener('error', () => video.parentElement.classList.add('video-fallback'));
});

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });
