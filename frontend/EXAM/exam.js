//  QUESTIONS 
const questions = [
  { q: "Do you enjoy solving technical problems?", a: ["Yes", "Somehow", "No"] },
  { q: "Do you like working with data?", a: ["Yes", "Sometimes", "No"] },
  { q: "Do you prefer designing user interfaces?", a: ["Yes", "Sometimes", "No"] },
  { q: "Are you interested in cybersecurity?", a: ["Yes", "Maybe", "No"] },
  { q: "Do you like building applications?", a: ["Yes", "Somehow", "No"] },
  { q: "Are you detail-oriented?", a: ["Yes", "Sometimes", "No"] },
  { q: "Do you enjoy logic-based tasks?", a: ["Yes", "A bit", "No"] },
  { q: "Are you creative with visuals?", a: ["Yes", "Somehow", "No"] },
  { q: "Do you like analyzing systems?", a: ["Yes", "Maybe", "No"] },
  { q: "Do you follow tech trends?", a: ["Yes", "Sometimes", "No"] },
  { q: "Do you prefer backend systems?", a: ["Yes", "Not sure", "No"] },
  { q: "Do you enjoy learning new tools?", a: ["Yes", "Sometimes", "No"] },
  { q: "Are you good at organizing tasks?", a: ["Yes", "Somehow", "No"] },
  { q: "Do you enjoy helping others learn?", a: ["Yes", "Maybe", "No"] },
  { q: "Do you like creative projects?", a: ["Yes", "A bit", "No"] },
  { q: "Do you prefer structured plans?", a: ["Yes", "Sometimes", "No"] },
  { q: "Do you enjoy debugging code?", a: ["Yes", "Maybe", "No"] },
  { q: "Do you like planning user flows?", a: ["Yes", "Kind of", "No"] },
  { q: "Do you see yourself in tech long-term?", a: ["Yes", "Maybe", "No"] },
  { q: "Do you prefer team work?", a: ["Yes", "Sometimes", "No"] }
];

let index = 0;
let score = 0;
let selected = null;

const qBox = document.getElementById("questionBox");
const oBox = document.getElementById("optionsBox");
const nextBtn = document.getElementById("nextBtn");
const progressText = document.getElementById("progressText");

// SCORING
function scoreAnswer(ans) {
  const strong = ["Yes"];
  const medium = ["Sometimes", "Somehow", "Maybe", "A bit", "Not sure", "Kind of"];
  if (strong.includes(ans)) return 3;
  if (medium.includes(ans)) return 1;
  return 0;
}
// LOAD QUESTION
function loadQuestion() {
  let q = questions[index];
  qBox.textContent = q.q; //qBox.textContent = "  ?";
  oBox.innerHTML = "";//delete
  selected = null;
  nextBtn.disabled=true;
  
  q.a.forEach((ans) => {
    let div = document.createElement("div"); // to create somthing like <div class="option"></div>
    div.className = "option";
    div.textContent = ans;
    div.onclick = () => {
      document.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
      div.classList.add("selected");
      selected = ans;
      nextBtn.disabled = false;
    };

    oBox.appendChild(div);
  });

  progressText.textContent = `Question ${index + 1} of ${questions.length}`;
}
// NEXT QUESTION
nextBtn.onclick = () => {
  score += scoreAnswer(selected);
  index++;

  if (index < questions.length) loadQuestion();
  else finishQuiz();
};


