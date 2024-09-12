var buttonSearch = document.querySelector(".search_box_button");

buttonSearch.addEventListener("click", function () {
  this.parentElement.classList.toggle("open");
  this.previousElementSibling.focus();
});
