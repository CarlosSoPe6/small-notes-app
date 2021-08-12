import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useAuthRedirect from '../../../hooks/useAuthRedirect';
import useForms from '../../../hooks/useForms';
import UserForm from '../../../models/UserForm';
import { AlertDialogPayload, hideAlertDialog } from '../../../redux/actions/appStateActions';
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

  const onAcept = useCallback(() => {
    dispatch(hideAlertDialog());
  }, [dispatch]);

  const onErrordialog: AlertDialogPayload = {
    onAcept,
    onCancel: onAcept,
    text: '',
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(getFormState(), onErrordialog));
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
