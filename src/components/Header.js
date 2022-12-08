import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <h1>Bookstore CMS</h1>
      <div className="link">
        <li><Link to="/" style={{ textDecoration: 'none' }}>Books</Link></li>
        <li><Link to="/Categories" style={{ textDecoration: 'none' }}>Categories</Link></li>
      </div>
    </nav>
  );
}

export default Header;
