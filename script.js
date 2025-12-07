// Mobile menu
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
    mobileMenu.style.display =
        mobileMenu.style.display === "flex" ? "none" : "flex";
});


// DBR CALCULATOR
const salary = document.getElementById("salary");
const liabilities = document.getElementById("liabilities");
const meterFill = document.getElementById("meterFill");
const dbrResult = document.getElementById("dbrResult");

function updateDBR() {
    let sal = Number(salary.value);
    let lib = Number(liabilities.value);

    let dbr = Math.round((lib / sal) * 100);

    if (dbr > 100) dbr = 100;
    if (dbr < 0) dbr = 0;

    meterFill.style.width = dbr + "%";
    dbrResult.textContent = "DBR: " + dbr + "%";
}

salary.oninput = updateDBR;
liabilities.oninput = updateDBR;

updateDBR();
