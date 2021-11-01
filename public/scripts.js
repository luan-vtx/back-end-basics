const modalOverlay = document.querySelector('.modal_overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
  const videoId = card.getAttribute('id');

  card.addEventListener('click', () => {
    modalOverlay.classList.add('active');
    modalOverlay.querySelector('iframe').src=`https://www.youtube.com/embed/${videoId}`;
  });

}

const closeModal = document.querySelector('.close_modal');

closeModal.addEventListener('click', () => {
  modalOverlay.classList.remove('active');
  modalOverlay.querySelector('iframe').src="";

});