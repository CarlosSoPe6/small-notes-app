import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Sidebar from '../../components/Sidebar/Sidebar';
import Note from '../../models/Note';
import { addNote, loadNote, toogleDisplayType, updateNote, removeNote } from '../../redux/actions/editorActions';
import HomeView from './HomeView';
import useInitHome from './hooks/useInitHome';

export interface HomeContainerProps {

}

const HomeContainer: FC<HomeContainerProps> = function HomeContainer(): JSX.Element {
  const dispatch = useDispatch();
  const {
    notes,
    loadedNote,
    displayType,
    isCollapsed,
  } = useInitHome();
  const onUpdate = (title: string, body: string) => {
    if (loadedNote !== undefined) {
      const note: Note = { ...notes[loadedNote], title, body };
      dispatch(updateNote(note));
    }
  };
  const onDisplayTypeChange = useCallback(() => {
    dispatch(toogleDisplayType());
  }, [dispatch]);
  const onAddNote = useCallback(() => {
    dispatch(addNote('New note'));
  }, [dispatch]);
  const onRemoveNote = useCallback(() => {
    dispatch(removeNote());
  }, [dispatch]);
  return (
    <div className="main-content-container home-container">
        <Sidebar
          isCollapsed={isCollapsed}
          items={notes.map((e, i) => ({ name: e.title, id: i, key: e.id }))}
          onClick={(id) => dispatch(loadNote(id))}
          onAddNote={onAddNote}
          onRemoveNote={onRemoveNote}
        />
        <HomeView
          isCollapsed={!isCollapsed}
          displayType={displayType}
          loadedNote={loadedNote}
          notes={notes}
          onUpdateNote={onUpdate}
          onDisplayTypeChange={onDisplayTypeChange}
        />
    </div>
  );
};

export default HomeContainer;
