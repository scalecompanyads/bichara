"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { Shield, Users, Activity, FileText, ArrowRight, CalendarDays } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);


export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero Animations
    const ctx = gsap.context(() => {
      // Hero Animations
      gsap.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
      
      gsap.from(".hero-button", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        ease: "back.out(1.7)",
      });

      // Scroll Animations
      gsap.from(".about-content", {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".service-card-wrapper", {
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });

      // Animate Counters
      const counters = document.querySelectorAll('.stat-counter');
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target') || '0', 10);
        gsap.to(counter, {
          innerHTML: target,
          duration: 2.5,
          snap: { innerHTML: 1 },
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 75%",
          }
        });
      });

      // Quote Reveal Animation
      gsap.to(".quote-word", {
        scrollTrigger: {
          trigger: ".quote-text-container",
          start: "top 80%",
          end: "bottom 50%",
          scrub: 1,
        },
        opacity: 1,
        stagger: 0.1,
        ease: "power1.inOut",
      });

      gsap.to(".quote-line", {
        scrollTrigger: {
          trigger: ".quote-text-container",
          start: "top 60%",
          end: "bottom 40%",
          scrub: 1,
        },
        scaleX: 1,
        transformOrigin: "left",
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  const quoteWords = "Acreditamos que a tradição familiar de 30 anos aliada à excelência jurídica, molda um caminho seguro para seus direitos previdenciários.".split(" ");

  const recentNews = [
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

    const services = [
      {
        title: "Aposentadorias",
        description: "Planejamento e solicitação de todos os tipos de aposentadorias do INSS.",
        icon: <Shield size={24} className="text-gold" />,
        image: "/service_aposentadoria.png"
      },
      {
        title: "Benefício da LOAS",
        description: "Assistência para idosos e pessoas com deficiência de baixa renda (BPC/LOAS).",
        icon: <Users size={24} className="text-gold" />,
        image: "/service_loas.png"
      },
      {
        title: "Auxílios por Incapacidade",
        description: "Apoio para benefícios temporários e permanentes por doença ou acidente.",
        icon: <Activity size={24} className="text-gold" />,
        image: "/service_incapacidade.png"
      },
      {
        title: "Revisões",
        description: "Análise detalhada para aumentar o valor do seu benefício atual.",
        icon: <FileText size={24} className="text-gold" />,
        image: "/service_revisao.png"
      },
    ];

  return (
    <>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-dark pt-20 -mt-[48px] md:-mt-[56px]"
      >
        {/* Video Background - Fix para mobile Safari autoplay */}
        <div 
          className="absolute inset-0 w-full h-full z-0 opacity-60 pointer-events-none"
          dangerouslySetInnerHTML={{
            __html: `
              <video 
                autoplay 
                loop 
                muted 
                playsinline 
                class="w-full h-full object-cover"
              >
                <source src="https://vid.cdn-website.com/bced4a9a/videos/Nh91zW7R0Wc1qpqhwkQo_0807+%281%29-v.mp4" type="video/mp4" />
              </video>
            `
          }}
        />
        
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-left w-full">
          <div className="max-w-4xl">
            <p className="hero-text text-gold font-bold tracking-[0.2em] uppercase text-xs mb-6">
              Tradição e Excelência
            </p>
            <h1 className="hero-text font-heading text-4xl md:text-6xl lg:text-7xl text-light leading-[1.1] mb-6">
              <span className="font-light">Bem-vindo à</span> <br className="hidden md:block" />
              <span className="font-bold relative inline-block">
                Advocacia Bichara
                <span className="absolute -bottom-3 left-0 w-full h-[2px] bg-gold opacity-70"></span>
              </span>
            </h1>
            <h2 className="hero-text text-xl md:text-2xl text-light/90 font-medium mb-8">
              Especialistas em Direito Previdenciário
            </h2>
            <p className="hero-text text-gray-text italic max-w-2xl mb-12">
              "E não nos cansemos de fazer o bem, porque a seu tempo ceifaremos. Gálatas 6:9"
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-6 mt-12">
              <a
                href="https://wa.me/554334724025"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-button group inline-flex items-center justify-center gap-3 bg-gold text-dark font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-none hover:bg-light transition-colors duration-500 w-full sm:w-auto"
              >
                Falar com Especialista
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link 
                href="#servicos"
                className="hero-button group inline-flex items-center justify-center gap-3 border border-light/30 text-light font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-none hover:border-gold hover:text-gold transition-colors duration-500 backdrop-blur-sm w-full sm:w-auto"
              >
                Nossos Serviços
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Section */}
      <section ref={aboutRef} className="py-24 bg-dark relative border-t border-gold/10 overflow-hidden">
        {/* Subtle Gradient Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-dark-muted/50 via-dark to-dark z-0"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Image Side */}
            <div className="about-content order-2 lg:order-1 relative group">
              <div className="relative overflow-hidden aspect-[4/3] shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-gold/20 p-2 md:p-3">
                <Image 
                  src="/Ambiente+4-1104w.webp" 
                  alt="Sede da Advocacia Bichara" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Decorative architectural lines */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-gold/40 z-20 transition-all duration-500 group-hover:border-gold group-hover:-translate-x-2 group-hover:translate-y-2"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-gold/40 z-20 transition-all duration-500 group-hover:border-gold group-hover:translate-x-2 group-hover:-translate-y-2"></div>
            </div>

            {/* Text Side */}
            <div className="about-content order-1 lg:order-2">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-gold"></div>
                <p className="text-gold font-bold tracking-[0.2em] uppercase text-xs">
                  A Estrutura
                </p>
              </div>
              
              <h2 className="font-heading text-4xl lg:text-5xl text-light mb-8 leading-tight">
                Nossa <span className="font-bold">Essência</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-text leading-relaxed">
                  Nossas raízes estão firmadas em Ivaiporã-PR, em uma <strong className="text-light font-medium">sede moderna e projetada para o seu conforto</strong>. A partir daqui, nosso alcance e cuidado se estendem por todo o território nacional.
                </p>
                <p className="text-lg text-gray-text leading-relaxed">
                  Acreditamos que a tradição familiar de mais de 30 anos, aliada a uma infraestrutura de ponta e inovação tecnológica, molda o caminho mais seguro e transparente para a conquista dos seus direitos.
                </p>
              </div>

              {/* Stats Highlights */}
              <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-8">
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-light mb-1">
                    +<span className="stat-counter" data-target="30">0</span>
                  </span>
                  <span className="text-xs text-gold uppercase tracking-[0.2em] font-bold mt-2">Anos de Tradição</span>
                </div>
                <div className="hidden sm:block w-px h-16 bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-5xl font-light text-light font-heading">
                    <span className="stat-counter" data-target="100">0</span>%
                  </span>
                  <span className="text-xs text-gold uppercase tracking-[0.2em] font-bold mt-2">Atendimento Nacional</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-black relative flex items-center overflow-hidden border-y border-white/5 min-h-[500px]">
        {/* Background Image on Right */}
        <div className="absolute inset-0 z-0 flex justify-end">
          <div className="relative w-full md:w-3/4 lg:w-1/2 h-full opacity-60 md:opacity-100">
            {/* Utilizando a imagem do martelo temporariamente. Substitua o src pela imagem da estátua se a tiver na pasta public */}
            <Image 
              src="/1689009111_gavel-do-juiz-que-decide-em-papeis-de-assinatura-do-divorcio-do-casamento-conceito-de-advogado-8acfe06f-1920w.webp" 
              alt="Justiça" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
            {/* Gradient to fade the image into the background */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:hidden"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 py-24 md:py-32">
          <div className="max-w-2xl relative pl-6 md:pl-12">
            {/* Quote marks */}
            <span className="font-heading text-gold text-5xl md:text-7xl leading-none absolute top-0 left-0 -translate-x-2 md:-translate-x-4">
              &ldquo;
            </span>
            
            <h2 className="quote-text-container font-heading text-2xl md:text-3xl lg:text-[2.5rem] font-normal text-light/90 leading-[1.4] mb-10">
              {"Acreditamos que a tradição familiar de 30 anos aliada à excelência jurídica, molda um caminho seguro para seus".split(" ").map((word, i) => (
                <span key={i} className="quote-word opacity-20">{word}{" "}</span>
              ))}
              <span className="quote-word opacity-20 font-bold text-gold">direitos{" "}</span>
              <span className="quote-word opacity-20 font-bold text-gold">previdenciários.</span>
            </h2>
            
            <div className="w-16 h-[2px] bg-gold quote-line scale-x-0"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-24 bg-light relative overflow-hidden">
        {/* Decorative Architecture Background */}
        <div className="absolute inset-0 opacity-[0.08] z-0 mix-blend-multiply pointer-events-none">
          <Image src="/bg_arquitetura.png" alt="Arquitetura Background" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <p className="text-gold font-bold tracking-widest uppercase text-sm mb-3">
                Áreas de Atuação
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark">
                Serviços em Destaque
              </h2>
            </div>
            <Link 
              href="/servicos"
              className="mt-8 md:mt-0 inline-flex items-center gap-2 text-dark font-bold hover:text-gold transition-colors group pb-2 border-b-2 border-transparent hover:border-gold"
            >
              Ver todos os serviços
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card-wrapper flex">
                <div 
                  className="service-card group relative bg-white border border-dark/10 flex flex-col hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 rounded-sm overflow-hidden w-full"
                >
                  {/* Image Section */}
                <div className="relative w-full aspect-square overflow-hidden bg-dark-muted">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/5 transition-colors duration-500"></div>
                  
                  {/* Icon floating */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-white flex items-center justify-center shadow-[-5px_-5px_20px_rgba(0,0,0,0.05)]">
                    {service.icon}
                  </div>
                </div>

                {/* Text Section */}
                <div className="p-8 flex flex-col flex-1 bg-white relative">
                  <div className="w-10 h-1 bg-gold mb-6 transition-all duration-300 group-hover:w-16"></div>
                  <h3 className="font-heading text-xl font-bold text-dark mb-4 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-dark/70 leading-relaxed text-sm mb-8">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between text-gold font-bold text-sm uppercase tracking-widest group-hover:text-dark transition-colors pt-6">
                    <span>Saber Mais</span>
                    <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders / History Section (Parallax Text Scroll) */}
      <TextParallaxContent
        imgUrl="/socios e parceiros/Site-922w.webp"
        subheading="Nossa História"
        heading="Mais de três décadas de excelência."
      >
        <section className="py-24 bg-dark-muted relative overflow-hidden">
          <div className="absolute top-0 left-12 w-px h-full bg-white/5 z-0 hidden lg:block"></div>
          <div className="absolute top-0 right-12 w-px h-full bg-white/5 z-0 hidden lg:block"></div>
  
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-gold"></div>
                <p className="text-gold font-bold tracking-widest uppercase text-xs">
                  Nossa Trajetória
                </p>
              </div>
              
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-light mb-8 leading-tight">
                Fundadores (1989)
              </h2>
  
              <div className="space-y-6 text-gray-text text-sm md:text-base leading-relaxed font-light">
                <p>
                  A <strong className="text-light font-medium">Advocacia Bichara</strong> iniciou suas atividades no ano de 1989, na cidade de Manoel Ribas - PR. Posteriormente, instalou-se em Laranjeiras do Sul - PR, e finalmente se alocou na cidade de Ivaiporã - PR, no ano de 1996, onde se encontra até hoje. 
                </p>
                <p>
                  A partir do ano de 2000 começou a atuar com maior ênfase no ramo do <strong className="text-light font-medium">Direito Previdenciário</strong>, dedicando-se em especial ao atendimento da população rural de todo o Vale do Ivaí.
                </p>
  
                <div className="pt-6 border-t border-dark relative mt-12">
                  <p className="text-xs text-light/60 uppercase tracking-widest mb-3">Atuação Nacional</p>
                  <p className="text-sm">
                    Atualmente proporcionamos atendimento a diversas cidades da região central do Paraná, como <span className="text-gold">Barbosa Ferraz, Borrazópolis, Cândido de Abreu, Faxinal, Grandes Rios, Iporã, Iretama, Jandaia do Sul, Manoel Ribas, Nova Tebas, Pitanga, São Pedro e São João do Ivaí</span>.
                    <br/><br/>
                    Expandimos nossa atuação para o Mato Grosso (Mirassol d' Oeste) e Minas Gerais (Belo Horizonte).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </TextParallaxContent>

      {/* Team / Professionals Section */}
      <section className="py-24 bg-light relative">
        <div className="container mx-auto px-4 md:px-8 mb-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-3xl text-left">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-gold"></div>
                <p className="text-gold font-bold tracking-widest uppercase text-xs">
                  Nossa Equipe
                </p>
              </div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Conheça nossos <span className="text-gold">profissionais.</span>
              </h2>
              <p className="text-dark/70 text-lg font-light">
                Pessoas dedicadas e altamente qualificadas formam o coração da Advocacia Bichara.
              </p>
            </div>
            
            <Link 
              href="/equipe"
              className="mb-2 md:mb-6 inline-flex items-center gap-2 text-dark font-bold hover:text-gold transition-colors group pb-2 border-b-2 border-transparent hover:border-gold whitespace-nowrap"
            >
              Ver todos os profissionais
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Full-width Image Gallery */}
        <div className="w-full flex flex-wrap">
          {/* Dr. Paulo Bichara */}
          <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/5 group relative overflow-hidden aspect-[3/4] cursor-default bg-dark">
            <Image 
              src="/socios%20e%20parceiros/Site+(2)-1920w.webp" 
              alt="Dr. Paulo Bichara" 
              fill 
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="font-heading font-bold text-light text-2xl mb-1">Dr. Paulo Bichara</h4>
                <p className="text-gold font-bold tracking-widest text-xs uppercase">OAB/PR 85.283</p>
              </div>
            </div>
          </div>

          {/* Dra. Monica Bichara */}
          <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/5 group relative overflow-hidden aspect-[3/4] cursor-default bg-dark">
            <Image 
              src="/socios%20e%20parceiros/Dra-M-C3-B4nica-Bichara-1920w.webp" 
              alt="Dra. Monica Bichara" 
              fill 
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="font-heading font-bold text-light text-2xl mb-1">Dra. Monica Bichara</h4>
                <p className="text-gold font-bold tracking-widest text-xs uppercase">OAB/PR 16.131</p>
              </div>
            </div>
          </div>

          {/* Dr. Andre Bichara */}
          <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/5 group relative overflow-hidden aspect-[3/4] cursor-default bg-dark">
            <Image 
              src="/socios%20e%20parceiros/Dr.-Andr-C3-A9-Bichara---Site-dba8ddd1-a47e2204-fb54c488-70688053-1920w.webp" 
              alt="Dr. Andre Bichara" 
              fill 
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="font-heading font-bold text-light text-2xl mb-1">Dr. Andre Bichara</h4>
                <p className="text-gold font-bold tracking-widest text-xs uppercase">OAB/PR 69.751</p>
              </div>
            </div>
          </div>

          {/* Dr. Moisés Bichara */}
          <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/5 group relative overflow-hidden aspect-[3/4] cursor-default bg-dark">
            <Image 
              src="/socios%20e%20parceiros/Dr.-Mois-C3-A9s-Bichara---Site-7a73121a-d7e95d6f-11f38e54-1920w.webp" 
              alt="Dr. Moisés Bichara" 
              fill 
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="font-heading font-bold text-light text-2xl mb-1">Dr. Moisés Bichara</h4>
                <p className="text-gold font-bold tracking-widest text-xs uppercase">OAB/PR 113.984</p>
              </div>
            </div>
          </div>

          {/* Dra. Merabe Bichara */}
          <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/5 group relative overflow-hidden aspect-[3/4] cursor-default bg-dark">
            <Image 
              src="/socios%20e%20parceiros/Dra.-Merabe-Bichara--Site-b9feab4d-1920w.webp" 
              alt="Dra. Merabe Bichara" 
              fill 
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="font-heading font-bold text-light text-2xl mb-1">Dra. Merabe Bichara</h4>
                <p className="text-gold font-bold tracking-widest text-xs uppercase">OAB/PR 102.254</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Partners Section (Redesigned) */}
      <section className="bg-black relative flex items-center overflow-hidden border-y border-white/5 min-h-[450px]">
        {/* Background Image on Right */}
        <div className="absolute inset-0 z-0 flex justify-end">
          <div className="relative w-full md:w-2/3 lg:w-1/2 h-full opacity-50 md:opacity-80">
            <Image 
              src="/homens-apertando-as-maos-em-um-acordo-comercial-bem-sucedido-gerado-pela-ia-825w.webp" 
              alt="Parceria e Colaboração" 
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover object-center"
            />
            {/* Dark Overlay for contrast (Fade to Black) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:hidden"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 py-16 md:py-24">
          <div className="max-w-2xl relative pl-6 md:pl-12">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-gold"></div>
              <p className="text-gold font-bold tracking-widest uppercase text-xs">
                Serviço ao Parceiro
              </p>
            </div>
            
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-light mb-6 leading-tight">
              Crescendo juntos através da <br className="hidden md:block"/><span className="text-gold">colaboração.</span>
            </h2>

            <div className="space-y-4 text-light/80 text-base leading-relaxed font-light mb-8">
              <p>
                Na <strong className="text-light font-medium">Advocacia Bichara</strong>, entendemos que a colaboração e a parceria são fundamentais para alcançar a excelência em nossa prática jurídica. 
              </p>
              <p>
                É por isso que estamos orgulhosos de oferecer serviços de parceria a advogados previdenciários e outros profissionais do direito que buscam unir forças para entregar resultados incomparáveis.
              </p>
            </div>
            
            <Link href="#contato" className="group inline-flex items-center justify-center border border-gold text-gold font-bold px-8 py-3 uppercase tracking-[0.2em] text-xs hover:bg-gold hover:text-dark transition-colors duration-500">
              Seja um Parceiro
              <ArrowRight size={16} className="ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Recent News Section */}
      <section className="py-24 bg-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] z-0 mix-blend-multiply pointer-events-none">
          <Image src="/bg_arquitetura.png" alt="Arquitetura Background" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <p className="text-gold font-bold tracking-widest uppercase text-sm mb-3">
                Atualizações e Decisões
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark">
                Notícias Recentes
              </h2>
            </div>
            <Link 
              href="/noticias"
              className="mt-8 md:mt-0 inline-flex items-center gap-2 text-dark font-bold hover:text-gold transition-colors group pb-2 border-b-2 border-transparent hover:border-gold"
            >
              Ver todas as notícias
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentNews.map((item, idx) => (
              <article key={idx} className="bg-white border border-dark/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full rounded-none relative">
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-dark">
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-dark/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

                <div className="p-8 flex-grow flex flex-col relative z-10">
                  <div className="flex items-center gap-2 text-gold text-xs font-bold tracking-widest uppercase mb-4">
                    <CalendarDays size={16} />
                    <span>{item.date}</span>
                  </div>
                  <h2 className="font-heading text-xl font-bold text-dark mb-4 group-hover:text-gold transition-colors line-clamp-2">
                    {item.title}
                  </h2>
                  <p className="text-dark/70 text-sm leading-relaxed mb-8 font-light line-clamp-3">
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
        </div>
      </section>
    </>
  );
}

const IMG_PADDING = 0;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }: { imgUrl: string, subheading: string, heading: string, children: React.ReactNode }) => {
  return (
    <div>
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
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
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }: { subheading: string, heading: string }) => {
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
      <p className="font-heading text-4xl md:text-6xl font-bold leading-tight max-w-3xl drop-shadow-2xl">{heading}</p>
    </motion.div>
  );
};
