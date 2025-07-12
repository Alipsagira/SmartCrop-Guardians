const diseases = [
  { name: "Early Blight", severity: "High", confidence: "93%", image: "early-blight.png"},
  { name: "Leaf Curl", severity: "Medium", confidence: "87%", image: "leaf-curl.png"},       { name: "Septoria Spot", severity: "Low", confidence: "78%", image: "septoria-spot.png"},
  { name: "Powdery Mildew", severity: "High", confidence: "88%", image: "powdery-mildew.png"},
  { name: "Bacterial Spot", severity: "Medium", confidence: "82%", image: "bacterial-spot.png"}
];

function showDiagnosis() {
  const random = diseases[Math.floor(Math.random() * diseases.length)];

  const diagnosis = document.getElementById("diagnosis");
  diagnosis.innerHTML = `
    <h2>Diagnosis Result</h2>
    <div class="result">
      <strong>Disease Detected:</strong> Tomato – ${random.name}<br>
      <strong>Severity:</strong> ${random.severity}<br>
      <strong>Confidence:</strong> ${random.confidence}
    </div>
    <img src="assets/images/${random.image}" alt="${random.name} Image">
  `;
  diagnosis.style.display = "block";

  const remedy = document.getElementById("remedy");
  remedy.style.display = "block";
}
