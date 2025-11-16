// script.js — comportamento mínimo e seguro, sem alterar layout

document.addEventListener('DOMContentLoaded', () => {
  // Atualiza ano do rodapé
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Toggle menu (mobile)
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      // simples toggle de display (sem mexer em classes visuais)
      if (mainNav.style.display === 'block' || mainNav.style.display === 'flex') {
        mainNav.style.display = '';
      } else {
        mainNav.style.display = 'block';
        mainNav.style.position = 'absolute';
        mainNav.style.right = '28px';
        mainNav.style.top = '72px';
        mainNav.style.flexDirection = 'column';
        mainNav.style.padding = '12px';
        mainNav.style.background = 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))';
        mainNav.style.borderRadius = '10px';
        mainNav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.6)';
      }
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = a.getAttribute('href');
      if (target && target.length > 1) {
        const el = document.querySelector(target);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // close menu on mobile after click
          if (window.innerWidth < 1000 && mainNav) mainNav.style.display = '';
        }
      }
    });
  });

  // Form handling (simulação) — mantém aparência, mostra feedback simples
  const form = document.getElementById('contactForm');
  const clearBtn = document.getElementById('clearBtn');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('#name')?.value.trim();
      const email = form.querySelector('#email')?.value.trim();
      const message = form.querySelector('#message')?.value.trim();

      if (!name || !email || !message) {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]') || form.querySelector('.btn.primary');
      if (submitBtn) {
        const prev = submitBtn.textContent;
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        setTimeout(() => {
          alert('Mensagem enviada! Entraremos em contato em breve.');
          submitBtn.textContent = prev;
          submitBtn.disabled = false;
          form.reset();
        }, 900);
      } else {
        form.reset();
        alert('Mensagem enviada! Entraremos em contato em breve.');
      }
    });
  }

  if (clearBtn && form) {
    clearBtn.addEventListener('click', () => form.reset());
  }

  // Simple metric entrance animation
  const metrics = document.querySelectorAll('.metric .metric-num');
  if (metrics.length) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transform = 'translateY(-6px)';
          entry.target.style.transition = 'transform .6s cubic-bezier(.2,.9,.3,1)';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    metrics.forEach(m => io.observe(m));
  }
});
