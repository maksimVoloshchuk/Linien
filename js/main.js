/* ============================
   LINIEN · Massage Aesthetic
   Main JavaScript — upgraded
   ============================ */

'use strict';

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const header = document.querySelector('.site-header');
const backBtn = document.getElementById('backToTop');
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const preferredDateInput = document.getElementById('preferredDate');
const bookingTimeInput = document.getElementById('bookingTime');
const slotGrid = document.getElementById('slotGrid');
const slotHelper = document.getElementById('slotHelper');
const serviceSelect = document.getElementById('service');
const heroContent = document.querySelector('.hero-content');
const candleFlame = document.querySelector('.candle-flame');

const bookingState = {
  reservedSlots: new Set(),
  selectedSlot: '',
  loaded: false
};

const SLOT_MARKER_REGEX = /\[\[BOOKING_SLOT:([0-9]{4}-[0-9]{2}-[0-9]{2})\|([0-9]{2}:[0-9]{2})\]\]/g;
const BUSINESS_HOURS = {
  0: null,
  1: { start: '09:00', end: '19:30' },
  2: { start: '09:00', end: '19:30' },
  3: { start: '09:00', end: '19:30' },
  4: { start: '09:00', end: '19:30' },
  5: { start: '09:00', end: '19:30' },
  6: { start: '10:00', end: '17:30' }
};

function closeNav() {
  if (!navLinks || !navToggle) return;
  navLinks.classList.remove('open');
  navToggle.classList.remove('active');
  navToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

navToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('active', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeNav);
});

document.addEventListener('click', event => {
  if (!navLinks || !navToggle) return;
  const clickedInside = navLinks.contains(event.target) || navToggle.contains(event.target);
  if (navLinks.classList.contains('open') && !clickedInside) {
    closeNav();
  }
});

function onScroll() {
  if (window.scrollY > 24) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }

  if (backBtn) {
    backBtn.classList.toggle('visible', window.scrollY > 320);
  }

  if (heroContent && window.scrollY < window.innerHeight) {
    const scrolled = window.scrollY;
    heroContent.style.transform = `translateY(${scrolled * 0.12}px)`;
    heroContent.style.opacity = String(Math.max(0.2, 1 - scrolled / (window.innerHeight * 0.92)));
  }

  animateCounters();
  observeAosElements();
}

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('load', onScroll);

function observeAosElements() {
  const elements = document.querySelectorAll('[data-aos]:not(.aos-animate)');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add('aos-animate');
    }
  });
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );

  window.addEventListener('load', () => {
    document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));
  });
}

function scrollToTarget(target) {
  if (!target) return;
  const headerHeight = header?.offsetHeight || 80;
  const targetTop = target === document.body || target === document.documentElement
    ? 0
    : target.getBoundingClientRect().top + window.scrollY - headerHeight + 4;

  window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', event => {
    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;

    const isTopLink = href === '#top' || anchor.id === 'backToTop';
    const target = isTopLink ? document.documentElement : document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    scrollToTarget(target);
  });
});

backBtn?.addEventListener('click', event => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(counter => {
    if (counter.dataset.animated) return;
    const rect = counter.getBoundingClientRect();
    if (rect.top > window.innerHeight - 30) return;

    const targetText = counter.textContent.trim();
    const numericPart = parseFloat(targetText);
    const suffix = targetText.replace(/[\d.]/g, '');
    if (Number.isNaN(numericPart)) return;

    counter.dataset.animated = 'true';
    const duration = 1200;
    const startTime = performance.now();

    const update = now => {
      const progress = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = numericPart * ease;
      counter.textContent = `${Number.isInteger(numericPart) ? Math.round(current) : current.toFixed(1)}${suffix}`;
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  });
}

document.querySelector('.about-visual')?.addEventListener('mouseenter', () => {
  if (candleFlame) candleFlame.style.animationDuration = '0.7s';
});

document.querySelector('.about-visual')?.addEventListener('mouseleave', () => {
  if (candleFlame) candleFlame.style.animationDuration = '1.6s';
});

function formatDateValue(date) {
  return date.toISOString().split('T')[0];
}

function addDays(date, days) {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + days);
  return nextDate;
}

function toMinutes(timeString) {
  const [hours, minutes] = timeString.split(':').map(Number);
  return hours * 60 + minutes;
}

function minutesToTime(totalMinutes) {
  const hours = String(Math.floor(totalMinutes / 60)).padStart(2, '0');
  const minutes = String(totalMinutes % 60).padStart(2, '0');
  return `${hours}:${minutes}`;
}

