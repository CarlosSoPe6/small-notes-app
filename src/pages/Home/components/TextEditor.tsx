/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

import '../../../styles/text-editor.css';

type SetDisplayTypeHandler = React.Dispatch<React.SetStateAction<DisplayType>>;
export type OnUpdateTextEditorHandler = (text: string) => void;
export type DisplayType = 'VIEW' | 'EDIT';

export interface MDEditorProps {
  rawTextValue: string;
  loadedNote?: number
  displayType: DisplayType;
  onUpdate: OnUpdateTextEditorHandler;
}

const onFocusHandler = (setDisplayType: SetDisplayTypeHandler) => {
  setDisplayType('EDIT');
};

const onBlurHandler = (setDisplayType: SetDisplayTypeHandler) => {
  setDisplayType('VIEW');
};

const MDEditor: FC<MDEditorProps> = function TextEditor({
  rawTextValue,
  displayType,
  onUpdate,
  loadedNote,
}): JSX.Element {
  const isContentEditable = rawTextValue !== '' && displayType === 'EDIT';
  return (
    <div className="text-editor-container">
      {isContentEditable ? (
          <textarea
            key={loadedNote}
            defaultValue={rawTextValue}
            onChange={(e) => onUpdate(e.currentTarget.value)}
          />
      ) :
          <ReactMarkdown>{rawTextValue}</ReactMarkdown>}
    </div>
  );
};

export default MDEditor;
