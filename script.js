function compare() {
  const budget = document.getElementById("budget").value;
  const traffic = document.getElementById("traffic").value;

  let result = "";

  if (budget === "low" && traffic === "low") {
    result = `
      <h3>Netlify</h3>
      <p>✔ Free tier<br>✔ Easy setup<br>❌ Limited control</p>
    `;
  } else if (traffic === "high") {
    result = `
      <h3>AWS S3 + CloudFront</h3>
      <p>✔ Highly scalable<br>✔ Cost effective<br>❌ Complex setup</p>
    `;
  } else {
    result = `
      <h3>Vercel</h3>
      <p>✔ Great for React<br>✔ Fast deploys<br>❌ Paid for heavy usage</p>
    `;
  }

  document.getElementById("result").innerHTML = result;
}
