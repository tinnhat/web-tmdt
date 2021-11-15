const modalContainer = document.querySelector(".modal-container");
const closeBtn = document.querySelector(".icon-close");
const modal = document.querySelector(".modal");
const login = document.querySelector("#btn-login-submit");

function hideLog() {
  modal.classList.add("hide");
  modalContainer.classList.add("hide");
  modalContainer.classList.remove("open");
}

closeBtn.addEventListener("click", hideLog);
login.addEventListener("click", () => {
  modal.classList.remove("hide");
  modalContainer.classList.remove("hide");
  modalContainer.classList.add("open");
});
modal.addEventListener("click", hideLog);
modalContainer.addEventListener("click", (e) => {
  e.stopPropagation();
});
