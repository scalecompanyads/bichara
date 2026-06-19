"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Zap, Heart, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function NossaHistoria() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".header-anim", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(".fade-up", {
        scrollTrigger: {
          trigger: ".fade-up",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(".timeline-item", {
        scrollTrigger: {
          trigger: ".timeline",
          start: "top 70%",
        },
        x: -40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen -mt-[48px] md:-mt-[56px]">
      
      {/* Intro Section - Dark */}
      <section className="bg-dark pt-40 md:pt-48 pb-28 relative overflow-hidden flex items-center justify-center min-h-[50vh]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/Ambiente+4-1104w.webp" 
            alt="Nossa História" 
            fill
            quality={100}
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
        </div>

        <div className="absolute top-0 left-12 w-px h-full bg-white/10 z-0 hidden lg:block"></div>
        <div className="absolute top-0 right-12 w-px h-full bg-white/10 z-0 hidden lg:block"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl text-center">
          <p className="header-anim text-gold font-bold tracking-[0.2em] uppercase text-xs mb-6">
            Mais de 30 anos de atuação
          </p>
          <h1 className="header-anim font-heading text-4xl md:text-6xl text-light mb-8 leading-tight">
            Nossa <span className="font-bold text-gold">História</span>
          </h1>
          <div className="header-anim w-12 h-[2px] bg-gold mx-auto mb-8"></div>
          <p className="header-anim text-lg md:text-xl text-light/80 leading-relaxed font-light max-w-2xl mx-auto">
            Uma jornada marcada pela dedicação, excelência jurídica e compromisso inabalável com os direitos de quem mais precisa.
          </p>
        </div>
      </section>

      {/* Timeline Section - Light */}
      <section className="py-24 md:py-32 bg-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] z-0 mix-blend-multiply pointer-events-none">
          <Image src="/bg_arquitetura.png" alt="Arquitetura Background" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-5xl">
          <div className="flex items-center justify-center gap-4 mb-24">
            <div className="w-12 h-[2px] bg-gold"></div>
            <h2 className="header-anim font-heading text-2xl font-bold text-dark uppercase tracking-[0.1em]">
              Linha do Tempo
            </h2>
            <div className="w-12 h-[2px] bg-gold"></div>
          </div>

          <div className="relative border-l border-gold/40 ml-4 md:ml-8 mb-12 timeline">
            {/* 1989 */}
            <div className="timeline-item mb-20 ml-12 md:ml-16 relative">
              <div className="absolute -left-[57px] md:-left-[73px] top-1 w-6 h-6 bg-gold rounded-full border-4 border-light shadow-[0_0_0_4px_rgba(202,171,105,0.2)]"></div>
              <h3 className="font-heading text-4xl md:text-5xl font-bold text-dark mb-4">1989</h3>
              <div className="w-8 h-1 bg-gold mb-6"></div>
              <p className="text-dark/70 leading-relaxed text-lg max-w-2xl">
                Fundada em Manoel Ribas-PR pelos sócios Mônica Maria Pereira Bichara e Paulo Guimarães Bichara <span className="italic text-dark/50">(in memorian)</span>. O início de um legado de dedicação ao direito.
              </p>
            </div>

            {/* 1996 */}
            <div className="timeline-item mb-20 ml-12 md:ml-16 relative">
              <div className="absolute -left-[57px] md:-left-[73px] top-1 w-6 h-6 bg-gold rounded-full border-4 border-light shadow-[0_0_0_4px_rgba(202,171,105,0.2)]"></div>
              <h3 className="font-heading text-4xl md:text-5xl font-bold text-dark mb-4">1996</h3>
              <div className="w-8 h-1 bg-gold mb-6"></div>
              <p className="text-dark/70 leading-relaxed text-lg max-w-2xl">
                O escritório alocou-se em Ivaiporã-PR, buscando expandir sua atuação e estruturar melhor o atendimento aos clientes da região, consolidando seu nome.
              </p>
            </div>

            {/* 2000 */}
            <div className="timeline-item ml-12 md:ml-16 relative">
              <div className="absolute -left-[57px] md:-left-[73px] top-1 w-6 h-6 bg-gold rounded-full border-4 border-light shadow-[0_0_0_4px_rgba(202,171,105,0.2)]"></div>
              <h3 className="font-heading text-4xl md:text-5xl font-bold text-dark mb-4">A partir de 2000</h3>
              <div className="w-8 h-1 bg-gold mb-6"></div>
              <p className="text-dark/70 leading-relaxed text-lg max-w-2xl">
                Focou intensamente no Direito Previdenciário, com atenção especial à população rural do Vale do Ivaí, garantindo direitos e amparo para quem mais precisava.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores e Números - Dark */}
      <section className="bg-black py-24 relative overflow-hidden border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-6xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Valores */}
            <div className="fade-up">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-8 h-[2px] bg-gold"></div>
                <h2 className="font-heading text-3xl font-bold text-light uppercase tracking-[0.1em]">
                  Nossos Valores
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-dark border border-white/5 p-8 hover:border-gold/30 transition-colors duration-500 group">
                  <div className="flex items-center gap-4 mb-4">
                    <Heart className="text-gold group-hover:scale-110 transition-transform" size={28} />
                    <h4 className="text-light font-bold text-xl">Transparência</h4>
                  </div>
                  <p className="text-light/60 font-light leading-relaxed">Clareza absoluta em cada etapa do processo e comunicação honesta com cada cliente.</p>
                </div>

                <div className="bg-dark border border-white/5 p-8 hover:border-gold/30 transition-colors duration-500 group">
                  <div className="flex items-center gap-4 mb-4">
                    <Zap className="text-gold group-hover:scale-110 transition-transform" size={28} />
                    <h4 className="text-light font-bold text-xl">Agilidade e Qualidade</h4>
                  </div>
                  <p className="text-light/60 font-light leading-relaxed">Respostas rápidas mantendo a excelência técnica jurídica que nos define.</p>
                </div>

                <div className="bg-dark border border-white/5 p-8 hover:border-gold/30 transition-colors duration-500 group">
                  <div className="flex items-center gap-4 mb-4">
                    <Users className="text-gold group-hover:scale-110 transition-transform" size={28} />
                    <h4 className="text-light font-bold text-xl">Atendimento Acolhedor</h4>
                  </div>
                  <p className="text-light/60 font-light leading-relaxed">Cuidado humano e empatia na relação com nossos clientes, entendendo suas dores.</p>
                </div>
              </div>
            </div>

            {/* Números */}
            <div className="fade-up lg:pl-12 lg:border-l lg:border-white/10 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-10 mt-12 lg:mt-0">
                <div className="w-8 h-[2px] bg-gold"></div>
                <h2 className="font-heading text-3xl font-bold text-light uppercase tracking-[0.1em]">
                  Números Atuais
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-dark p-10 border-t-2 border-gold text-center hover:-translate-y-2 transition-transform duration-500 shadow-xl">
                  <span className="block font-heading text-6xl font-bold text-gold mb-4">+55</span>
                  <span className="text-light/80 font-medium uppercase tracking-widest text-xs">Colaboradores Especializados</span>
                </div>
                
                <div className="bg-dark p-10 border-t-2 border-gold text-center hover:-translate-y-2 transition-transform duration-500 shadow-xl">
                  <span className="block font-heading text-6xl font-bold text-gold mb-4">3</span>
                  <span className="text-light/80 font-medium uppercase tracking-widest text-xs">Estados (PR, MT e MG)</span>
                </div>
              </div>
              
              <div className="mt-16 text-center lg:text-left">
                <p className="text-light/60 font-light mb-8 italic">
                  "E não nos cansemos de fazer o bem, porque a seu tempo ceifaremos."
                </p>
                <Link href="/servicos" className="group inline-flex items-center justify-center gap-3 bg-gold text-dark font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-none hover:bg-light transition-colors duration-500">
                  Conheça Nossos Serviços
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
