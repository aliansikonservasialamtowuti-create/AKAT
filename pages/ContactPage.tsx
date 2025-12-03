import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, TwitterIcon } from '../components/icons';

const Breadcrumb = () => (
    <nav className="text-sm" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
                <Link to="/" className="text-gray-500 hover:text-akat-primary">Home</Link>
                <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
            </li>
            <li className="text-akat-dark">
                Hubungi Kami
            </li>
        </ol>
    </nav>
);

const ContactPage: React.FC = () => {
    return (
        <>
            <section className="bg-akat-light py-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumb />
                    <h1 className="text-4xl font-bold font-heading text-akat-dark mt-4">Hubungi Kami</h1>
                    <p className="mt-2 text-lg text-gray-600 max-w-3xl">Kami senang mendengar dari Anda. Silakan hubungi kami melalui form, email, atau kunjungi kantor kami.</p>
                </div>
            </section>
            
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold font-heading text-akat-primary mb-6">Kirim Pesan</h2>
                            <form action="https://formsubmit.co/aliansikonservasialamtowuti@gmail.com" method="POST" className="space-y-6">
                                <input type="hidden" name="_subject" value="Pesan Kontak Baru!" />
                                <div>
                                    <label htmlFor="contact_name" className="block text-sm font-medium text-gray-700">Nama</label>
                                    <input type="text" id="contact_name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-akat-primary focus:border-akat-primary" required />
                                </div>
                                <div>
                                    <label htmlFor="contact_email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" id="contact_email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-akat-primary focus:border-akat-primary" required />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Pesan</label>
                                    <textarea id="message" name="message" rows={5} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-akat-primary focus:border-akat-primary" required></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-bold text-white bg-akat-primary hover:bg-akat-secondary transition">
                                        Kirim
                                    </button>
                                </div>
                            </form>
                        </div>
                        
                        {/* Contact Info & Map */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold font-heading text-akat-dark mb-3">Informasi Kontak</h3>
                                <address className="not-italic text-gray-700 space-y-2">
                                    <p><strong>Alamat:</strong> Jl. Nasrun No.18 Langkea Raya, Kec.Towuti, Kab.Luwu Timur, Prov.Sulawesi Selatan 92982</p>
                                    <p><strong>Email:</strong> <a href="mailto:aliansikonservasialamtowuti@gmail.com" className="text-akat-primary hover:underline">aliansikonservasialamtowuti@gmail.com</a></p>
                                    <p><strong>Telepon:</strong> <a href="tel:+6285396140222" className="text-akat-primary hover:underline">+62-853-9614-0222</a></p>
                                </address>
                                <div className="flex space-x-4 mt-6">
                                    <a href="#" className="text-akat-dark hover:text-akat-primary"><span className="sr-only">Facebook</span><FacebookIcon className="h-8 w-8" /></a>
                                    <a href="#" className="text-akat-dark hover:text-akat-primary"><span className="sr-only">Instagram</span><InstagramIcon className="h-8 w-8" /></a>
                                    <a href="#" className="text-akat-dark hover:text-akat-primary"><span className="sr-only">Twitter</span><TwitterIcon className="h-8 w-8" /></a>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-heading text-akat-dark mb-3">Peta Lokasi</h3>
                                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
                                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.349079085813!2d121.3583563152661!3d-2.751028997998687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d9a9b9a9a9a9a9b%3A0x1a2b3c4d5e6f7g8h!2sDanau%20Towuti!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Peta Lokasi Kantor AKAT"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage;