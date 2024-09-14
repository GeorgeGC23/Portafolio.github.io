// Seleccionamos los elementos del DOM
const toggleThemeBtn = document.getElementById('toggle-theme');
const langEsBtn = document.getElementById('lang-es');
const langEnBtn = document.getElementById('lang-en');

// Cambio de idioma
const translations = {
  en: {
    greeting: "Hi! I'm George Galvan",
    description: "Peruvian student in software engineering, enthusiastic about learning new skills.",
    projects: "Recent Projects",
    skills: "Skills"
  },
  es: {
    greeting: "Hola! Soy George Galván",
    description: "Estudiante peruano de ingeniería de software, entusiasta por aprender nuevas habilidades.",
    projects: "Proyectos recientes",
    skills: "Habilidades"
  }
};

function changeLanguage(lang) {
  document.getElementById('greeting').textContent = translations[lang].greeting;
  document.getElementById('description').textContent = translations[lang].description;
}

// Listeners para cambiar idioma
langEsBtn.addEventListener('click', () => changeLanguage('es'));
langEnBtn.addEventListener('click', () => changeLanguage('en'));

// Modo oscuro/claro
toggleThemeBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  // Aplicamos el nuevo tema
  document.documentElement.setAttribute('data-theme', newTheme);

  // Guardamos el nuevo tema en localStorage
  localStorage.setItem('theme', newTheme);
});

// Al cargar la página, aplicamos el tema guardado en localStorage
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
});
