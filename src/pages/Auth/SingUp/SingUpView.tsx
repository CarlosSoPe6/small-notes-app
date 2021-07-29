import React, { FC } from 'react';

import '../../../styles/singup/singup.css';

export interface SingUpViewProps {
  usernameHandler: React.ChangeEventHandler<HTMLInputElement>;
  emailHandler: React.ChangeEventHandler<HTMLInputElement>;
  passwordHandler: React.ChangeEventHandler<HTMLInputElement>;
  passwordConfirmationHandler: React.ChangeEventHandler<HTMLInputElement>;
  submitHandler: React.FormEventHandler<HTMLFormElement>;
}

const SingUpView: FC<SingUpViewProps> = ({
  usernameHandler,
  emailHandler,
  passwordHandler,
  passwordConfirmationHandler,
}) => {
  return (
  <div className="singup singup-content-container">
    <div className="singup-form-container">
      <form>
        <label htmlFor="sgup-username">Username</label>
        <br />
        <input id="sgup-username" type="text" placeholder="Username" required onChange={usernameHandler} />
        <br />
        <label htmlFor="sgup-email">Email</label>
        <br />
        <input id="sgup-email" type="email" placeholder="Email" required onChange={emailHandler} />
        <br />
        <label htmlFor="sgup-password">Password</label>
        <br />
        <input id="sgup-password" type="password" placeholder="Password" required pattern="([a-zA-Z\d]){8,}" onChange={passwordHandler} />
        <br />
        <label htmlFor="sgup-password2">Confirm password</label>
        <br />
        <input id="sgup-password2" type="password" placeholder="Confirm password" required onChange={passwordConfirmationHandler} />
        <br />
        <button type="submit">Sungup</button>
      </form>
    </div>
  </div>
  );
};

export default SingUpView;
