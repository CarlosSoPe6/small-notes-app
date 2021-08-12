import React, { FC, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useAuthRedirect from '../../../hooks/useAuthRedirect';
import useForms from '../../../hooks/useForms';
import UserForm from '../../../models/UserForm';
import { hideAlertDialog, AlertDialogPayload } from '../../../redux/actions/appStateActions';
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

  const dispatch = useDispatch();

  const [updateForm, getFormState] = useForms<UserForm>('login', defaultFormState);
  const usernameHandler = updateForm('username');
  const passwordHandler = updateForm('password');
  const passwordConfirmationHandler = updateForm('passwordConfirmation');

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
    dispatch(singup(getFormState(), onErrordialog));
  };
  const SingupViewProps = {
    usernameHandler,
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
