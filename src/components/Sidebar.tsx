import React, { FC, useState } from 'react';
import SidebarElement, { OnSidebarItemClickHandler, SidebarItem } from './SidebarItem';

import '../styles/sidebar.css';

export type OnSidebarElementClickHandler = (id: number) => void;

export interface SidebarProps {
  items: SidebarItem[];
  onClick: OnSidebarElementClickHandler
}

const Sidebar: FC<SidebarProps> = function Sidebar({ items, onClick }): JSX.Element {
  const onItemClickHandlder: OnSidebarItemClickHandler = (id) => {
    onClick(id);
  };
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className={`sidebar-container ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar">
          <button onClick={() => setIsCollapsed(!isCollapsed)} type="button">Cerrar</button>
          <div className="sidebar-item-container">
            { items.map((item) => (
              <SidebarElement
                          key={item.id}
                          item={item}
                          onClickHandler={onItemClickHandlder}
              />
            )) }
          </div>
        </div>
    </div>
  );
};

export default Sidebar;
