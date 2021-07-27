import React, { FC } from 'react';
import { DisplayType } from './TextEditor';
import { ReactComponent as EditIcon } from '../../../svg/edit.svg';
import { ReactComponent as ViewIcon } from '../../../svg/view.svg';

import '../../../styles/editor-action-bar.css';

export type OnDisplayTypeChangeHandler = () => void;

export interface EditorActionBarProps {
  title: string,
  displayType: DisplayType,
  onDisplayTypeChange: OnDisplayTypeChangeHandler;
  onUpdateTitle: (title: string) => void;
}

const EditorActionBar: FC<EditorActionBarProps> = ({
  title,
  displayType,
  onDisplayTypeChange,
  onUpdateTitle,
}) => {
  return (
<div className="editor-action-bar-container" role="toolbar">
    <div>
      <label htmlFor="editor-note-title">Título:</label>
    </div>
    <div>
      <input defaultValue={title} id="editor-note-title" tabIndex={0} onBlur={(e) => onUpdateTitle(e.currentTarget.value)} />
    </div>
    <div>
      <button
          id="toogle-view-button"
          tabIndex={0}
          type="button"
          aria-label="toogle display type"
          value={displayType}
          onClick={onDisplayTypeChange}
      >
          {displayType === 'VIEW' ?
            <EditIcon className="button-svg" id="edit" /> :
            <ViewIcon className="button-svg" id="view" />}
      </button>
    </div>
</div>
  );
};

export default EditorActionBar;
