"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { UserCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Equipe() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-up", {
        scrollTrigger: {
          trigger: ".fade-up",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".member-card", {
        scrollTrigger: {
          trigger: ".team-grid",
          start: "top 75%",
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.5)",
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
    <div ref={containerRef} className="bg-dark min-h-screen pt-16">
      <div className="container mx-auto px-4 md:px-8 py-16 max-w-6xl">
        <div className="text-center mb-20 fade-up">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-light mb-6">
            Nossa <span className="text-gold-gradient">Equipe</span>
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-text max-w-3xl mx-auto leading-relaxed">
            Pessoas dedicadas e altamente qualificadas formam o coração da Advocacia Bichara. 
            Nossos profissionais estão preparados para defender os seus direitos com excelência.
          </p>
        </div>

        <div className="team-grid">
          <h2 className="fade-up font-heading text-3xl font-bold text-light mb-10 text-center border-b border-gold/20 pb-4 inline-block mx-auto w-full max-w-sm">
            Quadro de Sócios
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {socios.map((socio, idx) => (
              <div key={idx} className="member-card bg-dark-muted p-8 rounded-xl border border-gold/10 hover:border-gold/50 transition-all duration-300 text-center group">
                <div className="w-24 h-24 mx-auto bg-dark rounded-full flex items-center justify-center border-2 border-gold/30 group-hover:border-gold mb-6 transition-colors">
                  <UserCircle size={48} className="text-gold/50 group-hover:text-gold transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-bold text-light mb-2">{socio.name}</h3>
                <p className="text-gold-gradient font-medium mb-1">{socio.role}</p>
                <p className="text-gray-text text-xs">{socio.oab}</p>
              </div>
            ))}
          </div>

          <h2 className="fade-up font-heading text-3xl font-bold text-light mb-10 text-center border-b border-gold/20 pb-4 inline-block mx-auto w-full max-w-sm">
            Advogados Associados
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {associados.map((associado, idx) => (
              <div key={idx} className="member-card bg-dark-muted p-6 rounded-lg border border-gold/10 hover:border-gold/50 transition-colors text-center flex flex-col items-center justify-center">
                <UserCircle size={32} className="text-gold/50 mb-4" />
                <h3 className="font-heading text-lg font-bold text-light">{associado.name}</h3>
                <p className="text-gray-text text-xs mt-1">Advogado(a) Associado(a)</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
