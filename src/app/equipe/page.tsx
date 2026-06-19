"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { UserCircle } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Equipe() {
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

      gsap.from(".member-card", {
        scrollTrigger: {
          trigger: ".team-grid",
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
      
      gsap.from(".assoc-card", {
        scrollTrigger: {
          trigger: ".assoc-grid",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const socios = [
    { name: "Dr. Paulo Bichara", oab: "OAB/PR 85.283", role: "Sócio Administrador" },
    { name: "Dra. Mônica Bichara", oab: "OAB/PR 16.131", role: "Sócia Fundadora" },
    { name: "Dr. André Bichara", oab: "OAB/PR 69.751", role: "Sócio" },
    { name: "Dr. Moisés Bichara", oab: "OAB/PR 113.984", role: "Sócio" },
    { name: "Dra. Merabe Bichara", oab: "OAB/PR 102.254", role: "Sócia" },
  ];

  const associados = [
    { name: "Dra. Elizabeth" },
    { name: "Dr. J. Sargentin" },
    { name: "Dra. Daiane Bugni" },
    { name: "Dr. João Marcos" },
  ];

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen -mt-[48px] md:-mt-[56px]">
      
      {/* Intro Section - Dark */}
      <section className="bg-dark pt-40 md:pt-48 pb-28 relative overflow-hidden flex items-center justify-center min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/Ambiente+4-1104w.webp" 
            alt="Ambiente Advocacia Bichara" 
            fill
            quality={100}
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
        </div>

        <div className="absolute top-0 left-12 w-px h-full bg-white/10 z-0 hidden lg:block"></div>
        <div className="absolute top-0 right-12 w-px h-full bg-white/10 z-0 hidden lg:block"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl text-center">
          <p className="header-anim text-gold font-bold tracking-[0.2em] uppercase text-xs mb-6">
            Excelência Profissional
          </p>
          <h1 className="header-anim font-heading text-4xl md:text-5xl lg:text-6xl text-light mb-8 leading-tight">
            Nossa <span className="font-bold text-gold">Equipe</span>
          </h1>
          <div className="header-anim w-12 h-[2px] bg-gold mx-auto mb-8"></div>
          <p className="header-anim text-lg md:text-xl text-light/80 leading-relaxed font-light max-w-3xl mx-auto">
            Pessoas dedicadas e altamente qualificadas formam o coração da Advocacia Bichara. 
            Nossos profissionais estão preparados para defender os seus direitos com excelência.
          </p>
        </div>
      </section>

      {/* Sócios Section - Light */}
      <section className="py-24 bg-light relative overflow-hidden team-grid">
        <div className="absolute inset-0 opacity-[0.08] z-0 mix-blend-multiply pointer-events-none">
          <Image src="/bg_arquitetura.png" alt="Arquitetura Background" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-6xl">
          <div className="flex items-center gap-4 mb-16 justify-center">
            <div className="w-12 h-[2px] bg-gold"></div>
            <h2 className="header-anim font-heading text-3xl font-bold text-dark uppercase tracking-[0.1em]">
              Quadro de Sócios
            </h2>
            <div className="w-12 h-[2px] bg-gold"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {socios.map((socio, idx) => (
              <div key={idx} className="member-card">
                <div className="group bg-white p-10 flex flex-col items-center text-center border border-dark/10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full rounded-none">
                  <div className="w-24 h-24 mb-6 relative">
                    <div className="absolute inset-0 border border-gold/30 rounded-none transform rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
                    <div className="absolute inset-0 bg-dark-muted rounded-none flex items-center justify-center">
                      <UserCircle size={40} className="text-gold" />
                    </div>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-dark mb-2 group-hover:text-gold transition-colors">{socio.name}</h3>
                  <div className="w-8 h-1 bg-gold mb-4 transition-all duration-300 group-hover:w-16"></div>
                  <p className="text-dark/70 uppercase tracking-widest text-xs font-bold mb-2">{socio.role}</p>
                  <p className="text-dark/50 text-sm italic">{socio.oab}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Associados Section - Dark */}
      <section className="bg-black py-24 relative overflow-hidden border-y border-white/5 assoc-grid">
        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-6xl">
          <div className="flex items-center gap-4 mb-16 justify-center">
            <div className="w-12 h-[2px] bg-gold"></div>
            <h2 className="header-anim font-heading text-2xl font-bold text-light uppercase tracking-[0.1em]">
              Advogados Associados
            </h2>
            <div className="w-12 h-[2px] bg-gold"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {associados.map((associado, idx) => (
              <div key={idx} className="assoc-card">
                <div className="group bg-dark border border-white/5 p-8 flex flex-col items-center text-center hover:border-gold/30 transition-all duration-500 h-full rounded-none">
                  <UserCircle size={32} className="text-gold/50 mb-4 group-hover:text-gold transition-colors" />
                  <h3 className="font-heading text-lg font-bold text-light mb-2">{associado.name}</h3>
                  <p className="text-gold text-xs uppercase tracking-widest">Associado(a)</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
