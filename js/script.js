// ===================================================================
// DATA — pulled from Aaditi Bhandari's resume
// ===================================================================
const SKILLS = [
  { name: "Python (Pandas, NumPy, Scikit-learn)", cat: "Programming & Data Handling", level: 92 },
  { name: "SQL / PL-SQL", cat: "Programming & Data Handling", level: 90 },
  { name: "C / C++ / Java", cat: "Programming & Data Handling", level: 70 },
  { name: "HTML / CSS / XML", cat: "Programming & Data Handling", level: 75 },
  { name: "Power BI (DAX)", cat: "Data Visualization", level: 93 },
  { name: "Tableau", cat: "Data Visualization", level: 85 },
  { name: "Looker", cat: "Data Visualization", level: 72 },
  { name: "Hypothesis Testing & Regression", cat: "Statistical & Analytical", level: 88 },
  { name: "A/B Testing", cat: "Statistical & Analytical", level: 85 },
  { name: "Data Cleaning & Wrangling", cat: "Statistical & Analytical", level: 94 },
  { name: "Predictive Modeling", cat: "Statistical & Analytical", level: 84 },
  { name: "Classification & Clustering", cat: "Machine Learning & AI", level: 82 },
  { name: "Feature Engineering", cat: "Machine Learning & AI", level: 80 },
  { name: "LLM Integration (GPT-4 / GPT-4o-mini)", cat: "Machine Learning & AI", level: 86 },
  { name: "NLP Basics", cat: "Machine Learning & AI", level: 75 },
  { name: "MySQL / PostgreSQL", cat: "Databases & Cloud", level: 88 },
  { name: "Google BigQuery / Snowflake", cat: "Databases & Cloud", level: 80 },
  { name: "Azure (Basics)", cat: "Databases & Cloud", level: 60 },
];

const EXPERIENCE = [
  {
    role: "Data/Business Analyst",
    company: "Sports Excitement LLC · Queens, New York",
    date: "Jan 2026 – Present",
    current: true,
    bullets: [
      "Analyze user behavior, marketing data, and product performance from multiple sources to generate actionable insights guiding product and marketing strategy.",
      "Conduct A/B testing, trend analysis, and user segmentation to optimize marketing campaigns and improve acquisition/engagement.",
      "Develop interactive dashboards and visual reports in Power BI/Tableau tracking engagement, retention, conversion, and campaign performance.",
      "Built predictive models to forecast user acquisition trends and support data-driven strategic planning.",
      "Collaborate with product, marketing, and design teams to present data-driven recommendations."
    ]
  },
  {
    role: "Vice President of Communications & Marketing (On-Campus)",
    company: "Graduate Student Council, UNT · Denton, Texas",
    date: "Aug 2025 – May 2026",
    current: false,
    bullets: [
      "Led marketing campaigns and analyzed student engagement metrics to optimize event participation.",
      "Managed digital platforms and collaborated with campus organizations to improve outreach and community visibility.",
      "Applied data-driven insights to measure and report on the effectiveness of events and initiatives."
    ]
  },
  {
    role: "Power BI Analyst",
    company: "HiLine Solutions · Pune, India",
    date: "Nov 2022 – Apr 2024",
    current: false,
    bullets: [
      "Built and optimized Power BI dashboards using data modeling and DAX to track key metrics.",
      "Extracted, cleaned, and transformed data using SQL to ensure high-quality datasets for accurate reporting.",
      "Partnered with cross-functional teams to translate business needs into clear, impactful visual reports."
    ]
  }
];

const PROJECTS = [
  {
    icon: "🎯",
    title: "AI-Powered Resume & ATS Matching Engine",
    tag: "LLM",
    desc: "An AI-powered resume/JD matcher combining rule-based parsing, NLP, and local embedding models — no external API required for the core engine.",
    highlights: [
      "AI-driven gap analysis to identify skill mismatches and recommend targeted resume improvements",
      "Cost-efficient inference architecture using local ML models — eliminates recurring API costs",
      "ATS compatibility checks + semantic job-match scoring via embeddings"
    ],
    tags: ["Python", "Streamlit", "NLP", "Embeddings", "Claude API"],
    github: "https://github.com/Aditib2000/resume-match-checker",
    demo: "https://resume-match-checker-mmaibxqtkbumdzd9hutdqk.streamlit.app/"
  },
  {
    icon: "🧹",
    title: "Data Cleansing with OpenAI",
    tag: "LLM",
    desc: "End-to-end NLP pipeline standardizing 800K+ records — from SQL extraction to LLM transformation and database updates.",
    highlights: [
      "Cleaned/preprocessed data with Regex and BeautifulSoup, preserving key business entities",
      "Engineered GPT prompts for consistent, production-grade outputs at scale",
      "Reduced costs 50% via batch processing and optimized SQL updates (5K+ records/batch)",
      "Fault-tolerant tracking and recovery for 48+ hour automation workflows"
    ],
    tags: ["Python", "OpenAI GPT", "SQL", "Regex", "BeautifulSoup"],
    github: "https://github.com/Aditib2000/data_cleansing_openai"
  },
  {
    icon: "🩺",
    title: "Breast Cancer Data Analysis",
    tag: "ML",
    desc: "Built and evaluated ML models to predict tumor diagnosis outcomes, identifying key clinical predictors.",
    highlights: [
      "Logistic Regression, Random Forest, and SVM models built with Scikit-learn",
      "Improved performance via feature selection and evaluation metrics (accuracy, precision, recall, ROC-AUC)"
    ],
    tags: ["Python", "Scikit-learn", "Statistics", "Healthcare"],
    github: "https://github.com/Aditib2000/Breast-Cancer-Data-Analysis"
  }
];

