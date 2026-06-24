import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fale com um Advogado Previdenciário Online",
  description: "Precisa de ajuda com sua aposentadoria ou benefício do INSS? Fale agora com a equipe da Advocacia Bichara. Atendimento rápido e online para todo o Brasil.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
