import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders the list view', () => {
  render(<App />);
  const linkElement = screen.getByText("Please find the latest below");
  expect(linkElement).toBeInTheDocument();
});
