const modalOverlay = document.querySelector('.modal-overlay');
const closeModal = document.querySelector('.close-modal');
const cards = document.querySelectorAll('.cards');

for (let card of cards) {
  card.addEventListener("click", () => {
    modalOverlay.classList.add('active');
  })
}

closeModal.addEventListener('click', () => {
  modalOverlay.classList.remove('active');
})