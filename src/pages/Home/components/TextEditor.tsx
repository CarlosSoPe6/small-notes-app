/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Note from '../../../models/Note';

import '../../../styles/home/text-editor.css';

type SetDisplayTypeHandler = React.Dispatch<React.SetStateAction<DisplayType>>;
export type DisplayType = 'VIEW' | 'EDIT';

export interface MDEditorProps {
  note: Note;
  loadedNote?: number
  displayType: DisplayType;
  onUpdateBody: (text: string) => void;
}

const onFocusHandler = (setDisplayType: SetDisplayTypeHandler) => {
  setDisplayType('EDIT');
};

const onBlurHandler = (setDisplayType: SetDisplayTypeHandler) => {
  setDisplayType('VIEW');
};

const MDEditor: FC<MDEditorProps> = function TextEditor({
  note,
  displayType,
  onUpdateBody,
  loadedNote,
}): JSX.Element {
  const isContentEditable = displayType === 'EDIT';
  const { body, id } = note;
  return (
    <div className="text-editor-container">
      {isContentEditable ? (
          <textarea
            key={id}
            defaultValue={body}
            onChange={(e) => onUpdateBody(e.currentTarget.value)}
          />
      ) :
          <ReactMarkdown>{body}</ReactMarkdown>}
    </div>
  );
};

export default MDEditor;
