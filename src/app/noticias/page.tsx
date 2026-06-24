"use client";

import { CalendarDays, ArrowRight } from "lucide-react";
import Image from "next/image";


export default function Noticias() {
  const news = [
    {
      title: "TRF1: Viúva que comprovou o trabalho rural do marido falecido tem direito à Pensão por Morte",
      date: "18 de junho de 2026",
      excerpt: "A Câmara Regional Previdenciária da Bahia (CRP/BA) determinou o pagamento do benefício após comprovação do trabalho no campo.",
      slug: "trf1-viuva-pensao-por-morte",
      image: "/1689009111_gavel-do-juiz-que-decide-em-papeis-de-assinatura-do-divorcio-do-casamento-conceito-de-advogado-8acfe06f-1920w.webp"
    },
    {
      title: "TRF4: Agricultor com doença degenerativa garante benefício",
      date: "10 de julho de 2023",
      excerpt: "Trabalhador rural consegue o direito à aposentadoria por invalidez devido ao agravamento de sua condição de saúde.",
      image: "/Ambiente+4-1104w.webp"
    },
    {
      title: "TRF1 assegura permissão para Aposentadoria por Invalidez",
      date: "10 de julho de 2023",
      excerpt: "Justiça confirma que o segurado incapacitado permanentemente para o trabalho tem direito imediato ao benefício.",
      image: "/bg_arquitetura.png"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen -mt-[48px] md:-mt-[56px]">
      
      {/* Intro Section - Dark */}
      <section className="bg-dark pt-40 md:pt-48 pb-28 relative overflow-hidden flex items-center justify-center min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero_noticias.png" 
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
            Atualizações e Decisões
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-light mb-8 leading-tight">
            Notícias <span className="font-bold text-gold">Previdenciárias</span>
          </h1>
          <div className="w-12 h-[2px] bg-gold mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-light/80 leading-relaxed font-light max-w-2xl mx-auto">
            Fique atualizado com as últimas decisões e novidades do mundo do Direito Previdenciário.
          </p>
        </div>
      </section>

      {/* Content Section - Light */}
      <section className="py-24 bg-light relative overflow-hidden flex-grow">
        <div className="absolute inset-0 opacity-[0.08] z-0 mix-blend-multiply pointer-events-none">
          <Image src="/bg_arquitetura.png" alt="Arquitetura Background" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-6xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {news.map((item, idx) => (
              <article key={idx} className="bg-white border border-dark/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full rounded-none relative">
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-dark">
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-dark/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

                <div className="p-8 flex-grow flex flex-col relative z-10">
                  <div className="flex items-center gap-2 text-gold text-xs font-bold tracking-widest uppercase mb-4">
                    <CalendarDays size={16} />
                    <span>{item.date}</span>
                  </div>
                  <h2 className="font-heading text-xl font-bold text-dark mb-4 group-hover:text-gold transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-dark/70 text-sm leading-relaxed mb-8 font-light">
                    {item.excerpt}
                  </p>
                  <div className="mt-auto pt-6 border-t border-dark/10">
                    <a href={item.slug ? `/noticias/${item.slug}` : "#"} className="text-gold font-bold text-xs uppercase tracking-[0.2em] inline-flex items-center gap-2 group-hover:text-dark transition-colors">
                      Ler Artigo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter */}
          <div className="bg-black p-12 md:p-16 relative text-center max-w-4xl mx-auto border-y border-gold/30">
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-light mb-4">
              Assine nossa Newsletter
            </h3>
            <p className="text-light/60 mb-10 font-light text-lg">
              Fique por dentro de todas as novidades Previdenciárias diretamente no seu e-mail.
            </p>
            <form className="flex flex-col md:flex-row gap-0 justify-center max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="flex-grow bg-dark-muted border border-white/10 px-6 py-4 text-light focus:outline-none focus:border-gold transition-colors rounded-none font-light"
                required
              />
              <button type="submit" className="bg-gold text-dark font-bold px-10 py-4 hover:bg-light transition-colors uppercase tracking-[0.2em] text-sm whitespace-nowrap rounded-none mt-4 md:mt-0">
                Inscrever-se
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
