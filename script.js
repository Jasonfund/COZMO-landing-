// === MOBILE HAMBURGER ===
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// === CALCULATOR ===
const salarySlider = document.getElementById('salary-slider');
const liabilitiesSlider = document.getElementById('liabilities-slider');
const obligationsSlider = document.getElementById('obligations-slider');

const salaryValue = document.getElementById('salary-value');
const liabilitiesValue = document.getElementById('liabilities-value');
const obligationsValue = document.getElementById('obligations-value');

const calcText = document.getElementById('calc-text');
const needle = document.getElementById('needle');

function updateCalculator() {
  const salary = parseInt(salarySlider.value);
  const liabilities = parseInt(liabilitiesSlider.value);
  const obligations = parseInt(obligationsSlider.value);

  salaryValue.textContent = salary;
  liabilitiesValue.textContent = liabilities;
  obligationsValue.textContent = obligations;

  // DBR calculation: (Liabilities + Obligations) / Salary * 100
  let dbr = ((liabilities + obligations) / salary) * 100;
  if (dbr > 100) dbr = 100;

  const approval = dbr <= 50 ? "Yes" : "Maybe";

  calcText.textContent = `Estimated DBR: ${dbr.toFixed(1)}% · Likely Approval: ${approval}`;

  // Animate needle
  needle.style.width = `${dbr}%`;
}

salarySlider.addEventListener('input', updateCalculator);
liabilitiesSlider.addEventListener('input', updateCalculator);
obligationsSlider.addEventListener('input', updateCalculator);

// initialize
updateCalculator();
