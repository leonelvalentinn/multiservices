const modal = document.getElementById("modalPromo");

window.addEventListener("load", function (event) {
  const time = setTimeout(myModal, 2000);
});

modal.addEventListener('click', ()=> {
  modal.classList.remove("modal-show");
})
function myModal() {
  const close = document.getElementById("close");
  modal.classList.add("modal-show");

  close.addEventListener("click", () => {
    modal.classList.remove("modal-show");
  });
  modal.addEventListener("click", () => {
    modal.classList.remove("modal-show");
  });
}
