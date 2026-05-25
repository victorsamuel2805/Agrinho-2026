/* =========================================================
   AGRO SUSTENTÁVEL — JS COMPLETO PREMIUM
   Funcionalidades:
   ✅ Menu mobile animado
   ✅ Dark mode persistente
   ✅ Cards expansíveis
   ✅ Scroll reveal animation
   ✅ Scroll suave
   ✅ Header dinâmico
   ✅ Contadores animados
   ✅ Calculadora de impacto
   ✅ Toast notifications
   ✅ Fade animations
   ✅ Botão voltar ao topo
   ✅ Parallax hero
   ✅ Lazy loading de imagens
   ✅ Ripple effect nos botões
   ========================================================= */

/* =========================================================
   UTILIDADES
========================================================= */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

/* =========================================================
   MENU MOBILE
========================================================= */

const hamburger = $("#hamburger");
const navMenu = $("#navMenu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("open");
  });

  $$("#navMenu a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      hamburger.classList.remove("open");
    });
  });
}

/* =========================================================
   SCROLL SUAVE
========================================================= */

$$('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

/* =========================================================
   DARK MODE
========================================================= */

const themeToggle = $("#themeToggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  body.classList.add(savedTheme);
  updateThemeIcon(savedTheme);
} else {
  body.classList.add("light-mode");
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {

    const isLight =
      body.classList.contains("light-mode");

    body.classList.toggle("light-mode");
    body.classList.toggle("dark-mode");

    const newTheme =
      isLight ? "dark-mode" : "light-mode";

    localStorage.setItem("theme", newTheme);

    updateThemeIcon(newTheme);

    showToast(
      newTheme === "dark-mode"
        ? "🌙 Dark mode ativado"
        : "☀️ Light mode ativado"
    );
  });
}

function updateThemeIcon(theme) {
  if (!themeToggle) return;

  themeToggle.textContent =
    theme === "dark-mode"
      ? "☀️"
      : "🌙";
}

/* =========================================================
   HEADER DINÂMICO
========================================================= */

const header = $("header");

window.addEventListener("scroll", () => {

  if (!header) return;

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* =========================================================
   CARDS EXPANSÍVEIS
========================================================= */

const expandButtons = $$(".expand-btn");

expandButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const details =
      button.nextElementSibling;

    details.classList.toggle("active");

    if (details.classList.contains("active")) {
      button.textContent = "Mostrar menos";
    } else {
      button.textContent = "Saiba mais";
    }
  });
});

/* =========================================================
   CALCULADORA DE IMPACTO
========================================================= */

const calculateBtn = $("#calculateBtn");
const resultBox = $("#result");

if (calculateBtn) {

  calculateBtn.addEventListener("click", () => {

    const hectares =
      Number($("#hectares").value);

    const practice =
      $("#practice").value;

    if (!hectares || hectares <= 0) {

      resultBox.innerHTML = `
        <div class="error fade-in">
          ⚠️ Insira um valor válido.
        </div>
      `;

      shakeElement(resultBox);

      return;
    }

    let resultMessage = "";

    switch (practice) {

      case "water":

        const waterSaved = hectares * 50000;

        resultMessage = `
          <div class="success fade-in">
            💧 Economia estimada:
            <strong>
              ${waterSaved.toLocaleString("pt-BR")}
            </strong>
            litros/ano.
          </div>
        `;

        break;

      case "carbon":

        const carbonRetention = hectares * 1.8;

        resultMessage = `
          <div class="success fade-in">
            🌱 Retenção estimada:
            <strong>
              ${carbonRetention.toFixed(1)}
            </strong>
            toneladas de carbono/ano.
          </div>
        `;

        break;

      case "solar":

        const energy = hectares * 1200;

        resultMessage = `
          <div class="success fade-in">
            ☀️ Energia limpa gerada:
            <strong>
              ${energy.toLocaleString("pt-BR")}
            </strong>
            kWh/ano.
          </div>
        `;

        break;

      case "trees":

        const trees = hectares * 45;

        resultMessage = `
          <div class="success fade-in">
            🌳 Árvores equivalentes:
            <strong>
              ${trees.toLocaleString("pt-BR")}
            </strong>
            árvores preservadas.
          </div>
        `;

        break;
    }

    resultBox.innerHTML = resultMessage;

    showToast("✅ Cálculo realizado com sucesso");
  });
}

/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
  document.querySelectorAll(
    ".card, .calculator, .section-title, .stat"
  );

