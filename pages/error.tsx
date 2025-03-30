import React from 'react';
import { useRouter } from 'next/router';

const ErrorPage = () => {
  const router = useRouter();

  return (
    <div className="error-page">
      <h1>Ocorreu um erro ao processar sua compra</h1>
      <p>Tente novamente mais tarde ou entre em contato com o suporte.</p>
      <button onClick={() => router.push('/')}>Voltar para a Home</button>
    </div>
  );
};

export default ErrorPage;
