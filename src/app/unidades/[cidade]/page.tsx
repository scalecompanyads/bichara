import { filiais, slugify } from "@/data/filiais";
import { notFound } from "next/navigation";
import { MapPin, Phone, MessageCircle, ArrowRight, ShieldCheck, HeartHandshake } from "lucide-react";
import { Metadata } from "next";

type Props = {
  params: Promise<{ cidade: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { cidade } = await params;
  const filial = filiais.find(f => slugify(f.cidade) === cidade);

  if (!filial) {
    return { title: "Unidade não encontrada" };
  }

  return {
    title: `Advogado Previdenciário em ${filial.cidade}, ${filial.uf} | Especialistas INSS`,
    description: `Precisa de advogado do INSS em ${filial.cidade}? A Advocacia Bichara é especialista em aposentadorias e benefícios. Agende seu atendimento presencial!`,
  };
}

export function generateStaticParams() {
  return filiais.map((filial) => ({
    cidade: slugify(filial.cidade),
  }));
}

export default async function UnidadePage({ params }: Props) {
  const { cidade } = await params;
  const filial = filiais.find(f => slugify(f.cidade) === cidade);

  if (!filial) {
    notFound();
  }

  return (
    <div className="bg-dark min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-dark-muted py-20 border-b border-gold/10">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 bg-dark border border-gold/30 px-4 py-2 rounded-full text-gold text-sm font-bold mb-6">
            <MapPin size={16} />
            Atendimento Presencial
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-light mb-6 leading-tight">
            Advogado Previdenciário em <br />
            <span className="text-gold-gradient">{filial.cidade} - {filial.uf}</span> | Advocacia Bichara
          </h1>
          <p className="text-lg md:text-xl text-gray-text max-w-3xl mx-auto leading-relaxed">
            Procurando por especialista em aposentadorias e benefícios do INSS em {filial.cidade}? 
            A Advocacia Bichara está pronta para atender você na <strong>{filial.address}</strong>.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left: Benefícios & CTA */}
            <div className="flex flex-col justify-center">
              <h2 className="font-heading text-3xl font-bold text-light mb-8">
                Por que escolher a Advocacia Bichara em {filial.cidade}?
              </h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-dark-muted rounded-full flex items-center justify-center border border-gold/30 shrink-0">
                    <HeartHandshake className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-light font-bold text-lg mb-1">Atendimento Humanizado Local</h3>
                    <p className="text-gray-text">O cliente de {filial.cidade} conta com atendimento presencial, acolhedor e focado na sua história de vida.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-dark-muted rounded-full flex items-center justify-center border border-gold/30 shrink-0">
                    <ShieldCheck className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-light font-bold text-lg mb-1">30 Anos de Tradição</h3>
                    <p className="text-gray-text">Nossa experiência nos permite encontrar o melhor caminho para o seu benefício no INSS.</p>
                  </div>
                </div>
              </div>

              <a
                href={`https://wa.me/554334724025?text=Olá, gostaria de agendar um atendimento na unidade de ${filial.cidade}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gold-gradient font-bold text-lg px-8 py-4 rounded hover:opacity-90 transition-all duration-300 shadow-lg shadow-gold/10 text-dark"
              >
                <MessageCircle size={24} />
                Agende seu atendimento na unidade de {filial.cidade}
              </a>
            </div>

            {/* Right: Mapa */}
            <div className="bg-dark-muted p-6 rounded-xl border border-gold/10">
              <h3 className="font-heading text-xl font-bold text-light mb-4 flex items-center gap-2">
                <MapPin className="text-gold" />
                Nossa Localização
              </h3>
              <p className="text-gray-text mb-6">
                {filial.address} - {filial.cidade}, {filial.uf}
              </p>
              
              <div className="w-full h-80 bg-dark rounded-lg overflow-hidden relative">
                {filial.mapUrl ? (
                  <iframe 
                    src={filial.mapUrl}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center flex-col text-gray-text/50">
                    <MapPin size={48} className="mb-2" />
                    <span>Mapa disponível em breve</span>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
