export const filiais = [
  { cidade: "Faxinal", uf: "PR", address: "Rua Central, 100 - Centro", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14594.46908354673!2d-51.3259!3d-23.9995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDU5JzU4LjIiUyA1McKwMTknMzMuMiJX!5e0!3m2!1spt-BR!2sbr!4v1" },
  { cidade: "Reserva", uf: "PR", address: "Av. Principal, 200 - Centro", mapUrl: "" },
  { cidade: "Iporã", uf: "PR", address: "Rua do Comércio, 300 - Centro", mapUrl: "" },
  { cidade: "Iretama", uf: "PR", address: "Rua das Flores, 400 - Centro", mapUrl: "" },
  { cidade: "Borrazópolis", uf: "PR", address: "Av. Brasil, 500 - Centro", mapUrl: "" },
  { cidade: "Jandaia do Sul", uf: "PR", address: "Rua São João, 600 - Centro", mapUrl: "" },
  { cidade: "São João do Ivaí", uf: "PR", address: "Av. Getúlio Vargas, 700 - Centro", mapUrl: "" },
  { cidade: "Barbosa Ferraz", uf: "PR", address: "Rua Paraná, 800 - Centro", mapUrl: "" },
  { cidade: "Grandes Rios", uf: "PR", address: "Av. das Nações, 900 - Centro", mapUrl: "" },
  { cidade: "Cândido de Abreu", uf: "PR", address: "Rua Sete de Setembro, 1000 - Centro", mapUrl: "" },
  { cidade: "Manoel Ribas", uf: "PR", address: "Rua Tiradentes, 1100 - Centro", mapUrl: "" },
  { cidade: "Nova Tebas", uf: "PR", address: "Av. Rio Branco, 1200 - Centro", mapUrl: "" },
  { cidade: "São Pedro do Ivaí", uf: "PR", address: "Rua XV de Novembro, 1300 - Centro", mapUrl: "" },
  { cidade: "Pitanga", uf: "PR", address: "Rua Dom Pedro II, 1400 - Centro", mapUrl: "" },
  { cidade: "Mirassol d'Oeste", uf: "MT", address: "Av. Mato Grosso, 1500 - Centro", mapUrl: "" },
  { cidade: "Belo Horizonte", uf: "MG", address: "Av. Afonso Pena, 1600 - Savassi", mapUrl: "" },
];

export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}
