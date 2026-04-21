/* ============================
   LINIEN · Massage Aesthetic
   Main JavaScript — multilingual + booking fixes
   ============================ */

'use strict';

const translations = {
  de: {
    meta: { title: 'LINIEN · Massage Aesthetic' },
    nav: {
      about: 'Über uns',
      specialist: 'Expertin',
      salon: 'Salon',
      services: 'Leistungen',
      advantages: 'Vorteile'
    },
    buttons: {
      book: 'Termin buchen',
      formContinue: 'Weiter zum Formular …'
    },
    hero: {
      eyebrow: 'Willkommen in Ihrer Oase',
      tagline: 'Körper · Harmonie · Balance · Linien',
      slogan: 'Dein Moment der Erneuerung',
      cta: 'Unsere Leistungen entdecken',
      scroll: 'Mehr entdecken'
    },
    about: {
      label: 'Über uns',
      title: 'Ihre Auszeit<br /><em>in vollkommener Ruhe</em>',
      desc1: 'LINIEN ist mehr als ein Massagestudio — es ist ein Raum für echte Erholung. Wir verbinden professionelle Massagetechniken mit einer harmonischen Atmosphäre, um Körper, Geist und Seele in Einklang zu bringen.',
      desc2: 'Jede Behandlung ist eine individuelle Reise zu Wohlbefinden und innerer Balance. Unsere erfahrenen Therapeuten begleiten Sie mit Sorgfalt und Hingabe.',
      stats: {
        experience: 'individuelle Betreuung',
        treatments: 'Behandlungen',
        products: 'Natürliche Produkte'
      }
    },
    specialist: {
      note: 'Julia · Ihre persönliche Expertin.',
      label: 'Ihre Expertin',
      title: 'Persönliche Betreuung<br /><em>mit ruhiger, professioneller Hand</em>',
      desc: 'Diese Sektion schafft sofort Vertrauen. Hier können Sie später Foto, Name, kurze Vita, Zertifikate und Spezialisierungen ergänzen.',
      pill1: 'Individuelle Betreuung',
      pill2: 'Sanfte Premium-Atmosphäre',
      pill3: 'Professionelle Technik',
      cardTitle: 'Empfohlene Inhalte für dieses Profil',
      list1: 'Julia Voloshchuk',
      list2: 'Zertifikate und Weiterbildungen',
      list3: 'Spezialisierung auf Wellness-, Honig- oder Anti-Cellulite-Massage',
      list4: 'Mein Ziel ist Leichtigkeit, Entspannung und Wohlbefinden'
    },
salon: {
  label: "Salon",
  title: "Informationen über den Behandlungsort",
  desc: "Das Studio befindet sich im Salon Face of Art im 2. Stock. Ein ruhiger Ort, an dem Sie dem Alltag entfliehen und полностью entspannen können. Bei LINIEN erwartet Sie eine stilvolle Atmosphäre, in der Ihr Wohlbefinden im Mittelpunkt steht.",
  card1: {
    title: "Adresse & Zugang",
    text: "Das Studio befindet sich im Salon Face of Art im 2. Stock. Genauere Informationen zum Zugang erhalten Sie nach Ihrer Terminbuchung."
  },
  card2: {
    title: "Atmosphäre im Studio",
    text: "Sanftes Licht, warme Farben und eine ruhige Umgebung schaffen eine Atmosphäre der Entspannung. Jede Behandlung findet in einem gepflegten, stilvollen Raum statt, in dem Sie abschalten und neue Energie tanken können."
  },
  card3: {
    title: "Wichtige Hinweise",
    text: "Bitte erscheinen Sie pünktlich zu Ihrem Termin, um Ihre Behandlungszeit vollständig genießen zu können. Zahlungen erfolgen vor Ort. Bei Verspätung kann sich die Behandlungsdauer verkürzen."
  },
  note: "Weitere Informationen zum Ablauf erhalten Sie rechtzeitig vor Ihrem Termin."
},
    services: {
      label: 'Preisliste',
      title: 'Unsere <em>Leistungen</em>',
      desc: 'Wählen Sie die perfekte Behandlung für Ihre Bedürfnisse',
      popular: 'Beliebt'
    },
    advantages: {
      label: 'Warum LINIEN',
      title: 'Unser <em>Versprechen</em>',
      card1: {
        title: 'Zertifizierte Therapeuten',
        text: 'Unsere Massagetherapeuten sind professionell ausgebildet und zertifiziert für alle angebotenen Behandlungen.'
      },
      card2: {
        title: 'Natürliche Produkte',
        text: 'Wir verwenden ausschließlich hochwertige, natürliche Öle, Honig und Pflegeprodukte für Ihre Behandlungen.'
      },
      card3: {
        title: 'Individuelle Betreuung',
        text: 'Jede Behandlung wird individuell auf Ihre Bedürfnisse und Beschwerden abgestimmt.'
      },
      card4: {
        title: 'Harmonische Atmosphäre',
        text: 'Unser Studio wurde als Wohlfühloase gestaltet — warmes Licht, sanfte Düfte, wohltuende Wärme.'
      },
      card5: {
        title: 'Premium Qualität',
        text: 'Höchste Standards bei jedem Schritt — von der Buchung bis zur Nachbetreuung.'
      },
      card6: {
        title: 'Flexible Zeiten',
        text: 'Termine werden nach Ihrer Verfügbarkeit vereinbart — wir sind für Sie da, wann Sie uns brauchen.'
      }
    },
    atmosphere: {
      label: 'Atmosphäre',
      title: 'Ein Ort der <em>Stille &amp; Schönheit</em>',
      text: 'Betreten Sie unsere Welt der Ruhe und lassen Sie den Alltag hinter sich. LINIEN wurde als Rückzugsort geschaffen, an dem Schönheit und Wohlbefinden harmonisch verschmelzen.',
      item1: 'Steine & Wärme',
      item2: 'Kerzenlicht',
      item3: 'Naturdüfte'
    },
    cta: {
      label: 'Bereit für Ihre Auszeit?',
      title: 'Dein Moment der<br /><em>Erneuerung</em> wartet',
      desc: 'Gönnen Sie sich und Ihren Lieben das Geschenk der Ruhe. Vereinbaren Sie noch heute Ihren Wohlfühltermin bei LINIEN.',
      primary: 'Termin vereinbaren',
      secondary: 'Leistungen ansehen'
    },
    contact: {
      label: 'Kontakt',
      title: 'Kommen Sie <em>zu uns</em>',
      addressTitle: 'Adresse',
      phoneTitle: 'Telefon',
      emailTitle: 'E-Mail',
      hoursTitle: 'Öffnungszeiten',
      hoursValue: 'Mo – Fr: 09:00 – 20:00<br />Sa: 10:00 – 18:00<br />So: nach Vereinbarung',
      note: 'Im neuen Salon-Bereich weiter oben können Sie zusätzlich Anfahrt, Parken, Klingel, Fotos und Hinweise vor dem Termin ergänzen.'
    },
    booking: {
      topLabel: 'Online-Terminwahl',
      topTitle: 'Freie Zeiten direkt sehen',
      topText: 'Verfügbare Termine werden sofort angezeigt. Bereits reservierte Zeiten erscheinen grau.',
      formTitle: 'Termin anfragen',
      nameLabel: 'Ihr Name',
      namePlaceholder: 'Maria Müller',
      phoneLabel: 'Telefon / WhatsApp',
      phonePlaceholder: '+49 …',
      serviceLabel: 'Gewünschte Behandlung',
      dateLabel: 'Wunschtermin',
      timeLabel: 'Gewählte Uhrzeit',
      timePlaceholder: 'Bitte unten wählen',
      availableTimes: 'Verfügbare Zeiten',
      legendFree: 'Frei',
      legendBusy: 'Belegt',
      messageLabel: 'Nachricht (optional)',
      messagePlaceholder: 'Ihre Wünsche, Hinweise oder Fragen …',
      submit: 'Anfrage senden',
      submitSending: 'Wird gesendet …',
      formNote: 'Nach dem Absenden wird der gewählte Zeitslot gespeichert, damit neue Besucher ihn als belegt sehen.',
      successTitle: 'Danke für Ihre Anfrage!',
      successDefault: 'Ihr Terminwunsch wurde gespeichert. Wir melden uns schnellstmöglich bei Ihnen.',
      initialHelper: 'Bitte wählen Sie zuerst ein Datum. Danach sehen Sie sofort freie und belegte Termine.',
      noSlots: 'Für diesen Tag sind keine Online-Termine vorgesehen. Bitte wählen Sie einen anderen Tag oder kontaktieren Sie uns direkt.',
      chooseSlot: 'Wählen Sie eine freie Uhrzeit aus. Graue Zeiten sind bereits belegt.',
      selected: ({ date, time }) => `Ausgewählt: ${date} um ${time}. Graue Zeiten sind bereits belegt.`,
      conflict: 'Diese Uhrzeit wurde gerade reserviert. Bitte wählen Sie eine andere freie Zeit.',
      syncError: 'Zeiten konnten gerade nicht synchronisiert werden. Sie können trotzdem eine Anfrage senden.',
      busyTooltip: 'Dieser Termin ist bereits reserviert',
      pastTooltip: 'Diese Uhrzeit ist bereits vergangen',
      selectTimeFirst: 'Bitte wählen Sie zuerst eine freie Uhrzeit aus.',
      successMessage: ({ date, time }) => `Ihr Terminwunsch für <strong>${date}</strong> um <strong>${time}</strong> wurde gespeichert.<br /><em>Dein Moment der Erneuerung wartet.</em>`,
      genericError: 'Die Anfrage konnte nicht gespeichert werden.',
      servicePlaceholder: 'Bitte wählen …'
    },
    footer: {
      copy: '© 2026 LINIEN Massage Aesthetic. Alle Rechte vorbehalten.'
    }
  },
  ru: {
    meta: { title: 'LINIEN · Массаж и эстетика' },
    nav: {
      about: 'О нас',
      specialist: 'Специалист',
      salon: 'Салон',
      services: 'Услуги',
      advantages: 'Преимущества'
    },
    buttons: {
      book: 'Записаться',
      formContinue: 'Перейти к форме …'
    },
    hero: {
      eyebrow: 'Добро пожаловать в ваш оазис',
      tagline: 'Тело · Гармония · Баланс · Linien',
      slogan: 'Ваш момент обновления',
      cta: 'Посмотреть услуги',
      scroll: 'Узнать больше'
    },
    about: {
      label: 'О нас',
      title: 'Ваше время отдыха<br /><em>в полной тишине</em>',
      desc1: 'LINIEN — это больше, чем массажный салон. Это пространство для настоящего восстановления. Мы соединяем профессиональные техники массажа с гармоничной атмосферой, чтобы привести тело, разум и душу в равновесие.',
      desc2: 'Каждая процедура — это индивидуальный путь к хорошему самочувствию и внутреннему балансу. Мы сопровождаем вас с вниманием и заботой.',
      stats: {
        experience: 'индивидуальный подход',
        treatments: 'процедуры',
        products: 'натуральные продукты'
      }
    },
    specialist: {
      note: 'Юлия · ваш персональный специалист.',
      label: 'Ваш специалист',
      title: 'Индивидуальный подход<br /><em>с уверенной и бережной рукой</em>',
      desc: 'Этот блок сразу повышает доверие. Сюда можно добавить фото, имя, короткую биографию, сертификаты и специализацию.',
      pill1: 'Индивидуальный подход',
      pill2: 'Спокойная премиальная атмосфера',
      pill3: 'Профессиональная техника',
      cardTitle: 'Что можно указать в этом профиле',
      list1: 'Юлия Волощук',
      list2: 'Сертификаты и обучение',
      list3: 'Специализация на wellness, медовом или антицеллюлитном массаже',
      list4: 'Моя цель — лёгкость, расслабление и хорошее самочувствие'
    },
salon: {
  label: "Салон",
  title: "Информация о месте проведения процедур",
  desc: "Студия находится в салоне Face of Art на 2 этаже. Это спокойное пространство, где вы можете отдохнуть от повседневной суеты и полностью расслабиться. В LINIEN вас ждёт стильная атмосфера, в центре которой — ваше самочувствие и комфорт.",
  card1: {
    title: "Адрес и доступ",
    text: "Студия находится в салоне Face of Art на 2 этаже. Более подробную информацию о входе вы получите после записи."
  },
  card2: {
    title: "Атмосфера в студии",
    text: "Мягкий свет, тёплые оттенки и спокойная обстановка создают атмосферу полного расслабления. Каждая процедура проходит в чистом и эстетичном пространстве, где вы можете восстановить силы и перезагрузиться."
  },
  card3: {
    title: "Важная информация",
    text: "Пожалуйста, приходите вовремя, чтобы полностью насладиться процедурой. Оплата производится на месте. В случае опоздания время процедуры может быть сокращено."
  },
  note: "Дополнительная информация будет предоставлена перед вашим визитом."
},
    services: {
      label: 'Прайс-лист',
      title: 'Наши <em>услуги</em>',
      desc: 'Выберите процедуру, которая подходит именно вам',
      popular: 'Популярно'
    },
    advantages: {
      label: 'Почему LINIEN',
      title: 'Наше <em>обещание</em>',
      card1: {
        title: 'Сертифицированный специалист',
        text: 'Все процедуры выполняются профессионально и с подтверждённой подготовкой.'
      },
      card2: {
        title: 'Натуральные продукты',
        text: 'Мы используем только качественные натуральные масла, мёд и уходовые средства.'
      },
      card3: {
        title: 'Индивидуальный подход',
        text: 'Каждая процедура подбирается с учётом ваших потребностей и пожеланий.'
      },
      card4: {
        title: 'Гармоничная атмосфера',
        text: 'Салон создан как пространство комфорта: мягкий свет, приятные ароматы и ощущение покоя.'
      },
      card5: {
        title: 'Премиальное качество',
        text: 'Высокий стандарт на каждом этапе — от записи до самой процедуры.'
      },
      card6: {
        title: 'Гибкое время',
        text: 'Время визита подбирается удобно для клиента — в пределах доступных часов работы.'
      }
    },
    atmosphere: {
      label: 'Атмосфера',
      title: 'Место <em>тишины и красоты</em>',
      text: 'Погрузитесь в мир спокойствия и оставьте повседневную суету за дверью. LINIEN создан как пространство, где красота и внутреннее равновесие соединяются в одно целое.',
      item1: 'Камни и тепло',
      item2: 'Свет свечей',
      item3: 'Натуральные ароматы'
    },
    cta: {
      label: 'Готовы к отдыху?',
      title: 'Ваш момент<br /><em>обновления</em> уже ждёт',
      desc: 'Подарите себе и близким время тишины и заботы. Запишитесь на процедуру уже сегодня.',
      primary: 'Записаться',
      secondary: 'Смотреть услуги'
    },
    contact: {
      label: 'Контакты',
      title: 'Приходите <em>к нам</em>',
      addressTitle: 'Адрес',
      phoneTitle: 'Телефон',
      emailTitle: 'E-mail',
      hoursTitle: 'Часы работы',
      hoursValue: 'Пн – Пт: 09:00 – 20:00<br />Сб: 10:00 – 18:00<br />Вс: по договорённости',
      note: 'В новом блоке про салон выше можно дополнительно указать парковку, вход, домофон, фотографии и рекомендации перед визитом.'
    },
    booking: {
      topLabel: 'Онлайн-запись',
      topTitle: 'Свободное время видно сразу',
      topText: 'Доступные слоты показываются сразу. Уже занятое время отображается серым цветом.',
      formTitle: 'Оставить заявку',
      nameLabel: 'Ваше имя',
      namePlaceholder: 'Мария Мюллер',
      phoneLabel: 'Телефон / WhatsApp',
      phonePlaceholder: '+49 …',
      serviceLabel: 'Желаемая процедура',
      dateLabel: 'Желаемая дата',
      timeLabel: 'Выбранное время',
      timePlaceholder: 'Выберите ниже',
      availableTimes: 'Доступное время',
      legendFree: 'Свободно',
      legendBusy: 'Занято',
      messageLabel: 'Сообщение (необязательно)',
      messagePlaceholder: 'Ваши пожелания, вопросы или комментарии …',
      submit: 'Отправить заявку',
      submitSending: 'Отправка …',
      formNote: 'После отправки выбранный слот сохраняется, и новые посетители видят его как занятый.',
      successTitle: 'Спасибо за вашу заявку!',
      successDefault: 'Ваше пожелание по записи сохранено. Мы свяжемся с вами как можно скорее.',
      initialHelper: 'Сначала выберите дату. После этого вы сразу увидите свободное и занятое время.',
      noSlots: 'На этот день онлайн-запись недоступна. Пожалуйста, выберите другой день или свяжитесь с нами напрямую.',
      chooseSlot: 'Выберите свободное время. Серые слоты уже заняты.',
      selected: ({ date, time }) => `Вы выбрали: ${date} в ${time}. Серые слоты уже заняты.`,
      conflict: 'Это время только что забронировали. Пожалуйста, выберите другой свободный слот.',
      syncError: 'Сейчас не удалось синхронизировать расписание. Вы всё равно можете отправить заявку.',
      busyTooltip: 'Это время уже занято',
      pastTooltip: 'Это время уже прошло',
      selectTimeFirst: 'Сначала выберите свободное время.',
      successMessage: ({ date, time }) => `Ваш запрос на <strong>${date}</strong> в <strong>${time}</strong> сохранён.<br /><em>Ваш момент обновления уже ждёт.</em>`,
      genericError: 'Не удалось сохранить заявку.',
      servicePlaceholder: 'Пожалуйста, выберите …'
    },
    footer: {
      copy: '© 2026 LINIEN Massage Aesthetic. Все права защищены.'
    }
  }
};

