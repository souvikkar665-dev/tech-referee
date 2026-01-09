function referee() {
  const budget = document.getElementById("budget").value;
  const traffic = document.getElementById("traffic").value;
  const management = document.getElementById("management").value;

  let html = "";

  html += buildCard(
    "Netlify",
    "Best for quick launches and low traffic",
    ["Free tier", "Very easy setup", "Good for portfolios"],
    ["Limited scalability", "Less backend control"]
  );

  html += buildCard(
    "Vercel",
    "Optimized for modern frameworks",
    ["Excellent performance", "CI/CD built-in", "Great DX"],
    ["Costs rise with scale", "Platform lock-in"]
  );

  if (traffic === "high" || management === "advanced") {
    html += buildCard(
      "AWS S3 + CloudFront ⭐ MOST SCALABLE",
      "Best for production-grade, high-scale systems",
      [
        "Massive scalability",
        "Pay-as-you-go",
        "Enterprise reliability",
        "Global CDN"
      ],
      [
        "Steep learning curve",
        "Manual configuration required"
      ]
    );
  }

  document.getElementById("result").innerHTML = html;
}

function buildCard(title, desc, pros, cons) {
  return `
    <div class="card">
      <h3>${title}</h3>
      <p>${desc}</p>

      <strong>✅ Pros</strong>
      <ul>
        ${pros.map(p => `<li>${p}</li>`).join("")}
      </ul>

      <strong>❌ Cons</strong>
      <ul>
        ${cons.map(c => `<li>${c}</li>`).join("")}
      </ul>
    </div>
  `;
}
