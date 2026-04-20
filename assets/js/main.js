(() => {
  const navToggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const forms = document.querySelectorAll('form[data-lead-form]');
  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (btn) btn.textContent = 'Request Sent';
      const note = document.createElement('p');
      note.className = 'small';
      note.textContent = 'Thank you. Our team will contact you shortly.';
      form.appendChild(note);
      form.querySelectorAll('input, select, textarea, button').forEach((el) => {
        el.disabled = true;
      });
    });
  });
})();