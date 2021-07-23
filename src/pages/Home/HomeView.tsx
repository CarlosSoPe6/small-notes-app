import React, { FC } from 'react';
import TextEditor, { DisplayType, OnUpdateTextEditorHandler } from './components/TextEditor';
import '../../styles/home-view.css';
import { Note } from '../../redux/reducers/editorReducer';

export interface HomeViewProps {
  loadedNote?: number;
  notes: Note[];
  onUpdate: OnUpdateTextEditorHandler;
  displayType: DisplayType;
}

const HomeView: FC<HomeViewProps> = function HomeView(props): JSX.Element {
  const { loadedNote, notes } = props;
  const rawTextValue = loadedNote !== undefined ? notes[loadedNote].body : '';
  return (
    <div className="home-view-container">
      <TextEditor rawTextValue={rawTextValue} {...props} />
    </div>
  );
};

export default HomeView;
