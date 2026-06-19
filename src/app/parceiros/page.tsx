"use client";

import { Handshake, ArrowRight } from "lucide-react";

export default function Parceiros() {
  return (
    <div className="bg-dark min-h-screen pt-16 flex items-center justify-center">
      <div className="container mx-auto px-4 py-16 max-w-3xl text-center">
        <div className="w-20 h-20 bg-dark-muted rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-gold/30">
          <Handshake size={40} className="text-gold" />
        </div>
        
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-light mb-6">
          Seja um <span className="text-gold-gradient">Parceiro</span>
        </h1>
        <div className="w-24 h-1 bg-gold mx-auto mb-8 rounded-full"></div>
        
        <p className="text-lg md:text-xl text-gray-text leading-relaxed mb-12">
          Na Advocacia Bichara, entendemos que a colaboração e a parceria são fundamentais. Oferecemos serviços de parceria (B2B) a advogados previdenciaristas e outros profissionais do direito para somar forças e alcançar os melhores resultados para nossos clientes.
        </p>

        <a
          href="https://wa.me/554334724025?text=Olá, gostaria de saber mais sobre as parcerias B2B com a Advocacia Bichara."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gold-gradient font-bold text-lg px-10 py-4 rounded hover:scale-105 transition-all duration-300"
        >
          Seja um Parceiro
          <ArrowRight size={20} />
        </a>
      </div>
    </div>
  );
}
