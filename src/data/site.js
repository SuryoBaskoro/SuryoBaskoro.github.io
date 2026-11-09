// Semua teks & data website ada di sini — edit file ini untuk mengubah isi.

export const asset = (p) => `${import.meta.env.BASE_URL}${p}`

export const contact = {
  wa: '6285895370503',
  waLabel: '0858-9537-0503',
  email: 'suryobaskoroo21@gmail.com',
  city: 'Surabaya',
}

export const waLink = (msg = 'Halo Mas Suryo, saya lihat portofolio Anda dan mau ngobrol soal website/aplikasi.') =>
  `https://wa.me/${contact.wa}?text=${encodeURIComponent(msg)}`

export const services = [
  { no: '01', title: 'Website profil usaha', body: 'Halaman yang bikin calon klien percaya sebelum menelepon. Isi bisa diubah sendiri lewat panel admin.', tags: ['Company profile', 'Landing page', 'CMS'] },
  { no: '02', title: 'Aplikasi Android & iOS', body: 'Untuk pelanggan, kurir, pegawai, atau siswa. Satu kode untuk dua platform, bisa pakai kamera, GPS, dan notifikasi.', tags: ['Flutter', 'React Native', 'Play Store'] },
  { no: '03', title: 'Sistem kantor', body: 'Penawaran, invoice, keuangan, absensi, stok — pindah dari Excel dan grup WA ke satu sistem yang rapi.', tags: ['Dashboard', 'PDF & Excel', 'Multi-user'] },
  { no: '04', title: 'Produk SaaS', body: 'Aplikasi web berlangganan dengan paket dan pembayaran online. Seperti Rabnesia dan Ketukin yang saya bangun sendiri.', tags: ['Langganan', 'Midtrans', 'Multi-tenant'] },
  { no: '05', title: 'Integrasi', body: 'WhatsApp yang dibalas AI, Google Maps untuk alamat & ongkir, payment gateway, sampai notifikasi ke HP.', tags: ['WhatsApp + AI', 'Google Maps', 'Payment'] },
  { no: '06', title: 'Server & jaringan', body: 'Domain, SSL, VPS, backup, sampai jaringan kantor dan Mikrotik. Sehari-hari saya juga mengurus IT sekolah.', tags: ['VPS', 'Mikrotik', 'Maintenance'] },
]

