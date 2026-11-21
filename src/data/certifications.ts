import type { L } from "@/lib/types";

export type Certification = {
  name: string;
  issuer: string;
  issued?: string; // contoh: "March 2025"
  expires?: string;
  image?: string; // satu gambar, contoh: "/certificates/jna.jpg"
  images?: string[]; // beberapa gambar (depan, belakang, dst.)
  description?: L;
};

export const certifications: Certification[] = [
  {
    name: "Junior Network Administrator",
    issuer: "LSP BPPTIK BNSP",
    issued: "September 2024",
    expires: "September 2027",
    images: ["/certificates/jna 1.jpg", "/certificates/jna 2.jpg"],
    description: "Sertifikasi kompetensi yang mencakup kemampuan dalam melakukan perancangan dan konfigurasi dasar jaringan. Kompetensi yang diuji meliputi, merancang skema pengalamatan IP untuk perangkat dalam suatu jaringan, melakukan konfigurasi dan pemasangan jaringan wireless, melakukan konfigurasi switch untuk mendukung komunikasi antarperangkat dalam jaringan, melakukan konfigurasi routing pada perangkat jaringan agar jaringan yang berbeda dapat saling berkomunikasi dalam satu autonomous system dan melakukan konfigurasi routing untuk menghubungkan jaringan yang berada pada autonomous system yang berbeda.",
  },
  {
    name: "Junior Associate Data Scientist",
    issuer: "LSP BPPTIK BNSP",
    issued: "Agustus 2025",
    expires: "Agustus 2028",
    images: ["/certificates/data scient 1.jpg", "/certificates/data scient 2.jpg"],
    description: "Sertifikasi kompetensi yang mencakup kemampuan dalam mengolah data, meliputi mengumpulkan data, menelaah data, memvalidasi data, menentukan objek data, membersihkan data, mengkonstruksi data, menentukan label data, membangun model dan mengevaluasi hasil pemodelan",
  },
  {
    name: "Teknik Komputer Jaringan",
    issuer: "CV. Istana Komputer",
    issued: "Maret 2021",
    images: ["/certificates/teknik 1.jpg", "/certificates/teknik 2.jpg"],
    description: "Lulus Uji Kompetensi Keahlian (diuji CV Istana Komputer), nilai keterampilan 90,8: instalasi Windows/Linux, LAN kabel dan nirkabel, konfigurasi routing dan keamanan jaringan.",
  },
];