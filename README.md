
# 📌 Análise do Progresso do Projeto

## 1️⃣ Configuração do Projeto
- 🔲 Criado projeto Next.js com TypeScript.
- 🔲 Configurado ESLint, Prettier e Husky para manter a qualidade do código.
- 🔲 Criada estrutura organizada de pastas.
- 🔲 Falta adicionar suporte ao SASS ou Styled Components (se ainda não foi feito).

## 2️⃣ Configuração do Docker
- 🔲 Criar Dockerfile e docker-compose.yml.
- 🔲 Testar a aplicação rodando com `docker-compose up`.

## 3️⃣ Criação do Layout Base
- 🔲 Implementação inicial do layout com Navbar e Footer.
- 🔲 Garantia de responsividade seguindo o conceito Mobile First.
- 🔲 Falta verificar a importação do design do Figma e criação de componentes reutilizáveis.

## 4️⃣ Implementação das Rotas
- 🔲 Página principal `/` criada.
- 🔲 Criar páginas dinâmicas `/nft/[id]` para exibir detalhes dos NFTs.
- 🔲 Criar página do carrinho `/cart`.

## 5️⃣ Integração com a API
- 🔲 Configurar React Query para buscar dados da API.
- 🔲 Criar funções para obter:
  - Lista de NFTs.
  - Detalhes de um NFT específico.
  - Adicionar e remover itens do carrinho.

## 6️⃣ Implementação do Carrinho de Compras
- 🔲 Criar o estado global do carrinho com Redux Toolkit.
- 🔲 Implementar adição, remoção e atualização de itens no carrinho.
- 🔲 Persistência do carrinho no `localStorage`.

## 7️⃣ Animações e Interações
- 🔲 Implementar Framer Motion para animações:
  - Hover nos cards de NFTs.
  - Transições de página.
  - Efeitos em botões.

## 8️⃣ Testes e Validação
- 🔲 Criar testes unitários e de integração com Jest e Testing Library.
- 🔲 Testar principais componentes e funcionalidades críticas.
- 🔲 Verificar performance e acessibilidade com Lighthouse.

## 9️⃣ Documentação e Deploy
- 🔲 Criar um README detalhado com as instruções do projeto.
- 🔲 Configurar GitHub Actions para rodar testes automaticamente.
- 🔲 Publicar o projeto na Vercel.


# 📦 Estrutura do Projeto

## 📂 marketplace-nft
Esta é a estrutura de pastas do projeto:

### 📂 _tests_
Contém os arquivos de testes unitários e de integração.

- `AddToCartButton.test.tsx`
- `Cart.test.tsx`

### 📂 pages
Contém as páginas principais do projeto.

- `/_app.tsx`: Configuração inicial da aplicação.
- `cart.css`: Estilos para a página do carrinho.
- `cart.tsx`: Página do carrinho.
- `error.css`: Estilos para a página de erro.
- `error.tsx`: Página de erro.
- `explore.css`: Estilos para a página de exploração.
- `explore.tsx`: Página de exploração.
- `index.tsx`: Página inicial.
- `success.css`: Estilos para a página de sucesso.
- `success.tsx`: Página de sucesso.

### 📂 public
Contém arquivos estáticos públicos como imagens.

- `eth.png`: Imagem de Ethereum.
- `LogoNFT.png`: Logotipo do projeto.
- `vazio.png`: Imagem para estado vazio.

### 📂 src
Contém o código fonte da aplicação.

#### 📂 components
Componentes reutilizáveis da interface.

- `ui/`: Componentes de UI, como o Navbar e botões estilizados.
  - `navbar.css`: Estilos para o Navbar.
  - `Navbar.tsx`: Componente Navbar.
  - `NFTCard.module.css`: Estilos para o card de NFT.
  - `StyledButton.module.css`: Estilos para o botão estilizado.
  - `StyledButton.tsx`: Componente para botão estilizado.

- `AddToCartButton.tsx`: Componente do botão de adicionar ao carrinho.
- `cart.tsx`: Componente relacionado ao carrinho.
- `NFTCard.tsx`: Componente para exibir os cards de NFT.

#### 📂 providers
Contém provedores de contexto e configurações do React Query.

- `CartContext.tsx`: Contexto para gerenciamento do carrinho.
- `ReactQueryProvider.tsx`: Configuração do React Query.

#### 📂 services
Contém serviços como interações com a API.

- `api.ts`: Funções para interação com a API.

#### 📂 slices
Contém o Redux slice e a configuração da store.

- `store.ts`: Configuração da store do Redux.

#### 📂 styles
Contém os estilos globais.

- `global.scss`: Estilos globais da aplicação.

### Arquivos Raiz
Esses são os arquivos principais do projeto.

- `tailwind.config.js`: Arquivo de configuração do Tailwind CSS.
- `tsconfig.json`: Arquivo de configuração do TypeScript.
- `jest.setup.js`: Configuração do Jest para testes.
- `jest.config.js`: Arquivo de configuração do Jest.
- `Dockerfile`: Arquivo Dockerfile para criação da imagem Docker.
- `docker-compose.yml`: Arquivo de configuração para o Docker Compose.
- `.gitignore`: Arquivo para especificar arquivos que devem ser ignorados pelo Git.
- `next.config.js`: Arquivo de configuração do Next.js.
- `next-env.d.ts`: Arquivo de definição de tipos para Next.js.
- `package-lock.json`: Arquivo de bloqueio de dependências do npm.
- `package.json`: Arquivo de configuração do npm.
- `postcss.config.mjs`: Arquivo de configuração do PostCSS.
- `tsconfig.json`: Arquivo de configuração do TypeScript (repetido, provavelmente por engano).
- `README.md`: Arquivo de documentação do projeto.
