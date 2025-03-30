import { useCart } from "../../providers/CartContext"; 
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";


const Navbar = () => {
  const { cart } = useCart(); // Pegando a quantidade de itens no carrinho

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo alinhada à esquerda */}
        <div className="navbar-logo-container">
          <Image 
            src="/LogoNFT.png" 
            alt="Logo NFT"
            width={120} 
            height={50} 
            className="navbar-logo"
          />
        </div>

        {/* Ícone do carrinho à direita */}
        <Link href="/cart">
          <div className="cart-container">
            <ShoppingBag size={24} className="cart-icon" />
            {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

