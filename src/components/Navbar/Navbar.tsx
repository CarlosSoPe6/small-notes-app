import React, { FC } from 'react';
import '../../styles/navbar.css';
import NavbarSidebar from './NavbarSidebar';

export interface NavbarProps {
  hasSidebar?: boolean;
}

const Navbar: FC<NavbarProps> = function Navbar(props): JSX.Element {
  const {
    hasSidebar,
  } = props;
  return (
    <div className="navbar-container">
        <nav role="navigation">
          {hasSidebar && <NavbarSidebar />}
          <h1>Small Notes App</h1>
        </nav>
    </div>
  );
};

export default Navbar;
