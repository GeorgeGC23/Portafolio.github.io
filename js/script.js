// Seleccionamos los elementos del DOM
const toggleThemeBtn = document.getElementById('theme-toggle');
const toggleLanguageBtn = document.getElementById('language-toggle');
const currentLanguageText = document.getElementById('current-language');

// Manejamos el cambio de tema (modo oscuro / modo claro)
toggleThemeBtn.addEventListener('click', () => {
  // Cambiar entre claro y oscuro
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  // Aplicamos el nuevo tema
  document.documentElement.setAttribute('data-theme', newTheme);

  // Guardamos el tema en el localStorage para recordar la preferencia del usuario
  localStorage.setItem('theme', newTheme);
});

// Al cargar la página, verificamos si el usuario tiene un tema guardado en el localStorage
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light'; // Por defecto será el modo claro
  document.documentElement.setAttribute('data-theme', savedTheme);
});

// Manejamos el cambio de idioma
toggleLanguageBtn.addEventListener('click', () => {
  // Obtenemos el idioma actual
  const currentLanguage = document.documentElement.getAttribute('lang');

  // Cambiamos entre español (es) e inglés (en)
  const newLanguage = currentLanguage === 'es' ? 'en' : 'es';

  // Aplicamos el nuevo idioma
  document.documentElement.setAttribute('lang', newLanguage);

  // Actualizamos el texto del botón o indicador de idioma
  currentLanguageText.textContent = newLanguage === 'es' ? 'ES' : 'EN';

  // Guardamos el idioma en el localStorage para recordar la preferencia del usuario
  localStorage.setItem('language', newLanguage);
});

// Al cargar la página, verificamos si el usuario tiene un idioma guardado en el localStorage
document.addEventListener('DOMContentLoaded', () => {
  const savedLanguage = localStorage.getItem('language') || 'es'; // Por defecto será el idioma español
  document.documentElement.setAttribute('lang', savedLanguage);
  currentLanguageText.textContent = savedLanguage === 'es' ? 'ES' : 'EN';
});
