import { LanguageCode } from '../types';

export interface UIStrings {
  nav: {
    about: string;
    timeline: string;
    mars: string;
    research: string;
    ip: string;
    contact: string;
  };
  hero: {
    role: string;
    description: string;
    exploreMars: string;
    contactBtn: string;
    portraitPlaceholder: string;
  };
  about: {
    heading: string;
    principlesHeading: string;
    factsHeading: string;
    born: string;
    bornValue: string;
    education: string;
    educationValue: string;
    school: string;
    schoolValue: string;
    citizenship: string;
    languages: string;
  };
  timeline: {
    heading: string;
    subheading: string;
  };
  mars: {
    heading: string;
    subheading: string;
    beganText: string;
    lead: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    pillar4Title: string;
    pillar4Desc: string;
    officialSiteBtn: string;
    companySiteBtn: string;
  };
  research: {
    heading: string;
    subheading: string;
    readArticle: string;
    closeModal: string;
  };
  ip: {
    heading: string;
    subheading: string;
    tableRef: string;
    tableDate: string;
    tableTitle: string;
    viewAbstract: string;
    openRegistry: string;
  };
  contact: {
    heading: string;
    subheading: string;
    directTitle: string;
    directEmail: string;
    pressTitle: string;
    pressContact: string;
    telegramTitle: string;
    telegramHandle: string;
    companyTitle: string;
    copy: string;
    copied: string;
    sendEmail: string;
    openTelegram: string;
  };
  footer: {
    rights: string;
    legal: string;
  };
}

