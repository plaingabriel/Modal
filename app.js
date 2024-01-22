const modal = document.querySelector(".modal");
const body = document.querySelector("body");
const btnAddModal = document.querySelector(".trigger-modal");
const btnRemoveModal = document.querySelector(".modal__remove-btn");

function triggerModal() {
  modal.classList.remove("hidden");
}

function removeModal() {
  modal.classList.add("hidden");
}

btnAddModal.addEventListener("click", triggerModal);
btnRemoveModal.addEventListener("click", removeModal);

window.addEventListener("click", (e) => {
  if (e.target === body) modal.classList.add("hidden");
});
