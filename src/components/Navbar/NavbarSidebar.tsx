import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { toogleCollapse } from '../../redux/actions/appStateActions';

export interface NavbarSidebarProps {
  isCollapsed: boolean;
}

const NavbarSidebar: FC<NavbarSidebarProps> = ({ isCollapsed }) => {
  const dispatch = useDispatch();
  return (
    <div className={`sidebar-offset ${isCollapsed ? 'collapsed' : ''}`}>
      <button
        type="button"
        onClick={() => dispatch(toogleCollapse())}
      >
        {isCollapsed ? 'Abrir' : 'Cerrar'}
      </button>
    </div>
  );
};

export default NavbarSidebar;
