import React, { FC } from 'react';
import SidebarElement, { OnSidebarItemClickHandler, SidebarItem } from './SidebarElement';

import '../../styles/sidebar/sidebar.css';

export type OnSidebarElementClickHandler = (id: number) => void;

export interface SidebarProps {
  items: SidebarItem[];
  isCollapsed?: boolean;
  selectedIndex?: number;
  onClick: OnSidebarElementClickHandler,
  onAddNote: () => void;
  onRemoveNote: () => void;
}

const Sidebar: FC<SidebarProps> = function Sidebar({
  items,
  isCollapsed,
  selectedIndex,
  onClick,
  onAddNote,
  onRemoveNote,
}): JSX.Element {
  const onItemClickHandlder: OnSidebarItemClickHandler = (id) => {
    onClick(id);
  };
  return (
    <div
      className={`sidebar-container ${isCollapsed ? 'collapsed' : ''}`}
      role="complementary"
      aria-label="Notes list and actions"
    >
        <div className="sidebar">
          <ul
            className="sidebar-item-container"
            aria-live="polite"
            aria-label="List of notes"
          >
            { items.map((item, index) => (
              <SidebarElement
                          selected={selectedIndex === index}
                          key={item.key}
                          item={item}
                          onClickHandler={onItemClickHandlder}
              />
            )) }
          </ul>
          <div className="sidebar-actions-container" role="group" aria-label="Notes actions">
            <button id="sidebar-action-add" type="button" onClick={onAddNote}>
              +
            </button>
            <button id="sidebar-action-delete" type="button" onClick={onRemoveNote}>
              -
            </button>
          </div>
        </div>
    </div>
  );
};

export default Sidebar;
