# Portofolio Suryo Baskoro, S.Kom

Website portofolio dengan Vue 3 + Vite. Identitas: matahari (*Suryo* & *Baskoro* sama-sama berarti matahari).

## Menjalankan di komputer

```bash
npm install
npm run dev      # buka http://localhost:5173
```

## Mengubah isi

Semua teks, daftar project, layanan, dan pengalaman ada di **`src/data/site.js`**.

| Yang diubah | Lokasi |
|---|---|
| Teks & data | `src/data/site.js` |
| Foto profil | `public/assets/img/suryo.jpg` |
| Gambar project | `public/assets/img/<nama>.jpg` (1200×750) |
| Video project | `public/assets/video/<nama>.mp4` + `<nama>-poster.jpg` |
| CV (PDF) | `public/cv/CV-Suryo-Baskoro.pdf` (sumbernya `cv-source/cv.html`) |

## Online di GitHub Pages

Website ini online di **https://suryobaskoro.github.io** (repo `SuryoBaskoro/SuryoBaskoro.github.io`).

- Kode sumber ada di branch `main`.
- Website yang tampil diambil dari branch `gh-pages` (hasil build).

### Memperbarui website
Setelah mengubah isi (misalnya `src/data/site.js`):

```bash
git add -A && git commit -m "Update isi"   # simpan kode sumber
git push                                    # kirim kode sumber
npm run deploy                              # build + terbitkan ke gh-pages
```

### Hosting lain
Jalankan `npm run build`, lalu upload isi folder `dist/` ke hosting mana pun (Netlify, cPanel, dll).

## Memperbarui CV
Edit `cv-source/cv.html`, buka di Chrome → Print → Save as PDF (A4, margin None, centang Background graphics),
simpan sebagai `public/cv/CV-Suryo-Baskoro.pdf`.
