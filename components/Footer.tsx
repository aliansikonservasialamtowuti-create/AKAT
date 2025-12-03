import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, TwitterIcon } from './icons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-akat-dark text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h2 className="text-2xl font-extrabold font-heading text-white mb-4">AKAT</h2>
                        <p className="text-gray-300 text-sm">
                            Yayasan Aliansi Konservasi Alam Towuti (AKAT) adalah organisasi nirlaba yang berdiri untuk melindungi ekosistem Towuti dan memperjuangkan hak-hak masyarakat setempat.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Link Cepat</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/tentang-kami" className="text-gray-300 hover:text-akat-secondary transition">Tentang Kami</Link></li>
                            <li><Link to="/program" className="text-gray-300 hover:text-akat-secondary transition">Program</Link></li>
                            <li><Link to="/berita" className="text-gray-300 hover:text-akat-secondary transition">Berita</Link></li>
                            <li><Link to="/dukung-kami" className="text-gray-300 hover:text-akat-secondary transition">Donasi</Link></li>
                        </ul>
                    </div>
                    
                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Hubungi Kami</h3>
                        <address className="not-italic text-sm text-gray-300 space-y-2">
                            <p>Jl. Nasrun No.18 Langkea Raya, Kec.Towuti, Kab.Luwu Timur, Sulawesi Selatan 92982</p>
                            <p>Email: <a href="mailto:aliansikonservasialamtowuti@gmail.com" className="hover:text-akat-secondary">aliansikonservasialamtowuti@gmail.com</a></p>
                            <p>Tel: <a href="tel:+6285396140222" className="hover:text-akat-secondary">+62-853-9614-0222</a></p>
                        </address>
                    </div>

                    {/* Newsletter & Social */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Newsletter</h3>
                        <p className="text-sm text-gray-300 mb-3">Dapatkan berita terbaru dari kami.</p>
                        <form action="https://formsubmit.co/aliansikonservasialamtowuti@gmail.com" method="POST">
                            <input type="hidden" name="_subject" value="Langganan Newsletter Baru!" />
                            <div className="flex">
                                <input type="email" name="email" placeholder="Email Anda" className="w-full px-3 py-2 text-akat-dark rounded-l-md focus:outline-none" required />
                                <button type="submit" className="bg-akat-primary hover:bg-akat-secondary text-white font-bold py-2 px-4 rounded-r-md transition">Kirim</button>
                            </div>
                        </form>
                        <div className="flex space-x-4 mt-6">
                            <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">Facebook</span><FacebookIcon className="h-6 w-6" /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">Instagram</span><InstagramIcon className="h-6 w-6" /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">Twitter</span><TwitterIcon className="h-6 w-6" /></a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Yayasan Aliansi Konservasi Alam Towuti (AKAT). All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;