// ADVANCED RESULT SYSTEM
function finishQuiz() {
  let result = "";
  let certifications = [];
  let jobs = [];

  if (score > 48) {
    result = "Software Engineering";
    certifications = [
      "AWS Certified Developer",
      "Google Professional Cloud Developer",
      "Oracle Java SE",
      "Azure Developer Associate",
      "Full-Stack Web Development Nanodegree"
    ];
    jobs = [
      "Software Engineer",
      "Backend Developer",
      "Full-Stack Developer",
      "DevOps Engineer",
      "Mobile App Developer"
    ];
  }

  else if (score > 42) {
    result = "Artificial Intelligence (AI)";
    certifications = [
      "Google Machine Learning Engineer",
      "IBM AI Engineering",
      "TensorFlow Developer Certificate",
      "Microsoft Azure AI Engineer"
    ];
    jobs = [
      "AI Engineer",
      "Machine Learning Engineer",
      "Data Scientist",
      "Computer Vision Engineer",
      "NLP Engineer"
    ];
  }

  else if (score > 37) {
    result = "UI/UX Design";
    certifications = [
      "Google UX Design",
      "Meta Front-End Developer",
      "Adobe XD Certification",
      "Figma Professional Training"
    ];
    jobs = [
      "UX Designer",
      "UI Designer",
      "Product Designer",
      "UX Researcher",
      "Interaction Designer"
    ];
  }

  else if (score > 32) {
    result = "Data Analysis";
    certifications = [
      "Google Data Analytics",
      "IBM Data Analyst",
      "Tableau Specialist",
      "Microsoft Power BI Analyst"
    ];
    jobs = [
      "Data Analyst",
      "Business Intelligence Analyst",
      "Reporting Analyst",
      "Junior Data Scientist",
      "Operations Data Analyst"
    ];
  }

  else if (score > 27) {
    result = "Business Analysis (BA)";
    certifications = [
      "ECBA Business Analysis",
      "CBAP Professional Analyst",
      "PMI-PBA Analyst",
      "Google Business Intelligence"
    ];
    jobs = [
      "Business Analyst",
      "Systems Analyst",
      "Product Analyst",
      "Operations Analyst",
      "Requirements Analyst"
    ];
  }

  else if (score > 22) {
    result = "IT Support";
    certifications = [
      "Google IT Support Professional",
      "CompTIA A+",
      "CompTIA Network+",
      "Microsoft Desktop Administrator"
    ];
    jobs = [
      "IT Support Specialist",
      "Help Desk Technician",
      "Systems Support Technician",
      "Network Support Technician",
      "Technical Support Engineer"
    ];
  }

  else if (score > 18) {
    result = "Cloud Security";
    certifications = [
      "AWS Security Specialty",
      "CompTIA Security+",
      "Microsoft Azure Security Engineer",
      "Cisco CCNA Security"
    ];
    jobs = [
      "Cloud Security Engineer",
      "SOC Analyst",
      "Cybersecurity Analyst",
      "IAM Engineer",
      "Cloud Compliance Analyst"
    ];
  }

  else {
    result = "Cybersecurity";
    certifications = [
      "Google Cybersecurity",
      "CompTIA Security+",
      "Cisco CCNA",
      "IBM Cybersecurity Analyst"
    ];
    jobs = [
      "Cybersecurity Analyst",
      "SOC Level 1 Analyst",
      "IT Security Technician",
      "Vulnerability Analyst",
      "Incident Response Technician"
    ];
  }


  // DISPLAY RESULT CARD
  document.querySelector(".quiz-card").innerHTML = `
    <div style="text-align:center;">
      <h2 style="margin-bottom:5px;"> Your Result</h2>
      <p class="result-text">Your recommended career path is:</p>
      <h2 style="color:#b4007f;margin:10px 0 20px;">${result}</h2>
    </div>

    <div style="background:#fff4fa;padding:15px;border-radius:12px;margin-bottom:25px;">
      <h3>Top Certifications</h3>
      <ul style="line-height:1.7;margin:0;">
        ${certifications.map(c => `<li>${c}</li>`).join("")}
      </ul>
    </div>

    <div style="background:#f4f7ff;padding:15px;border-radius:12px;">
      <h3>Career Opportunities</h3>
      <ul style="line-height:1.7;margin:0;">
        ${jobs.map(j => `<li>${j}</li>`).join("")}
      </ul>
    </div>

    <div style="text-align:center;margin-top:30px;">
      <button class="btn" onclick="location.reload()">Retake Quiz</button>
    </div>
  `;
}


// START QUIZ
function startQuiz() {
  document.getElementById("startBox").style.display = "none";
  document.getElementById("quizSection").style.display = "flex";
  loadQuestion();
}
