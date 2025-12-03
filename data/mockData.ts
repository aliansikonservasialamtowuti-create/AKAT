
import type { Program, NewsArticle, TeamMember, FinancialReport } from '../types';

export const programs: Program[] = [
  {
    id: 'konservasi-ekosistem',
    title: 'Program Konservasi Ekosistem',
    category: 'Konservasi',
    summary: 'Memulihkan kawasan kritis, memantau kualitas air dan keanekaragaman hayati, serta melatih komunitas untuk pengelolaan sumber daya berkelanjutan.',
    imageUrl: 'https://picsum.photos/seed/conservation/600/400',
    details: {
      description: 'Program ini berfokus pada restorasi lahan terdegradasi di sekitar Danau Towuti, penanaman kembali pohon endemik, dan pembersihan danau secara berkala untuk menjaga kualitas air.',
      goals: ['Restorasi 100 hektar lahan kritis dalam 5 tahun', 'Peningkatan kualitas air danau sebesar 20%', 'Pelatihan 5 kelompok masyarakat dalam pengelolaan hutan desa'],
      timeline: [{ event: 'Kick-off Proyek', date: 'Jan 2024' }, { event: 'Penanaman 10,000 bibit pohon', date: 'Juni 2024' }]
    }
  },
  {
    id: 'advokasi-kebijakan',
    title: 'Program Advokasi Kebijakan Publik',
    category: 'Advokasi',
    summary: 'Mengadvokasi perubahan kebijakan regional agar kebijakan pertambangan memperhatikan hak-hak masyarakat dan perlindungan lingkungan.',
    imageUrl: 'https://picsum.photos/seed/advocacy/600/400',
    details: {
      description: 'Kami bekerja sama dengan pemangku kepentingan untuk mendorong regulasi yang lebih ketat terkait dampak lingkungan dari kegiatan pertambangan dan memastikan partisipasi publik dalam pengambilan keputusan.',
      goals: ['Terbitnya peraturan daerah tentang AMDAL partisipatif', 'Pembentukan forum multi-pihak untuk pengawasan lingkungan', 'Peningkatan kesadaran hukum masyarakat terdampak'],
      timeline: [{ event: 'Rapat Dengar Pendapat dengan DPRD', date: 'Maret 2024' }, { event: 'Lokakarya Kebijakan Publik', date: 'September 2024' }]
    }
  },
  {
    id: 'pemberdayaan-komunitas',
    title: 'Program Pemberdayaan Komunitas',
    category: 'Pemberdayaan',
    summary: 'Membangun kapasitas komunitas lokal untuk mengembangkan mata pencaharian alternatif yang berkelanjutan dan ramah lingkungan.',
    imageUrl: 'https://picsum.photos/seed/community/600/400',
    details: {
      description: 'Melalui pelatihan dan pendampingan, kami membantu masyarakat mengembangkan usaha ekowisata, pertanian organik, dan kerajinan tangan sebagai sumber pendapatan baru yang tidak merusak alam.',
      goals: ['Terbentuknya 10 unit usaha mikro berbasis ekowisata', 'Peningkatan pendapatan rata-rata keluarga peserta sebesar 30%', 'Sertifikasi produk organik untuk 20 petani'],
      timeline: [{ event: 'Pelatihan Manajemen Ekowisata', date: 'Februari 2024' }, { event: 'Bazaar Produk Lokal', date: 'Juli 2024' }]
    }
  }
];

export const newsArticles: NewsArticle[] = [
  {
    id: 'berita-1',
    title: 'AKAT dan Komunitas Lokal Tanam 5,000 Pohon di Hulu Sungai',
    author: 'Tim AKAT',
    date: '15 Oktober 2025',
    category: 'Konservasi',
    tags: ['Restorasi', 'Komunitas', 'Towuti'],
    imageUrl: 'https://picsum.photos/seed/news1/800/500',
    summary: 'Sebagai bagian dari Program Konservasi Ekosistem, AKAT bersama puluhan warga dari tiga desa sekitar melakukan penanaman pohon serentak...',
    content: 'Kegiatan ini merupakan langkah penting untuk memulihkan area tangkapan air dan mencegah erosi yang dapat mencemari Danau Towuti. Jenis pohon yang ditanam adalah tanaman endemik yang dipilih berdasarkan rekomendasi para ahli lingkungan. "Partisipasi masyarakat sangat luar biasa, ini menunjukkan kesadaran kolektif untuk menjaga alam kita," ujar koordinator lapangan AKAT.'
  },
  {
    id: 'berita-2',
    title: 'Dialog Publik: Mendorong Pertambangan Bertanggung Jawab',
    author: 'Tim AKAT',
    date: '28 September 2025',
    category: 'Advokasi',
    tags: ['Kebijakan', 'Pertambangan', 'Dialog'],
    imageUrl: 'https://picsum.photos/seed/news2/800/500',
    summary: 'AKAT menyelenggarakan dialog publik yang mempertemukan perwakilan masyarakat, pemerintah daerah, dan perusahaan tambang...',
    content: 'Dialog ini bertujuan untuk mencari solusi bersama atas dampak lingkungan dan sosial dari aktivitas pertambangan. Salah satu hasil penting adalah kesepakatan untuk membentuk tim pengawas independen yang melibatkan unsur masyarakat.'
  },
  {
    id: 'berita-3',
    title: 'Produk Kerajinan Lokal Tembus Pasar Nasional',
    author: 'Tim AKAT',
    date: '5 September 2025',
    category: 'Pemberdayaan',
    tags: ['Ekonomi', 'Komunitas', 'UMKM'],
    imageUrl: 'https://picsum.photos/seed/news3/800/500',
    summary: 'Berkat pendampingan dari Program Pemberdayaan Komunitas AKAT, produk kerajinan tangan dari Desa Maju Jaya berhasil masuk ke pameran nasional...',
    content: 'Ini adalah pencapaian signifikan yang membuktikan bahwa ekonomi berbasis komunitas dan kelestarian lingkungan dapat berjalan seiring. Para pengrajin mendapatkan peningkatan pendapatan yang signifikan dan semakin termotivasi untuk menggunakan bahan baku ramah lingkungan.'
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Andi Pratama',
    role: 'Direktur Eksekutif',
    bio: 'Andi memiliki pengalaman lebih dari 15 tahun dalam advokasi lingkungan dan pembangunan komunitas. Ia memimpin visi dan strategi AKAT.',
    imageUrl: 'https://picsum.photos/seed/andi/400/400'
  },
  {
    name: 'Siti Aminah',
    role: 'Manajer Program',
    bio: 'Siti adalah seorang ahli biologi konservasi yang mengelola implementasi semua program lapangan AKAT dengan pendekatan ilmiah dan partisipatif.',
    imageUrl: 'https://picsum.photos/seed/siti/400/400'
  },
  {
    name: 'Budi Santoso',
    role: 'Spesialis Keuangan & Kemitraan',
    bio: 'Budi bertanggung jawab atas transparansi keuangan dan membangun kemitraan strategis dengan para donatur dan sponsor.',
    imageUrl: 'https://picsum.photos/seed/budi/400/400'
  },
  {
    name: 'Dewi Lestari',
    role: 'Koordinator Lapangan',
    bio: 'Dewi bekerja langsung dengan komunitas, memastikan setiap kegiatan berjalan lancar dan memberikan dampak nyata bagi masyarakat dan lingkungan.',
    imageUrl: 'https://picsum.photos/seed/dewi/400/400'
  }
];

export const financialReports: FinancialReport[] = [
    { year: 2024, url: '#' },
    { year: 2023, url: '#' },
    { year: 2022, url: '#' }
];
