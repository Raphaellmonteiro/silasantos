// Aparecer elementos ao rolar
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.fade').forEach((el) => observer.observe(el));

// Mostrar e ocultar e-mail
const botaoEmail = document.getElementById('mostrarEmail');
const email = document.getElementById('email');

botaoEmail.addEventListener('click', () => {
  if (email.style.display === 'block') {
    email.style.display = 'none';
    botaoEmail.textContent = 'Mostrar E-mail';
  } else {
    email.style.display = 'block';
    botaoEmail.textContent = 'Ocultar E-mail';
  }
});