const revealOnScroll = () => {

  const windowHeight =
    window.innerHeight;

  revealElements.forEach((element) => {

    const elementTop =
      element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* =========================================================
   CONTADORES ANIMADOS
========================================================= */

const counters =
  document.querySelectorAll(".counter");

const animateCounter = (counter) => {

  const target =
    +counter.getAttribute("data-target");

  let count = 0;

  const increment = target / 150;

  const updateCounter = () => {

    count += increment;

    if (count < target) {

      counter.innerText =
        Math.floor(count).toLocaleString("pt-BR");

      requestAnimationFrame(updateCounter);

    } else {

      counter.innerText =
        target.toLocaleString("pt-BR");
    }
  };

  updateCounter();
};

const counterObserver =
  new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        animateCounter(entry.target);

        counterObserver.unobserve(entry.target);
      }
    });
  });

counters.forEach((counter) => {
  counterObserver.observe(counter);
});

/* =========================================================
   TOAST NOTIFICATION
========================================================= */

function showToast(message) {

  const toast =
    document.createElement("div");

  toast.className = "toast";
  toast.innerHTML = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  setTimeout(() => {

    toast.classList.remove("show");

    setTimeout(() => {
      toast.remove();
    }, 400);

  }, 3000);
}

/* =========================================================
   BOTÃO VOLTAR AO TOPO
========================================================= */

const backToTop =
  document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.className = "back-to-top";

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {

  if (window.scrollY > 400) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

backToTop.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/* =========================================================
   PARALLAX HERO
========================================================= */

const hero = $(".hero");

window.addEventListener("scroll", () => {

  if (!hero) return;

  const scroll =
    window.pageYOffset;

  hero.style.backgroundPositionY =
    scroll * 0.5 + "px";
});

/* =========================================================
   LAZY LOADING DE IMAGENS
========================================================= */

const lazyImages =
  document.querySelectorAll("img[data-src]");

const imageObserver =
  new IntersectionObserver((entries, observer) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        const img = entry.target;

        img.src = img.dataset.src;

        img.onload = () => {
          img.classList.add("loaded");
        };

        observer.unobserve(img);
      }
    });
  });

lazyImages.forEach((img) => {
  imageObserver.observe(img);
});

/* =========================================================
   EFEITO RIPPLE NOS BOTÕES
========================================================= */

const buttons =
  document.querySelectorAll(
    "button, .btn"
  );

buttons.forEach((button) => {

  button.addEventListener("click", function (e) {

    const ripple =
      document.createElement("span");

    ripple.classList.add("ripple");

    const rect =
      button.getBoundingClientRect();

    ripple.style.left =
      e.clientX - rect.left + "px";

    ripple.style.top =
      e.clientY - rect.top + "px";

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

/* =========================================================
   ANIMAÇÃO SHAKE
========================================================= */

function shakeElement(element) {

  element.classList.add("shake");

  setTimeout(() => {
    element.classList.remove("shake");
  }, 500);
}

/* =========================================================
   DETECÇÃO DE MOBILE
========================================================= */

function isMobile() {
  return window.innerWidth <= 768;
}

if (isMobile()) {
  console.log("📱 Mobile mode");
}

/* =========================================================
   PRELOADER
========================================================= */

window.addEventListener("load", () => {

  const preloader =
    document.querySelector(".preloader");

  if (preloader) {

    preloader.classList.add("hide");

    setTimeout(() => {
      preloader.remove();
    }, 500);
  }
});

/* =========================================================
   EFEITO DIGITAÇÃO NO HERO
========================================================= */

const typingElement =
  document.querySelector(".typing");

if (typingElement) {

  const text =
    typingElement.dataset.text;

  let index = 0;

  function typeEffect() {

    if (index < text.length) {

      typingElement.innerHTML +=
        text.charAt(index);

      index++;

      setTimeout(typeEffect, 80);
    }
  }

  typingElement.innerHTML = "";

  typeEffect();
}

/* =========================================================
   PARTICLES OPCIONAL
========================================================= */

if (window.particlesJS) {

  particlesJS("particles-js", {

    particles: {

      number: {
        value: 50
      },

      color: {
        value: "#2e7d32"
      },

      shape: {
        type: "circle"
      },

      opacity: {
        value: 0.3
      },

      size: {
        value: 3
      },

      move: {
        speed: 2
      }
    }
  });
}

/* =========================================================
   MENSAGEM INICIAL
========================================================= */

window.addEventListener("DOMContentLoaded", () => {

  setTimeout(() => {

    showToast(
      "🌱 Bem-vindo ao Agro Sustentável"
    );

  }, 1200);
});

/* =========================================================
   OBSERVER GLOBAL PARA FADE-IN
========================================================= */

const fadeElements =
  document.querySelectorAll(
    ".fade-up, .fade-left, .fade-right"
  );

const fadeObserver =
  new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

        fadeObserver.unobserve(entry.target);
      }
    });
  });

fadeElements.forEach((element) => {
  fadeObserver.observe(element);
});

/* =========================================================
   FIM DO SISTEMA
========================================================= */

console.log(`
🌿 Agro Sustentável Premium
🚀 Sistema carregado com sucesso
`);