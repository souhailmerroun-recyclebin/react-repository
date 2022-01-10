import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react hello world', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});
