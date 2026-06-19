import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/554334724025"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe57] text-white p-4 rounded-full shadow-lg shadow-black/30 transition-all duration-300 hover:scale-110 flex items-center justify-center animate-pulse"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
