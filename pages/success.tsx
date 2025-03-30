import React from 'react';
import { useRouter } from 'next/router';

const SuccessPage = () => {
  const router = useRouter();

  return (
    <div className="success-page">
      <h1>Compra Concluída com Sucesso!</h1>
      <p>Obrigado por sua compra. Você pode verificar seu pedido em sua conta.</p>
      <button onClick={() => router.push('/')}>Voltar para a Home</button>
    </div>
  );
};

export default SuccessPage;
