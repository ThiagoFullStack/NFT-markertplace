
import React from "react";
import { useCart } from "../src/providers/CartContext";
import Image from "next/image";
import { FaMinus, FaPlus, FaTrash, FaArrowLeft } from "react-icons/fa";

interface CartItem {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
}

export default function CartPage() {
  const { cart, setCart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  // Função para calcular o total
  const total = cart.reduce((acc, nft) => acc + nft.price * nft.quantity, 0);

  // Função para voltar à página anterior
  const handleBack = () => {
    window.history.back();
  };

  // Função para salvar no localStorage
  const saveCartToLocalStorage = (cart: CartItem[]) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart)); // Salva no localStorage
    }
  };

  // Carregar carrinho do localStorage
  React.useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const parsedCart: CartItem[] = JSON.parse(storedCart);
      if (parsedCart.length > 0) {
        setCart(parsedCart); // Atualiza o estado do contexto com o carrinho do localStorage
      }
    }
  }, [setCart]); // Executa apenas uma vez ao montar o componente

  // Atualizar o localStorage sempre que o carrinho mudar
  React.useEffect(() => {
    if (cart.length > 0) {
      saveCartToLocalStorage(cart); // Atualiza o carrinho no localStorage
    } else {
      // Quando o carrinho estiver vazio, remova do localStorage
      localStorage.removeItem("cart");
    }
  }, [cart]);

  // Função para lidar com o clique no botão "FINALIZAR COMPRA" sem recarregar a página
  const handleCheckoutClick = (event: React.MouseEvent) => {
    event.preventDefault(); // Impede o comportamento padrão (recarregar a página)
    console.log("Finalizar compra clicado!");
    // Aqui você pode adicionar a lógica para finalizar a compra, como redirecionamento, etc.
  };

  return (
    <div className="cart-container-carrinho">
      <div className="cart-header">
        <button onClick={handleBack} className="back-button">
          <FaArrowLeft />
        </button>
        <h1 className="cart-title">Mochila de Compras</h1>
      </div>

      {cart.length === 0 ? (
        <div className="cart-empty">
          <p>Seu carrinho está vazio.</p>
          <Image
            src="/vazio.png"
            alt="Carrinho vazio"
            width={300}
            height={350}
            priority
            className="cart-vazio"
          />
        </div>
      ) : (
        <div className="cart-items">
          {cart.map((nft) => (
            <div key={nft.id} className="cart-item">
              <Image
                src={nft.image}
                alt={nft.name}
                width={200}
                height={200}
                priority
                className="cart-item-image"
                onLoadingComplete={() => console.log(`${nft.name} imagem carregada!`)} // Evento que dispara após a carga
              />
              <div className="cart-item-info">
                <h2 className="cart-item-title">{nft.name}</h2>
                <p className="cart-item-description">{nft.description}</p>
                <div className="cart-item-price-container">
                  <Image
                    src="/eth.png"
                    alt="Logo NFT"
                    width={40}
                    height={45}
                    priority
                  />
                  <span className="cart-item-price">{nft.price} ETH</span>
                </div>

                <div className="cart-item-actions">
                  <div className="cart-quantity">
                    <button onClick={() => decreaseQuantity(nft.id)}>
                      <FaMinus />
                    </button>
                    <span>{nft.quantity}</span>
                    <button onClick={() => increaseQuantity(nft.id)}>
                      <FaPlus />
                    </button>
                  </div>
                  <button onClick={() => removeFromCart(nft.id)} className="cart-remove">
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="cart-total-container">
            <span className="cart-total-text">TOTAL</span>
            <div className="cart-total-right">
              <Image
                src="/eth.png"
                alt="Logo NFT"
                width={40}
                height={45}
                className="cart-total-logo"
              />
              <span className="cart-total-price">{total.toFixed(0)} ETH</span>
            </div>
          </div>

          {/* Alteração do botão de checkout para não recarregar a página */}
          <button onClick={handleCheckoutClick} className="cart-checkout">
            FINALIZAR COMPRA
          </button>
        </div>
      )}
    </div>
  );
}
