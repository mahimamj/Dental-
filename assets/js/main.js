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
      const fields = Array.from(form.querySelectorAll('input, select, textarea'));
      const details = fields
        .map((field) => {
          const label = form.querySelector(`label[for="${field.id}"]`);
          const name = label ? label.textContent.trim() : field.name || field.id || 'Field';
          return `${name}: ${field.value.trim()}`;
        })
        .filter((line) => !line.endsWith(':'))
        .join('\n');
      const subject = 'Appointment Inquiry - Star Orthodontist Clinic';
      const body = `New appointment inquiry:\n\n${details}`;
      window.location.href = `mailto:starorthodonticdelhi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      const btn = form.querySelector('button[type="submit"]');
      if (btn) btn.textContent = 'Opening Email';
      const note = document.createElement('p');
      note.className = 'small';
      note.textContent = 'Your email app should open with the inquiry details filled in.';
      form.appendChild(note);
    });
  });
})();
