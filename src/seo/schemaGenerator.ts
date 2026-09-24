import { SiteDatabase, LanguageCode } from '../types';

export function generateSchemaGraph(db: SiteDatabase, lang: LanguageCode) {
  const person = db.person;
  const org = db.organization;
  const product = db.product;

  const sameAsList = [
    'https://www.wikidata.org/wiki/Q141447666', // Aleksandr Sarkisian
    'https://www.wikidata.org/wiki/Q141447944', // teduza
    'https://t.me/teduza',
    'https://company.teduza.com',
    'https://teduza.com',
    ...db.ipRecords.map((ip) => ip.officialRegistryUrl),
  ];

  const personAlternateNames = [
    'Aleksandr Sarkisian',
    'Aleksandr Sargsyan',
    'Alexander Sarkisian',
    'Alexander Sargsyan',
    'Aleksandr Davidovich Sarkisian',
    'Александр Саркисян',
    'Александр Саргсян',
    'Саркисян Александр',
    'Саргсян Александр',
    'Саркисян Александр Давидович',
    'Александр Давидович Саркисян',
    'Ալեքսանդր Սարգսյան',
    'Սարգսյան Ալեքսանդր',
    'teduza',
    '@teduza',
  ];

  const orgAlternateNames = [
    '«Մ․Ա․Ռ․Ս․ ՔՈՄՓԵՆԻՈՆ» ՍՊԸ',
    'ԷՄ.ԷՅ.ԱՐ.ԷՍ ՔԱՄՓԱՆԻՈՆ ՍՊԸ',
    'MARS Companion LLC',
    'M.A.R.S. Companion LLC',
    'M.A.R.S. COMPANION LLC',
  ];

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. Person entity (central knowledge anchor)
      {
        '@type': 'Person',
        '@id': 'https://sarkisian.teduza.com/#person',
        name: lang === 'ru' ? person.russianFullName : person.internationalName,
        givenName: 'Aleksandr',
        familyName: 'Sarkisian (Sargsyan)',
        additionalName: lang === 'ru' ? 'Давидович' : 'Davidovich',
        alternateName: personAlternateNames,
        birthDate: person.dateOfBirth,
        url: 'https://sarkisian.teduza.com',
        image: {
          '@type': 'ImageObject',
          '@id': 'https://sarkisian.teduza.com/portrait.jpg#image',
          url: 'https://sarkisian.teduza.com/portrait.jpg',
          contentUrl: 'https://sarkisian.teduza.com/portrait.jpg',
          width: '1103',
          height: '1426',
          encodingFormat: 'image/jpeg',
          caption:
            lang === 'ru'
              ? 'Александр Саркисян — основатель и директор M.A.R.S. COMPANION LLC'
              : 'Aleksandr Sarkisian — Founder & Director of M.A.R.S. COMPANION LLC',
        },
        jobTitle: person.primaryRole[lang] || person.primaryRole.en,
        description: person.bioShort[lang] || person.bioShort.en,
        homeLocation: {
          '@type': 'Place',
          name: person.citizenshipRegion[lang] || person.citizenshipRegion.en,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Kapan',
            addressRegion: 'Syunik Province',
            addressCountry: 'AM',
          },
        },
        alumniOf: [
          {
            '@type': 'EducationalOrganization',
            name:
              lang === 'ru'
                ? 'Кронштадтский морской кадетский военный корпус имени адмирала Фёдора Фёдоровича Ушакова Министерства обороны Российской Федерации'
                : 'Kronstadt Naval Military Cadet Corps named after Admiral Fyodor Fyodorovich Ushakov of the Ministry of Defence of the Russian Federation',
          },
          {
            '@type': 'EducationalOrganization',
            name:
              lang === 'ru'
                ? 'Лицей № 410 (город Пушкин, Санкт-Петербург)'
                : 'Lyceum No. 410 (Pushkin, Saint Petersburg)',
          },
        ],
        founder: {
          '@id': 'https://company.teduza.com/#organization',
        },
        worksFor: {
          '@id': 'https://company.teduza.com/#organization',
        },
        knowsAbout: [
          'Offline Artificial Intelligence',
          'Autonomous Voice AI',
          'Edge Computing',
          'Sequential Resource Orchestration (SRO)',
          'Local AI Architecture',
          'M.A.R.S. Companion',
          'Semantic Memory',
          'Embedded Systems',
          'Hardware Security',
        ],
        knowsLanguage: [
          {
            '@type': 'Language',
            name: 'English',
            alternateName: 'en',
          },
          {
            '@type': 'Language',
            name: 'Ukrainian',
            alternateName: 'uk',
          },
          {
            '@type': 'Language',
            name: 'Russian',
            alternateName: 'ru',
          },
        ],
        sameAs: sameAsList,
      },

      // 2. Organization Entity
      {
        '@type': 'Organization',
        '@id': 'https://company.teduza.com/#organization',
        name: org.name,
        alternateName: orgAlternateNames,
        foundingDate: org.foundingDate,
        identifier: org.registrationNumber,
        taxID: org.taxId,
        url: org.website,
        founder: {
          '@id': 'https://sarkisian.teduza.com/#person',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Kapan',
          addressLocality: 'Kapan',
          addressRegion: 'Syunik',
          addressCountry: 'AM',
        },
        sameAs: [
          'https://www.wikidata.org/wiki/Q141447626',
          'https://company.teduza.com',
          'https://teduza.com',
        ],
      },

      // 3. Product / Technology Entity
      {
        '@type': 'Product',
        '@id': 'https://teduza.com/#product',
        name: product.name,
        alternateName: product.acronym,
        description: product.tagline[lang] || product.tagline.en,
        url: product.officialUrl,
        manufacturer: {
          '@id': 'https://company.teduza.com/#organization',
        },
        category: 'Offline AI Companion Device',
        sameAs: [
          'https://www.wikidata.org/wiki/Q141448028',
          'https://teduza.com',
        ],
      },

      // 4. Scholarly / Patent Publications
      ...db.ipRecords.map((ip) => ({
        '@type': 'Patent',
        '@id': `${ip.officialRegistryUrl}#patent`,
        name: ip.title[lang] || ip.title.en,
        headline: ip.title[lang] || ip.title.en,
        description: ip.abstract[lang] || ip.abstract.en,
        patentNumber: ip.applicationNumber,
        inventor: {
          '@id': 'https://sarkisian.teduza.com/#person',
        },
        author: {
          '@id': 'https://sarkisian.teduza.com/#person',
        },
        assignee: {
          '@id': 'https://company.teduza.com/#organization',
        },
        datePublished: ip.filingDate,
        sameAs: [ip.officialRegistryUrl, `https://www.wikidata.org/wiki/${ip.wikidataId}`],
      })),

      // 5. ProfilePage
      {
        '@type': 'ProfilePage',
        '@id': 'https://sarkisian.teduza.com/#profilepage',
        url: 'https://sarkisian.teduza.com',
        name:
          lang === 'ru'
            ? 'Александр Саркисян (Саргсян) — Официальный персональный сайт'
            : 'Aleksandr Sarkisian (Sargsyan) — Official Personal Website',
        mainEntity: {
          '@id': 'https://sarkisian.teduza.com/#person',
        },
        inLanguage: ['en', 'ru'],
      },

      // 6. WebSite
      {
        '@type': 'WebSite',
        '@id': 'https://sarkisian.teduza.com/#website',
        url: 'https://sarkisian.teduza.com',
        name: 'Aleksandr Sarkisian (Sargsyan)',
        alternateName: [
          'teduza',
          'Александр Саркисян',
          'Александр Саргсян',
          'Aleksandr Sarkisian Official Website',
        ],
        publisher: {
          '@id': 'https://sarkisian.teduza.com/#person',
        },
      },
    ],
  };

  return graph;
}
