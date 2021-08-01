import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useAuthRedirect from '../../../hooks/useAuthRedirect';
import useForms from '../../../hooks/useForms';
import UserForm from '../../../models/UserForm';
import { singup } from '../../../redux/actions/authActions';
import { GlobalState } from '../../../redux/reducers/rootReducer';
import SingUpView from './SingUpView';

const defaultFormState = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};

const SingUpContainer: FC<{}> = () => {
  const isFetching = useSelector<GlobalState, boolean>(s => s.auth.isFetching);
  useAuthRedirect();
  const [updateForm, getFormState] = useForms<UserForm>('login', defaultFormState);
  const dispatch = useDispatch();
  const usernameHandler = updateForm('username');
  const emailHandler = updateForm('email');
  const passwordHandler = updateForm('password');
  const passwordConfirmationHandler = updateForm('passwordConfirmation');
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(singup(getFormState()));
  };
  const SingupViewProps = {
    usernameHandler,
    emailHandler,
    passwordHandler,
    passwordConfirmationHandler,
    submitHandler,
    isFetching,
  };
  return (
    <div className="main-content-container">
      <SingUpView {...SingupViewProps} />
    </div>
  );
};

export default SingUpContainer;
