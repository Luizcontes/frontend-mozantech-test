import { render, screen } from '@testing-library/react';
import App from './App';

test('header renders with Store Parts', () => {
  render(<App />);
  const linkElement = screen.getByRole(div)
  expect(linkElement).toBeInTheDocument()
});
