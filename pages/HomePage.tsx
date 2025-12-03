
import React from 'react';
import { Link } from 'react-router-dom';
import { programs, newsArticles } from '../data/mockData';
import { MissionIcon, ProgramIcon, TransparencyIcon, ArrowRightIcon } from '../components/icons';

const ProgramCard: React.FC<{ program: typeof programs[0] }> = ({ program }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
        <img className="w-full h-48 object-cover" src={program.imageUrl} alt={program.title} />
        <div className="p-6">
            <h3 className="font-heading text-xl font-bold text-akat-primary mb-2">{program.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{program.summary}</p>
            <Link to="/program" className="font-semibold text-akat-secondary hover:text-akat-primary transition group-hover:text-akat-primary">
                Baca Selengkapnya <ArrowRightIcon className="inline-block h-4 w-4 ml-1" />
            </Link>
        </div>
    </div>
);

const NewsCard: React.FC<{ article: typeof newsArticles[0] }> = ({ article }) => (
     <div className="bg-white rounded-lg overflow-hidden group">
        <img className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" src={article.imageUrl} alt={article.title} />
        <div className="p-4">
            <p className="text-xs text-gray-500 mb-1">{article.date} | {article.category}</p>
            <h3 className="font-heading text-lg font-bold text-akat-dark group-hover:text-akat-primary transition mb-2">{article.title}</h3>
            <Link to="/berita" className="font-semibold text-sm text-akat-secondary hover:text-akat-primary transition">
                Lanjut Membaca
            </Link>
        </div>
    </div>
);

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[400px] bg-cover bg-center text-white flex items-center" style={{ backgroundImage: `url('https://picsum.photos/seed/towuti/1600/900')` }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading drop-shadow-lg">Melindungi Alam Towuti</h1>
          <p className="text-lg md:text-2xl font-heading drop-shadow-lg mt-2">Keberlanjutan, Keadilan, dan Kolaborasi Lokal</p>
          <p className="mt-6 max-w-2xl mx-auto text-gray-200">
            Yayasan AKAT bekerja bersama komunitas untuk menjaga sumber daya alam dan hak masyarakat terdampak tambang.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link to="/dukung-kami" className="bg-akat-primary hover:bg-akat-secondary text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">
              Donasi Sekarang
            </Link>
            <Link to="/program" className="bg-white/20 backdrop-blur-sm border border-white text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 hover:bg-white/30">
              Lihat Program
            </Link>
          </div>
        </div>
      </section>

      {/* About AKAT Highlights */}
      <section className="py-16 bg-akat-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-heading text-akat-dark">Sekilas tentang AKAT</h2>
                <p className="mt-2 text-gray-600">Tiga pilar utama kerja kami untuk masa depan Towuti.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                    <MissionIcon className="h-12 w-12 text-akat-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold font-heading mb-2">Misi Kami</h3>
                    <p className="text-gray-600">Melindungi ekosistem Towuti dan memperjuangkan hak-hak masyarakat melalui pendekatan partisipatif.</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-sm">
                    <ProgramIcon className="h-12 w-12 text-akat-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold font-heading mb-2">Program Kami</h3>
                    <p className="text-gray-600">Menjalankan program konservasi, advokasi kebijakan, dan pemberdayaan komunitas yang berdampak.</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-sm">
                    <TransparencyIcon className="h-12 w-12 text-akat-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold font-heading mb-2">Transparansi</h3>
                    <p className="text-gray-600">Berkomitmen pada keterbukaan dalam setiap laporan, keuangan, dan indikator kinerja proyek kami.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold font-heading text-akat-dark">Program Unggulan</h2>
                  <p className="mt-2 text-gray-600">Inisiatif utama kami untuk perubahan yang berkelanjutan.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {programs.map(p => <ProgramCard key={p.id} program={p} />)}
              </div>
          </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-akat-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                      <span className="text-4xl font-bold font-heading">15+</span>
                      <p className="mt-2 font-semibold">Proyek Konservasi</p>
                  </div>
                  <div>
                      <span className="text-4xl font-bold font-heading">3,200+</span>
                      <p className="mt-2 font-semibold">Komunitas Terbantu</p>
                  </div>
                  <div>
                      <span className="text-4xl font-bold font-heading">500 Ha</span>
                      <p className="mt-2 font-semibold">Hektar Direstorasi</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-akat-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold font-heading text-akat-dark">Berita Terbaru</h2>
                  <p className="mt-2 text-gray-600">Ikuti perkembangan terbaru dari lapangan.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {newsArticles.map(article => <NewsCard key={article.id} article={article} />)}
              </div>
          </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold font-heading text-akat-dark">Bergabung Bersama Kami</h2>
              <p className="mt-4 max-w-2xl mx-auto text-gray-600">Setiap kontribusi Anda, baik donasi, waktu, maupun suara, sangat berarti untuk kelestarian alam Towuti dan kesejahteraan masyarakatnya.</p>
              <div className="mt-8 flex justify-center gap-4 flex-wrap">
                  <Link to="/dukung-kami" className="bg-akat-primary hover:bg-akat-secondary text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">
                      Donasi
                  </Link>
                  <Link to="/aspirasi" className="bg-akat-brown hover:bg-akat-brown/90 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">
                      Kirim Aspirasi
                  </Link>
              </div>
          </div>
      </section>
    </>
  );
};

export default HomePage;
