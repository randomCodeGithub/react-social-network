import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import SamuraiJSApp from './App';
import App from './App';

test('renders learn react link', () => {
  const div = document.createElement("div");
  render(<SamuraiJSApp />, div);
  unmountComponentAtNode(div)
  // const linkElement = screen.getByRole(/main/i);
  // expect(linkElement).toBeInTheDocument();
});
