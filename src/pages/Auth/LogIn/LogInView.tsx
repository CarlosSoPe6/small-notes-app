import React, { FC } from 'react';

import '../../../styles/login/login.css';

export interface LogInViewProps {
  usernameHandler: React.ChangeEventHandler<HTMLInputElement>;
  passwordHandler: React.ChangeEventHandler<HTMLInputElement>;
  submitHandler: React.FormEventHandler<HTMLFormElement>;
  isFetching: boolean;
}

const LogInView: FC<LogInViewProps> = ({
  usernameHandler,
  passwordHandler,
  submitHandler,
  isFetching,
}) => {
  return (
  <div className="login  login-content-container">
    <div className="login-form-container">
      <form onSubmit={submitHandler}>
        <label htmlFor="lgin-username">Username</label>
        <br />
        <input id="lgin-username" type="text" placeholder="Username" required onChange={usernameHandler} />
        <br />
        <label htmlFor="lgin-password">Password</label>
        <br />
        <input id="lgin-password" type="password" placeholder="Password" required onChange={passwordHandler} />
        <br />
        <button type="submit" disabled={isFetching}>Login</button>
      </form>
    </div>
  </div>
  );
};

export default LogInView;
