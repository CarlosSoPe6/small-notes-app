import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { AppStateState } from '../redux/reducers/appStateReducer';
import { GlobalState } from '../redux/reducers/rootReducer';
import AlertDialog from './AlertDialog';

export interface AlertDialogSpawnerProps {

}

const useAlertDialogSpawner = () => {
  const {
    alertDialogOnAccept,
    alertDialogOnCancel,
    alertDialogText,
    alertDialogSpawns,
  } = useSelector<GlobalState, AppStateState>(state => state.appState);
  return {
    onAccept: alertDialogOnAccept,
    onCancel: alertDialogOnCancel,
    text: alertDialogText,
    spawns: alertDialogSpawns,
  };
};

const AlertDialogSpawner: FC<AlertDialogSpawnerProps> =
  function AlertDialogSpawner(): JSX.Element {
    const {
      onAccept,
      onCancel,
      text,
      spawns,
    } = useAlertDialogSpawner();
    console.log(text, spawns);
    return (
      <div className="alert-dialog-spawner">
        {spawns && <AlertDialog text={text} onAccept={onAccept} onCancel={onCancel} />}
      </div>
    );
  };

export default AlertDialogSpawner;
