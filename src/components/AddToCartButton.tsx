import React from 'react';

type Props = {
  onClick?: () => void;
};

const AddToCartButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Adicionar ao Carrinho
    </button>
  );
};

export default AddToCartButton;