const serviceGroups = {
  de: {
    apparative: {
      title: 'Apparative Massage<br /><span>+ Body Wrap</span>',
      subtitle: 'G5 + G8 Tiefen-Anti-Cellulite Massage',
      prices: [
        { duration: '45 min', amount: '40 €' },
        { duration: '90 min', amount: '65 €' }
      ]
    },
    honey: {
      title: 'Honigmassage<br /><span>+ Body Wrap</span>',
      subtitle: 'Natürliche Entgiftung & Tiefenpflege',
      prices: [
        { duration: '45 min', amount: '40 €' }
      ]
    },
    wellness: {
      title: 'Wellness<br /><span>Massage</span>',
      subtitle: 'Entspannung für Körper und Geist',
      prices: [
        { duration: '30 min <em>(2 Zonen)</em>', amount: '20 €' },
        { duration: '60 min <em>(Ganzkörper)</em>', amount: '40 €' },
        { duration: '90 min <em>(Ganzkörper)</em>', amount: '60 €' }
      ]
    },
    cupping: {
      title: 'Klassische Wellness<br /><span>Massage + Schröpfen</span>',
      subtitle: 'Traditionelle Heilkunst mit Schröpfgläsern',
      prices: [
        { duration: '30 min <em>(2 Zonen)</em>', amount: '25 €' },
        { duration: '60 min <em>(Ganzkörper)</em>', amount: '45 €' },
        { duration: '90 min <em>(Ganzkörper)</em>', amount: '65 €' }
      ]
    }
  },
  ru: {
    apparative: {
      title: 'Аппаратный массаж<br /><span>+ Body Wrap</span>',
      subtitle: 'G5 + G8 глубокий антицеллюлитный массаж',
      prices: [
        { duration: '45 мин', amount: '40 €' },
        { duration: '90 мин', amount: '65 €' }
      ]
    },
    honey: {
      title: 'Медовый массаж<br /><span>+ Body Wrap</span>',
      subtitle: 'Натуральный детокс и глубокий уход',
      prices: [
        { duration: '45 мин', amount: '40 €' }
      ]
    },
    wellness: {
      title: 'Wellness<br /><span>массаж</span>',
      subtitle: 'Расслабление для тела и ума',
      prices: [
        { duration: '30 мин <em>(2 зоны)</em>', amount: '20 €' },
        { duration: '60 мин <em>(всё тело)</em>', amount: '40 €' },
        { duration: '90 мин <em>(всё тело)</em>', amount: '60 €' }
      ]
    },
    cupping: {
      title: 'Классический wellness<br /><span>массаж + банки</span>',
      subtitle: 'Традиционный подход с вакуумными банками',
      prices: [
        { duration: '30 мин <em>(2 зоны)</em>', amount: '25 €' },
        { duration: '60 мин <em>(всё тело)</em>', amount: '45 €' },
        { duration: '90 мин <em>(всё тело)</em>', amount: '65 €' }
      ]
    }
  }
};

