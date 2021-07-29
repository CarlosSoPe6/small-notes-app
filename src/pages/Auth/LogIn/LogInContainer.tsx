import React, { FC } from 'react';
import useForms from '../../../hooks/useForms';
import UserForm from '../../../models/UserForm';
import LogInView from './LogInView';

const defaultFormState = { username: '', password: '' };

const LogInContainer: FC<{}> = () => {
  const [updateForm, getFormState] = useForms<Pick<UserForm, 'username' | 'password'>>('login', defaultFormState);
  const usernameHandler = updateForm('username');
  const passwordHandler = updateForm('password');
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(getFormState());
  };
  const LoginViewPropms = {
    usernameHandler,
    passwordHandler,
    submitHandler,
  };
  return (
    <div className="main-content-container">
      <LogInView {...LoginViewPropms} />
    </div>
  );
};

export default LogInContainer;
