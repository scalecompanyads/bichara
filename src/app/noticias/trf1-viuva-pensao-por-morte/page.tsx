"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays } from "lucide-react";


export default function Noticia() {
  return (
    <div className="bg-light min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        
        <Link href="/noticias" className="inline-flex items-center gap-2 text-dark font-bold hover:text-gold transition-colors mb-10 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Voltar para Notícias
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-sm mb-6">
            <CalendarDays size={18} />
            <span>18 de junho de 2026</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight mb-8">
            TRF1: Viúva que comprovou o trabalho rural do marido falecido tem direito à Pensão por Morte
          </h1>
        </header>

        <div className="relative w-full aspect-[16/9] mb-12">
          <Image 
            src="/1689009111_gavel-do-juiz-que-decide-em-papeis-de-assinatura-do-divorcio-do-casamento-conceito-de-advogado-8acfe06f-1920w.webp"
            alt="Gavel do Juiz - Conceito de Advogado"
            fill
            quality={100}
            className="object-cover rounded-none border border-gold/20"
          />
          {/* Architectural corners */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold"></div>
        </div>

        <article className="prose prose-lg prose-p:text-black prose-p:font-normal prose-strong:text-black max-w-none">
          <p>
            A Câmara Regional Previdenciária da Bahia (CRP/BA), do Tribunal Regional Federal da 1ª Região (TRF1), determinou que uma viúva que comprovou o trabalho rural do marido falecido tem direito à Pensão por Morte.
          </p>

          <p>
            De acordo com os dados do caso, a requerente não realizou o requerimento administrativo antes do ajuizamento da ação. No entanto, o Instituto Nacional do Seguro Social (INSS) apresentou uma a contestação, a qual mencionava o mérito da questão. Sendo assim, o fato já configura a pretensão da viúva em receber o benefício. Tal entendimento foi disposto pelo Supremo Tribunal Federal (STF).
          </p>

          <h3 className="text-2xl font-heading font-bold text-dark mt-10 mb-6">A Decisão do TRF1:</h3>

          <p>
            Tendo como base a pretensão da requerente, o TRF1 compreende que a pensão por morte é paga aos dependentes do segurado falecido. O pagamento ocorre sempre a contar da data do óbito ou do requerimento administrativo. Dessa forma, os requisitos de concessão levam em conta a legislação vigente no momento do falecimento do beneficiário.
          </p>

          <p>
            Sendo assim, conforme analisado pelo Tribunal, a viúva comprovou a qualidade de segurado especial do marido. A prova se deu por meio material e testemunhal. Além disso, no período do falecimento, a requerente e o marido residiam na mesma residência.
          </p>

          <p>
            Dessa forma, com todos os requisitos comprovados, o TRF1 garantiu a concessão da pensão por morte à viúva do trabalhador rural.
          </p>

          <div className="mt-12 pt-8 border-t border-gold/30">
            <p className="text-sm font-bold text-dark/60 uppercase tracking-widest">
              Fonte: TRF1
            </p>
          </div>
        </article>

      </div>
    </div>
  );
}