const serviceOptions = {
  de: [
    { value: 'apparative45', label: 'Apparative Massage + Body Wrap (45 min – 40 €)' },
    { value: 'apparative90', label: 'Apparative Massage + Body Wrap (90 min – 65 €)' },
    { value: 'honey45', label: 'Honigmassage + Body Wrap (45 min – 40 €)' },
    { value: 'wellness30', label: 'Wellness Massage (30 min – 20 €)' },
    { value: 'wellness60', label: 'Wellness Massage (60 min – 40 €)' },
    { value: 'wellness90', label: 'Wellness Massage (90 min – 60 €)' },
    { value: 'cupping30', label: 'Klassische Wellness Massage + Schröpfen (30 min – 25 €)' },
    { value: 'cupping60', label: 'Klassische Wellness Massage + Schröpfen (60 min – 45 €)' },
    { value: 'cupping90', label: 'Klassische Wellness Massage + Schröpfen (90 min – 65 €)' }
  ],
  ru: [
    { value: 'apparative45', label: 'Аппаратный массаж + Body Wrap (45 мин – 40 €)' },
    { value: 'apparative90', label: 'Аппаратный массаж + Body Wrap (90 мин – 65 €)' },
    { value: 'honey45', label: 'Медовый массаж + Body Wrap (45 мин – 40 €)' },
    { value: 'wellness30', label: 'Wellness массаж (30 мин – 20 €)' },
    { value: 'wellness60', label: 'Wellness массаж (60 мин – 40 €)' },
    { value: 'wellness90', label: 'Wellness массаж (90 мин – 60 €)' },
    { value: 'cupping30', label: 'Классический wellness массаж + банки (30 мин – 25 €)' },
    { value: 'cupping60', label: 'Классический wellness массаж + банки (60 мин – 45 €)' },
    { value: 'cupping90', label: 'Классический wellness массаж + банки (90 мин – 65 €)' }
  ]
};

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
const langButtons = document.querySelectorAll('.lang-btn');
const successMessageText = document.getElementById('successMessageText');

