
💻 Marketplace NFT

📜 Descrição do Projeto

O Marketplace NFT é uma plataforma para exploração, compra e venda de NFTs (Tokens Não Fungíveis). O objetivo do projeto é permitir que os usuários naveguem entre os NFTs disponíveis, adicionem itens ao carrinho e finalizem a compra.

## 📌 Análise do Progresso do Projeto

### 1️⃣ Configuração do Projeto
✅ Criado projeto Next.js com TypeScript.  
✅ Configurado ESLint, Prettier e Husky para manter a qualidade do código.  
✅ Criada estrutura organizada de pastas.  
🔲 Falta adicionar suporte ao SASS ou Styled Components (se ainda não foi feito).  

### 2️⃣ Configuração do Docker
✅ Criado **Dockerfile** e **docker-compose.yml**.  
✅ Testada a aplicação rodando com `docker-compose up`.  

### 3️⃣ Criação do Layout Base
✅ Implementação inicial do layout com **Navbar** e **Footer**.  
✅ Garantia de responsividade seguindo o conceito **Mobile First**.  
🔲 Falta verificar a importação do design do **Figma** e criação de componentes reutilizáveis.  

### 4️⃣ Implementação das Rotas
✅ Criada página principal `/`.  
✅ Criadas páginas dinâmicas `/nft/[id]` para exibir detalhes dos NFTs.  
✅ Criada página do carrinho `/cart`.  

### 5️⃣ Integração com a API
✅ Configurado **React Query** para buscar dados da API.  
✅ Criadas funções para obter:
   - Lista de NFTs.  
   - Detalhes de um NFT específico.  
   - Adicionar e remover itens do carrinho.  

### 6️⃣ Implementação do Carrinho de Compras
✅ Criado o estado global do carrinho com **Redux Toolkit**.  
✅ Implementada adição, remoção e atualização de itens no carrinho.  
✅ Persistência do carrinho no **localStorage**.  

### 7️⃣ Animações e Interações
🔲 Implementar **Framer Motion** para animações:
   - Hover nos cards de NFTs.  
   - Transições de página.  
   - Efeitos em botões.  

### 8️⃣ Testes e Validação
🔲 Criar testes unitários e de integração com **Jest** e **Testing Library**.  
🔲 Testar principais componentes e funcionalidades críticas.  
🔲 Verificar performance e acessibilidade com **Lighthouse**.  

### 9️⃣ Documentação e Deploy
✅ Criado um **README** detalhado com as instruções do projeto.  
🔲 Configurar **GitHub Actions** para rodar testes automaticamente.  
🔲 Publicar o projeto na **Vercel**.  

---

## 📦 Estrutura do Projeto

```
📦 marketplace-nft
├── 📂 _tests_                 # Testes unitários e de integração
│   ├── AddToCartButton.test.tsx
│   ├── Cart.test.tsx
│
├── 📂 pages                   # Páginas principais do projeto
│   ├── _app.tsx
│   ├── cart.tsx
│   ├── explore.tsx
│   ├── index.tsx
│   ├── success.tsx
│   ├── error.tsx
│
├── 📂 public                  # Arquivos estáticos
│   ├── eth.png
│   ├── LogoNFT.png
│   ├── vazio.png
│
├── 📂 src                     # Código fonte da aplicação
│   ├── 📂 components           # Componentes reutilizáveis
│   │   ├── ui/
│   │   ├── Navbar.tsx
│   │   ├── NFTCard.tsx
│   │   ├── StyledButton.tsx
│   │   ├── AddToCartButton.tsx
│   │
│   ├── 📂 providers            # Provedores de contexto
│   │   ├── CartContext.tsx
│   │   ├── ReactQueryProvider.tsx
│   │
│   ├── 📂 services             # Interações com a API
│   │   ├── api.ts
│   │
│   ├── 📂 slices               # Estado global com Redux
│   │   ├── store.ts
│   │
│   ├── 📂 styles               # Estilos globais
│   │   ├── global.scss
│
├── Dockerfile                 # Configuração para Docker
├── docker-compose.yml          # Configuração para Docker Compose
├── package.json                # Dependências do projeto
├── tsconfig.json               # Configuração do TypeScript
└── README.md                   # Documentação do projeto
```

---

## 🚀 Como Executar o Projeto

### 🛠️ Pré-requisitos
Antes de iniciar, certifique-se de ter instalado:
- **Node.js** (v18 ou superior)
- **Docker** e **Docker Compose** (caso deseje rodar via container)

### 🔧 Instalação
1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/marketplace-nft.git
   cd marketplace-nft
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```
4. Acesse **http://localhost:3000** no navegador.

### 🐳 Rodando com Docker
```sh
docker-compose up --build
```

---

## 📌 Tecnologias Utilizadas

- **Next.js** - Framework para React
- **TypeScript** - Tipagem estática
- **Redux Toolkit** - Gerenciamento de estado
- **React Query** - Busca de dados otimizada
- **Tailwind CSS** - Estilização
- **Jest + Testing Library** - Testes
- **Framer Motion** - Animações
- **Docker** - Containerização

---

## 📌 Melhorias Futuras
- 🔹 Implementar pagamentos com **Ethereum**.
- 🔹 Criar sistema de autenticação com **OAuth**.
- 🔹 Melhorar o design com **Figma**.
- 🔹 Adicionar modo **dark/light**.
- 🔹 Implementar API para upload de NFTs.

---

💡 **Sinta-se livre para contribuir e sugerir melhorias!** 🚀

