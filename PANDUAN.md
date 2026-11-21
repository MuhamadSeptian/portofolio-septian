# Panduan Website Portofolio

Website ini dibuat dengan Next.js, React, TypeScript, dan Tailwind CSS. Semua isi (profil, proyek, keahlian) disimpan di file data, terpisah dari tampilan. Jadi Anda cukup mengedit file data tanpa menyentuh desain.

## 1. Cara menjalankan website

1. Pasang **Node.js versi LTS** dari https://nodejs.org (sekali saja).
2. Buka Command Prompt, lalu masuk ke folder ini:
   ```
   cd /d "C:\Users\user\Documents\portofolio-baru"
   ```
3. Pasang dependensi (sekali saja, butuh internet):
   ```
   npm install
   ```
4. Jalankan mode pengembangan:
   ```
   npm run dev
   ```
5. Buka http://localhost:3000. Setiap kali Anda menyimpan file, halaman otomatis ter-refresh.
6. Hentikan dengan menekan `Ctrl + C`.

Jika muncul error, salin pesan error-nya dan kirim ke Claude.

## 2. Mengedit profil

Buka `src/data/profile.ts`. Ganti semua teks bertanda `[ISI ...]`: nama, universitas, periode kuliah, perkenalan, tautan GitHub dan LinkedIn, email. Teks bisa ditulis sebagai string biasa, atau sebagai `{ en: "...", id: "..." }` untuk dua bahasa.

## 3. Mengganti foto

Taruh foto di `public/images/profile/` dengan nama `foto.jpg` (rasio persegi lebih bagus). Jika nama atau formatnya berbeda, ubah isi `photo` di `profile.ts`. Jika file tidak ada, foto otomatis tidak ditampilkan.

## 4. Mengganti CV

1. Taruh file PDF di `public/documents/`, misalnya `cv.pdf`.
2. Di `profile.ts`, isi `cv: "/documents/cv.pdf"`.

Selama `cv` kosong, tombol Download CV disembunyikan. Pengaturan yang sama berlaku untuk `github`, `linkedin`, dan `email`.

## 5. Menambahkan proyek baru

Proyek baru tidak perlu mengedit komponen apa pun.

1. Salin `src/data/projects/_template.json`, tempel di folder yang sama, lalu ganti namanya, misalnya `sistem-rekomendasi-film.json`. **Nama file menjadi alamat halaman** (`/projects/sistem-rekomendasi-film/`). Gunakan huruf kecil dan tanda hubung.
2. Buat folder gambar dengan nama yang sama persis: `public/images/projects/sistem-rekomendasi-film/`, lalu taruh thumbnail dan screenshot di dalamnya.
3. Isi file JSON. Yang wajib: `title`, `summary`, `category`, `year`, `status`, `technologies`. Semua bagian lain opsional. Hapus baris yang tidak Anda perlukan, bagian itu otomatis tidak muncul di halaman detail.
4. Isi `github` dan `demo` jika ada. Jika tidak ada, kosongkan atau hapus barisnya.
5. Simpan. Proyek langsung muncul di galeri dan punya halaman detail sendiri.

Nama gambar di JSON cukup ditulis nama filenya saja (contoh: `"thumbnail": "thumbnail.jpg"`).

**Nilai yang valid**
- `category`: `web`, `api`, `information-system`, `data-science`, `machine-learning`, `recommendation`, `game`, `networking`, `software-engineering`, `academic`, `other`.
- `status`: `implemented` (sudah berjalan), `prototype`, `experiment`, `design` (baru rancangan). Pilih sesuai kenyataan.
- `featured: true` menampilkan proyek di beranda (maksimal 3 yang tampil).

**Bagian khusus per jenis proyek** (gunakan `extra` untuk bagian bebas)
- Cisco: `extra` berisi "Topologi Jaringan" dengan gambar di `gallery`, dan `code` untuk konfigurasi.
- Sistem rekomendasi: `extra` berisi "Metode" dan "Hasil Pengujian".
- Game: `features` untuk mekanisme, `gallery` untuk gameplay.
- Web service: `endpoints` untuk tabel endpoint, `architecture` untuk arsitektur.

Hati-hati dengan JSON: semua teks memakai tanda kutip ganda `"`, jangan ada koma di item terakhir, dan baris baru di dalam teks ditulis `\n`.

## 6. Mengedit proyek

Buka file JSON proyek di `src/data/projects/`, ubah isinya, simpan.

## 7. Menghapus atau menyembunyikan proyek

- Menyembunyikan sementara: tambahkan `"draft": true` di file JSON proyek.
- Menghapus permanen: hapus file JSON-nya, dan folder gambarnya di `public/images/projects/`.

## 8. Mengganti screenshot

Ganti file gambar di `public/images/projects/<nama-proyek>/`. Jika nama file sama, tidak ada yang perlu diubah di JSON. Jika nama berbeda, perbarui `thumbnail` atau `gallery`.

## 9. Menambahkan sertifikasi

1. Taruh gambar sertifikat di `public/certificates/`.
2. Buka `src/data/certifications.ts`, isi tanggal terbit, masa berlaku, dan `image: "/certificates/nama-file.jpg"`. Untuk sertifikasi baru, salin salah satu blok `{ ... }` dan ubah isinya.

## 10. Keahlian dan pengalaman

- Keahlian: `src/data/skills.ts`. Tulis hanya yang benar-benar Anda kuasai.
- Magang, organisasi, kegiatan akademik: `src/data/experience.ts`. Contoh:
  ```ts
  {
    type: "internship",
    title: "Nama posisi",
    organization: "Nama instansi",
    period: "Jan 2025 – Mar 2025",
    description: "Deskripsi singkat.",
    points: ["Tugas 1", "Tugas 2"],
  },
  ```
- Kategori proyek: `src/data/categories.ts`.

## 11. Deployment

Website ini dibuat statis, jadi gratis di-hosting.

**Vercel (paling mudah)**
1. Unggah folder ini ke repository GitHub (jangan unggah `node_modules`; sudah diatur di `.gitignore`).
2. Buka https://vercel.com, masuk dengan GitHub, klik *Add New Project*, pilih repository, lalu *Deploy*.
3. Salin alamat yang diberikan Vercel ke `siteUrl` di `profile.ts` untuk SEO.

**Hosting lain (Netlify, GitHub Pages, dll.)**
1. Jalankan `npm run build`. Hasilnya ada di folder `out`.
2. Unggah isi folder `out` ke layanan hosting. Untuk GitHub Pages di alamat `username.github.io/nama-repo`, tambahkan `basePath: "/nama-repo"` di `next.config.mjs`.

## 12. Menerjemahkan ke Bahasa Indonesia

Tulis teks dalam bentuk `{ "en": "...", "id": "..." }`, lalu ubah `LOCALE` menjadi `"id"` di `src/lib/i18n.ts`. Teks yang belum punya versi `id` tetap tampil dalam Bahasa Inggris. Label tombol dan menu masih tertulis langsung di komponen (`src/components/` dan `src/app/`).

## Struktur folder

```
public/images/profile/        foto profil
public/images/projects/<slug>/  gambar tiap proyek
public/documents/             CV
public/certificates/          gambar sertifikat
src/data/                     SEMUA isi: profile, skills, certifications, experience, categories
src/data/projects/            satu file JSON per proyek
src/components/               komponen tampilan
src/app/                      halaman
```