const storedLanguage = localStorage.getItem('linien-language');
let currentLang = storedLanguage || ((navigator.language || '').toLowerCase().startsWith('ru') ? 'ru' : 'de');
if (!['de', 'ru'].includes(currentLang)) currentLang = 'de';

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

function getNestedTranslation(path) {
  return path.split('.').reduce((acc, part) => (acc && part in acc ? acc[part] : undefined), translations[currentLang]);
}

function t(path, vars = {}) {
  const value = getNestedTranslation(path);
  if (typeof value === 'function') return value(vars);
  return value ?? '';
}

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
  if (navLinks.classList.contains('open') && !clickedInside) closeNav();
});

function onScroll() {
  if (window.scrollY > 24) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }

  if (backBtn) backBtn.classList.toggle('visible', window.scrollY > 320);

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
    if (rect.top < window.innerHeight - 80) el.classList.add('aos-animate');
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

function isPastSlot(dateValue, timeValue) {
  if (!dateValue || !timeValue) return false;
  const now = new Date();
  const slotDate = new Date(`${dateValue}T${timeValue}:00`);
  return slotDate.getTime() <= now.getTime();
}

function resetSelectedSlot(clearInput = true) {
  bookingState.selectedSlot = '';
  if (clearInput && bookingTimeInput) bookingTimeInput.value = '';
  document.querySelectorAll('.slot-button.is-selected').forEach(button => button.classList.remove('is-selected'));
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
    updateSlotHelper(t('booking.initialHelper'));
    if (bookingTimeInput) bookingTimeInput.value = '';
    return;
  }

  const slots = getSlotsForDate(dateValue);
  if (!slots.length) {
    updateSlotHelper(t('booking.noSlots'));
    if (bookingTimeInput) bookingTimeInput.value = '';
    return;
  }

  slots.forEach(timeValue => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'slot-button';
    button.textContent = timeValue;

    const reserved = bookingState.reservedSlots.has(slotKey(dateValue, timeValue));
    const past = isPastSlot(dateValue, timeValue);

    if (reserved) {
      button.classList.add('is-busy');
      button.disabled = true;
      button.setAttribute('aria-disabled', 'true');
      button.title = t('booking.busyTooltip');
    } else if (past) {
      button.classList.add('is-past');
      button.disabled = true;
      button.setAttribute('aria-disabled', 'true');
      button.title = t('booking.pastTooltip');
    }

    button.addEventListener('click', () => {
      if (reserved || past) return;
      document.querySelectorAll('.slot-button.is-selected').forEach(item => item.classList.remove('is-selected'));
      button.classList.add('is-selected');
      bookingState.selectedSlot = slotKey(dateValue, timeValue);
      if (bookingTimeInput) bookingTimeInput.value = timeValue;
      updateSlotHelper(t('booking.selected', { date: dateValue, time: timeValue }));
    });

    slotGrid.appendChild(button);
  });

  updateSlotHelper(t('booking.chooseSlot'));
}

