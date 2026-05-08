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

  const popup = document.createElement('div');
  popup.id = 'callbackPopup';
  popup.className = 'popup-overlay';
  popup.innerHTML = `
    <div class="popup-box" role="dialog" aria-modal="true" aria-labelledby="callback-popup-title">
      <button class="close-btn" type="button" aria-label="Close callback popup">×</button>
      <h2 id="callback-popup-title">Didn't Find What You Were Looking For?</h2>
      <p>Get a call back from Expert Dentist</p>
      <form data-callback-form>
        <input type="text" name="name" placeholder="Name*" required>
        <input type="tel" name="phone" placeholder="Phone*" required>
        <select name="city" required>
          <option value="">Select City*</option>
          <option>Delhi</option>
          <option>Noida</option>
          <option>Meerut</option>
        </select>
        <label class="checkbox">
          <input type="checkbox" required>
          <span>I am not a Robot</span>
        </label>
        <label class="checkbox">
          <input type="checkbox" required>
          <span>I hereby consent to receive calls/messages.</span>
        </label>
        <button type="submit" class="submit-btn">Submit</button>
      </form>
    </div>
  `;
  document.body.appendChild(popup);

  const closePopup = () => {
    popup.classList.remove('is-visible');
  };

  window.setTimeout(() => {
    popup.classList.add('is-visible');
  }, 5000);

  popup.querySelector('.close-btn').addEventListener('click', closePopup);

  popup.querySelector('[data-callback-form]').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value.trim();
    const phone = form.elements.phone.value.trim();
    const city = form.elements.city.value;
    const text = [
      'Hi Star Orthodontist Clinic, I want a call back from an expert dentist.',
      `Name: ${name}`,
      `Phone: ${phone}`,
      `City: ${city}`
    ].join('\n');
    window.location.href = `https://wa.me/919650600043?text=${encodeURIComponent(text)}`;
    closePopup();
  });
})();
