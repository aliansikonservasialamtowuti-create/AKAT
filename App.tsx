
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import NewsPage from './pages/NewsPage';
import TransparencyPage from './pages/TransparencyPage';
import SupportPage from './pages/SupportPage';
import AspirationsPage from './pages/AspirationsPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="bg-white text-akat-dark">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tentang-kami" element={<AboutPage />} />
            <Route path="/program" element={<ProgramsPage />} />
            <Route path="/berita" element={<NewsPage />} />
            <Route path="/transparansi" element={<TransparencyPage />} />
            <Route path="/dukung-kami" element={<SupportPage />} />
            <Route path="/aspirasi" element={<AspirationsPage />} />
            <Route path="/kontak" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
