import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import { loadNote, updateNote } from '../../redux/actions/editorActions';
import { EditorState, Note } from '../../redux/reducers/editorReducer';
import { DisplayType } from './components/TextEditor';
import HomeView from './HomeView';

export interface HomeContainerProps {

}

const HomeContainer: FC<HomeContainerProps> = function HomeContainer(): JSX.Element {
  const dispatch = useDispatch();
  const notes = useSelector<EditorState, Array<Note>>(state => state.notes);
  const loadedNote = useSelector<EditorState, number | undefined>(state => state.loadedNote);
  const displayType = useSelector<EditorState, DisplayType>(state => state.displayType);
  const onUpdate = (text: string) => {
    if (loadedNote !== undefined) {
      const note: Note = { ...notes[loadedNote], body: text };
      dispatch(updateNote(note));
    }
  };
  return (
    <div className="main-content-container home-container">
        <Sidebar
          items={notes.map((e, i) => ({ name: e.title, id: i }))}
          onClick={(id) => dispatch(loadNote(id))}
        />
        <HomeView
          displayType={displayType}
          loadedNote={loadedNote}
          notes={notes}
          onUpdate={onUpdate}
        />
    </div>
  );
};

export default HomeContainer;
