// Data Experience

export type Experience = {
  hash: string;
  title: string;
  company: string;
  dates: string;
  current: boolean;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    hash: "a3f9c21",
    title: "Informaticien",
    company: "Sté RAC SERVICES, Madagascar",
    dates: "déc. 2022 → aujourd'hui",
    current: true,
    bullets: ["Responsable des mises à jour des pages des réseaux sociaux"],
  },
  {
    hash: "7e1b4a0",
    title: "Responsable informatique",
    company: "Sté Sophie Shop Mada, Madagascar",
    dates: "sept. 2022 → aujourd'hui",
    current: true,
    bullets: [
      "Maintenance des ordinateurs (software et hardware)",
      "Mises à jour des pages des réseaux sociaux",
    ],
  },
  {
    hash: "4d82f13",
    title: "Administrateur informatique",
    company: "Sté Comptassistance, Madagascar",
    dates: "juin 2017 → aujourd'hui",
    current: true,
    bullets: [
      "Mises à jour du site www.comptassistance.com (back-end)",
      "Maintenance des ordinateurs (software et hardware)",
    ],
  },
  {
    hash: "1c60ab9",
    title: "Assistant webmaster",
    company: "Groupe NO COMMENT®, Madagascar",
    dates: "juin 2015 → déc. 2023",
    current: false,
    bullets: [
      "Mises à jour du site www.nocomment.mg (back-end)",
      "Fiches partenaires de la Sté NO COMMENT®",
      "Mises à jour du site www.rli.mg (back-end)",
      "Maintenance des ordinateurs (software et hardware)",
    ],
  },
];

// Fin Data Experience


// Data Projets

export type Project = {
  slug: string;
  name: string;
  description: string;
  tag: string;
  status: "live" | "progress";
  url?: string;
  art: "t1" | "t2" | "t3" | "t4";
};

export const projects: Project[] = [
  {
    slug: "comptassistance",
    name: "Comptassistance",
    description: "Cabinet comptable malgache — mises à jour back-end.",
    tag: "Depuis juin 2017",
    status: "live",
    url: "https://www.comptassistance.com",
    art: "t1",
  },
  {
    slug: "comptassistance-refonte",
    name: "Comptassistance — refonte",
    description:
      "Nouvelle version en Figma Design & Figma Sites, page unique à défilement.",
    tag: "En cours dans Figma",
    status: "progress",
    art: "t4",
  },
  {
    slug: "nocomment",
    name: "NO COMMENT®",
    description: "Site du groupe — back-end et fiches partenaires.",
    tag: "2015 – 2023",
    status: "live",
    url: "https://www.nocomment.mg",
    art: "t2",
  },
  {
    slug: "rli",
    name: "RLI",
    description: "Second site du groupe NO COMMENT — back-end.",
    tag: "2015 – 2023",
    status: "live",
    url: "https://www.rli.mg",
    art: "t3",
  },
];