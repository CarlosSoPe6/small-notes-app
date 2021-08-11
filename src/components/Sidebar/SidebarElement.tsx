import React, { FC } from 'react';

import '../../styles/sidebar/sidebar-item.css';

export type OnSidebarItemClickHandler = (key: number) => void;

export interface SidebarItem {
  id: number;
  key: string;
  name: string;
}

export interface SidebarElementProps {
  item: SidebarItem;
  selected: boolean
  onClickHandler: OnSidebarItemClickHandler;
}

const SidebarElement: FC<SidebarElementProps> = function SidebarElement(props): JSX.Element {
  const { item, selected, onClickHandler } = props;
  const { id, name, key } = item;
  return (
    <li className={`sidebar-item ${selected ? 'selected' : ''}`}>
      <button
        onClick={() => onClickHandler(id)}
        name={name}
        type="button"
        id={key}
      >
        { name }
      </button>
    </li>
  );
};

export default SidebarElement;
