import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import App from '../App';

describe('Checks if homepage/home is rendered.', () => {
  it('Renders section title', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText('Key Executives')).toBeInTheDocument();
  });
  it('Renders Page Title', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText('Filter By Gender')).toBeInTheDocument();
  });
});
