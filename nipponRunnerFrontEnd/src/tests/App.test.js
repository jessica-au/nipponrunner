import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const h1Element = screen.getByText(/にっぽんランナー/i);
  expect(h1Element).toBeInTheDocument();
});
