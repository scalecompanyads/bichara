"use client";

import { filiais } from "@/data/filiais";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import Link from "next/link";
import { slugify } from "@/data/filiais";
import Image from "next/image";


export default function Contato() {
  return (
    <div className="flex flex-col min-h-screen -mt-[48px] md:-mt-[56px]">
      
      {/* Intro Section - Dark */}
      <section className="bg-dark pt-40 md:pt-48 pb-28 relative overflow-hidden flex items-center justify-center min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero_contato.png" 
            alt="Ambiente Advocacia Bichara" 
            fill
            quality={100}
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
        </div>

        <div className="absolute top-0 left-12 w-px h-full bg-white/10 z-0 hidden lg:block"></div>
        <div className="absolute top-0 right-12 w-px h-full bg-white/10 z-0 hidden lg:block"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl text-center">
          <p className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-6">
            Atendimento Personalizado
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-light mb-8 leading-tight">
            Entre em <span className="font-bold text-gold">Contato</span>
          </h1>
          <div className="w-12 h-[2px] bg-gold mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-light/80 leading-relaxed font-light max-w-2xl mx-auto">
            Estamos prontos para atender você. Preencha o formulário abaixo ou visite uma de nossas unidades.
          </p>
        </div>
      </section>

      {/* Content Section - Light */}
      <section className="py-24 bg-light relative overflow-hidden flex-grow">
        <div className="absolute inset-0 opacity-[0.08] z-0 mix-blend-multiply pointer-events-none">
          <Image src="/bg_arquitetura.png" alt="Arquitetura Background" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            
            {/* Form */}
            <div className="lg:col-span-3 bg-white border border-dark/10 p-10 md:p-14 rounded-none shadow-xl relative">
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold"></div>
              
              <h2 className="font-heading text-3xl font-bold text-dark mb-8 uppercase tracking-wide">
                Envie uma Mensagem
              </h2>
              <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-dark/50 mb-3">Nome Completo</label>
                  <input type="text" id="name" className="w-full bg-transparent border-b border-dark/20 px-0 py-3 text-dark focus:outline-none focus:border-gold transition-colors font-light" placeholder="Seu nome" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-dark/50 mb-3">E-mail</label>
                    <input type="email" id="email" className="w-full bg-transparent border-b border-dark/20 px-0 py-3 text-dark focus:outline-none focus:border-gold transition-colors font-light" placeholder="seu@email.com" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-dark/50 mb-3">Telefone / WhatsApp</label>
                    <input type="tel" id="phone" className="w-full bg-transparent border-b border-dark/20 px-0 py-3 text-dark focus:outline-none focus:border-gold transition-colors font-light" placeholder="(00) 00000-0000" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-dark/50 mb-3">Mensagem</label>
                  <textarea id="message" rows={4} className="w-full bg-transparent border-b border-dark/20 px-0 py-3 text-dark focus:outline-none focus:border-gold transition-colors resize-none font-light" placeholder="Como podemos ajudar?" required></textarea>
                </div>
                <button type="submit" className="group bg-dark text-gold font-bold px-8 py-5 uppercase tracking-[0.2em] text-sm hover:bg-gold hover:text-dark transition-colors duration-500 mt-4 flex items-center justify-center gap-4 w-full md:w-auto self-start shadow-lg">
                  Enviar Mensagem
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Info Side */}
            <div className="lg:col-span-2 flex flex-col gap-12">
              <div className="bg-white border border-dark/10 p-10 rounded-none shadow-xl">
                <h2 className="font-heading text-2xl font-bold text-dark mb-8 uppercase tracking-wide flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold"></div> Sede Principal
                </h2>
                <div className="space-y-6 text-dark/80 font-light">
                  <div className="flex gap-4">
                    <MapPin className="text-gold flex-shrink-0 mt-1" size={20} />
                    <p>
                      <strong className="text-dark font-medium block mb-1">Endereço</strong>
                      Av. Tancredo Neves, n°. 1390, Centro<br />
                      CEP: 86.870-007 - Ivaiporã – PR
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Phone className="text-gold flex-shrink-0" size={20} />
                    <p>
                      <strong className="text-dark font-medium mr-2">Telefone:</strong>
                      (43) 3472-4025
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Mail className="text-gold flex-shrink-0" size={20} />
                    <p>
                      <strong className="text-dark font-medium mr-2">E-mail:</strong>
                      contato@advocaciabichara.com.br
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-transparent border-none p-0 flex-grow">
                <h2 className="font-heading text-xl font-bold text-dark mb-4 uppercase tracking-wide">
                  Nossas Filiais
                </h2>
                <p className="text-dark/60 text-sm mb-6 font-light">
                  Clique na unidade mais próxima para ver detalhes:
                </p>
                <div className="flex flex-wrap gap-2">
                  {filiais.map((filial, idx) => (
                    <Link 
                      key={idx} 
                      href={`/unidades/${slugify(filial.cidade)}`}
                      className="bg-white border border-dark/10 text-dark/80 text-xs font-bold tracking-wider uppercase px-4 py-3 rounded-none hover:border-gold hover:text-gold transition-colors shadow-sm"
                    >
                      {filial.cidade} - {filial.uf}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
