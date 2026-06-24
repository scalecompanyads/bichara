import { ArrowRight } from "lucide-react";
import Image from "next/image";


export const metadata = {
  title: "Trabalhe Conosco | Vagas para Advogados",
  description: "Faça parte de um dos escritórios de Direito Previdenciário mais tradicionais do Brasil. Envie seu currículo e venha crescer com a Advocacia Bichara.",
};

export default function TrabalheConosco() {
  return (
    <div className="flex flex-col min-h-screen -mt-[48px] md:-mt-[56px]">
      <section className="bg-dark relative flex-grow flex items-center justify-center overflow-hidden pt-32 pb-20 md:pt-0 md:pb-0 min-h-screen">
        
        {/* Architectural Background */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero_trabalhe.png" 
            alt="Escritório Advocacia Bichara" 
            fill
            quality={100}
            className="object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/50"></div>
        </div>

        {/* Decorative Grid Lines */}
        <div className="absolute top-0 left-12 w-px h-full bg-white/10 z-0 hidden lg:block"></div>
        <div className="absolute top-0 right-12 w-px h-full bg-white/10 z-0 hidden lg:block"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl text-center">
          <div className="inline-flex items-center gap-4 mb-8 justify-center w-full">
            <div className="w-8 h-[2px] bg-gold"></div>
            <p className="text-gold font-bold tracking-[0.2em] uppercase text-xs">
              Faça parte do time
            </p>
            <div className="w-8 h-[2px] bg-gold"></div>
          </div>
          
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-light mb-8 leading-tight">
            Trabalhe <span className="font-bold text-gold">Conosco.</span>
          </h1>

          <div className="w-12 h-[2px] bg-gold mx-auto mb-8"></div>

          <p className="text-lg md:text-xl text-light/80 leading-relaxed font-light mb-12 max-w-2xl mx-auto">
            Integre uma equipe com mais de 55 colaboradores dedicados à excelência e à justiça. Na <strong className="text-light font-medium">Advocacia Bichara</strong>, valorizamos talentos que desejam fazer a diferença no Direito.
          </p>
          
          <a
            href="https://archi-rh.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center bg-gold text-dark font-bold px-10 py-5 uppercase tracking-[0.2em] text-sm hover:bg-light transition-colors duration-500 shadow-xl"
          >
            Ver Vagas Abertas
            <ArrowRight size={20} className="ml-4 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}