function hash32(input) {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(16).padStart(8, '0');
}

function buildSlotUuid(dateValue, timeValue) {
  const seed = `${dateValue}|${timeValue}`;
  const hex = `${hash32(seed)}${hash32(`linien-${seed}`)}${hash32(`massage-${seed}`)}${hash32(`booking-${seed}`)}`;
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-4${hex.slice(12, 15)}-8${hex.slice(15, 18)}-${hex.slice(18, 30)}`;
}

async function waitForSupabase(maxAttempts = 30) {
  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    if (window.supabase) return true;
    await new Promise(resolve => setTimeout(resolve, 150));
  }
  return false;
}

async function fetchReservedSlots() {
  const ready = await waitForSupabase();
  if (!ready || !window.supabase) {
    bookingState.loaded = false;
    renderSlots();
    return;
  }

  try {
    const { data, error } = await window.supabase
      .from('inquiries')
      .select('id, message, date')
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
    updateSlotHelper(t('booking.syncError'));
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
  return cleanedMessage ? `${bookingMarker}\n${summaryLine}\n${cleanedMessage}` : `${bookingMarker}\n${summaryLine}`;
}

function getSelectedServiceLabel() {
  const option = serviceSelect?.selectedOptions?.[0];
  return option ? option.textContent.trim() : '';
}

contactForm?.addEventListener('submit', async event => {
  event.preventDefault();

  const submitButton = contactForm.querySelector('button[type="submit"]');
  const nameValue = contactForm.querySelector('#name')?.value.trim() || '';
  const phoneValue = contactForm.querySelector('#phone')?.value.trim() || '';
  const serviceValue = getSelectedServiceLabel();
  const dateValue = preferredDateInput?.value || '';
  const timeValue = bookingTimeInput?.value || '';
  const messageValue = contactForm.querySelector('#message')?.value.trim() || '';

  if (!nameValue) return shakeField('#name');
  if (!phoneValue) return shakeField('#phone');
  if (!serviceSelect?.value) return shakeField('#service');
  if (!dateValue) return shakeField('#preferredDate');
  if (!timeValue) {
    updateSlotHelper(t('booking.selectTimeFirst'));
    return;
  }

  submitButton.textContent = t('booking.submitSending');
  submitButton.disabled = true;

  try {
    const ready = await waitForSupabase();
    if (!ready || !window.supabase) {
      throw new Error('Booking service unavailable');
    }

    await fetchReservedSlots();
    if (bookingState.reservedSlots.has(slotKey(dateValue, timeValue))) {
      updateSlotHelper(t('booking.conflict'));
      renderSlots();
      submitButton.textContent = t('booking.submit');
      submitButton.disabled = false;
      return;
    }

    const payload = {
      id: buildSlotUuid(dateValue, timeValue),
      name: nameValue,
      phone: phoneValue,
      service: serviceValue,
      message: buildBookingMessage(messageValue, dateValue, timeValue),
      date: new Date().toISOString()
    };

    const { error } = await window.supabase.from('inquiries').insert([payload]);
    if (error) throw error;

    bookingState.reservedSlots.add(slotKey(dateValue, timeValue));
    if (successMessageText) {
      successMessageText.innerHTML = t('booking.successMessage', { date: dateValue, time: timeValue });
    }

    contactForm.style.display = 'none';
    formSuccess?.classList.add('visible');
    formSuccess?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } catch (error) {
    const message = String(error?.message || '').toLowerCase();
    if (message.includes('duplicate') || message.includes('unique') || message.includes('409')) {
      updateSlotHelper(t('booking.conflict'));
      await fetchReservedSlots();
      renderSlots();
    } else {
      console.error('Fehler beim Speichern der Anfrage:', error);
      alert(`Fehler: ${t('booking.genericError')}`);
    }
    submitButton.textContent = t('booking.submit');
    submitButton.disabled = false;
  }
});

function renderServiceCards() {
  document.querySelectorAll('.service-card').forEach(card => {
    const groupKey = card.dataset.serviceGroup;
    const group = serviceGroups[currentLang][groupKey];
    if (!group) return;

    const title = card.querySelector('[data-service-title]');
    const subtitle = card.querySelector('[data-service-subtitle]');
    const pricesWrap = card.querySelector('[data-service-prices]');
    const button = card.querySelector('.service-card__btn');

    if (title) title.innerHTML = group.title;
    if (subtitle) subtitle.textContent = group.subtitle;
    if (pricesWrap) {
      pricesWrap.innerHTML = group.prices.map(price => `
        <div class="price-row">
          <span class="price-duration">${price.duration}</span>
          <span class="price-dots"></span>
          <span class="price-amount">${price.amount}</span>
        </div>
      `).join('');
    }
    if (button) button.textContent = t('buttons.book');
  });
}

function renderServiceOptions() {
  if (!serviceSelect) return;
  const previousValue = serviceSelect.value;
  const options = serviceOptions[currentLang] || [];
  serviceSelect.innerHTML = [`<option value="">${t('booking.servicePlaceholder')}</option>`]
    .concat(options.map(option => `<option value="${option.value}">${option.label}</option>`))
    .join('');
  if (options.some(option => option.value === previousValue)) serviceSelect.value = previousValue;
}

function applyTranslations() {
  document.documentElement.lang = currentLang;
  document.title = t('meta.title');
  localStorage.setItem('linien-language', currentLang);

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    const translated = t(key);
    if (translated) element.innerHTML = translated;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.dataset.i18nPlaceholder;
    const translated = t(key);
    if (translated) element.setAttribute('placeholder', translated);
  });

  langButtons.forEach(button => {
    button.classList.toggle('active', button.dataset.lang === currentLang);
    button.setAttribute('aria-pressed', String(button.dataset.lang === currentLang));
  });

  renderServiceCards();
  renderServiceOptions();

  if (contactForm && contactForm.style.display !== 'none') {
    const submitButton = contactForm.querySelector('button[type="submit"]');
    if (submitButton && !submitButton.disabled) submitButton.textContent = t('booking.submit');
  }

  if (preferredDateInput?.value) {
    renderSlots();
  } else {
    updateSlotHelper(t('booking.initialHelper'));
  }
}

langButtons.forEach(button => {
  button.addEventListener('click', () => {
    const nextLang = button.dataset.lang;
    if (!nextLang || nextLang === currentLang) return;
    currentLang = nextLang;
    applyTranslations();
  });
});

document.querySelectorAll('.service-card__btn').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.service-card');
    const serviceValue = card?.dataset.serviceValue || '';
    if (serviceSelect && serviceValue) serviceSelect.value = serviceValue;

    button.textContent = t('buttons.formContinue');
    setTimeout(() => {
      button.textContent = t('buttons.book');
    }, 1600);
  });
});

window.addEventListener('load', async () => {
  applyTranslations();
  await initializeBookingUI();
  animateCounters();
  observeAosElements();
});

console.log('%c LINIEN · Massage Aesthetic ', 'background:#4a3a30;color:#f5f0e8;padding:6px 12px;font-size:14px;border-radius:3px;');
