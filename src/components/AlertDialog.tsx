import React, { FC } from 'react';

import '../styles/alerts/alert-dialog.css';

export interface AlertDialogProps {
  text: string;
  onAccept: () => void;
  onCancel: () => void;
}

const AlertDialog: FC<AlertDialogProps> =
  function AlertDialog({ text, onAccept, onCancel }): JSX.Element {
    return (
      <div className="alert-dialog-background">
        <div className="alert-dialog-container" role="alert">
          <div className="alert-dialog-body">
            <h3>{text}</h3>
          </div>
          <div className="alert-dialog-actions-container">
            <button type="button" onClick={onAccept}>Aceptar</button>
            <button type="button" onClick={onCancel}>Cancelar</button>
          </div>
        </div>
      </div>
    );
  };

export default AlertDialog;
