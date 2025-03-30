import { render, screen, fireEvent } from '@testing-library/react';
import Cart from '../src/components/cart';

describe('Carrinho de Compras', () => {
  test('exibe um item adicionado', () => {
    render(<Cart />);
    fireEvent.click(screen.getByText(/adicionar ao carrinho/i));
    expect(screen.getByText(/1 item\(s\) no carrinho/i)).toBeInTheDocument();
  });
});
