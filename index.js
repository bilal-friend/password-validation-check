const showIcon = document.querySelector(".field .icon i");
const input = document.querySelector("input");
const conditionIcons = document.querySelectorAll("ul li");

// Toggle password visibility
showIcon.addEventListener("click", () => {
  showIcon.classList.toggle("fa-eye");
  showIcon.classList.toggle("fa-eye-slash");
  input.type = showIcon.classList.contains("fa-eye") ? "text" : "password";
});

//  Check password conditions on input keyup
input.addEventListener("keyup", () => {
  // Regular expressions for password conditions
  const conditions = [
    /[a-z]/.test(input.value),
    /[A-Z]/.test(input.value),
    /\d/.test(input.value),
    /[^\w|\d]/i.test(input.value),
    input.value.length >= 8,
  ];

  // Update condition icons based on conditions
  conditions.forEach((condition, index) => {
    conditionIcons[index].classList.toggle("check", condition); //? you can use a conditon with toggle
  });
});
