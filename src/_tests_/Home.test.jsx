import { render, screen } from '@testing-library/react';
import React from 'react';
import {Home} from '../Home/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom";

describe('renders Home Page', () => {
    it('should have a Logout button if Logged in', () => {
        render(<BrowserRouter>
            <Routes>
                <Route path='*' element={<Home />} />
            </Routes>
        </BrowserRouter>);
        const button = screen.getByRole('button', {name: 'Log Out'});
        expect(button).toBeTruthy();
    });
 });
