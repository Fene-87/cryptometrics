import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

describe('Navbar Component', () => {
  test('renders CryptoMetrics on navbar', () => {
    render(
      <BrowserRouter><Navbar /></BrowserRouter>,
    );

    const title = screen.getByText('2023');
    expect(title).toBeInTheDocument();
  });

  test('component match with the snapshot', () => {
    // Assert
    const tree = renderer.create(<BrowserRouter><Navbar /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
