/** -----------------------------
 *  GLASS HEADER ON SCROLL
 * ------------------------------*/
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("glass-active");
  } else {
    header.classList.remove("glass-active");
  }
});


/** -----------------------------
 *  MOBILE MENU TOGGLE
 * ------------------------------*/
const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    menuBtn.classList.toggle("open");
  });
}


/** -----------------------------
 *  INTERACTIVE CALCULATOR
 * ------------------------------*/

const amountSlider = document.getElementById("amountRange");
const percentageSlider = document.getElementById("percentageRange");
const amountOutput = document.getElementById("amountValue");
const percentOutput = document.getElementById("percentValue");
const resultBar = document.getElementById("resultBar");
const resultNumber = document.getElementById("resultNumber");

function updateCalculator() {
  const amount = parseInt(amountSlider.value);
  const percentage = parseInt(percentageSlider.value);

  amountOutput.innerText = amount.toLocaleString();
  percentOutput.innerText = percentage + "%";

  const result = Math.round((amount * percentage) / 100);

  resultNumber.innerText = result.toLocaleString();

  // Animate meter bar
  const maxWidth = 100; // full width percent
  resultBar.style.width = percentage + "%"; 
}

amountSlider.addEventListener("input", updateCalculator);
percentageSlider.addEventListener("input", updateCalculator);

// Initialize calculator with default values
updateCalculator();
