document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');

  toggle.addEventListener('click', () => {
    if (nav.style.display === 'block') {
      nav.style.display = '';
    } else {
      nav.style.display = 'block';
      nav.style.position = 'absolute';
      nav.style.right = '20px';
      nav.style.top = '70px';
      nav.style.padding = '12px';
      nav.style.background = 'rgba(0,0,0,0.7)';
      nav.style.borderRadius = '12px';
      nav.style.backdropFilter = 'blur(10px)';
    }
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const hash = link.getAttribute('href');
      if (hash.length > 1) {
        e.preventDefault();
        const target = document.querySelector(hash);
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Form
  const form = document.getElementById('contactForm');
  const clearBtn = document.getElementById('clearBtn');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensagem enviada! Entraremos em contato.');
    form.reset();
  });

  clearBtn.addEventListener('click', () => {
    form.reset();
  });
});
