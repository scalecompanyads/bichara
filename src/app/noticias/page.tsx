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
    <div className="bg-dark min-h-screen pt-16">
      <div className="container mx-auto px-4 md:px-8 py-16 max-w-6xl">
        <div className="text-center mb-20">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-light mb-6">
            Notícias <span className="text-gold-gradient">Previdenciárias</span>
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-text max-w-2xl mx-auto">
            Fique atualizado com as últimas decisões e novidades do mundo do Direito Previdenciário.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {news.map((item, idx) => (
            <article key={idx} className="bg-dark border border-gold/20 hover:border-gold/60 transition-all duration-300 group flex flex-col h-full rounded-none relative">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gold z-20"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gold z-20"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-gold z-20"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gold z-20"></div>

              <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-gold/10">
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              <div className="p-8 flex-grow flex flex-col relative z-10">
                <div className="flex items-center gap-2 text-gold text-xs font-bold tracking-widest uppercase mb-4">
                  <CalendarDays size={16} />
                  <span>{item.date}</span>
                </div>
                <h2 className="font-heading text-xl font-bold text-light mb-4 group-hover:text-gold transition-colors">
                  {item.title}
                </h2>
                <p className="text-gray-text text-sm leading-relaxed mb-6 font-light">
                  {item.excerpt}
                </p>
                <div className="mt-auto pt-6 border-t border-white/5">
                  <a href={item.slug ? `/noticias/${item.slug}` : "#"} className="text-gold font-bold text-sm inline-flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    Ler artigo <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-black border border-gold/20 p-10 md:p-16 relative text-center max-w-3xl mx-auto rounded-none">
          {/* Architectural corners */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold"></div>

          <h3 className="font-heading text-2xl md:text-3xl font-bold text-light mb-4">
            Assine nossa Newsletter
          </h3>
          <p className="text-gray-text mb-8 font-light">
            Fique por dentro de todas as novidades Previdenciárias diretamente no seu e-mail.
          </p>
          <form className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Digite seu e-mail" 
              className="flex-grow bg-dark border border-gray-text/20 px-4 py-3 text-light focus:outline-none focus:border-gold transition-colors rounded-none"
              required
            />
            <button type="submit" className="bg-gold-gradient font-bold px-8 py-3 hover:opacity-90 transition-opacity whitespace-nowrap text-dark rounded-none">
              Inscrever-se
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
