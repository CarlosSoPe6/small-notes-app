import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import TextEditor from './components/TextEditor';
import '../../styles/home-view.css';
import { Note } from '../../redux/reducers/editorReducer';
import { updateNote } from '../../redux/actions/editorActions';

export interface HomeViewProps {
  loadedNote?: number;
  notes: Note[];
}

const HomeView: FC<HomeViewProps> = function HomeView(props): JSX.Element {
  const { loadedNote, notes } = props;
  const rawTextValue = loadedNote !== undefined ? notes[loadedNote].body : '';
  const dispatch = useDispatch();
  const onUpdate = (text: string) => {
    if (loadedNote !== undefined) {
      const note: Note = { ...notes[loadedNote], body: text };
      dispatch(updateNote(note));
    }
  };
  return (
    <div className="home-view-container">
      <TextEditor rawTextValue={rawTextValue} onUpdate={onUpdate} />
    </div>
  );
};

export default HomeView;
