(function () {
  const trigger = document.querySelector(".button-add");
  const popup = document.querySelector(".popup");
  const close = document.querySelector(".popup-close");

  function showPopup() {
    popup.classList.add("popup__show");
  }

  function hidePopup() {
    popup.classList.remove("popup__show");
  }

  trigger.addEventListener("click", () => {
    showPopup();
  });

  close.addEventListener("click", () => {
    hidePopup();
  });
})();
