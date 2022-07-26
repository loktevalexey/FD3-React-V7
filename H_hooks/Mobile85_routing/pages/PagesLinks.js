import React from 'react';
import { NavLink } from 'react-router-dom';

import './PagesLinks.css';

class PagesLinks extends React.Component {
          
  render() {

    return (
      <div>
        <NavLink to="/" className={obj => ("PageLink"+(obj.isActive?" ActivePageLink":""))}>Главная</NavLink>
        <NavLink to="/company" className={obj => ("PageLink"+(obj.isActive?" ActivePageLink":""))}>О компании</NavLink>
        <NavLink to="/clients" className={obj => ("PageLink"+(obj.isActive?" ActivePageLink":""))}>Клиенты</NavLink>
      </div>
    );
    
  }

}
    
export default PagesLinks;
