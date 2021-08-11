import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import routes from '../../config/routes';
import useNavbar from '../../hooks/useNavbar';
import { GlobalState } from '../../redux/reducers/rootReducer';
import '../../styles/navbar/navbar.css';
import NavbarMenu, { NavbarMenuProps } from './NavbarMenu';
import NavbarSidebar from './NavbarSidebar';

export interface NavbarProps {
  hasSidebar?: boolean;
}

const Navbar: FC<NavbarProps> = function Navbar(): JSX.Element {
  const history = useHistory();
  const hasSidebar = history.location.pathname === routes.HOME;
  const isCollapsed = useSelector<GlobalState, boolean>(state => state.appState.sidebarCollapsed);
  const menuItems = useNavbar();
  const menuProps: NavbarMenuProps = { items: menuItems };
  return (
    <div className="navbar-container">
        <nav role="navigation">
          {hasSidebar && <NavbarSidebar isCollapsed={isCollapsed} />}
          <div className={`navbar-content ${isCollapsed ? 'collapsed' : ''} ${hasSidebar ? '' : 'full'}`}>
            <div className="navbar-content-header">
              <h1>Small Notes App</h1>
            </div>
            <NavbarMenu {...menuProps} />
          </div>
        </nav>
    </div>
  );
};

export default Navbar;