const GITHUB_PROFILE = "https://github.com/Aditib2000";

const CERTS = [
  { icon: "❄️", name: "Snowflake Build Data Engineering Bootcamp", org: "2025 – 2026" },
  { icon: "🤖", name: "Snowflake Build Gen AI Bootcamp", org: "2025 – 2026" },
  { icon: "📊", name: "Microsoft Power BI", org: "Certification" },
  { icon: "🎓", name: "UNT Toulouse Graduate School (TGS) Scholarship", org: "Award" },
];

const ROLES = ["forecasting models", "interactive dashboards", "AI-powered tools", "data-driven strategy"];

// ===================================================================
// RENDER
// ===================================================================
function renderSkills(filter = "all") {
  const grid = document.getElementById("skillsGrid");
  const items = filter === "all" ? SKILLS : SKILLS.filter(s => s.cat === filter);
  grid.innerHTML = items.map(s => `
    <div class="skill-card">
      <div class="skill-card-head">
        <h4>${s.name}</h4>
        <span class="lvl">${s.level}%</span>
      </div>
      <div class="skill-bar"><div class="skill-bar-fill" data-level="${s.level}"></div></div>
      <span class="skill-card-cat">${s.cat}</span>
    </div>
  `).join("");
  requestAnimationFrame(() => {
    grid.querySelectorAll(".skill-bar-fill").forEach(el => {
      el.style.width = el.dataset.level + "%";
    });
  });
}

function renderTimeline() {
  const tl = document.getElementById("timeline");
  tl.innerHTML = EXPERIENCE.map((e, i) => `
    <div class="tl-item ${e.current ? "current" : ""} ${i === 0 ? "open" : ""}" data-idx="${i}">
      <div class="tl-dot"></div>
      <div class="tl-card">
        <div class="tl-top">
          <div>
            <span class="tl-role">${e.role}</span>${e.current ? '<span class="tl-badge">CURRENT</span>' : ""}
            <div class="tl-company">${e.company}</div>
          </div>
          <span class="tl-date">${e.date}</span>
        </div>
        <div class="tl-details">
          <ul>${e.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
        </div>
        <span class="tl-toggle">${i === 0 ? "Click to collapse ▲" : "Click to expand ▾"}</span>
      </div>
    </div>
  `).join("");

  tl.querySelectorAll(".tl-item").forEach(item => {
    item.querySelector(".tl-card").addEventListener("click", () => {
      const wasOpen = item.classList.contains("open");
      item.classList.toggle("open");
      item.querySelector(".tl-toggle").textContent = wasOpen ? "Click to expand ▾" : "Click to collapse ▲";
    });
  });
}

