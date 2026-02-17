// Select form and elements
const form = document.getElementById("form");
const emailInput = document.getElementById("email");

// Create a message element dynamically
const message = document.createElement("p");
message.style.marginTop = "20px";
message.style.fontWeight = "600";
message.style.color = "#111";
form.appendChild(message);

// Event listener for form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop page reload

  const emailValue = emailInput.value;

  if (emailValue === "") {
    message.textContent = "Please enter a valid email address.";
  } else {
    message.textContent = `Thank you! Updates will be sent to ${emailValue}`;
    emailInput.value = ""; // clear input
  }
});
