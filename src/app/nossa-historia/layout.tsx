import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mais de 30 Anos de Tradição em Direito Previdenciário",
  description: "Conheça a história de dedicação e sucesso da Advocacia Bichara. Mais de três décadas lutando pelos direitos previdenciários dos brasileiros.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
