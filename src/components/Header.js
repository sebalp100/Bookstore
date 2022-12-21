import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGrin } from 'react-icons/fa';

function Header() {
  const location = useLocation();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  return (
    <nav>
      <h1>Bookstore CMS</h1>
      <div className="link">
        <li><Link to="/" className={`${url === '/' ? ' active' : 'inactive'}`}>BOOKS</Link></li>
        <li><Link to="/Categories" className={`${url === '/Categories' ? ' active' : 'inactive'}`}>CATEGORIES</Link></li>
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
