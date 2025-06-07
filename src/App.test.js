import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello, Cute World! text', () => {
  render(<App />);
  const textElement = screen.getByText(/hello, cute world!/i);
  expect(textElement).toBeInTheDocument();
});
