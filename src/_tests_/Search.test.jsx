import { render, screen } from '@testing-library/react';
import React from 'react';
import {Search} from '../Search/Search';
import {BrowserRouter, Route, Routes} from "react-router-dom";

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
  });
  window.IntersectionObserver = mockIntersectionObserver;
});
describe('renders Search page', () => {
  it('should have a Historical Records Button', () => {
    render(<BrowserRouter>
      <Routes>
        <Route path='*' element={<Search />} />
      </Routes>
    </BrowserRouter>);
    const button = screen.getByRole('button', {name: 'Historical Records'});
    expect(button).toBeTruthy();
  });
});
