import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notícias e Atualizações sobre INSS e Previdência",
  description: "Fique por dentro das últimas notícias, mudanças no INSS, dicas sobre aposentadoria e tire suas dúvidas sobre direitos previdenciários em nosso blog.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
