document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const emailInput = document.getElementById("email");
  const popup = document.getElementById("popup");
  const popupText = document.getElementById("popup-text");
  const closeBtn = document.getElementById("close-popup");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    popupText.textContent = `Thank you! Updates will be sent to ${emailInput.value}`;
    popup.style.display = "flex";
  });

  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });
});
