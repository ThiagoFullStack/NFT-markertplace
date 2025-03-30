import React, { useState } from 'react';
import AddToCartButton from './AddToCartButton';

const Cart: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count} item(s) no carrinho</p>
      <AddToCartButton onClick={() => setCount(count + 1)} />
    </div>
  );
};

export default Cart;
