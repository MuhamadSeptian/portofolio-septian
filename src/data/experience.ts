import type { L } from "@/lib/types";

export type ExperienceItem = {
  type: "internship" | "organization" | "academic" | "other";
  title: L;
  organization: L;
  period: string; // ditulis netral, contoh: "Jul – Aug 2025"
  description?: L;
  points?: L[];
};

export const experience: ExperienceItem[] = [
  {
    type: "internship",
    title: "Technical Service Department Intern",
    organization: "PT Astra Honda Motor Palembang",
    period: "Jul – Aug 2025",
    description: {
      en: "Took part in an internship program at the Technical Service Department of PT Astra Honda Motor Palembang, aimed at developing problem analysis skills in a real working environment.",
      id: "Mengikuti program kerja praktik di Technical Service Department PT Astra Honda Motor Palembang, yang bertujuan untuk mengembangkan kemampuan analisis masalah dalam lingkungan kerja yang nyata.",
    },
    points: [
      {
        en: "Took part in warranty claim management and verification at the Technical Service Department.",
        id: "Terlibat dalam pengelolaan dan verifikasi klaim garansi (warranty management) di Technical Service Department.",
      },
      {
        en: "Identified shortcomings in the warranty claim management process as the basis for designing a solution.",
        id: "Mengidentifikasi kekurangan dalam proses pengelolaan klaim garansi sebagai dasar perancangan solusi.",
      },
      {
        en: "Designed an integrated web-based Warranty Claim Verification and Monitoring System as a proposed process improvement.",
        id: "Merancang solusi Sistem Verifikasi dan Monitoring Klaim Garansi berbasis web terintegrasi sebagai usulan perbaikan proses.",
      },
      {
        en: "Prepared documentation covering system requirements, architecture, UML, database design, and the application interface.",
        id: "Menyusun dokumentasi kebutuhan sistem, arsitektur, UML, rancangan database, dan antarmuka aplikasi.",
      },
    ],
  },
  {
    type: "organization",
    title: {
      en: "Member, Human Resource Development Division",
      id: "Anggota Divisi Pengembangan Sumber Daya Manusia",
    },
    organization: {
      en: "Informatics Student Association, Musi Charitas Catholic University",
      id: "Himpunan Mahasiswa Program Studi Informatika Universitas Katolik Musi Charitas",
    },
    period: "2023 – 2024",
    points: [
      {
        en: "Organized and carried out internal training programs to improve soft skills and work efficiency across the UKMC academic community.",
        id: "Mengatur dan mengeksekusi program kerja pelatihan internal untuk meningkatkan soft skill dan efisiensi kerja dalam civitas UKMC.",
      },
      {
        en: "Coordinated regular team-building activities to maintain members' motivation and productivity.",
        id: "Mengkoordinasikan kegiatan team building secara berkala guna memelihara motivasi dan produktivitas anggota organisasi.",
      },
      {
        en: "Evaluated members' performance and activity levels as input for the organization's future development.",
        id: "Melakukan evaluasi performa dan tingkat keaktifan anggota sebagai bahan pertimbangan pengembangan organisasi ke depan.",
      },
    ],
  },
  {
    type: "organization",
    title: {
      en: "Member, Publication and Documentation Division",
      id: "Anggota Divisi Publikasi dan Dokumentasi",
    },
    organization: {
      en: "Informatics Student Association, Musi Charitas Catholic University",
      id: "Himpunan Mahasiswa Program Studi Informatika Universitas Katolik Musi Charitas",
    },
    period: "2022 – 2023",
    points: [
      {
        en: "Managed and developed publication content to widen the organization's reach.",
        id: "Mengelola dan mengembangkan konten publikasi untuk memperluas jangkauan organisasi.",
      },
      {
        en: "Coordinated regular documentation activities to keep information accurate and up to date.",
        id: "Mengkoordinasikan kegiatan dokumentasi secara berkala guna memelihara informasi yang akurat dan terkini.",
      },
      {
        en: "Evaluated members' performance and activity levels as input for the organization's future development.",
        id: "Melakukan evaluasi performa dan tingkat keaktifan anggota sebagai bahan pertimbangan pengembangan organisasi ke depan.",
      },
    ],
  },
];