import React, { FC } from 'react';
import TextEditor, { DisplayType } from './components/TextEditor';
import '../../styles/home-view.css';
import { Note } from '../../redux/reducers/editorReducer';
import EditorActionBar, { OnDisplayTypeChangeHandler } from './components/EditorActionBar';

export interface HomeViewProps {
  loadedNote?: number;
  notes: Note[];
  onUpdateNote: (title: string, body: string) => void;
  onDisplayTypeChange: OnDisplayTypeChangeHandler;
  displayType: DisplayType;
  isCollapsed?: boolean;
}

const HomeView: FC<HomeViewProps> = function HomeView(props): JSX.Element {
  const { loadedNote, notes, isCollapsed, onUpdateNote } = props;
  const rawTextValue = loadedNote !== undefined ? notes[loadedNote].body : '';
  const rawTitle = loadedNote !== undefined ? notes[loadedNote].title : '';
  const onUpdateBody = (body: string) => {
    onUpdateNote(rawTitle, body);
  };
  const onUpdateTitle = (title: string) => {
    onUpdateNote(title, rawTextValue);
  };
  return (
    <div role="main" className={`home-view-container ${isCollapsed ? 'collapsed' : ''}`}>
      <EditorActionBar title={rawTitle} onUpdateTitle={onUpdateTitle} {...props} />
      <TextEditor rawTextValue={rawTextValue} onUpdateBody={onUpdateBody} {...props} />
    </div>
  );
};

export default HomeView;
