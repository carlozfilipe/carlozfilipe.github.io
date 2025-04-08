const modalOverlay = document.querySelector('.modal-overlay');
const closeModal = document.querySelector('.close-modal');
const cards = document.querySelectorAll('.card');
const iframeEl = document.querySelector('.iframe');


for (let card of cards) {
  card.addEventListener("click", () => {
    const videoId = card.getAttribute("id");
    console.log(videoId);
    modalOverlay.classList.add('active');
    iframeEl.src = `https://www.youtube.com/embed/${videoId}`;

    console.log(iframeEl.src)
  })
}

closeModal.addEventListener('click', () => {
  modalOverlay.classList.remove('active');
  iframeEl.src = "";
})