function renderProjects(filter = "all") {
  const grid = document.getElementById("projectsGrid");
  const items = filter === "all" ? PROJECTS : PROJECTS.filter(p => p.tag === filter);
  grid.innerHTML = items.map(p => `
    <div class="project-card">
      <div class="project-card-inner">
        <div class="project-icon">${p.icon}</div>
        <h3>${p.title}</h3>
        <p class="p-desc">${p.desc}</p>
        <ul class="project-highlights">${p.highlights.map(h => `<li>${h}</li>`).join("")}</ul>
        <div class="tag-row">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
        <div class="project-links">
          <a href="${p.github}" target="_blank" rel="noopener">View on GitHub ↗</a>
          ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener">Live Demo ↗</a>` : ""}
        </div>
      </div>
    </div>
  `).join("") + `
    <a class="project-card more-card" href="${GITHUB_PROFILE}" target="_blank" rel="noopener">
      <div class="project-card-inner more-card-inner">
        <div class="project-icon">🔗</div>
        <h3>More Projects</h3>
        <p class="p-desc">Explore the rest of my repos on GitHub.</p>
        <span class="more-card-cta">View GitHub Profile ↗</span>
      </div>
    </a>
  `;
}

function renderCerts() {
  const grid = document.getElementById("certsGrid");
  grid.innerHTML = CERTS.map(c => `
    <div class="cert-card">
      <div class="cert-icon">${c.icon}</div>
      <div>
        <h4>${c.name}</h4>
        <p>${c.org}</p>
      </div>
    </div>
  `).join("");
}

renderSkills();
renderTimeline();
renderProjects();
renderCerts();

// ===================================================================
// FILTERS
// ===================================================================
document.getElementById("skillFilters").addEventListener("click", e => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  document.querySelectorAll("#skillFilters .chip").forEach(c => c.classList.remove("active"));
  btn.classList.add("active");
  renderSkills(btn.dataset.filter);
});

document.getElementById("projectFilters").addEventListener("click", e => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  document.querySelectorAll("#projectFilters .chip").forEach(c => c.classList.remove("active"));
  btn.classList.add("active");
  renderProjects(btn.dataset.filter);
});

// ===================================================================
// TYPED ROLE ANIMATION
// ===================================================================
(function typeLoop() {
  const el = document.getElementById("typedRole");
  let roleIdx = 0, charIdx = 0, deleting = false;

  function tick() {
    const word = ROLES[roleIdx];
    if (!deleting) {
      charIdx++;
      el.textContent = word.slice(0, charIdx);
      if (charIdx === word.length) {
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      charIdx--;
      el.textContent = word.slice(0, charIdx);
      if (charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % ROLES.length;
      }
    }
    setTimeout(tick, deleting ? 35 : 65);
  }
  tick();
})();

// ===================================================================
// STAT COUNTERS
// ===================================================================
function animateStats() {
  document.querySelectorAll(".stat-num").forEach(el => {
    const target = parseFloat(el.dataset.target);
    const decimals = parseInt(el.dataset.decimals || "0");
    const suffix = el.dataset.suffix || "";
    const duration = 1400;
    const start = performance.now();
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = target * eased;
      el.textContent = val.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
}

// ===================================================================
// SCROLL REVEAL
// ===================================================================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in");
      if (entry.target.classList.contains("hero-stats")) animateStats();
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// ===================================================================
// NAV: scroll state, active link, mobile menu
// ===================================================================
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main .section, .hero");
const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 20);

  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = (window.scrollY / docHeight * 100) + "%";

  let current = "home";
  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    if (window.scrollY >= top) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle("active", link.dataset.section === current);
  });
}, { passive: true });

const hamburger = document.getElementById("hamburger");
const navLinksEl = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  navLinksEl.classList.toggle("open");
  hamburger.classList.toggle("open");
});
navLinksEl.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  navLinksEl.classList.remove("open");
}));

// ===================================================================
// THEME TOGGLE
// ===================================================================
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;
const savedTheme = localStorage.getItem("theme");
if (savedTheme) root.setAttribute("data-theme", savedTheme);

themeToggle.addEventListener("click", () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const current = root.getAttribute("data-theme") || (prefersDark ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

// ===================================================================
// CURSOR GLOW
// ===================================================================
const glow = document.getElementById("cursorGlow");
window.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
}, { passive: true });

// ===================================================================
// COPY EMAIL
// ===================================================================
document.querySelector('.contact-card[href^="mailto"]').addEventListener("click", (e) => {
  e.preventDefault();
  navigator.clipboard.writeText("aaditibhandari6@gmail.com").then(showToast);
});
function showToast() {
  const toast = document.getElementById("toast");
  toast.textContent = "Email copied to clipboard ✓";
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

// ===================================================================
// FOOTER YEAR
// ===================================================================
document.getElementById("year").textContent = new Date().getFullYear();

// ===================================================================
// PARTICLES CANVAS (lightweight ambient background)
// ===================================================================
(function particles() {
  const canvas = document.getElementById("particles");
  const ctx = canvas.getContext("2d");
  let w, h, particlesArr;

  function resize() {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  }

  function init() {
    resize();
    const count = Math.min(60, Math.floor(w / 25));
    particlesArr = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
    }));
  }

  function isDark() {
    const t = root.getAttribute("data-theme");
    if (t) return t === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    const color = isDark() ? "255,255,255" : "40,30,90";
    particlesArr.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color},0.35)`;
      ctx.fill();
    });
    for (let i = 0; i < particlesArr.length; i++) {
      for (let j = i + 1; j < particlesArr.length; j++) {
        const a = particlesArr[i], b = particlesArr[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 110) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(${color},${0.12 * (1 - d / 110)})`;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    init();
    draw();
    window.addEventListener("resize", init);
  }
})();
