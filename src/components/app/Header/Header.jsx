import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div>
      <h1>Star Wars</h1>
    </div>
    <div>
      <Link to={'/'}>
        Home
      </Link>
    </div>
  </header>
);

export default Header;
