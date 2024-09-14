// Seleccionamos los elementos del DOM
const toggleThemeBtn = document.getElementById('toggle-theme');
const langEsBtn = document.getElementById('lang-es');
const langEnBtn = document.getElementById('lang-en');


document.addEventListener('DOMContentLoaded', () => {
  const savedLanguage = localStorage.getItem('language') || 'en'; // Por defecto será inglés
  changeLanguage(savedLanguage);
  document.getElementById(`lang-${savedLanguage}`).classList.add('active'); // Marca el botón del idioma activo
});
// Cambio de idioma
// Objeto de traducción
const translations = {
  en: {
    greeting: "Hi! I'm George Galván",
    description: "Peruvian student in software engineering, enthusiastic about learning new skills.",
    skills: "Skills",
    frontend: "Front-end",
    backend: "Back-end",
    mobileDev: "Mobile Development",
    databases: "Databases",
    tools: "Tools",
    languages: "Languages",
    recentProjects: "Recent Projects",
    techelpTitle: "TecHelp",
    techelpDescription: "TecHelp is an app that manages technical visits for cell phone repairs. Technicians can view their earnings and users manage their technical visit and the status of the device in a friendly way.",
    vetcareTitle: "VetCare",
    vetcareDescription: "VetCare is an app designed to facilitate the management of veterinary appointments. It also offers an online store where users can purchase food and accessories for their pets.",
    repository: "Repository",
    landingPage: "Landing Page",
    demo: "Demo",
    footerText: "© 2024 George Galván Cerrón"
  },
  es: {
    greeting: "Hola! Soy George Galván",
    description: "Estudiante peruano de ingeniería de software, entusiasta por aprender nuevas habilidades.",
    skills: "Habilidades",
    frontend: "Front-end",
    backend: "Back-end",
    mobileDev: "Desarrollo móvil",
    databases: "Bases de Datos",
    tools: "Herramientas",
    languages: "Idiomas",
    recentProjects: "Proyectos Recientes",
    techelpTitle: "TecHelp",
    techelpDescription: "TecHelp es una aplicación que gestiona visitas técnicas para la reparación de celulares. Los técnicos pueden ver sus ganancias y los usuarios gestionan su visita técnica y el estado del equipo de manera amigable.",
    vetcareTitle: "VetCare",
    vetcareDescription: "VetCare es una aplicación diseñada para facilitar la gestión de citas veterinarias. Además, ofrece una tienda en línea donde los usuarios pueden adquirir alimentos y accesorios para sus mascotas.",
    repository: "Repositorio",
    landingPage: "Landing Page",
    demo: "Demo",
    footerText: "© 2024 George Galván Cerrón"
  }
};

function changeLanguage(lang) {
  document.getElementById('greeting').textContent = translations[lang].greeting;
  document.getElementById('description').textContent = translations[lang].description;
  document.getElementById('skills-title').textContent = translations[lang].skills;
  document.getElementById('frontend-title').textContent = translations[lang].frontend;
  document.getElementById('backend-title').textContent = translations[lang].backend;
  document.getElementById('mobileDev-title').textContent = translations[lang].mobileDev;
  document.getElementById('databases-title').textContent = translations[lang].databases;
  document.getElementById('tools-title').textContent = translations[lang].tools;
  document.getElementById('languages-title').textContent = translations[lang].languages;
  document.getElementById('recent-projects-title').textContent = translations[lang].recentProjects;
  document.getElementById('techelp-title').textContent = translations[lang].techelpTitle;
  document.getElementById('techelp-description').textContent = translations[lang].techelpDescription;
  document.getElementById('vetcare-title').textContent = translations[lang].vetcareTitle;
  document.getElementById('vetcare-description').textContent = translations[lang].vetcareDescription;
  document.getElementById('techelp-repo').textContent = translations[lang].repository;
  document.getElementById('techelp-landing').textContent = translations[lang].landingPage;
  document.getElementById('vetcare-demo').textContent = translations[lang].demo;
  document.getElementById('footer-text').textContent = translations[lang].footerText;

    // Guarda la preferencia en el localStorage
  localStorage.setItem('language', lang);
}

// Listeners para cambiar idioma
document.getElementById('lang-es').addEventListener('click', () => changeLanguage('es'));
document.getElementById('lang-en').addEventListener('click', () => changeLanguage('en'));


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


document.addEventListener('DOMContentLoaded', () => {
  // Seleccionamos la sección de introducción y añadimos la clase de animación
  const introSection = document.getElementById('intro-section');
  introSection.classList.add('animate-slide-up');
});

// Función para manejar la visibilidad en el scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
});

// Seleccionamos las secciones con animaciones
document.querySelectorAll('.animate-on-scroll').forEach((section) => {
  observer.observe(section);
});