export const projects = [
  {
    id: 'nawana', year: '2026', kind: 'Web + App', client: 'CV. Nawana Tri Sakha',
    title: 'Nawana Tri Sakha', line: 'Website perusahaan dan aplikasi kantor dalam satu sistem.',
    story: 'Perusahaan konstruksi & IT ini butuh dua hal: website yang meyakinkan klien, dan aplikasi untuk mengurus dokumen, keuangan, dan absensi tim. Keduanya saya bangun di atas satu backend.',
    feat: ['Penawaran → PO → Invoice, PDF dengan PPN & terbilang otomatis', 'Dashboard laba, piutang, pemasukan & pengeluaran', 'Absensi pegawai dengan foto dan lokasi', 'Chat WhatsApp pelanggan dibalas AI, lalu diteruskan ke divisi yang tepat', 'Website company profile dengan panel admin'],
    stack: ['Vue', 'Flutter', 'Laravel', 'PostgreSQL'], img: 'nawana.jpg', video: 'nawana', link: 'https://nawanatrisakha.com',
  },
  {
    id: 'beetu', year: '2026', kind: 'Web + 2 App', client: 'beetu.id',
    title: 'beetu.id', line: 'Obat dari rumah sakit diantar sampai ke rumah pasien.',
    story: 'Pasien yang sedang sakit tidak perlu lagi antre mengambil obat. Mereka pesan dari HP, kurir mengantar, dan petugas RS memantau semuanya. Tiga aplikasi, satu alur.',
    feat: ['Web pasien: pilih RS, alamat dari Google Maps, upload foto resep', 'Ongkir otomatis dari jarak, bayar COD', 'Tanda tangan digital dan resi PDF', 'App driver: terima tugas, rute, tandai selesai', 'App pegawai RS: pantau pengiriman, absensi, cetak resi'],
    stack: ['Vue', 'React Native', 'Laravel', 'Google Maps'], img: 'beetu.jpg', video: 'beetu', link: 'https://beetu.id',
  },
  {
    id: 'rabnesia', year: '2026', kind: 'SaaS', client: 'Produk sendiri',
    title: 'Rabnesia', line: 'Menyusun RAB konstruksi yang siap tender dan siap addendum.',
    story: 'Produk saya sendiri untuk kontraktor dan konsultan. Menghitung RAB berbasis AHSP Permen PUPR, termasuk addendum tambah-kurang yang biasanya bikin lembur.',
    feat: ['Analisa harga satuan & harga dasar per wilayah', 'Template proyek yang bisa dipakai ulang', 'Addendum tambah-kurang otomatis', 'Kurva-S, cek siap tender, SMKK, TKDN', 'Ekspor Excel & PDF, paket untuk tim'],
    stack: ['Vue', 'Laravel', 'PostgreSQL'], img: 'rabnesia.jpg', video: 'rabnesia',
  },
  {
    id: 'smkn3', year: '2026', kind: 'Website', client: 'SMK Negeri 3 Surabaya',
    title: 'Web SMKN 3 Surabaya', line: 'Website sekolah baru, pengganti WordPress yang lama.',
    story: 'Website resmi sekolah dibangun ulang dari nol: lebih cepat, lebih aman, dan admin tiap bagian punya akses sesuai perannya.',
    feat: ['Profil, kompetensi keahlian, galeri, berita, pengumuman', 'Informasi PPDB dan program sekolah', 'Panel admin dengan peran & hak akses'],
    stack: ['Vue', 'TypeScript', 'Laravel', 'PostgreSQL'], img: 'smkn3.jpg', link: 'https://smkn3-sby.sch.id',
  },
  {
    id: 'stiga', year: '2026', kind: 'App + Admin', client: 'SMK Negeri 3 Surabaya',
    title: 'Stigabaya', line: 'Ujian di HP siswa, dikelola guru dari panel admin.',
    story: 'Aplikasi ujian sekolah dengan kode akses, ditambah panel untuk guru, kepala sekolah, dan bagian sarana prasarana.',
    feat: ['Soal pilihan ganda, bergambar, dan esai', 'Navigasi soal, konfirmasi kumpul, hasil, mode gelap', 'Bank soal dengan import dari template', 'Data kelas, mapel, siswa, guru, dan inventaris'],
    stack: ['Flutter', 'Vue', 'Laravel'], img: 'stiga.jpg',
  },
  {
    id: 'eduvanta', year: '2026', kind: '2 App', client: 'Platform edukasi',
    title: 'EDUVANTA & EDV TEACH', line: 'Aplikasi belajar untuk siswa dan aplikasi kerja untuk guru.',
    story: 'Siswa membaca buku, mengerjakan try out, dan mencari guru les terdekat. Guru menyusun soal, mengelola buku ajar, dan menerima pesanan les.',
    feat: ['Perpustakaan digital & try out dengan pembahasan', 'Cari guru terdekat berdasarkan lokasi', 'Editor soal try out untuk guru', 'Verifikasi wajah & pesanan les online/offline'],
    stack: ['Flutter', 'Laravel'], img: 'eduvanta.jpg',
  },
  {
    id: 'ketukin', year: '2026', kind: 'SaaS', client: 'Produk sendiri',
    title: 'Ketukin', line: 'Undangan digital yang dibuka dengan sekali ketuk.',
    story: 'Undangan pernikahan dan acara dengan amplop bernama tamu, kamera tamu, dan album bersama. Pemesan bisa membuat dan membayar sendiri tanpa admin.',
    feat: ['Amplop animasi dengan nama tamu', 'Kamera tamu & album foto bersama', 'RSVP dan ucapan', 'Pesan mandiri dengan pembayaran Midtrans'],
    stack: ['Vue', 'Laravel', 'Midtrans'], img: 'ketukin.jpg', video: 'ketukin', link: 'https://ketukin.com',
  },
  {
    id: 'qishi', year: '2026', kind: 'Web + App', client: 'QISHI',
    title: 'QISHI', line: 'Website dengan CMS dan aplikasi untuk petugas gudang.',
    story: 'Website profil yang isinya diatur sendiri lewat CMS, plus aplikasi Android untuk petugas: absen, scan barang keluar, dan cek stok.',
    feat: ['Company profile + CMS', 'Absensi petugas', 'Scan barang keluar & cek stok', 'REST API dengan token'],
    stack: ['Vue', 'Flutter', 'Laravel'], img: 'qishi.jpg', link: 'https://qishi.mutrisia.id',
  },
]

export const jobs = [
  { years: '2022 — kini', role: 'Freelance developer', at: 'Website & aplikasi untuk klien', body: 'Semua project di atas. Dari ngobrol pertama, desain, coding, sampai server dan pendampingan.' },
  { years: '2022 — kini', role: 'IT Support & Developer', at: 'SMK Negeri 3 Surabaya', body: 'Mengurus jaringan, komputer, dan printer satu sekolah. Membangun website resmi dan aplikasi ujian Stigabaya.' },
  { years: '2021 — 2022', role: 'Back-end developer', at: 'PT Tiga Kekuatan Utama', body: 'Back-end dan database aplikasi web perusahaan.' },
  { years: '2020 — 2022', role: 'Kepala programmer & kepala IT', at: 'PT Radar Inspirasi Creasindo', body: 'Memimpin pengembangan aplikasi dan mengurus semua perangkat IT kantor.' },
]

export const stack = ['Laravel', 'Vue', 'Flutter', 'React Native', 'PHP', 'TypeScript', 'PostgreSQL', 'MySQL', 'Tailwind', 'Firebase', 'Google Maps API', 'Midtrans', 'Linux / VPS', 'Git', 'Mikrotik']
