import { render, screen } from '@testing-library/react';
import App from './App';

describe('App test', () => {
  it('Renders the list view', () => {
    render(<App />);
    const linkElement = screen.getByText("Please find the latest below");
    expect(linkElement).toBeInTheDocument();
  });
});