
import { motion } from "framer-motion"; // Importando o motion do Framer Motion
import Image from "next/image";
import { useCart } from "../../src/providers/CartContext";

interface NFTCardProps {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

const NFTCard = ({ id, image, name, description, price, quantity }: NFTCardProps) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }} // Animação de aumento do card ao passar o mouse
      transition={{ type: "spring", stiffness: 300 }} // Transição suave com mola
      className="bg-white rounded-lg shadow-md p-4"
    >
      <Image src={image} alt={name} width={300} height={300} className="rounded-lg" />
      <h2 className="text-lg font-bold mt-2">{name}</h2>
      <p className="text-gray-600">{description}</p>
      <p className="text-black font-bold mt-1">Preço: ${price.toFixed(2)}</p>

      <motion.button
        onClick={() =>
          addToCart({
            id: String(id),  // 🔹 Convertendo id para string
            image,
            name,
            description,
            price,
            quantity: 1,
          })
        }
        className="bg-yellow-400 text-black px-4 py-2 rounded-md mt-2 hover:bg-yellow-500"
        whileHover={{ scale: 1.1, rotate: 5 }} // Efeito de aumento e rotação ao passar o mouse
        transition={{ type: "spring", stiffness: 300 }} // Transição suave
      >
        Adicionar ao carrinho
      </motion.button>
    </motion.div>
  );
};

export default NFTCard;
