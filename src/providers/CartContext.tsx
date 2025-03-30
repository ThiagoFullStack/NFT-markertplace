import React, { createContext, useContext, useState, ReactNode, useMemo } from "react";

interface CartItem {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Usando useMemo para memorizar o valor do contexto e evitar recriações desnecessárias
  const value = useMemo(
    () => ({
      cart,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
      setCart,
    }),
    [cart] // O valor será recalculado apenas quando o `cart` mudar
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Hook para acessar o contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};


