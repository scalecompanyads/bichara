"use client";

import { filiais } from "@/data/filiais";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import Link from "next/link";
import { slugify } from "@/data/filiais";

export default function Contato() {
  return (
    <div className="bg-dark min-h-screen pt-16">
      <div className="container mx-auto px-4 md:px-8 py-16 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-light mb-6">
            Entre em <span className="text-gold-gradient">Contato</span>
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-text max-w-2xl mx-auto">
            Estamos prontos para atender você. Preencha o formulário abaixo ou visite uma de nossas unidades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Formulário */}
          <div className="bg-dark-muted p-8 md:p-10 rounded-xl border border-gold/10">
            <h2 className="font-heading text-2xl font-bold text-light mb-6">Envie uma Mensagem</h2>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-text mb-2">Nome Completo</label>
                <input type="text" id="name" className="w-full bg-dark border border-gray-text/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-gold transition-colors" placeholder="Seu nome" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-text mb-2">E-mail</label>
                  <input type="email" id="email" className="w-full bg-dark border border-gray-text/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-gold transition-colors" placeholder="seu@email.com" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-text mb-2">Telefone / WhatsApp</label>
                  <input type="tel" id="phone" className="w-full bg-dark border border-gray-text/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-gold transition-colors" placeholder="(00) 00000-0000" required />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-text mb-2">Mensagem</label>
                <textarea id="message" rows={5} className="w-full bg-dark border border-gray-text/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-gold transition-colors resize-none" placeholder="Como podemos ajudar?" required></textarea>
              </div>
              <button type="submit" className="bg-gold-gradient font-bold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-2 text-dark">
                Enviar Mensagem
                <Send size={18} />
              </button>
            </form>
          </div>

          {/* Sede e Info */}
          <div className="flex flex-col gap-8">
            <div className="bg-dark-muted p-8 rounded-xl border border-gold/10">
              <h2 className="font-heading text-2xl font-bold text-light mb-6 flex items-center gap-2">
                <MapPin className="text-gold" />
                Sede Principal
              </h2>
              <div className="space-y-4 text-gray-text">
                <p>
                  <strong className="text-light">Endereço:</strong><br />
                  Av. Tancredo Neves, n°. 1390, Centro<br />
                  CEP: 86.870-007 - Ivaiporã – PR
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={18} className="text-gold" />
                  <strong className="text-light">Telefone:</strong> (43) 3472-4025
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={18} className="text-gold" />
                  <strong className="text-light">E-mail:</strong> contato@advocaciabichara.com.br
                </p>
              </div>
            </div>

            <div className="bg-dark-muted p-8 rounded-xl border border-gold/10 flex-grow">
              <h2 className="font-heading text-xl font-bold text-light mb-4">Nossas Filiais</h2>
              <p className="text-gray-text text-sm mb-6">
                Estamos presentes em diversas cidades para melhor atendê-lo. Clique na unidade mais próxima para ver os detalhes:
              </p>
              <div className="flex flex-wrap gap-2">
                {filiais.map((filial, idx) => (
                  <Link 
                    key={idx} 
                    href={`/unidades/${slugify(filial.cidade)}`}
                    className="bg-dark border border-gold/20 text-light text-sm px-4 py-2 rounded hover:border-gold hover:text-gold transition-colors"
                  >
                    {filial.cidade} - {filial.uf}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
