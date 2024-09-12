var openModal = document.querySelector(".open_modal");
var modal = document.querySelector(".modal");
var buttonClose = document.querySelector(".modal_footer button");
var iconClose = document.querySelector(".modal_header i");

function toggleModal() {
  modal.classList.toggle("hide");
}

openModal.addEventListener("click", toggleModal);
buttonClose.addEventListener("click", toggleModal);
iconClose.addEventListener("click", toggleModal);
modal.addEventListener("click", function (e) {
  if (e.target == e.currentTarget) {
    toggleModal();
  }
});