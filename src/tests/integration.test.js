import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import App from '../App';
import Detail from '../components/Detail';

describe('Test Details component', () => {
  const executive = {
    title: 'Senior Vice President of Worldwide Marketing',
    name: 'Mr. Greg Joswiak',
    gender: 'male',
    pay: null,
    yearBorn: null,
  };
  render(
    <Router>
      <Detail executive={executive} />
    </Router>,
  );

  it('Expect gender male to be rendered', () => {
    expect(screen.getByText('male')).toBeInTheDocument();
  });
});

describe('Check if all components are rendered', () => {
  it('Renders NavBar', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText('2021')).toBeInTheDocument();
  });
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
