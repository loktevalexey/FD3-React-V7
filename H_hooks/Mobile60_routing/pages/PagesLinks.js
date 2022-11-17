import React from 'react';
import { NavLink } from 'react-router-dom';

import './PagesLinks.css';

class PagesLinks extends React.Component {
          
  render() {

    function getLinkClass(linkInfo) {
      return "PageLink"+(linkInfo.isActive?" ActivePageLink":"");
    }

    return (
      <div>
        <NavLink to="/" className={getLinkClass}>Главная</NavLink>
        <NavLink to="/company" className={getLinkClass}>О компании</NavLink>
        <NavLink to="/clients" className={getLinkClass}>Клиенты</NavLink>
      </div>
    );
    
  }

}
    
export default PagesLinks;