export const translations: Record<LanguageCode, UIStrings> = {
  en: {
    nav: {
      about: 'About',
      timeline: 'Timeline',
      mars: 'M.A.R.S.',
      research: 'Research',
      ip: 'Patents',
      contact: 'Contact',
    },
    hero: {
      role: 'Founder & Director, M.A.R.S. COMPANION LLC | Systems Architect',
      description:
        'Independent technologist, software engineer, and systems architect researching offline artificial intelligence, edge computing architectures, and private human-machine interaction.',
      exploreMars: 'Explore M.A.R.S.',
      contactBtn: 'Contact',
      portraitPlaceholder: 'Portrait',
    },
    about: {
      heading: 'About Me',
      principlesHeading: 'Engineering Principles',
      factsHeading: 'Key Information',
      born: 'Born',
      bornValue: '14 May 2008',
      education: 'Cadet Corps',
      educationValue:
        'Kronstadt Naval Military Cadet Corps named after Admiral Fyodor Fyodorovich Ushakov of the Ministry of Defence of the Russian Federation (2022–2026)',
      school: 'Early Education',
      schoolValue: 'Lyceum No. 410 (Pushkin, Saint Petersburg, 2015–2022, Grades 1–7)',
      citizenship: 'Roots & Homeland',
      languages: 'Languages',
    },
    timeline: {
      heading: 'Timeline & Background',
      subheading: 'Verified milestones in education, technology development, and incorporation.',
    },
    mars: {
      heading: 'M.A.R.S. Companion',
      subheading: 'Mobile Autonomous Reasoning System',
      beganText: 'Development of M.A.R.S. Companion began in 2025.',
      lead:
        'A personal voice AI companion running 100% locally on edge hardware. No cloud dependency. No serialized telemetry. Remembers everything. Belongs only to you.',
      pillar1Title: '100% Offline Autonomy',
      pillar1Desc:
        'Speech recognition, semantic memory retrieval, LLM reasoning, and vocal synthesis run on-device without network transmission.',
      pillar2Title: 'Sequential Resource Orchestration (SRO)',
      pillar2Desc:
        'Dynamic memory scheduling that alternates neural modules to operate within constrained 4GB–8GB RAM footprints.',
      pillar3Title: 'Semantic Long-Term Memory',
      pillar3Desc:
        'Locally synthesized associative memory graph that retains user context and factual continuity across months and years.',
      pillar4Title: 'Hardware-Anchored Trust',
      pillar4Desc:
        'Physical trust boundaries and operational invariants guaranteeing unwavering user loyalty and zero unauthorized data egress.',
      officialSiteBtn: 'teduza.com',
      companySiteBtn: 'company.teduza.com',
    },
    research: {
      heading: 'Research & Publications',
      subheading: 'Selected essays and technical explorations on offline companion architectures.',
      readArticle: 'Read Essay',
      closeModal: 'Close',
    },
    ip: {
      heading: 'Intellectual Property',
      subheading: 'Patent applications filed with the United Kingdom Intellectual Property Office (UK IPO).',
      tableRef: 'Reference',
      tableDate: 'Filing Date',
      tableTitle: 'Title & Focus',
      viewAbstract: 'Abstract',
      openRegistry: 'UK IPO Registry',
    },
    contact: {
      heading: 'Contact',
      subheading: 'Direct communication channels and official registration details.',
      directTitle: 'Direct Inquiries',
      directEmail: 'contact@teduza.com',
      pressTitle: 'Press Office',
      pressContact: 'Kira Dudnik (Press Secretary)',
      telegramTitle: 'Official Telegram',
      telegramHandle: '@teduza',
      companyTitle: 'M.A.R.S. COMPANION LLC',
      copy: 'Copy',
      copied: 'Copied',
      sendEmail: 'Send Email',
      openTelegram: 'Open in Telegram',
    },
    footer: {
      rights: 'All rights reserved.',
      legal: 'M.A.R.S. COMPANION LLC · Reg: 999.110.1603426 · Kapan, Armenia',
    },
  },
  ru: {
    nav: {
      about: 'Обо мне',
      timeline: 'Хронология',
      mars: 'M.A.R.S. Companion',
      research: 'Исследования',
      ip: 'Патенты',
      contact: 'Контакты',
    },
    hero: {
      role: 'Основатель и Директор M.A.R.S. COMPANION LLC | Архитектор M.A.R.S.',
      description:
        'Независимый технологический разработчик и системный архитектор, исследующий автономный локальный искусственный интеллект, периферийные вычисления и приватное взаимодействие человека и машины.',
      exploreMars: 'Узнать о M.A.R.S.',
      contactBtn: 'Контакты',
      portraitPlaceholder: 'Фотография',
    },
    about: {
      heading: 'Обо мне',
      principlesHeading: 'Инженерные принципы',
      factsHeading: 'Ключевые данные',
      born: 'Дата рождения',
      bornValue: '14 мая 2008',
      education: 'Военно-морское образование',
      educationValue:
        'Кронштадтский Морской Кадетский Военный Корпус имени адмирала Фёдора Фёдоровича Ушакова Министерства обороны Российской Федерации (2022–2026, 8–11 классы)',
      school: 'Школьное образование',
      schoolValue: 'Лицей № 410 (город Пушкин, Санкт-Петербург, 2015–2022, 1–7 классы)',
      citizenship: 'Историческая родина',
      languages: 'Языки',
    },
    timeline: {
      heading: 'Хронология и вехи',
      subheading: 'Подтверждённые события в образовании, разработке технологий и регистрации компании.',
    },
    mars: {
      heading: 'M.A.R.S. Companion',
      subheading: 'Mobile Autonomous Reasoning System',
      beganText: 'Разработка M.A.R.S. Companion началась в 2025 году.',
      lead:
        'Персональный голосовой ИИ-компаньон, работающий на 100% локально на периферийном оборудовании. Без облаков. Без сбора телеметрии. Помнит всё. Принадлежит только вам.',
      pillar1Title: '100% Офлайн-автономность',
      pillar1Desc:
        'Распознавание речи, извлечение памяти, инференс языковой модели и синтез голоса выполняются полностью на устройстве без доступа к сети.',
      pillar2Title: 'Последовательная оркестрация (SRO)',
      pillar2Desc:
        'Динамическая диспетчеризация памяти, поочередно выгружающая и загружающая нейромодули в рамках 4–8 ГБ RAM.',
      pillar3Title: 'Долговременная семантическая память',
      pillar3Desc:
        'Локальный синтез графа ассоциативной памяти, сохраняющий факты и контекст взаимодействия на протяжении месяцев и лет.',
      pillar4Title: 'Аппаратно закреплённое доверие',
      pillar4Desc:
        'Физические границы доверия и детерминированные инварианты, гарантирующие абсолютную защиту персональных данных.',
      officialSiteBtn: 'teduza.com',
      companySiteBtn: 'company.teduza.com',
    },
    research: {
      heading: 'Исследования и публикации',
      subheading: 'Избранные статьи и технические материалы об архитектуре локальных компаньонов.',
      readArticle: 'Читать статью',
      closeModal: 'Закрыть',
    },
    ip: {
      heading: 'Интеллектуальная собственность',
      subheading: 'Патентные заявки, зарегистрированные в Патентном ведомстве Великобритании (UK IPO).',
      tableRef: 'Номер заявки',
      tableDate: 'Дата подачи',
      tableTitle: 'Название и сущность изобретения',
      viewAbstract: 'Реферат',
      openRegistry: 'Реестр UK IPO',
    },
    contact: {
      heading: 'Контакты',
      subheading: 'Прямые каналы связи и официальные реквизиты компании.',
      directTitle: 'Прямая связь',
      directEmail: 'contact@teduza.com',
      pressTitle: 'Пресс-служба',
      pressContact: 'Кира Дудник (пресс-секретарь)',
      telegramTitle: 'Официальный Telegram',
      telegramHandle: '@teduza',
      companyTitle: 'M.A.R.S. COMPANION LLC',
      copy: 'Копировать',
      copied: 'Скопировано',
      sendEmail: 'Написать письмо',
      openTelegram: 'Открыть в Telegram',
    },
    footer: {
      rights: 'Все права защищены.',
      legal: 'M.A.R.S. COMPANION LLC · Рег. номер: 999.110.1603426 · Капан, Армения',
    },
  },
};
