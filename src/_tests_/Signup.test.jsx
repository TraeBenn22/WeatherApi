import { render, screen } from '@testing-library/react';
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { SignUp } from '../Signup/Signup';

describe('renders Signup page', () => {
  it('should have a Sign Up Button', () => {
    render(<BrowserRouter>
      <Routes>
        <Route path='*' element={<SignUp />} />
      </Routes>
    </BrowserRouter>);
    const button = screen.getByRole('button', {name: 'Sign up!'});
    expect(button).toBeTruthy();
  });
});
