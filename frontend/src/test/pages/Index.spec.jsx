import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { act } from 'react-dom/test-utils';
import Index from '../../pages/Index';

describe('Starting page', () => {
  test('renders the component', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });
    const { getByAltText, getByText } = render(
      <Router history={history}>
        <Index />
      </Router>,
    );

    const bannerImage = getByAltText('banner');
    const heading = getByText('Get your big fat pug loan here');
    const button = getByText('Yes, I want to apply - >');

    expect(bannerImage).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('triggers the link and navigates to the application page', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });
    const { getByText } = render(
      <Router history={history}>
        <Index />
      </Router>,
    );

    // Simulate button click
    act(() => {
      fireEvent.click(getByText('Yes, I want to apply - >'));
    });

    // Assert that the URL has changed
    waitFor(() => {
      expect(history.location.pathname).toBe('/application');
    });
  });
});