function getSlotsForDate(dateValue) {
  if (!dateValue) return [];
  const weekday = new Date(`${dateValue}T12:00:00`).getDay();
  const hours = BUSINESS_HOURS[weekday];
  if (!hours) return [];

  const slots = [];
  for (let minutes = toMinutes(hours.start); minutes <= toMinutes(hours.end); minutes += 30) {
    slots.push(minutesToTime(minutes));
  }
  return slots;
}

function slotKey(dateValue, timeValue) {
  return `${dateValue}|${timeValue}`;
}

function resetSelectedSlot(clearInput = true) {
  bookingState.selectedSlot = '';
  if (clearInput && bookingTimeInput) {
    bookingTimeInput.value = '';
  }
  document.querySelectorAll('.slot-button.is-selected').forEach(button => {
    button.classList.remove('is-selected');
  });
}

function updateSlotHelper(text) {
  if (slotHelper) slotHelper.textContent = text;
}

function renderSlots() {
  if (!slotGrid || !preferredDateInput) return;

  const dateValue = preferredDateInput.value;
  slotGrid.innerHTML = '';
  resetSelectedSlot(false);

  if (!dateValue) {
    updateSlotHelper('Bitte wählen Sie zuerst ein Datum. Danach sehen Sie sofort freie und belegte Termine.');
    bookingTimeInput && (bookingTimeInput.value = '');
    return;
  }

  const slots = getSlotsForDate(dateValue);
  if (!slots.length) {
    updateSlotHelper('Für diesen Tag sind keine Online-Termine vorgesehen. Bitte wählen Sie einen anderen Tag oder kontaktieren Sie uns direkt.');
    bookingTimeInput && (bookingTimeInput.value = '');
    return;
  }

  slots.forEach(timeValue => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'slot-button';
    button.textContent = timeValue;

    const reserved = bookingState.reservedSlots.has(slotKey(dateValue, timeValue));
    if (reserved) {
      button.classList.add('is-busy');
      button.disabled = true;
      button.setAttribute('aria-disabled', 'true');
      button.title = 'Dieser Termin ist bereits reserviert';
    }

    button.addEventListener('click', () => {
      if (reserved) return;
      document.querySelectorAll('.slot-button.is-selected').forEach(item => item.classList.remove('is-selected'));
      button.classList.add('is-selected');
      bookingState.selectedSlot = slotKey(dateValue, timeValue);
      if (bookingTimeInput) bookingTimeInput.value = timeValue;
      updateSlotHelper(`Ausgewählt: ${dateValue} um ${timeValue}. Graue Zeiten sind bereits belegt.`);
    });

    slotGrid.appendChild(button);
  });

  updateSlotHelper('Wählen Sie eine freie Uhrzeit aus. Graue Zeiten sind bereits belegt.');
}

async function fetchReservedSlots() {
  if (!window.supabase) return;

  try {
    const { data, error } = await window.supabase
      .from('inquiries')
      .select('message, date')
      .order('date', { ascending: false })
      .limit(500);

    if (error) throw error;

    bookingState.reservedSlots.clear();
    (data || []).forEach(entry => {
      const message = entry?.message || '';
      const matches = message.matchAll(SLOT_MARKER_REGEX);
      for (const match of matches) {
        bookingState.reservedSlots.add(slotKey(match[1], match[2]));
      }
    });

    bookingState.loaded = true;
    renderSlots();
  } catch (error) {
    console.warn('Slots konnten nicht geladen werden:', error?.message || error);
    bookingState.loaded = false;
    updateSlotHelper('Zeiten konnten gerade nicht synchronisiert werden. Sie können trotzdem eine Anfrage senden.');
  }
}

function setDateBoundaries() {
  if (!preferredDateInput) return;
  const today = new Date();
  const maxDate = addDays(today, 90);
  preferredDateInput.min = formatDateValue(today);
  preferredDateInput.max = formatDateValue(maxDate);
}

preferredDateInput?.addEventListener('change', async () => {
  resetSelectedSlot();
  await fetchReservedSlots();
});

async function initializeBookingUI() {
  setDateBoundaries();
  renderSlots();
  await fetchReservedSlots();
}

function shakeField(selector) {
  const element = document.querySelector(selector);
  if (!element) return;
  element.style.borderColor = '#c0392b';
  element.style.animation = 'shake 0.4s ease';
  element.addEventListener('animationend', () => {
    element.style.animation = '';
    element.style.borderColor = '';
  }, { once: true });
  element.focus();
}

