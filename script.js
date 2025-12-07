// Basic interactivity: calculator + simple form handling

document.addEventListener('DOMContentLoaded', function () {
  // Calculator logic
  const salaryIn = document.getElementById('salary');
  const liabilitiesIn = document.getElementById('liabilities');
  const obligationsIn = document.getElementById('obligations');
  const calcBtn = document.getElementById('calc-run');
  const resultDiv = document.getElementById('calc-result');
  const needle = document.getElementById('gauge-needle');

  function setNeedleAngle(percent) {
    // percent 0..100 -> angle from -90deg to +90deg
    const clamped = Math.max(0, Math.min(100, percent));
    const angle = -90 + (clamped * 180 / 100);
    needle.style.transform = `rotate(${angle}deg)`;
  }

  calcBtn.addEventListener('click', function (ev) {
    ev.preventDefault();
    const salary = parseFloat(salaryIn.value) || 0;
    const liabilities = parseFloat(liabilitiesIn.value) || 0;
    const obligations = parseFloat(obligationsIn.value) || 0;

    if (!salary || salary <= 0) {
      resultDiv.textContent = 'Please enter a valid monthly salary.';
      return;
    }

    // DBR = (liabilities + obligations) / salary * 100
    const dbr = ((liabilities + obligations) / salary) * 100;
    const dbrRounded = Math.round(dbr * 10) / 10;

    // approval rule: Likely approval if DBR <= 50%
    let likely = 'No';
    if (dbr <= 50) likely = 'Yes';

    // rating scale for gauge percent (map DBR to gauge 0..100 inversely)
    // lower DBR -> lower percent shown; for visual, we'll show DBR percent
    const gaugePercent = Math.min(100, Math.max(0, dbrRounded));

    setNeedleAngle(gaugePercent);

    resultDiv.textContent = `Estimated DBR: ${dbrRounded}% · Likely Approval: ${likely}`;
  });

  // Lead form handling (simple front-end mock)
  const leadForm = document.getElementById('lead-form');
  const feedback = document.getElementById('form-feedback');

  leadForm.addEventListener('submit', function (ev) {
    ev.preventDefault();
    const fd = new FormData(leadForm);
    const name = fd.get('name') || fd.get('Name') || 'Applicant';

    // Client-side validation (basic)
    if (!fd.get('name') || !fd.get('phone') || !fd.get('salary')) {
      feedback.textContent = 'Please fill required fields: name, phone, salary.';
      feedback.style.color = 'crimson';
      return;
    }

    // In production you'd POST to your backend. Here we show a success message.
    feedback.style.color = 'green';
    feedback.textContent = `Thanks ${fd.get('name')}. Your free profile review request has been received. We will contact you on WhatsApp shortly.`;

    // Reset after short delay
    setTimeout(()=> {
      leadForm.reset();
    }, 2000);
  });
});
