
import { useCart } from "../src/providers/CartContext";
import { useState, useEffect } from "react";
import Image from "next/image";


interface NFT {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
}

type CartItem = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
};

type ExploreProps = Readonly<{
  initialData: NFT[] | undefined; // Ajuste para aceitar 'undefined'
}>;

export default function Explore({ initialData = [] }: ExploreProps) {
  const { addToCart } = useCart();
  const [visibleCount, setVisibleCount] = useState(8);
  const [isClient, setIsClient] = useState(false);

  // Verifica se estamos no lado do cliente
  useEffect(() => {
    setIsClient(typeof window !== "undefined"); // Verifica se o código está no lado do cliente
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 8, initialData.length));
  };

  // Garantir que `initialData.length` não seja zero
  const progress = initialData.length > 0 ? (visibleCount / initialData.length) * 100 : 0;
  const allLoaded = visibleCount >= initialData.length;

  const handleAddToCart = (nft: NFT) => {
    const nftWithQuantity: CartItem = {
      ...nft,
      quantity: 1,
      id: String(nft.id), // Convertendo id para string
    };

    addToCart(nftWithQuantity); // Chama a função addToCart

    if (isClient) {
      try {
        // Obtém o carrinho do localStorage
        const existingCart = JSON.parse(localStorage.getItem("cart") ?? "[]");
        console.log("Carrinho Atual:", existingCart);

        // Verifica se o item já está no carrinho
        const itemExists = existingCart.some((item: CartItem) => item.id === nftWithQuantity.id);
        
        if (!itemExists) {
          // Adiciona o novo item ao carrinho
          existingCart.push(nftWithQuantity);
          localStorage.setItem("cart", JSON.stringify(existingCart)); // Atualiza o carrinho no localStorage
        }

        // Verificando o localStorage para garantir que o item foi salvo
        const updatedCart = JSON.parse(localStorage.getItem("cart") ?? "[]");
        console.log("Carrinho Atualizado no localStorage:", updatedCart);
      } catch (error) {
        console.error("Erro ao salvar no localStorage:", error);
      }
    }
  };

  return (
    <div className="page-container">
      <div className="nft-list">
        {initialData.slice(0, visibleCount).map((nft) => (
          <div key={nft.id} className="nft-item">
            <img src={nft.image} alt={nft.name} />
            <h3>{nft.name}</h3>
            <p className="nft-description mt-2">{nft.description}</p>
            <div className="eth">
              <Image
                src="/eth.png"
                alt="ETH"
                width={50}
                height={0}
                className="eth-image"
              />
              <p className="text-lg font-semibold flex items-center" id="price">
                {nft.price.toFixed(0)} ETH
              </p>
            </div>
            <button className="btn"
              onClick={() => handleAddToCart(nft)} // Passando a função que adiciona com id convertido
            >
              COMPRAR
            </button>
          </div>
        ))}
      </div>

      {/* Sempre exibir a barra e o botão */}
      <div className="progress-wrapper">
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <button className="load-more-btn" onClick={handleLoadMore} disabled={allLoaded}>
          {allLoaded ? "Você já viu tudo" : "Carregar mais"}
        </button>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        STARSOFT © TODOS OS DIREITOS RESERVADOS
      </footer>
    </div>
  );
}

