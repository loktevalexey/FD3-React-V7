import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageFilmSearch } from '../pages/PageFilmSearch';
import { PageFilmDetails } from '../pages/PageFilmDetails';

export const PagesRouter = () => {
          
    return (
      <Routes>
        <Route path="/" element={<PageFilmSearch/>} />
        <Route path="/details/:filmname" element={<PageFilmDetails/>} />
      </Routes>
    );
    
};
