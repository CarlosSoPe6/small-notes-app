import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalState } from '../../redux/reducers/rootReducer';
import { toogleCollapse } from '../../redux/actions/appStateActions';

const NavbarSidebar = () => {
  const dispatch = useDispatch();
  const isCollapsed = useSelector<GlobalState, boolean>(state => state.appState.sidebarCollapsed);
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
