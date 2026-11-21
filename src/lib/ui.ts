import type { L } from "./types";
import { categories, statusLabels } from "@/data/categories";

// Semua teks antarmuka (menu, tombol, judul bagian) ada di sini, dalam dua bahasa.
export const ui = {
  navProjects: { en: "Projects", id: "Proyek" },
  navAbout: { en: "About", id: "Tentang" },
  navSkills: { en: "Skills", id: "Keahlian" },
  navCredentials: { en: "Credentials", id: "Kredensial" },
  navExperience: { en: "Experience", id: "Pengalaman" },

  viewProjects: { en: "View projects", id: "Lihat proyek" },
  downloadCv: { en: "Download CV", id: "Unduh CV" },
  contact: { en: "Contact", id: "Kontak" },
  workByField: { en: "Work by field", id: "Proyek per bidang" },
  featuredProjects: { en: "Featured projects", id: "Proyek unggulan" },
  allProjects: { en: "All projects", id: "Semua proyek" },
  skills: { en: "Skills", id: "Keahlian" },
  seeAll: { en: "See all", id: "Lihat semua" },

  projectsTitle: { en: "Projects", id: "Proyek" },
  projectsIntro: {
    en: "Projects built during my Informatics Engineering studies, across web, data, machine learning, games, and networks.",
    id: "Proyek yang saya kerjakan selama kuliah Teknik Informatika, mencakup web, data, machine learning, game, dan jaringan.",
  },
  searchPlaceholder: { en: "Search by name or technology", id: "Cari berdasarkan nama atau teknologi" },
  searchLabel: { en: "Search projects", id: "Cari proyek" },
  sortLabel: { en: "Sort projects", id: "Urutkan proyek" },
  filterLabel: { en: "Filter by category", id: "Filter berdasarkan kategori" },
  sortNewest: { en: "Newest first", id: "Terbaru dulu" },
  sortOldest: { en: "Oldest first", id: "Terlama dulu" },
  sortFeatured: { en: "Featured first", id: "Unggulan dulu" },
  sortAz: { en: "Name A–Z", id: "Nama A–Z" },
  all: { en: "All", id: "Semua" },
  noMatch: {
    en: "No project matches your search. Clear the search or choose another category.",
    id: "Tidak ada proyek yang cocok. Hapus pencarian atau pilih kategori lain.",
  },
  details: { en: "Details", id: "Detail" },

  repository: { en: "Repository", id: "Repositori" },
  liveDemo: { en: "Live demo", id: "Demo langsung" },
  overview: { en: "Overview", id: "Gambaran umum" },
  background: { en: "Background & problem", id: "Latar belakang & masalah" },
  objectives: { en: "Objectives", id: "Tujuan" },
  features: { en: "Features", id: "Fitur" },
  architecture: { en: "Architecture", id: "Arsitektur" },
  endpoints: { en: "API endpoints", id: "Endpoint API" },
  role: { en: "My role", id: "Peran saya" },
  process: { en: "Process", id: "Proses pengerjaan" },
  files: { en: "Files", id: "Berkas" },
  screenshots: { en: "Screenshots & documentation", id: "Screenshot & dokumentasi" },
  challenges: { en: "Challenges & solutions", id: "Tantangan & solusi" },
  results: { en: "Results", id: "Hasil" },
  learnings: { en: "What I learned", id: "Pembelajaran" },

  aboutTitle: { en: "About me", id: "Tentang saya" },
  education: { en: "Education", id: "Pendidikan" },
  university: { en: "University", id: "Universitas" },
  gpa: { en: "GPA", id: "IPK" },
  period: { en: "Period", id: "Periode" },
  location: { en: "Location", id: "Lokasi" },
  certifications: { en: "Certifications", id: "Sertifikasi" },

  skillsTitle: { en: "Skills", id: "Keahlian" },
  skillsIntro: {
    en: "Grouped by field. Each item has been used in at least one of my projects.",
    id: "Dikelompokkan per bidang. Setiap item pernah saya pakai di setidaknya satu proyek.",
  },

  credentialsTitle: { en: "Education & certifications", id: "Pendidikan & sertifikasi" },
  issued: { en: "Issued", id: "Diterbitkan" },
  validUntil: { en: "valid until", id: "berlaku hingga" },

  experienceTitle: { en: "Experience & activities", id: "Pengalaman & kegiatan" },
  experienceEmpty: {
    en: "Nothing here yet. Add internships, organizations, and academic activities in",
    id: "Belum ada isi. Tambahkan magang, organisasi, dan kegiatan akademik di",
  },

  notFoundTitle: { en: "Page not found", id: "Halaman tidak ditemukan" },
  notFoundText: {
    en: "The page you are looking for does not exist or has been moved.",
    id: "Halaman yang Anda cari tidak ada atau sudah dipindahkan.",
  },
  browseProjects: { en: "Browse projects", id: "Lihat proyek" },
} satisfies Record<string, L>;

// Terjemahan Indonesia untuk kategori dan status. Kategori baru tanpa terjemahan memakai nama Inggrisnya.
const categoryId: Record<string, string> = {
  web: "Pengembangan Web",
  mobile: "Pengembangan Mobile",
  api: "Web Service & API",
  "information-system": "Sistem Informasi",
  "data-science": "Data Science",
  "machine-learning": "Machine Learning",
  recommendation: "Sistem Rekomendasi",
  game: "Pengembangan Game",
  networking: "Jaringan & Cisco",
  "software-engineering": "Rekayasa Perangkat Lunak",
  academic: "Proyek Akademik",
  other: "Proyek Lainnya",
};
const statusId: Record<string, string> = {
  implemented: "Sudah diimplementasikan",
  prototype: "Prototipe",
  experiment: "Eksperimen",
  design: "Rancangan sistem",
};

export const catLabel = (key: string): L => ({
  en: categories[key] ?? key,
  id: categoryId[key] ?? categories[key] ?? key,
});
export const statusLabel = (key: string): L => ({
  en: statusLabels[key] ?? key,
  id: statusId[key] ?? statusLabels[key] ?? key,
});
