'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const getDesktopLinkClass = (path: string) =>
    `text-sm font-semibold tracking-widest transition-colors ${pathname === path ? 'text-accentBlue' : 'text-textMuted hover:text-textMain'
    }`;

  const getMobileLinkClass = (path: string) =>
    `mobile-link text-3xl font-heading font-black transition-colors ${pathname === path ? 'text-accentBlue' : 'text-textMain hover:text-accentBlue'
    }`;

  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-white/40 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-4 group relative z-50" onClick={closeMenu}>
            <div className="relative w-12 h-12 flex items-center justify-center bg-white/80 rounded-full border border-slate-100 shadow-sm group-hover:border-accentBlue transition-all duration-500">
              <div className="w-3 h-3 bg-accentBlue rounded-full group-hover:scale-125 transition-transform duration-500"></div>
            </div>
            <div className="flex flex-col -gap-1">
              <span className="font-heading font-black text-2xl tracking-tighter text-textMain">
                ZYNTRO<span className="text-accentBlue opacity-80">360</span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.4em] text-slate-400 -mt-1 ml-0.5 uppercase">Elite Creative Lab</span>
            </div>
          </Link>

          <nav className="hidden lg:flex gap-12 items-center">
            {['HOME', 'ABOUT', 'SERVICES', 'TEAM', 'CONTACT'].map((item) => (
              <Link
                key={item}
                href={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                className={`text-xs font-black tracking-[0.2em] transition-all duration-300 ${pathname === (item === 'HOME' ? '/' : `/${item.toLowerCase()}`)
                  ? 'text-accentBlue border-b border-accentBlue pb-1'
                  : 'text-slate-400 hover:text-textMain'
                  }`}
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <Link
              href="/chaalkhata"
              className="hidden sm:flex items-center gap-3 px-6 py-2.5 bg-[#064e3b] text-white font-heading font-bold text-sm uppercase tracking-widest rounded-full shadow-lg transition-all duration-500 hover:bg-green-900 hover:-translate-y-0.5"
            >
              <span className="text-base">🌾</span>
              <span>Chaal Khata</span>
            </Link>

            <button
              onClick={toggleMenu}
              className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
            >
              <span className={`hamburger-line line-1 w-6 h-0.5 bg-textMain rounded-full block transition-transform duration-300 ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
              <span className={`hamburger-line line-2 w-6 h-0.5 bg-textMain rounded-full block transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`hamburger-line line-3 w-6 h-0.5 bg-textMain rounded-full block transition-transform duration-300 ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl flex flex-col items-center pt-24 pb-10 overflow-y-auto transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <nav className="flex flex-col items-center gap-6 w-full px-6">
          <Link href="/" className={getMobileLinkClass('/')} onClick={closeMenu}>HOME</Link>
          <Link href="/about" className={getMobileLinkClass('/about')} onClick={closeMenu}>ABOUT</Link>
          <Link href="/services" className={getMobileLinkClass('/services')} onClick={closeMenu}>SERVICES</Link>
          <Link href="/team" className={getMobileLinkClass('/team')} onClick={closeMenu}>TEAM</Link>
          <Link href="/contact" className={getMobileLinkClass('/contact')} onClick={closeMenu}>CONTACT</Link>

          <Link
            href="/chaalkhata"
            className="mt-10 flex items-center justify-center gap-3 px-8 py-4 bg-accentBlue text-white font-heading font-bold text-sm uppercase tracking-wider rounded-full w-full max-w-xs text-center shadow-lg"
            onClick={closeMenu}
          >
            <span>🌾</span>
            <span>Chaal Khata SaaS</span>
          </Link>
        </nav>
      </div>
    </>
  );
}
