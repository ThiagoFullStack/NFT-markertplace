// import React from 'react';
// import { GetServerSideProps } from 'next';
// import Explore from '../pages/explore'; // Importando a página Explore
// import Navbar from '../src/components/ui/Navbar';


// // Definir o tipo NFT
// interface NFT {
//   id: number;
//   name: string;
//   description: string;
//   image: string;
//   price: number; // ✅ Garantindo que 'price' está presente
//   quantity: number; // 🔹 Adicionando quantity como propriedade obrigatória
// }

// const Home = ({ initialData }: Readonly<{ initialData: NFT[] }>) => {
//   return (
//     <div>
//       <Navbar />
//       <Explore initialData={initialData} /> {/* Passando initialData para o Explore */}
//     </div>
//   );
// };

// // Função getServerSideProps para carregar os dados do servidor
// export const getServerSideProps: GetServerSideProps = async () => {
//   try {
//     const response = await fetch(
//       'https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/products?page=1&limit=20'
//     );

//     if (!response.ok) {
//       throw new Error(`Erro ao carregar os NFTs: ${response.statusText}`);
//     }

//     const data = await response.json();

//     // Transformando os dados para garantir a tipagem correta
//     const nfts: NFT[] = (data.data || []).map((nft: any) => ({
//       id: nft.id,
//       name: nft.name,
//       description: nft.description,
//       image: nft.image,
//       price: nft.price || 0, // ✅ Se 'price' não existir, atribui 0
//       quantity: nft.quantity || 1, // 🔹 Garantindo que quantity seja 1 por padrão se não estiver presente
//     }));

//     return { props: { initialData: nfts } };
//   } catch (error) {
//     console.error('Erro ao carregar os NFTs:', error);
//     return { props: { initialData: [] } };
//   }
// };

// export default Home;  // A exportação padrão deve ser o componente 'Home'

import React from 'react';
import { GetServerSideProps } from 'next';
import Explore from '../pages/explore'; // Importando a página Explore
import Navbar from '../src/components/ui/Navbar';

// Definir o tipo NFT
interface NFT {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number; // ✅ Garantindo que 'price' está presente
  quantity: number; // 🔹 Adicionando quantity como propriedade obrigatória
}

// Função principal da página Home
const Home: React.FC<{ initialData: NFT[] }> = ({ initialData }) => {
  return (
    <div>
      <Navbar />
      <Explore initialData={initialData} /> {/* Passando initialData para o Explore */}
    </div>
  );
};

// Função getServerSideProps para carregar os dados do servidor
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await fetch(
      'https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/products?page=1&limit=20'
    );

    if (!response.ok) {
      throw new Error(`Erro ao carregar os NFTs: ${response.statusText}`);
    }

    const data = await response.json();

    // Transformando os dados para garantir a tipagem correta
    const nfts: NFT[] = (data.data || []).map((nft: any) => ({
      id: nft.id,
      name: nft.name,
      description: nft.description,
      image: nft.image,
      price: nft.price || 0, // Se 'price' não existir, atribui 0
      quantity: nft.quantity || 1, // Garantindo que quantity seja 1 por padrão se não estiver presente
    }));

    return { props: { initialData: nfts } };
  } catch (error) {
    console.error('Erro ao carregar os NFTs:', error);
    return { props: { initialData: [] } };
  }
};

export default Home;  // Exportação padrão do componente 'Home'
