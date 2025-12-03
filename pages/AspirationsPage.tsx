import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = () => (
    <nav className="text-sm" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
                <Link to="/" className="text-gray-500 hover:text-akat-primary">Home</Link>
                <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
            </li>
            <li className="text-akat-dark">
                Aspirasi Rakyat
            </li>
        </ol>
    </nav>
);

const AspirationsPage: React.FC = () => {
    const [fileName, setFileName] = useState('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        } else {
            setFileName('');
        }
    };

    return (
        <>
            <section className="bg-akat-light py-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumb />
                    <h1 className="text-4xl font-bold font-heading text-akat-dark mt-4">Aspirasi Rakyat</h1>
                    <p className="mt-2 text-lg text-gray-600 max-w-3xl">Suara Anda penting. Sampaikan aspirasi, laporan, atau masukan Anda terkait lingkungan dan kondisi sosial di wilayah Towuti.</p>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold font-heading text-akat-primary mb-6">Formulir Aspirasi</h2>
                        <form action="https://formsubmit.co/aliansikonservasialamtowuti@gmail.com" method="POST" encType="multipart/form-data" className="space-y-6">
                            <input type="hidden" name="_subject" value="Aspirasi Rakyat Baru!" />
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama Anda</label>
                                <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-akat-primary focus:border-akat-primary" required />
                            </div>
                            <div>
                                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Lokasi (Desa/Kecamatan)</label>
                                <input type="text" id="location" name="location" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-akat-primary focus:border-akat-primary" required />
                            </div>
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Deskripsi Aspirasi/Laporan</label>
                                <textarea id="description" name="description" rows={5} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-akat-primary focus:border-akat-primary" required></textarea>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Lampiran Foto (Opsional)</label>
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div className="space-y-1 text-center">
                                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <div className="flex text-sm text-gray-600">
                                            <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-akat-primary hover:text-akat-secondary focus-within:outline-none">
                                                <span>Unggah file</span>
                                                <input id="file-upload" name="attachment" type="file" className="sr-only" onChange={handleFileChange} accept="image/*" />
                                            </label>
                                            <p className="pl-1">atau seret dan lepas</p>
                                        </div>
                                        <p className="text-xs text-gray-500">PNG, JPG, GIF hingga 10MB</p>
                                        {fileName && <p className="text-sm text-akat-primary font-semibold mt-2">{fileName}</p>}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-bold text-white bg-akat-primary hover:bg-akat-secondary transition">
                                    Kirim Aspirasi
                                </button>
                            </div>
                        </form>
                    </div>
                     <div className="mt-12 text-center text-sm text-gray-600">
                        <p>Aspirasi yang masuk akan diverifikasi oleh tim kami. Untuk staf: dashboard internal dapat diakses untuk memfilter dan mengekspor data.</p>
                        {/* Fix: Replaced 'class' with 'className' for JSX compatibility. */}
                        <p className="font-bold">Backend disimulasikan untuk menyimpan data ke Google Sheets.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AspirationsPage;