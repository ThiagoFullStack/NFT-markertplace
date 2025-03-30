import { render, screen, fireEvent } from '@testing-library/react';
import AddToCartButton from '../src/components/AddToCartButton';

describe('AddToCartButton', () => {
  test('renderiza corretamente', () => {
    render(<AddToCartButton />);
    expect(screen.getByRole('button', { name: /adicionar ao carrinho/i })).toBeInTheDocument();
  });

  test('dispara evento ao clicar', () => {
    const mockOnClick = jest.fn();
    render(<AddToCartButton onClick={mockOnClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
