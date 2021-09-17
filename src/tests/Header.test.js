import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import App from '../App';

describe('Check if the Header is rendered', () => {
  it('Renders date', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText('2021')).toBeInTheDocument();
  });

  it('renders title', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText('Top Executives')).toBeInTheDocument();
  });
});
