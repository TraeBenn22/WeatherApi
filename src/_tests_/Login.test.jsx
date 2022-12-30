import { render, screen } from '@testing-library/react';
import React from 'react';
import {Login} from '../Login/Login';
import {BrowserRouter, Route, Routes} from "react-router-dom";

describe('renders Login Page', () => {
  it('Should have a Login button', () => {
    render(<BrowserRouter>
      <Routes>
        <Route path='*' element={<Login />} />
      </Routes>
    </BrowserRouter>)
  });

  it("includes Login Text", () => {
     render(<BrowserRouter>
      <Routes>
        <Route path='*' element={<Login />} />
      </Routes>
    </BrowserRouter>)
    expect(screen.findByText('Login')).toBeTruthy();
  })
})




