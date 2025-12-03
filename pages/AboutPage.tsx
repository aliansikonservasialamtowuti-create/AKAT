
import React from 'react';
import { Link } from 'react-router-dom';
import { teamMembers } from '../data/mockData';
import type { TeamMember } from '../types';

const Breadcrumb: React.FC = () => (
    <nav className="text-sm" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
                <Link to="/" className="text-gray-500 hover:text-akat-primary">Home</Link>
                <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
            </li>
            <li className="text-akat-dark">
                Tentang Kami
            </li>
        </ol>
    </nav>
);

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
    <div className="text-center">
        <img className="w-40 h-40 rounded-full mx-auto object-cover mb-4 shadow-lg" src={member.imageUrl} alt={member.name} />
        <h3 className="text-xl font-bold font-heading text-akat-primary">{member.name}</h3>
        <p className="text-akat-brown font-semibold mb-2">{member.role}</p>
        <p className="text-gray-600 text-sm">{member.bio}</p>
    </div>
);


const AboutPage: React.FC = () => {
    return (
        <>
            {/* Page Header */}
            <section className="bg-akat-light py-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumb />
                    <h1 className="text-4xl font-bold font-heading text-akat-dark mt-4">Tentang AKAT</h1>
                    <p className="mt-2 text-lg text-gray-600">Mengenal lebih dekat siapa kami dan apa yang kami perjuangkan.</p>
                </div>
            </section>

            {/* Visi & Misi */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold font-heading text-akat-primary mb-4">Visi & Misi</h2>
                            <p className="text-gray-700 mb-4">
                                Yayasan Aliansi Konservasi Alam Towuti (AKAT) adalah organisasi nirlaba yang berdiri untuk melindungi ekosistem Towuti dan memperjuangkan hak-hak masyarakat setempat. Kami melakukan pendampingan komunitas, penelitian lingkungan, kampanye kebijakan publik, dan proyek restorasi dengan pendekatan partisipatif.
                            </p>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-bold text-lg text-akat-dark">Visi Kami</h3>
                                    <p className="text-gray-600">Terwujudnya ekosistem Towuti yang lestari dan masyarakat yang adil, sejahtera, serta berdaulat atas sumber daya alamnya.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-akat-dark">Misi Kami</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                                        <li>Melakukan restorasi dan konservasi ekosistem kritis.</li>
                                        <li>Mengadvokasi kebijakan yang berpihak pada lingkungan dan masyarakat.</li>
                                        <li>Memberdayakan komunitas melalui ekonomi berkelanjutan.</li>
                                        <li>Mendorong transparansi dan akuntabilitas dalam pengelolaan sumber daya alam.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src="https://picsum.photos/seed/about-vision/600/450" alt="Tim AKAT berdiskusi dengan komunitas" className="rounded-lg shadow-xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* History Timeline */}
            <section className="bg-akat-light py-16">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <h2 className="text-3xl font-bold font-heading text-akat-dark text-center mb-12">Sejarah Singkat Organisasi</h2>
                     <div className="relative">
                         {/* Line */}
                         <div className="absolute left-1/2 h-full w-0.5 bg-akat-secondary transform -translate-x-1/2"></div>
                         
                         {/* Timeline Item 1 */}
                         <div className="flex items-center mb-8">
                            <div className="w-1/2 text-right pr-8">
                                <h3 className="font-bold text-lg text-akat-primary">2020: Inisiasi</h3>
                                <p className="text-gray-600 text-sm">AKAT didirikan oleh sekelompok aktivis lingkungan dan tokoh masyarakat yang prihatin dengan kondisi Danau Towuti.</p>
                            </div>
                            <div className="w-10 h-10 bg-akat-primary rounded-full z-10 flex items-center justify-center text-white font-bold">1</div>
                         </div>

                         {/* Timeline Item 2 */}
                         <div className="flex items-center flex-row-reverse mb-8">
                            <div className="w-1/2 text-left pl-8">
                                <h3 className="font-bold text-lg text-akat-primary">2022: Program Pertama</h3>
                                <p className="text-gray-600 text-sm">Meluncurkan program konservasi ekosistem pertama, fokus pada penanaman kembali lahan kritis di sekitar danau.</p>
                            </div>
                            <div className="w-10 h-10 bg-akat-primary rounded-full z-10 flex items-center justify-center text-white font-bold">2</div>
                         </div>
                         
                         {/* Timeline Item 3 */}
                         <div className="flex items-center">
                            <div className="w-1/2 text-right pr-8">
                                <h3 className="font-bold text-lg text-akat-primary">2024: Advokasi Kebijakan</h3>
                                <p className="text-gray-600 text-sm">Mulai aktif mengadvokasi perubahan kebijakan pertambangan di tingkat regional untuk perlindungan yang lebih baik.</p>
                            </div>
                            <div className="w-10 h-10 bg-akat-primary rounded-full z-10 flex items-center justify-center text-white font-bold">3</div>
                         </div>

                     </div>
                 </div>
            </section>

            {/* Team & Board */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold font-heading text-akat-dark text-center mb-12">Tim & Dewan Kami</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map(member => <TeamMemberCard key={member.name} member={member} />)}
                    </div>
                </div>
            </section>
            
            {/* Legal & Annual Reports */}
            <section className="bg-akat-light py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                     <h2 className="text-3xl font-bold font-heading text-akat-dark mb-4">Legalitas & Laporan Tahunan</h2>
                     <p className="max-w-2xl mx-auto text-gray-600 mb-8">Kami berkomitmen pada transparansi. Unduh dokumen legal dan laporan tahunan kami di sini.</p>
                     <a href="#" className="bg-akat-primary hover:bg-akat-secondary text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">
                         Unduh Dokumen Legal (PDF)
                     </a>
                </div>
            </section>
        </>
    );
};

export default AboutPage;
