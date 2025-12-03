
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { programs } from '../data/mockData';
import type { Program } from '../types';

const Breadcrumb = () => (
    <nav className="text-sm" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
                <Link to="/" className="text-gray-500 hover:text-akat-primary">Home</Link>
                <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
            </li>
            <li className="text-akat-dark">
                Program & Kegiatan
            </li>
        </ol>
    </nav>
);

const ProgramCard: React.FC<{ program: Program }> = ({ program }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
        <img className="w-full h-56 object-cover" src={program.imageUrl} alt={program.title} />
        <div className="p-6 flex flex-col flex-grow">
            <span className="inline-block bg-akat-secondary/20 text-akat-primary text-xs font-semibold mb-2 px-2 py-1 rounded-full w-max">{program.category}</span>
            <h3 className="font-heading text-xl font-bold text-akat-primary mb-2 flex-grow">{program.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{program.summary}</p>
            <div className="mt-auto">
                <Link to={`/program/${program.id}`} className="font-semibold text-akat-secondary hover:text-akat-primary transition">
                    Baca Selengkapnya
                </Link>
            </div>
        </div>
    </div>
);

const ProgramsPage: React.FC = () => {
    const [filter, setFilter] = useState('Semua');
    const categories = ['Semua', 'Konservasi', 'Advokasi', 'Pemberdayaan'];

    const filteredPrograms = useMemo(() => {
        if (filter === 'Semua') {
            return programs;
        }
        return programs.filter(p => p.category === filter);
    }, [filter]);
    
    // NOTE: The interactive map and detail pages are mocked. 
    // This page only shows the list view.
    // In a real app, clicking "Baca Selengkapnya" would navigate to a dynamic route like /program/:id.
    // For this demo, all links will go to the main programs page.

    return (
        <>
            <section className="bg-akat-light py-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumb />
                    <h1 className="text-4xl font-bold font-heading text-akat-dark mt-4">Program & Kegiatan</h1>
                    <p className="mt-2 text-lg text-gray-600">Jelajahi inisiatif kami yang mendorong perubahan positif di Towuti.</p>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center mb-8">
                        <div className="flex space-x-2 bg-gray-200 p-1 rounded-full">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${filter === cat ? 'bg-akat-primary text-white shadow' : 'text-gray-600 hover:bg-gray-300'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPrograms.map(p => (
                           <ProgramCard key={p.id} program={p} />
                        ))}
                    </div>
                     <div className="mt-12 text-center p-8 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                        <h3 className="font-bold text-lg text-blue-800">Proyek Lapangan Interaktif</h3>
                        <p className="text-blue-700 mt-2">Untuk melihat lokasi detail dan progres proyek lapangan kami, kami sedang mengembangkan peta interaktif. Nantikan pembaruannya!</p>
                        <img src="https://picsum.photos/seed/map/1024/500" alt="Peta Lokasi Proyek" className="mt-4 rounded-lg shadow-md mx-auto" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProgramsPage;
