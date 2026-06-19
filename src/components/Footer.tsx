"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light pt-16 pb-8 border-t border-gold/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center mb-2">
              <Image src="/logo.webp" alt="Advocacia Bichara Logo" width={140} height={50} className="object-contain h-10 md:h-12 w-auto" />
            </Link>
            <p className="text-dark/70 text-sm leading-relaxed">
              Tradição familiar e excelência jurídica há mais de 30 anos. Especialistas na defesa dos seus direitos previdenciários.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gold/30 flex items-center justify-center text-gold hover:bg-gold-gradient hover:text-dark transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gold/30 flex items-center justify-center text-gold hover:bg-gold-gradient hover:text-dark transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading text-lg font-bold text-dark mb-2">Navegação</h4>
            <Link href="/servicos" className="text-dark/70 hover:text-gold transition-colors text-sm">Nossos Serviços</Link>
            <Link href="/nossa-historia" className="text-dark/70 hover:text-gold transition-colors text-sm">Nossa História</Link>
            <Link href="/equipe" className="text-dark/70 hover:text-gold transition-colors text-sm">A Equipe</Link>
            <Link href="/noticias" className="text-dark/70 hover:text-gold transition-colors text-sm">Blog / Notícias</Link>
            <Link href="/contato" className="text-dark/70 hover:text-gold transition-colors text-sm">Contato</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading text-lg font-bold text-dark mb-2">Fale Conosco</h4>
            <div className="flex items-start gap-3 text-sm text-dark/70">
              <Phone size={18} className="text-gold shrink-0 mt-0.5" />
              <span>(43) 3472-4025</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-dark/70">
              <Mail size={18} className="text-gold shrink-0 mt-0.5" />
              <span>contato@advocaciabichara.com.br</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-dark/70">
              <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
              <span>
                Av. Tancredo Neves, n°. 1390<br />
                Centro - CEP: 86.870-007<br />
                Ivaiporã – PR
              </span>
            </div>
          </div>

          {/* Newsletter / Cta */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading text-lg font-bold text-dark mb-2">Novidades</h4>
            <p className="text-dark/70 text-sm">
              Fique por dentro das atualizações previdenciárias.
            </p>
            <form className="mt-2 flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="bg-white border border-dark/20 rounded px-4 py-2.5 text-sm text-dark focus:outline-none focus:border-gold transition-colors"
              />
              <button className="bg-gold-gradient text-dark font-bold py-2.5 rounded hover:opacity-90 transition-opacity text-sm">
                Assinar
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-dark/50">
          <p>© {currentYear > 2026 ? currentYear : 2026} Advocacia Bichara. Todos os direitos reservados.</p>
          <p>CNPJ 20.809.866/0001-55</p>
        </div>
      </div>
    </footer>
  );
}
