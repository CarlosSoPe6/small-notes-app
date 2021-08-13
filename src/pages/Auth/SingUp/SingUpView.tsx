import React, { FC } from 'react';

import '../../../styles/singup/singup.css';

export interface SingUpViewProps {
  usernameHandler: React.ChangeEventHandler<HTMLInputElement>;
  passwordHandler: React.ChangeEventHandler<HTMLInputElement>;
  passwordConfirmationHandler: React.ChangeEventHandler<HTMLInputElement>;
  submitHandler: React.FormEventHandler<HTMLFormElement>;
  isFetching: boolean;
}

const SingUpView: FC<SingUpViewProps> = ({
  usernameHandler,
  passwordHandler,
  passwordConfirmationHandler,
  submitHandler,
  isFetching,
}) => {
  return (
  <div className="singup singup-content-container">
    <div className="singup-form-container">
      <form onSubmit={submitHandler}>
        <label htmlFor="sgup-username">Username</label>
        <br />
        <input id="sgup-username" type="text" placeholder="Username" required onChange={usernameHandler} />
        <br />
        <label htmlFor="sgup-password">Password</label>
        <br />
        <input id="sgup-password" type="password" placeholder="Password" required pattern="([a-zA-Z\d]){8,}" onChange={passwordHandler} />
        <br />
        <label htmlFor="sgup-password2">Confirm password</label>
        <br />
        <input id="sgup-password2" type="password" placeholder="Confirm password" required onChange={passwordConfirmationHandler} />
        <br />
        <button type="submit" disabled={isFetching}>Sungup</button>
      </form>
    </div>
  </div>
  );
};

export default SingUpView;
