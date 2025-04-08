const modalOverlay = document.querySelector('.modal-overlay');
const closeModal = document.querySelector('.close-modal');
const cards = document.querySelectorAll('.cards');
const iframeEl = document.querySelector('.iframe');



for (let card of cards) {
  card.addEventListener("click", () => {
    const videoId = card.getAttribute('id');
    modalOverlay.classList.add('active');
    iframeEl.src = `https://www.youtube.com/embed/${videoId}`;
  })
}

closeModal.addEventListener('click', () => {
  modalOverlay.classList.remove('active');
})

