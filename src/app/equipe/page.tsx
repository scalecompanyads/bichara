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
    { name: "Dr. Paulo Bichara", oab: "OAB/PR 85.283", role: "Sócio Administrador", image: "/socios e parceiros/paulo-bichara.webp" },
    { name: "Dra. Mônica Bichara", oab: "OAB/PR 16.131", role: "Sócia Fundadora", image: "/socios e parceiros/Dra-M-C3-B4nica-Bichara-1920w.webp" },
    { name: "Dr. André Bichara", oab: "OAB/PR 69.751", role: "Sócio", image: "/socios e parceiros/Dr.-Andr-C3-A9-Bichara---Site-dba8ddd1-a47e2204-fb54c488-70688053-1920w.webp" },
    { name: "Dr. Moisés Bichara", oab: "OAB/PR 113.984", role: "Sócio", image: "/socios e parceiros/Dr.-Mois-C3-A9s-Bichara---Site-7a73121a-d7e95d6f-11f38e54-1920w.webp" },
    { name: "Dra. Merabe Bichara", oab: "OAB/PR 102.254", role: "Sócia", image: "/socios e parceiros/Dra.-Merabe-Bichara--Site-b9feab4d-1920w.webp" },
  ];

  const associados = [
    { name: "Dra. Elizabeth", image: "/socios e parceiros/Dra.-Elizabeth-1920w.webp" },
    { name: "Dr. J. Sargentin", image: "/socios e parceiros/Dr.-J.-Sargentin-1920w.webp" },
    { name: "Dra. Daiane Bugni", image: "/socios e parceiros/Dra.+Daiane-1920w.webp" },
    { name: "Dr. João Marcos", image: "/socios e parceiros/Dr.+João+Marcos-1920w.webp" },
    { name: "Dr. Marcelo Morais", image: "/socios e parceiros/Dr.-Marcelo-Morais-ec9ccbc9-1920w.webp" },
    { name: "Dr. Marcos Rogério", image: "/socios e parceiros/Dr.-Marcos-Rog-C3-A9rio-0a99694f-1920w.webp" },
    { name: "Dra. J. Hort", image: "/socios e parceiros/Dra.+J.+Hort-9a63290b-1920w.webp" },
    { name: "Dra. Isabelly", image: "/socios e parceiros/Dra.-Isabelly-1920w.webp" },
    { name: "Dra. Jéssica", image: "/socios e parceiros/Dra.-J-C3-A9ssica-0a458e16-4e45df1a-1920w.webp" },
    { name: "Dra. Marina", image: "/socios e parceiros/Dra.-Marina-1920w.webp" },
  ];

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen -mt-[48px] md:-mt-[56px]">
      
      {/* Intro Section - Dark */}
      <section className="bg-dark pt-40 md:pt-48 pb-28 relative overflow-hidden flex items-center justify-center min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero_equipe.png" 
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
      <section className="pt-24 bg-light relative overflow-hidden team-grid">
        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-6xl mb-16">
          <div className="flex items-center gap-4 justify-center">
            <div className="w-12 h-[2px] bg-gold"></div>
            <h2 className="header-anim font-heading text-3xl font-bold text-dark uppercase tracking-[0.1em]">
              Quadro de Sócios
            </h2>
            <div className="w-12 h-[2px] bg-gold"></div>
          </div>
        </div>
          
        {/* Full-width Image Gallery */}
        <div className="w-full flex flex-wrap">
            {socios.map((socio, idx) => (
              <div key={idx} className="member-card w-full sm:w-1/2 lg:w-1/3 xl:w-1/5 group relative overflow-hidden aspect-[3/4] cursor-default bg-dark">
                  <Image 
                    src={socio.image} 
                    alt={socio.name} 
                    fill 
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 z-20">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <h4 className="font-heading font-bold text-light text-2xl mb-1">{socio.name}</h4>
                      <p className="text-gold font-bold tracking-widest text-xs uppercase mb-2">{socio.role}</p>
                      <p className="text-white/60 text-xs italic">{socio.oab}</p>
                    </div>
                  </div>
                  {/* Default State Overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300 z-10">
                     <h4 className="font-heading font-bold text-light text-xl drop-shadow-md">{socio.name}</h4>
                  </div>
              </div>
            ))}
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
                <div className="group relative overflow-hidden aspect-[3/4] cursor-default bg-dark w-full border border-white/10 shadow-lg">
                  <Image 
                    src={associado.image} 
                    alt={associado.name} 
                    fill 
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h4 className="font-heading font-bold text-light text-xl mb-1">{associado.name}</h4>
                      <div className="w-8 h-px bg-gold mb-2 transition-all duration-300 group-hover:w-12"></div>
                      <p className="text-gold font-bold tracking-widest text-[10px] uppercase">Advogado(a) Associado(a)</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
