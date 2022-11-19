import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { PagesRouter } from './routes/PagesRouter';

export const App = () => (
    <BrowserRouter>
        <div>
            <h1>Router example #3</h1>
            <PagesRouter />
        </div>
    </BrowserRouter>
);
