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
                Gabung / Dukung Kami
            </li>
        </ol>
    </nav>
);

const SupportPage: React.FC = () => {
    const [donationType, setDonationType] = useState<'sekali' | 'bulanan'>('sekali');
    const [amount, setAmount] = useState(100000);

    const handleDonationSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Terima kasih! Donasi ${donationType} sebesar Rp ${amount.toLocaleString('id-ID')} akan diproses. (Ini adalah simulasi).`);
    };

    return (
        <>
            <section className="bg-akat-light py-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumb />
                    <h1 className="text-4xl font-bold font-heading text-akat-dark mt-4">Dukung Perjuangan Kami</h1>
                    <p className="mt-2 text-lg text-gray-600 max-w-3xl">Kontribusi Anda adalah energi bagi kami untuk terus melindungi alam dan masyarakat Towuti.</p>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
                    {/* Donation Section */}
                    <div className="bg-white p-8 rounded-lg shadow-xl border border-akat-secondary">
                        <h2 className="text-3xl font-bold font-heading text-akat-primary mb-6 text-center">Donasi untuk Konservasi</h2>
                        <form onSubmit={handleDonationSubmit}>
                            <div className="grid grid-cols-2 gap-2 mb-6 bg-gray-200 p-1 rounded-full">
                                <button type="button" onClick={() => setDonationType('sekali')} className={`py-2 px-4 rounded-full font-semibold transition ${donationType === 'sekali' ? 'bg-akat-primary text-white shadow' : ''}`}>Sekali</button>
                                <button type="button" onClick={() => setDonationType('bulanan')} className={`py-2 px-4 rounded-full font-semibold transition ${donationType === 'bulanan' ? 'bg-akat-primary text-white shadow' : ''}`}>Bulanan</button>
                            </div>
                             <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                                {[50000, 100000, 250000, 500000].map(val => (
                                    <button key={val} type="button" onClick={() => setAmount(val)} className={`p-3 text-center rounded-lg border-2 font-bold transition ${amount === val ? 'bg-akat-secondary border-akat-primary text-white' : 'bg-gray-100 border-gray-200 hover:border-akat-secondary'}`}>
                                        Rp {val.toLocaleString('id-ID')}
                                    </button>
                                ))}
                                <input type="number" placeholder="Jumlah Lain" value={amount} onChange={(e) => setAmount(parseInt(e.target.value) || 0)} className="md:col-span-2 p-3 text-center rounded-lg border-2 border-gray-200 focus:border-akat-primary focus:ring-akat-primary" />
                            </div>
                            <button type="submit" className="w-full bg-akat-primary hover:bg-akat-secondary text-white font-bold py-3 px-6 rounded-full text-lg transition">
                                Lanjutkan Donasi
                            </button>
                             <p className="text-xs text-gray-500 mt-4 text-center">Pembayaran aman melalui partner kami (simulasi Midtrans/Xendit/PayPal).</p>
                        </form>
                    </div>

                    {/* Volunteer Section */}
                    <div className="bg-gray-50 p-8 rounded-lg">
                        <h2 className="text-3xl font-bold font-heading text-akat-dark mb-6 text-center">Jadi Relawan</h2>
                        <p className="text-gray-600 text-center mb-6">Sumbangkan waktu dan keahlian Anda untuk dampak yang nyata di lapangan.</p>
                        <form action="https://formsubmit.co/aliansikonservasialamtowuti@gmail.com" method="POST" className="space-y-4">
                            <input type="hidden" name="_subject" value="Pendaftaran Relawan Baru!" />
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                                <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-akat-primary focus:border-akat-primary" required/>
                            </div>
                            <div>
                                <label htmlFor="email_volunteer" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" id="email_volunteer" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-akat-primary focus:border-akat-primary" required/>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Minat Keahlian</label>
                                <div className="mt-2 space-y-2">
                                    <label className="inline-flex items-center"><input type="checkbox" name="interest" value="Edukasi Lingkungan" className="rounded text-akat-primary focus:ring-akat-primary"/> <span className="ml-2">Edukasi Lingkungan</span></label><br/>
                                    <label className="inline-flex items-center"><input type="checkbox" name="interest" value="Penelitian & Data" className="rounded text-akat-primary focus:ring-akat-primary"/> <span className="ml-2">Penelitian & Data</span></label><br/>
                                    <label className="inline-flex items-center"><input type="checkbox" name="interest" value="Kegiatan Lapangan" className="rounded text-akat-primary focus:ring-akat-primary"/> <span className="ml-2">Kegiatan Lapangan</span></label>
                                </div>
                            </div>
                            <button type="submit" className="w-full bg-akat-brown hover:bg-akat-brown/90 text-white font-bold py-3 px-6 rounded-full text-lg transition">
                                Kirim Pendaftaran
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SupportPage;