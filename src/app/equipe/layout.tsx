import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nossa Equipe de Advogados Especialistas em INSS",
  description: "Conheça os advogados da Advocacia Bichara. Uma equipe altamente qualificada com mais de 30 anos de experiência para garantir os seus direitos previdenciários.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
