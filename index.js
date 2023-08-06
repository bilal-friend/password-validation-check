const showIcon = document.querySelector(".field .icon i");
const input = document.querySelector("input");
const conditionIcons = document.querySelectorAll(".condition i");

// Toggle password visibility
showIcon.addEventListener("click", () => {
  if (showIcon.classList.contains("fa-regular")) {
    showIcon.classList.replace("fa-regular", "fa-solid");
    showIcon.classList.replace("fa-eye", "fa-eye-slash");
    input.type = "password";
  } else {
    showIcon.classList.replace("fa-solid", "fa-regular");
    showIcon.classList.replace("fa-eye-slash", "fa-eye");
    input.type = "text";
  }
});

// Check password conditions on input keyup
input.addEventListener("keyup", () => {
  // Regular expressions for password conditions
  const [lowercasePattern, uppercasePattern, numberPattern, specialPattern] = [
    /[a-z]/,
    /[A-Z]/,
    /\d/,
    /[^\w|^\d]/i,
  ];

  // Check if each condition is met
  const [lowercase, uppercase, number, special] = [
    lowercasePattern.test(input.value),
    uppercasePattern.test(input.value),
    numberPattern.test(input.value),
    specialPattern.test(input.value),
  ];

  // Check password length
  const length = input.value.length >= 8;

  // Update condition icons based on conditions
  const conditions = [lowercase, uppercase, number, special, length];
  conditions.forEach((condition, index) => {
    if (condition) {
      conditionIcons[index].classList.replace("fa-bullseye", "fa-check");
    } else {
      conditionIcons[index].classList.replace("fa-check", "fa-bullseye");
    }
  });
});

// todo : replace "replace" by toogle by and play in css
