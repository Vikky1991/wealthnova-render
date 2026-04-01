const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server is live 🚀");
});
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<style>
  body {
    font-family: -apple-system, BlinkMacSystemFont, Arial, sans-serif;
    margin: 0;
    background: linear-gradient(135deg, #0f172a, #020617);
    color: white;
  }

  .container {
    padding: 40px;
  }

  /* HEADER */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }

  .logo {
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 1px;
  }

  .report-tag {
    font-size: 14px;
    opacity: 0.7;
  }

  /* MAIN CARD */
  .main-card {
    background: linear-gradient(135deg, #1e293b, #0f172a);
    padding: 30px;
    border-radius: 16px;
    text-align: center;
    margin-bottom: 25px;
  }

  .main-title {
    font-size: 14px;
    opacity: 0.7;
    margin-bottom: 10px;
  }

  .main-value {
    font-size: 42px;
    font-weight: bold;
  }

  .saving {
    margin-top: 10px;
    font-size: 18px;
    color: #22c55e;
  }

  /* GRID */
  .grid {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }

  .card {
    flex: 1;
    background: #1e293b;
    padding: 20px;
    border-radius: 12px;
  }

  .label {
    font-size: 12px;
    opacity: 0.7;
    margin-bottom: 8px;
  }

  .value {
    font-size: 20px;
    font-weight: bold;
  }

  .green {
    color: #22c55e;
  }

  .blue {
    color: #38bdf8;
  }

  /* INSIGHT */
  .insight {
    background: #020617;
    border-left: 4px solid #38bdf8;
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;
  }

  /* IMPACT BAR */
  .impact {
    margin-top: 25px;
  }

  .bar {
    height: 10px;
    background: #1e293b;
    border-radius: 10px;
    overflow: hidden;
    margin-top: 10px;
  }

  .fill {
    height: 100%;
    width: ${data.impactPercent}%;
    background: linear-gradient(90deg, #22c55e, #ef4444);
  }

  /* FOOTER */
  .footer {
    margin-top: 40px;
    text-align: center;
    font-size: 12px;
    opacity: 0.6;
  }

</style>
</head>

<body>

<div class="container">

  <!-- HEADER -->
  <div class="header">
    <div class="logo">WealthNova</div>
    <div class="report-tag">Personal Tax Report</div>
  </div>

  <!-- MAIN RESULT -->
  <div class="main-card">
    <div class="main-title">Your Estimated Tax</div>
    <div class="main-value">₹${data.tax}</div>
    <div class="saving">You could save ₹${data.saving}</div>
  </div>

  <!-- GRID -->
  <div class="grid">
    <div class="card">
      <div class="label">Old Regime</div>
      <div class="value">₹${data.oldTax}</div>
    </div>

    <div class="card">
      <div class="label">New Regime</div>
      <div class="value green">₹${data.newTax}</div>
    </div>
  </div>

  <!-- IMPACT -->
  <div class="card impact">
    <div class="label">Impact Level</div>
    <div class="bar">
      <div class="fill"></div>
    </div>
  </div>

  <!-- INSIGHT -->
  <div class="insight">
    ${data.insight}
  </div>

  <!-- FOOTER -->
  <div class="footer">
    This report is for awareness purposes only. Final financial decisions are yours.
  </div>

</div>

</body>
</html>
