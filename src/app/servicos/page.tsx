"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scale, Users, HeartPulse, FileCheck, ArrowRight, Home, Briefcase } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);


export default function Servicos() {
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

      gsap.from(".service-card-anim", {
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const previdenciario = [
    { 
      title: "Aposentadorias", 
      icon: <Scale className="text-gold" size={24} />,
      image: "/service_aposentadoria.png",
      description: "Planejamento e solicitação de todos os tipos de aposentadorias do INSS."
    },
    { 
      title: "Benefício da LOAS", 
      icon: <Users className="text-gold" size={24} />,
      image: "/service_loas.png",
      description: "Assistência para idosos e pessoas com deficiência de baixa renda (BPC/LOAS)."
    },
    { 
      title: "Auxílios por Incapacidade", 
      icon: <HeartPulse className="text-gold" size={24} />,
      image: "/service_incapacidade.png",
      description: "Apoio para benefícios temporários e permanentes por doença ou acidente."
    },
    { 
      title: "Salário Maternidade", 
      icon: <Users className="text-gold" size={24} />,
      image: "/service_maternidade.png",
      description: "Auxílio financeiro para mães trabalhadoras durante a licença-maternidade."
    },
    { 
      title: "Revisões", 
      icon: <FileCheck className="text-gold" size={24} />,
      image: "/service_revisao.png",
      description: "Análise detalhada para aumentar o valor do seu benefício atual."
    },
  ];

  const outrasAreas = [
    { 
      title: "Direito do Trabalho", 
      icon: <Briefcase className="text-gold" size={24} />,
      image: "/homens-apertando-as-maos-em-um-acordo-comercial-bem-sucedido-gerado-pela-ia-825w.webp",
      description: "Defesa dos direitos trabalhistas, rescisões, horas extras e acidentes de trabalho."
    },
    { 
      title: "Direito Civil", 
      icon: <Home className="text-gold" size={24} />,
      image: "/1689009111_gavel-do-juiz-que-decide-em-papeis-de-assinatura-do-divorcio-do-casamento-conceito-de-advogado-8acfe06f-1920w.webp",
      description: "Apoio em processos de Usucapião, Inventário e contratos cíveis em geral."
    },
  ];

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen -mt-[48px] md:-mt-[56px]">
      {/* Intro Section - Dark */}
      <section className="bg-dark pt-40 md:pt-48 pb-28 relative overflow-hidden flex items-center justify-center min-h-[40vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero_servicos.png" 
            alt="Escritório Advocacia Bichara" 
            fill
            quality={100}
            className="object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-dark/80 bg-gradient-to-t from-dark to-transparent"></div>
        </div>

        {/* Subtle Decorative Elements */}
        <div className="absolute top-0 left-12 w-px h-full bg-white/10 z-0 hidden lg:block"></div>
        <div className="absolute top-0 right-12 w-px h-full bg-white/10 z-0 hidden lg:block"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl text-center">
          <p className="header-anim text-gold font-bold tracking-[0.2em] uppercase text-xs mb-6">
            Nossas Especialidades
          </p>
          <h1 className="header-anim font-heading text-4xl md:text-5xl lg:text-6xl text-light mb-8 leading-tight">
            Nossos <span className="font-bold text-gold">Serviços</span>
          </h1>
          <div className="header-anim w-12 h-[2px] bg-gold mx-auto mb-8"></div>
          <p className="header-anim text-lg md:text-xl text-light/80 leading-relaxed font-light">
            Na Advocacia Bichara, somos dedicados à excelência. Garantimos que cada cliente se sinta informado, valorizado e confiante. Atuamos em todo o território nacional, tanto na via administrativa quanto judicial.
          </p>
        </div>
      </section>

      {/* Services Grid Section - Light with Architectural Background */}
      <section className="py-24 bg-light relative overflow-hidden flex-grow">
        {/* Decorative Architecture Background */}
        <div className="absolute inset-0 opacity-[0.08] z-0 mix-blend-multiply pointer-events-none">
          <Image src="/bg_arquitetura.png" alt="Arquitetura Background" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 services-grid">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-[2px] bg-gold"></div>
            <h2 className="header-anim font-heading text-2xl font-bold text-dark uppercase tracking-[0.1em]">
              Direito Previdenciário
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {previdenciario.map((item, i) => (
              <div key={i} className="service-card-anim">
                <div className="group relative bg-white border border-dark/10 flex flex-col hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 rounded-sm overflow-hidden w-full h-full">
                  <div className="relative w-full aspect-square overflow-hidden bg-dark-muted">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/5 transition-colors duration-500"></div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 bg-white flex items-center justify-center shadow-[-5px_-5px_20px_rgba(0,0,0,0.05)]">
                      {item.icon}
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-1 bg-white relative">
                    <div className="w-10 h-1 bg-gold mb-6 transition-all duration-300 group-hover:w-16"></div>
                    <h3 className="font-heading text-xl font-bold text-dark mb-4 group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-dark/70 leading-relaxed text-sm mb-8">
                      {item.description}
                    </p>
                    
                    <div className="mt-auto flex items-center justify-between text-gold font-bold text-sm uppercase tracking-[0.2em] group-hover:text-dark transition-colors pt-6">
                      <span>Saber Mais</span>
                      <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-[2px] bg-gold"></div>
            <h2 className="header-anim font-heading text-2xl font-bold text-dark uppercase tracking-[0.1em]">
              Outras Áreas
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {outrasAreas.map((item, i) => (
              <div key={i} className="service-card-anim">
                <div className="group relative bg-white border border-dark/10 flex flex-col hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 rounded-sm overflow-hidden w-full h-full">
                  <div className="relative w-full aspect-square overflow-hidden bg-dark-muted">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/5 transition-colors duration-500"></div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 bg-white flex items-center justify-center shadow-[-5px_-5px_20px_rgba(0,0,0,0.05)]">
                      {item.icon}
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-1 bg-white relative">
                    <div className="w-10 h-1 bg-gold mb-6 transition-all duration-300 group-hover:w-16"></div>
                    <h3 className="font-heading text-xl font-bold text-dark mb-4 group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-dark/70 leading-relaxed text-sm mb-8">
                      {item.description}
                    </p>
                    
                    <div className="mt-auto flex items-center justify-between text-gold font-bold text-sm uppercase tracking-[0.2em] group-hover:text-dark transition-colors pt-6">
                      <span>Saber Mais</span>
                      <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="header-anim text-center mt-32 max-w-2xl mx-auto border-t border-dark/10 pt-16">
            <h3 className="font-heading text-3xl font-bold text-dark mb-4">
              Precisa de ajuda com o seu caso?
            </h3>
            <p className="text-dark/70 font-light mb-12 text-lg">
              Nossa equipe de especialistas está pronta para analisar sua situação e buscar os melhores resultados.
            </p>
            <a
              href="https://wa.me/554334724025"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-gold text-dark font-bold text-sm tracking-[0.2em] uppercase px-10 py-5 rounded-none hover:bg-dark hover:text-gold transition-all duration-500"
            >
              Falar com Especialista
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
