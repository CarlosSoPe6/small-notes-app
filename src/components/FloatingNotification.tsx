import React, { FC } from 'react';

export interface FloatingNotificationProps {

}

const FloatingNotification: FC<FloatingNotificationProps> =
  function FloatingNotification(): JSX.Element {
    return (
      <div className="navbar-container">
          Sidebar
      </div>
    );
  };

export default FloatingNotification;
