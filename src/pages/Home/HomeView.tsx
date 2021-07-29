import React, { FC } from 'react';
import TextEditor, { DisplayType } from './components/TextEditor';
import EditorActionBar, { OnDisplayTypeChangeHandler } from './components/EditorActionBar';
import NoSelectedNote from './components/NoSelectedNote';
import Note from '../../models/Note';

import '../../styles/home/home-view.css';

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
  const note = loadedNote !== undefined ? notes[loadedNote] : null;
  const onUpdateBody = (body: string) => {
    if (note === null) {
      return;
    }
    onUpdateNote(note.title, body);
  };
  const onUpdateTitle = (title: string) => {
    if (note === null) {
      return;
    }
    onUpdateNote(title, note.body);
  };
  return (
    <div role="main" className={`home-view-container ${isCollapsed ? 'collapsed' : ''}`}>
      { note ? (
        <>
          <EditorActionBar note={note} onUpdateTitle={onUpdateTitle} {...props} />
          <TextEditor note={note} onUpdateBody={onUpdateBody} {...props} />
        </>
      ) :
        <NoSelectedNote />}
    </div>
  );
};

export default HomeView;
