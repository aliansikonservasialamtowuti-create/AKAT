import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuIcon, CloseIcon } from './icons';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Tentang Kami', path: '/tentang-kami' },
  { name: 'Program', path: '/program' },
  { name: 'Berita', path: '/berita' },
  { name: 'Transparansi', path: '/transparansi' },
  { name: 'Aspirasi', path: '/aspirasi' },
  { name: 'Kontak', path: '/kontak' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLinkStyle = {
    color: '#66BB6A',
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
  };

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-extrabold font-heading text-akat-dark hover:text-akat-primary transition-colors">
              AKAT
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                  className="text-akat-dark hover:text-akat-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
             <NavLink to="/dukung-kami" className="bg-akat-primary text-white hover:bg-akat-primary/90 font-bold py-2 px-4 rounded-full transition-colors">
                Donasi
             </NavLink>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-akat-primary inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-akat-primary/90 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? <MenuIcon className="block h-6 w-6" /> : <CloseIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                className="text-akat-dark hover:bg-akat-light block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </NavLink>
            ))}
             <NavLink to="/dukung-kami" onClick={() => setIsOpen(false)} className="bg-akat-primary text-white text-center block w-full mt-4 hover:bg-akat-primary/90 font-bold py-2 px-4 rounded-full transition-colors">
                Donasi
             </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;