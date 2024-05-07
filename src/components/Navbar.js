import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md flex justify-between items-center p-4">
      <Link to="/" className="text-blue-500 font-semibold">
        Blackdot
      </Link>
      <Link to="/project-request" className="text-blue-500 font-semibold">
       Request Project+
      </Link>
    </nav>
  );
}

export default Navbar;