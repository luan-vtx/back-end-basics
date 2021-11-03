const modalOverlay = document.querySelector('.modal_overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
  const videoId = card.getAttribute('id');

  card.addEventListener('click', () => {
    window.location.href = `/video/${videoId}`;
  });
}