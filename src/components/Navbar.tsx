import React, { FC } from 'react';
import '../styles/navbar.css';

export interface NavbarProps {

}

const Navbar: FC<NavbarProps> = function Navbar(): JSX.Element {
  return (
    <div className="navbar-container">
        <nav>
          <h1>Small Notes App</h1>
        </nav>
    </div>
  );
};

export default Navbar;