const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-6px); }
  40% { transform: translateX(6px); }
  60% { transform: translateX(-4px); }
  80% { transform: translateX(4px); }
}`;
document.head.appendChild(shakeStyle);

function buildBookingMessage(originalMessage, dateValue, timeValue) {
  const bookingMarker = `[[BOOKING_SLOT:${dateValue}|${timeValue}]]`;
  const summaryLine = `Terminwunsch: ${dateValue} um ${timeValue}`;
  const cleanedMessage = (originalMessage || '').trim();
  return cleanedMessage
    ? `${bookingMarker}\n${summaryLine}\n${cleanedMessage}`
    : `${bookingMarker}\n${summaryLine}`;
}

contactForm?.addEventListener('submit', async event => {
  event.preventDefault();

  const submitButton = contactForm.querySelector('button[type="submit"]');
  const nameValue = contactForm.querySelector('#name')?.value.trim() || '';
  const phoneValue = contactForm.querySelector('#phone')?.value.trim() || '';
  const serviceValue = contactForm.querySelector('#service')?.value || '';
  const dateValue = preferredDateInput?.value || '';
  const timeValue = bookingTimeInput?.value || '';
  const messageValue = contactForm.querySelector('#message')?.value.trim() || '';

  if (!nameValue) return shakeField('#name');
  if (!phoneValue) return shakeField('#phone');
  if (!serviceValue) return shakeField('#service');
  if (!dateValue) return shakeField('#preferredDate');
  if (!timeValue) {
    updateSlotHelper('Bitte wählen Sie zuerst eine freie Uhrzeit aus.');
    return;
  }

  submitButton.textContent = 'Wird gesendet …';
  submitButton.disabled = true;

  try {
    await fetchReservedSlots();
    if (bookingState.reservedSlots.has(slotKey(dateValue, timeValue))) {
      updateSlotHelper('Diese Uhrzeit wurde gerade reserviert. Bitte wählen Sie eine andere freie Zeit.');
      renderSlots();
      submitButton.textContent = 'Anfrage senden';
      submitButton.disabled = false;
      return;
    }

    const payload = {
      name: nameValue,
      phone: phoneValue,
      service: serviceValue,
      message: buildBookingMessage(messageValue, dateValue, timeValue),
      date: new Date().toISOString()
    };

    const { error } = await window.supabase.from('inquiries').insert([payload]);
    if (error) throw error;

    bookingState.reservedSlots.add(slotKey(dateValue, timeValue));
    if (formSuccess) {
      const successText = formSuccess.querySelector('p');
      if (successText) {
        successText.innerHTML = `Ihr Terminwunsch für <strong>${dateValue}</strong> um <strong>${timeValue}</strong> wurde gespeichert.<br /><em>Dein Moment der Erneuerung wartet.</em>`;
      }
    }

    contactForm.style.display = 'none';
    formSuccess?.classList.add('visible');
    formSuccess?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } catch (error) {
    console.error('Fehler beim Speichern der Anfrage:', error);
    alert(`Fehler: ${error?.message || 'Die Anfrage konnte nicht gespeichert werden.'}`);
    submitButton.textContent = 'Anfrage senden';
    submitButton.disabled = false;
  }
});

document.querySelectorAll('.service-card__btn').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.service-card');
    const title = card?.querySelector('.service-card__title')?.innerText.replace(/\s+/g, ' ').trim();
    const priceRow = card?.querySelector('.price-row');
    const duration = priceRow?.querySelector('.price-duration')?.innerText.replace(/\s+/g, ' ').trim();
    const amount = priceRow?.querySelector('.price-amount')?.innerText.trim();
    const guess = title && duration && amount ? `${title} (${duration} – ${amount})` : '';

    if (serviceSelect && guess) {
      const matchingOption = Array.from(serviceSelect.options).find(option => option.text.includes(title.split('(')[0].trim()));
      if (matchingOption) serviceSelect.value = matchingOption.value;
    }

    button.textContent = 'Weiter zum Formular …';
    setTimeout(() => {
      button.textContent = 'Termin buchen';
    }, 1600);
  });
});

window.addEventListener('load', async () => {
  await initializeBookingUI();
  animateCounters();
  observeAosElements();
});

console.log('%c LINIEN · Massage Aesthetic ', 'background:#4a3a30;color:#f5f0e8;padding:6px 12px;font-size:14px;border-radius:3px;');
