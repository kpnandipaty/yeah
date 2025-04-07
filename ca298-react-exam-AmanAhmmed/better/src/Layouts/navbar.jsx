import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <nav>
        <Link as={Link} to="/category">Categories___</Link>

        <Link as={Link} to="/orders">Orders By Status___</Link>

        <Link as={Link} to="/customers">Customers</Link>
      </nav>
  );
};

export default Navbar;