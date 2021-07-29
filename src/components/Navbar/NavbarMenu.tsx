import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/navbar/navbar-menu.css';

export interface NavbarMenuItem {
  text: string;
  route: string
}

export interface NavbarMenuProps {
  items: NavbarMenuItem[];
}

const NavbarMenu: FC<NavbarMenuProps> = ({ items }) => {
  return (
<div className="navbar-menu">
    <ul>
    {items.map(i => <li key={i.route}><Link to={i.route}>{i.text}</Link></li>)}
    </ul>
</div>
  );
};

export default NavbarMenu;
