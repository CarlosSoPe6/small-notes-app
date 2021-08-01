import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useAuthRedirect from '../../../hooks/useAuthRedirect';
import useForms from '../../../hooks/useForms';
import UserForm from '../../../models/UserForm';
import { login } from '../../../redux/actions/authActions';
import { GlobalState } from '../../../redux/reducers/rootReducer';
import LogInView from './LogInView';

const defaultFormState = { username: '', password: '' };

const LogInContainer: FC<{}> = () => {
  const isFetching = useSelector<GlobalState, boolean>(s => s.auth.isFetching);
  useAuthRedirect();
  const dispatch = useDispatch();
  const [updateForm, getFormState] = useForms<Pick<UserForm, 'username' | 'password'>>('login', defaultFormState);
  const usernameHandler = updateForm('username');
  const passwordHandler = updateForm('password');
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(getFormState()));
  };
  const LoginViewPropms = {
    usernameHandler,
    passwordHandler,
    submitHandler,
    isFetching,
  };
  return (
    <div className="main-content-container">
      <LogInView {...LoginViewPropms} />
    </div>
  );
};

export default LogInContainer;
