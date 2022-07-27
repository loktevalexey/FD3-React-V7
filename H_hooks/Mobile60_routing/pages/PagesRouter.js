import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Page_About from './Page_About';
import Page_Company from './Page_Company';
import Page_Clients from './Page_Clients';
import Page_Client from './Page_Client';

class PagesRouter extends React.Component {
          
  render() {

    return (
      <Routes>
        <Route path="/" element={<Page_About/>} />
        <Route path="/company" element={<Page_Company/>} />
        <Route path="/clients" element={<Page_Clients/>} />
        <Route path="/client/:clid" element={<Page_Client/>} />
      </Routes>
    );
    
  }

}
    
export default PagesRouter;
    