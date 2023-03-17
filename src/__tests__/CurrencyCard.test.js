import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import CurrencyCard from '../components/currencyCard/CurrencyCard';

describe('Currency Card Component', () => {
  test('renders CryptoMetrics on homepage', () => {
    render(
      <BrowserRouter><CurrencyCard /></BrowserRouter>,
    );

    const price = screen.getByText('Current Price:');
    expect(price).toBeInTheDocument();
  });

  test('component match with the snapshot', () => {
    // Assert
    const tree = renderer.create(<BrowserRouter><CurrencyCard /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
