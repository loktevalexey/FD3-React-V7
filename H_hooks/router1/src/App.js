import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { PagesLinks } from './components/PagesLinks';
import { PagesRouter } from './routes/PagesRouter';

export const App = () => (
    <BrowserRouter>
        <div>
            <h1>Router example #1</h1>
            <PagesLinks />
            <PagesRouter />
        </div>
    </BrowserRouter>
);
