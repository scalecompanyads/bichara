import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços em Direito Previdenciário e INSS",
  description: "Consultoria para aposentadoria, pensão por morte, BPC/LOAS, revisão de benefícios e muito mais. Descubra como nossos advogados podem ajudar você a vencer no INSS.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
