/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import '../../../styles/text-editor.css';

type SetDisplayTypeHandler = React.Dispatch<React.SetStateAction<DisplayType>>;
export type OnUpdateTextEditorHandler = (text: string) => void;
export type DisplayType = 'VIEW' | 'EDIT';

export interface TextEditorProps {
  rawTextValue: string;
  onUpdate: OnUpdateTextEditorHandler;
}

const onFocusHandler = (setDisplayType: SetDisplayTypeHandler) => {
  setDisplayType('EDIT');
};

const onBlurHandler = (setDisplayType: SetDisplayTypeHandler) => {
  setDisplayType('VIEW');
};

const TextEditor: FC<TextEditorProps> = function TextEditor({
  rawTextValue,
  onUpdate,
}): JSX.Element {
  const [displayType, setDisplayType] = useState<DisplayType>('VIEW');
  const isContentEditable = displayType === 'EDIT' && rawTextValue !== '';
  const editableTextValue = rawTextValue.split('\n').reduce((acc, elem) => {
    const newAcc = [...acc];
    if (elem !== '') {
      newAcc.push(<p>{elem}</p>);
    }
    return newAcc;
  }, [] as JSX.Element[]);
  return (
    <div className="text-editor-container">
      <div
        className="text-editor"
        tabIndex={0}
        role="textbox"
        aria-label="Content of note"
        contentEditable={isContentEditable}
        onFocus={() => onFocusHandler(setDisplayType)}
        onBlur={(e) => {
          onUpdate(e.currentTarget.innerText);
          onBlurHandler(setDisplayType);
        }}
      >
          {isContentEditable ? editableTextValue : <ReactMarkdown>{rawTextValue}</ReactMarkdown>}
      </div>
    </div>
  );
};

export default TextEditor;
