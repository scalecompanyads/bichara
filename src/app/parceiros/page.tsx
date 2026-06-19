import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Parceiros() {
  return (
    <div className="flex flex-col min-h-screen -mt-[48px] md:-mt-[56px] bg-black">
      <section className="relative flex-grow flex items-center overflow-hidden pt-32 pb-20 md:pt-0 md:pb-0">
        
        {/* Background Image on Right */}
        <div className="absolute inset-0 z-0 flex justify-end">
          <div className="relative w-full md:w-2/3 lg:w-1/2 h-full opacity-50 md:opacity-80">
            <Image 
              src="/homens-apertando-as-maos-em-um-acordo-comercial-bem-sucedido-gerado-pela-ia-825w.webp" 
              alt="Parceria e Colaboração" 
              fill
              quality={100}
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
                B2B & Colaboração
              </p>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-light mb-8 leading-tight">
              Seja um <br className="hidden md:block"/><span className="text-gold">Parceiro.</span>
            </h1>

            <div className="space-y-6 text-light/80 text-lg md:text-xl leading-relaxed font-light mb-12">
              <p>
                Na <strong className="text-light font-medium">Advocacia Bichara</strong>, entendemos que a colaboração é o pilar fundamental para alcançar a excelência.
              </p>
              <p>
                Oferecemos serviços de parceria exclusivos a advogados previdenciaristas e outros profissionais do direito. Ao somarmos forças, garantimos a entrega dos melhores e mais ágeis resultados para os seus clientes.
              </p>
            </div>
            
            <a
              href="https://wa.me/554334724025?text=Olá, gostaria de saber mais sobre as parcerias B2B com a Advocacia Bichara."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center border border-gold text-gold font-bold px-10 py-5 uppercase tracking-[0.2em] text-sm hover:bg-gold hover:text-dark transition-colors duration-500"
            >
              Falar sobre Parceria
              <ArrowRight size={20} className="ml-4 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
