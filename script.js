/* =========================
   MENU MOBILE
========================= */

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

/* =========================
   THEME SWITCHER
========================= */

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Verifica tema salvo
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  body.className = savedTheme;
  updateThemeIcon(savedTheme);
}

// Alternar tema
themeToggle.addEventListener("click", () => {

  if (body.classList.contains("light-mode")) {
    body.classList.replace("light-mode", "dark-mode");
    localStorage.setItem("theme", "dark-mode");
    updateThemeIcon("dark-mode");

  } else {
    body.classList.replace("dark-mode", "light-mode");
    localStorage.setItem("theme", "light-mode");
    updateThemeIcon("light-mode");
  }
});

// Atualiza ícone
function updateThemeIcon(theme) {
  themeToggle.textContent =
    theme === "dark-mode" ? "☀️" : "🌙";
}

/* =========================
   EXPANSÃO DOS CARDS
========================= */

const expandButtons = document.querySelectorAll(".expand-btn");

expandButtons.forEach(button => {

  button.addEventListener("click", () => {

    const details =
      button.nextElementSibling;

    details.classList.toggle("active");

    button.textContent =
      details.classList.contains("active")
        ? "Mostrar menos"
        : "Saiba mais";
  });
});

/* =========================
   CALCULADORA DE IMPACTO
========================= */

const calculateBtn =
  document.getElementById("calculateBtn");

const resultBox =
  document.getElementById("result");

calculateBtn.addEventListener("click", () => {

  const hectares =
    Number(document.getElementById("hectares").value);

  const practice =
    document.getElementById("practice").value;

  // Validação
  if (!hectares || hectares <= 0) {

    resultBox.innerHTML =
      "Insira um valor válido de hectares.";

    return;
  }

  let resultMessage = "";

  // Irrigação de Precisão
  if (practice === "water") {

    const waterSaved = hectares * 50000;

    resultMessage =
      `💧 Sua propriedade poderia economizar aproximadamente
      ${waterSaved.toLocaleString("pt-BR")}
      litros de água por ano com Irrigação de Precisão.`;
  }

  // Plantio Direto
  if (practice === "carbon") {

    const carbonRetention = hectares * 1.8;

    resultMessage =
      `🌱 Sua propriedade poderia reter cerca de
      ${carbonRetention.toFixed(1)}
      toneladas de carbono por ano com Plantio Direto.`;
  }

  resultBox.innerHTML = resultMessage;
});