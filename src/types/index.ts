/**
 * Core Data Models & Identity Graph Types
 * Official Personal International Site: Aleksandr Sarkisian (Sargsyan)
 * Canonical URL: https://sarkisian.teduza.com
 */

export type LanguageCode = 'en' | 'ru';

export interface MultilingualString {
  en: string;
  ru: string;
}

export interface BioChapter {
  id: string;
  title: MultilingualString;
  content: MultilingualString;
  tag?: MultilingualString;
}

export interface PersonProfile {
  id: string;
  internationalName: string; // "Aleksandr Sarkisian (Sargsyan)"
  russianName: string; // "Александр Саркисян (Саргсян)"
  russianFullName: string; // "Саркисян Александр Давидович"
  dateOfBirth: string; // "2008-05-14"
  wikidataId: string; // "Q141447666"
  alias: string; // "teduza" (Q141447944)
  primaryRole: MultilingualString;
  bioShort: MultilingualString;
  bioFull: MultilingualString;
  bioChapters?: BioChapter[];
  alternateNames?: string[];
  citizenshipRegion: MultilingualString;
  languages: string[];
}

export interface OrganizationEntity {
  id: string;
  name: string; // "M.A.R.S. COMPANION LLC"
  armenianName: string; // "ԷՄ.ԷՅ.ԱՐ.ԷՍ ՔԱՄՓԱՆԻՈՆ ՍՊԸ"
  registrationNumber: string; // "999.110.1603426"
  taxId: string; // "09433977"
  foundingDate: string; // "2026-08-17"
  jurisdiction: MultilingualString;
  wikidataId: string; // "Q141447626"
  founder: string; // "Aleksandr Sarkisian (Sargsyan)"
  website: string;
  productWebsite: string;
  description: MultilingualString;
  principles: {
    title: MultilingualString;
    description: MultilingualString;
  }[];
}

export interface ProductEntity {
  id: string;
  name: string; // "M.A.R.S. Companion"
  acronym: string; // "Mobile Autonomous Reasoning System"
  wikidataId: string; // "Q141448028"
  tagline: MultilingualString;
  description: MultilingualString;
  architectureHighlight: MultilingualString; // "Sequential Resource Orchestration"
  targetHardware: string;
  operatingMode: MultilingualString;
  officialUrl: string;
  status: 'functional_prototype' | 'pilot_ready' | 'concept';
}

export interface IpRecord {
  id: string;
  applicationNumber: string; // e.g. "GB2611463.7"
  jurisdiction: string; // "United Kingdom (UK IPO)"
  filingDate: string; // "2026-05-15"
  wikidataId: string; // e.g. "Q141447790"
  officialRegistryUrl: string;
  title: MultilingualString;
  abstract: MultilingualString;
  inventor: string; // "Aleksandr Sarkisian"
  status: 'application_filed';
}

export interface ResearchTopic {
  id: string;
  title: MultilingualString;
  summary: MultilingualString;
  description: MultilingualString;
  methodology: MultilingualString;
  date: string;
  status: string;
  relatedIpIds?: string[];
  externalReferences?: { name: string; url: string }[];
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: MultilingualString;
  author: string;
  date: string;
  category: MultilingualString;
  excerpt: MultilingualString;
  content: MultilingualString;
  readTime: string;
  tags: string[];
  externalUrl?: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  year: string;
  period?: MultilingualString;
  title: MultilingualString;
  institution?: MultilingualString;
  description: MultilingualString;
  category: 'education' | 'origin' | 'technology' | 'patent' | 'company' | 'milestone';
  verified: boolean;
  externalLink?: string;
  relatedPatents?: string[];
}

export interface ExternalProfile {
  id: string;
  platform: string;
  handleOrId: string;
  url: string;
  wikidataId?: string;
  category: 'knowledge_graph' | 'identity' | 'organization' | 'registry' | 'code';
  verified: boolean;
  notes?: string;
}

export interface PressContact {
  name: string;
  role: MultilingualString;
  email: string;
  wikidataId: string;
  quote: MultilingualString;
}

export interface SiteDatabase {
  person: PersonProfile;
  organization: OrganizationEntity;
  product: ProductEntity;
  ipRecords: IpRecord[];
  researchTopics: ResearchTopic[];
  articles: ArticleItem[];
  timelineEvents: TimelineEvent[];
  externalProfiles: ExternalProfile[];
  pressSecretary: PressContact;
}
