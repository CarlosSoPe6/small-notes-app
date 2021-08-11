import React, { FC } from 'react';

export interface FloatingNotificationProps {

}

const FloatingNotification: FC<FloatingNotificationProps> =
  function FloatingNotification(): JSX.Element {
    return (
      <div className="floating-notification" role="alert">
          Sidebar
      </div>
    );
  };

export default FloatingNotification;
