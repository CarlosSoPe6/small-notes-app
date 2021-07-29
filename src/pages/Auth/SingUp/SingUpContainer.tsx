import React, { FC } from 'react';
import useForms from '../../../hooks/useForms';
import UserForm from '../../../models/UserForm';
import SingUpView from './SingUpView';

const defaultFormState = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};

const SingUpContainer: FC<{}> = () => {
  const [updateForm, getFormState] = useForms<UserForm>('login', defaultFormState);
  const usernameHandler = updateForm('username');
  const emailHandler = updateForm('email');
  const passwordHandler = updateForm('password');
  const passwordConfirmationHandler = updateForm('passwordConfirmation');
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(getFormState());
  };
  const SingupViewProps = {
    usernameHandler,
    emailHandler,
    passwordHandler,
    passwordConfirmationHandler,
    submitHandler,
  };
  return (
    <div className="main-content-container">
      <SingUpView {...SingupViewProps} />
    </div>
  );
};

export default SingUpContainer;
