import React, { FC } from 'react';

import '../styles/sidebar-item.css';

export type OnSidebarItemClickHandler = (key: number) => void;

export interface SidebarItem {
  id: number,
  name: string,
}

export interface SidebarElementProps {
  item: SidebarItem,
  onClickHandler: OnSidebarItemClickHandler,
}

const SidebarElement: FC<SidebarElementProps> = function SidebarElement(props): JSX.Element {
  const { item, onClickHandler } = props;
  const { id, name } = item;
  return (
    <div className="sidebar-item">
      <button
        tabIndex={id}
        onClick={() => onClickHandler(id)}
        name={name}
        type="button"
      >
        { name }
      </button>
    </div>
  );
};

export default SidebarElement;
