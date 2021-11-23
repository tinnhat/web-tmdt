const change = document.querySelector(".pass-change");
const changeBox = document.querySelector(".changepass-box");

change.addEventListener("click", () => {
  changeBox.classList.toggle("show");
});
