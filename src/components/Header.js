import React from 'react';
import { Link } from 'react-router-dom';
import { FaGrin } from 'react-icons/fa';

function Header() {
  return (
    <nav>
      <h1>Bookstore CMS</h1>
      <div className="link">
        <li><Link to="/" style={{ textDecoration: 'none' }}>BOOKS</Link></li>
        <li><Link to="/Categories" style={{ textDecoration: 'none' }}>CATEGORIES</Link></li>
      </div>
      <div className="iconContainer">
        <div className="user">
          <FaGrin />
        </div>
      </div>
    </nav>
  );
}

export default Header;
