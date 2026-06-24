"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Zap, Heart, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

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
      
      {/* Intro Section - Parallax */}
      <TextParallaxContent
        imgUrl="/Ambiente+4-1104w.webp"
        subheading="Mais de 30 anos de atuação"
        heading="Nossa História"
        description="Uma jornada marcada pela dedicação, excelência jurídica e compromisso inabalável com os direitos de quem mais precisa."
      >

      {/* History Content Section */}
      <section className="py-24 md:py-32 bg-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] z-0 mix-blend-multiply pointer-events-none">
          <Image src="/bg_arquitetura.png" alt="Arquitetura Background" fill sizes="100vw" className="object-cover" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Sticky Image Column */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0 order-2 lg:order-1">
              <div className="lg:sticky lg:top-32 lg:pb-12">
                <div className="bg-dark border border-gold/20 p-3 md:p-5 relative overflow-hidden group">
                  <Image 
                    src="/socios%20e%20parceiros/Site-922w.webp" 
                    alt="Fundadores" 
                    width={922}
                    height={800}
                    className="w-full h-auto transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold"></div>
                </div>
                
                <div className="mt-8 pl-6 border-l-2 border-gold/40">
                  <p className="text-dark/60 font-light italic text-lg leading-relaxed mb-6">
                    "E não nos cansemos de fazer o bem, porque a seu tempo ceifaremos."
                  </p>
                  <p className="text-gold font-bold text-xs tracking-[0.2em] uppercase">Advocacia Bichara</p>
                </div>
              </div>
            </div>

            {/* Reading Content Column */}
            <div className="lg:col-span-7 lg:pl-8 order-1 lg:order-2">
              <div className="inline-flex items-center gap-4 mb-10">
                <div className="w-16 h-px bg-gold"></div>
                <p className="text-gold font-bold tracking-widest uppercase text-xs">
                  O Início de um Legado
                </p>
              </div>
              
              <h2 className="fade-up font-heading text-4xl md:text-5xl font-bold text-dark mb-12 leading-tight">
                Mais de três décadas <br className="hidden md:block" /> de <span className="text-gold">dedicação exclusiva.</span>
              </h2>

              <div className="fade-up space-y-8 text-dark/80 text-lg leading-relaxed font-light mb-20">
                <p>
                  A trajetória da <strong className="text-dark font-medium">Advocacia Bichara</strong> teve seu marco inicial no ano de 1989, na cidade de Manoel Ribas, no Paraná. Foi lá que os sócios Mônica Maria Pereira Bichara e Paulo Guimarães Bichara (in memorian) plantaram a primeira semente de um legado de excelência no direito.
                </p>
                <p>
                  Posteriormente, o escritório instalou-se em Laranjeiras do Sul (PR) e, buscando estruturar um atendimento de ainda mais excelência aos clientes da região, alocou-se definitivamente na cidade de Ivaiporã (PR) em 1996, onde sua sede moderna se encontra até hoje.
                </p>
                <p>
                  Foi a partir do ano 2000 que a nossa vocação mais forte se revelou. Passamos a atuar com maior ênfase no ramo do <strong className="text-dark font-medium">Direito Previdenciário</strong>, dedicando-nos em especial ao amparo e atendimento da população rural de todo o Vale do Ivaí, um trabalho que transformou inúmeras vidas e garantiu a dignidade de trabalhadores rurais.
                </p>
              </div>

              {/* Expansion and Values Section */}
              <div className="fade-up pt-12 border-t border-dark/10">
                <div className="inline-flex items-center gap-4 mb-8">
                  <div className="w-8 h-px bg-gold"></div>
                  <h3 className="font-heading text-2xl font-bold text-dark">
                    Crescimento & Essência
                  </h3>
                </div>

                <div className="space-y-6 text-dark/80 text-lg leading-relaxed font-light mb-16">
                  <p>
                    Hoje, com uma equipe de mais de <strong className="text-dark font-medium">55 colaboradores altamente especializados</strong>, levamos nosso cuidado muito além das nossas raízes paranaenses. Atuamos em estados como Mato Grosso e Minas Gerais, mantendo intactos os pilares que nos trouxeram até aqui.
                  </p>
                  <p>
                    Acreditamos em uma advocacia moldada pela <strong className="text-gold font-medium">transparência</strong>, onde o cliente tem clareza de cada etapa. Pela <strong className="text-gold font-medium">agilidade</strong>, respondendo rápido sem abrir mão da técnica. E pelo <strong className="text-gold font-medium">atendimento acolhedor</strong>, porque por trás de cada processo existe uma história que merece empatia.
                  </p>
                </div>
                
                <Link href="/servicos" className="group inline-flex items-center gap-3 text-dark font-bold text-sm tracking-widest uppercase pb-2 border-b-2 border-transparent hover:border-gold hover:text-gold transition-colors duration-500">
                  Conheça Nossos Serviços
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>
      </TextParallaxContent>
    </div>
  );
}

const TextParallaxContent = ({ imgUrl, subheading, heading, description, children }: { imgUrl: string, subheading: string, heading: string, description?: string, children: React.ReactNode }) => {
  return (
    <div>
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} description={description} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url('${imgUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        height: `100vh`,
        scale,
        willChange: "transform",
        transformStyle: "preserve-3d"
      }}
      ref={targetRef}
      className="sticky top-0 z-0 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-black/60"
        style={{ opacity }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading, description }: { subheading: string, heading: string, description?: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
        willChange: "transform, opacity"
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white px-4 text-center pointer-events-none"
    >
      <p className="mb-4 text-gold font-bold text-xs md:text-sm tracking-[0.2em] uppercase">
        {subheading}
      </p>
      <p className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl drop-shadow-2xl mb-6">{heading}</p>
      {description && (
        <p className="text-lg md:text-xl text-light/80 leading-relaxed font-light max-w-2xl mx-auto drop-shadow-md">
          {description}
        </p>
      )}
    </motion.div>
  );
};
