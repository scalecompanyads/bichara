# Diretrizes para IA (Agentes e Colaboradores)

**Atenção: LEIA ISTO ANTES DE COMEÇAR QUALQUER ALTERAÇÃO.**

Este arquivo serve como um guia essencial para agentes de inteligência artificial ou desenvolvedores que estejam trabalhando neste projeto.

## 1. Regra de Ouro: Sincronização

**Sempre faça um `git pull`** (ou certifique-se de que o repositório local está 100% atualizado com a branch principal remota) **ANTES de iniciar qualquer modificação no código.**

Isso é crítico para evitar conflitos de merge, código sobrescrito e perda de progresso, já que diferentes agentes ou desenvolvedores podem estar atuando no repositório simultaneamente.

## 2. Padrões do Projeto

- **Identidade Visual**: Este projeto utiliza uma identidade visual baseada em estética arquitetônica, elegante e sofisticada. Cores predominantes incluem tons escuros (`bg-dark`), branco (`bg-light`) e destaques em dourado (`text-gold`, `bg-gold`).
- **Animações**: O projeto utiliza `GSAP` para animações baseadas em scroll e interações sofisticadas.
- **Framework**: `Next.js` com `Tailwind CSS`. Todo o código novo deve seguir as melhores práticas desses frameworks e manter a performance da aplicação.

## 3. Boas Práticas ao Contribuir

- Revise o status do repositório com `git status` para entender as alterações recentes.
- Faça commits pequenos, frequentes e com mensagens claras e descritivas sobre o que foi alterado.
- Caso enfrente conflitos, pare e informe ao usuário ou tente resolvê-los de forma consciente, analisando qual versão do código deve prevalecer.

> "A colaboração bem-sucedida começa com código sincronizado."
