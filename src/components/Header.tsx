"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Início", href: "/" },
  { name: "Serviços", href: "/servicos" },
  { name: "Nossa História", href: "/nossa-historia" },
  { name: "Equipe", href: "/equipe" },
  { name: "Parceiros", href: "/parceiros" },
  { name: "Trabalhe Conosco", href: "/trabalhe-conosco" },
  { name: "Notícias", href: "/noticias" },
  { name: "Contato", href: "/contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled ? "bg-dark/95 backdrop-blur-md border-white/5 py-4 shadow-lg" : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/" className="flex-shrink-0">
          <Image src="/logo 1 (1).png" alt="Advocacia Bichara Logo" width={100} height={32} className="object-contain h-5 md:h-7 w-auto opacity-90 hover:opacity-100 transition-opacity" priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex flex-1 justify-between items-center ml-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.1em] font-medium text-light/80 hover:text-gold transition-colors duration-300 whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/554334724025"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gold/50 text-gold text-[11px] uppercase tracking-[0.1em] font-bold px-5 py-3 hover:bg-gold hover:text-dark hover:border-gold transition-all duration-500 whitespace-nowrap"
          >
            Fale Conosco
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="xl:hidden text-light p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`xl:hidden fixed inset-0 top-[76px] bg-dark/95 backdrop-blur-lg border-t border-white/5 transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-8 gap-6 h-full overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-light tracking-widest uppercase text-light/80 hover:text-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/554334724025"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gold/50 text-gold text-sm uppercase tracking-widest font-bold text-center px-6 py-4 mt-4 hover:bg-gold hover:text-dark transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Fale com um Especialista
          </a>
        </nav>
      </div>
    </header>
  );
}
