
import React from 'react';
import { Link } from 'react-router-dom';
import { financialReports } from '../data/mockData';

const Breadcrumb = () => (
    <nav className="text-sm" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
                <Link to="/" className="text-gray-500 hover:text-akat-primary">Home</Link>
                <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
            </li>
            <li className="text-akat-dark">
                Transparansi & Data
            </li>
        </ol>
    </nav>
);

const TransparencyPage: React.FC = () => {
    return (
        <>
            <section className="bg-akat-light py-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumb />
                    <h1 className="text-4xl font-bold font-heading text-akat-dark mt-4">Transparansi & Data</h1>
                    <p className="mt-2 text-lg text-gray-600 max-w-3xl">AKAT berkomitmen pada keterbukaan. Di halaman ini Anda dapat mengunduh laporan tahunan, ringkasan keuangan, serta melihat indikator kinerja proyek kami.</p>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
                    {/* Financial Reports */}
                    <div className="md:col-span-1">
                        <h2 className="text-2xl font-bold font-heading text-akat-primary mb-4">Laporan Keuangan</h2>
                        <p className="text-gray-600 mb-6">Akses laporan keuangan tahunan kami untuk melihat bagaimana kami mengelola dana secara bertanggung jawab.</p>
                        <div className="space-y-3">
                            {financialReports.map(report => (
                                <a key={report.year} href={report.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:border-akat-primary transition">
                                    <span className="font-semibold text-gray-700">Laporan Keuangan {report.year}</span>
                                    <svg className="w-5 h-5 text-akat-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Dashboard */}
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold font-heading text-akat-primary mb-4">Dashboard Indikator Kinerja</h2>
                        <p className="text-gray-600 mb-6">Visualisasi sederhana dari capaian program-program utama kami hingga saat ini.</p>
                        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                           <img src="https://picsum.photos/seed/dashboard/1200/600" alt="Dashboard Kinerja AKAT" className="w-full h-auto rounded-md" />
                           <p className="text-xs text-center text-gray-500 mt-2">Contoh visualisasi dashboard. Ini bisa berupa iframe dari Looker Studio atau grafis statis.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* IRMA Section */}
            <section className="bg-akat-light py-16">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-lg shadow-md">
                        <img src="https://picsum.photos/seed/irma-logo/200/200" alt="IRMA Logo" className="w-32 h-32 object-contain flex-shrink-0"/>
                        <div>
                            <h2 className="text-2xl font-bold font-heading text-akat-primary mb-3">Hubungan dengan IRMA</h2>
                            <p className="text-gray-600 mb-4">Kami mendukung dan mengacu pada standar <a href="#" className="text-akat-secondary font-semibold hover:underline">Initiative for Responsible Mining Assurance (IRMA)</a>. Standar IRMA memberikan kerangka kerja global untuk praktik pertambangan terbaik dari segi lingkungan dan sosial. Kami menggunakan pedoman ini dalam advokasi kami untuk mendorong praktik pertambangan yang lebih bertanggung jawab di wilayah kerja kami.</p>
                            <a href="#" className="font-bold text-akat-secondary hover:text-akat-primary transition">
                                Pelajari Lebih Lanjut tentang IRMA
                            </a>
                        </div>
                    </div>
                 </div>
            </section>
        </>
    );
};

export default TransparencyPage;
