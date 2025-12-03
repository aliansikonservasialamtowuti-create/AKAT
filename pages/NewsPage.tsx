
import React from 'react';
import { Link } from 'react-router-dom';
import { newsArticles } from '../data/mockData';
import type { NewsArticle } from '../types';

const Breadcrumb = () => (
    <nav className="text-sm" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
                <Link to="/" className="text-gray-500 hover:text-akat-primary">Home</Link>
                <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
            </li>
            <li className="text-akat-dark">
                Publikasi & Berita
            </li>
        </ol>
    </nav>
);

const ArticleCard: React.FC<{ article: NewsArticle }> = ({ article }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row group">
        <img className="md:w-1/3 h-48 md:h-auto object-cover" src={article.imageUrl} alt={article.title} />
        <div className="p-6 flex flex-col">
            <p className="text-sm text-gray-500 mb-2">{article.date} | {article.category}</p>
            <h2 className="text-2xl font-bold font-heading text-akat-dark group-hover:text-akat-primary transition mb-3">{article.title}</h2>
            <p className="text-gray-600 mb-4 flex-grow">{article.summary}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map(tag => (
                    <span key={tag} className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">{tag}</span>
                ))}
            </div>
            <Link to={`/berita/${article.id}`} className="font-semibold text-akat-secondary hover:text-akat-primary mt-auto self-start">
                Baca Selengkapnya
            </Link>
        </div>
    </div>
);


const NewsPage: React.FC = () => {
    // Note: Detail pages are mocked. In a real app, clicking "Baca Selengkapnya" would go to a dynamic article page.
    return (
        <>
            <section className="bg-akat-light py-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumb />
                    <h1 className="text-4xl font-bold font-heading text-akat-dark mt-4">Publikasi & Berita</h1>
                    <p className="mt-2 text-lg text-gray-600">Kumpulan berita, laporan, dan media terkait kerja kami.</p>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content: Article List */}
                        <div className="lg:col-span-2 space-y-8">
                           {newsArticles.map(article => (
                               <ArticleCard key={article.id} article={article}/>
                           ))}
                        </div>
                        
                        {/* Sidebar */}
                        <aside className="lg:col-span-1 space-y-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold font-heading mb-4">Pusat Unduhan</h3>
                                <p className="text-gray-600 mb-4">Akses semua laporan dan dokumen publik kami dalam format PDF.</p>
                                <Link to="/transparansi" className="w-full text-center bg-akat-primary hover:bg-akat-secondary text-white font-bold py-2 px-4 rounded-full transition-colors inline-block">
                                    Lihat Dokumen
                                </Link>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold font-heading mb-4">Media Galeri</h3>
                                <p className="text-gray-600 mb-4">Lihat koleksi foto dan video dari kegiatan lapangan kami.</p>
                                <div className="grid grid-cols-3 gap-2">
                                    <img src="https://picsum.photos/seed/gallery1/150/150" alt="Galeri 1" className="rounded"/>
                                    <img src="https://picsum.photos/seed/gallery2/150/150" alt="Galeri 2" className="rounded"/>
                                    <img src="https://picsum.photos/seed/gallery3/150/150" alt="Galeri 3" className="rounded"/>
                                    <img src="https://picsum.photos/seed/gallery4/150/150" alt="Galeri 4" className="rounded"/>
                                    <img src="https://picsum.photos/seed/gallery5/150/150" alt="Galeri 5" className="rounded"/>
                                    <img src="https://picsum.photos/seed/gallery6/150/150" alt="Galeri 6" className="rounded"/>
                                </div>
                                <a href="#" className="mt-4 text-akat-secondary font-semibold hover:underline">Lihat Semua Media</a>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewsPage;
