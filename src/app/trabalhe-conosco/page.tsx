import { Briefcase, ArrowRight } from "lucide-react";

export default function TrabalheConosco() {
  return (
    <div className="bg-dark min-h-screen pt-16 flex items-center justify-center">
      <div className="container mx-auto px-4 py-16 max-w-3xl text-center">
        <div className="w-20 h-20 bg-dark-muted rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-gold/30">
          <Briefcase size={40} className="text-gold" />
        </div>
        
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-light mb-6">
          Trabalhe <span className="text-gold-gradient">Conosco</span>
        </h1>
        <div className="w-24 h-1 bg-gold mx-auto mb-8 rounded-full"></div>
        
        <p className="text-lg md:text-xl text-gray-text leading-relaxed mb-12">
          Venha fazer parte do nosso time! Integre uma equipe com mais de 55 colaboradores dedicados à excelência e à justiça. Na Advocacia Bichara, valorizamos talentos que desejam fazer a diferença.
        </p>

        <a
          href="https://archi-rh.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gold-gradient font-bold text-lg px-10 py-4 rounded hover:scale-105 transition-all duration-300"
        >
          Veja nossas vagas
          <ArrowRight size={20} />
        </a>
      </div>
    </div>
  );
}
