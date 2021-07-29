import React, { useState } from 'react';

export type UseFormsStateSetter<T> = (f: keyof T) => React.ChangeEventHandler<HTMLInputElement>;
export type UseFormsStateGetter<T> = () => T;

function useForms<T extends Object>(name: string, defaultValue: T):
[UseFormsStateSetter<T>, UseFormsStateGetter<T>] {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [formState, setFormState] = useState(defaultValue);
  const updateState = (field: keyof T): React.ChangeEventHandler<HTMLInputElement> => {
    return (event: React.ChangeEvent<HTMLInputElement>): void => {
      const { currentTarget: { value } } = event;
      setFormState((prev) => ({ ...prev, [field]: value }));
    };
  };
  const getState: UseFormsStateGetter<T> = () => {
    return { ...formState };
  };
  return [updateState, getState];
}

export default useForms;
