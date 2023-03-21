import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/store';
import { StateSchemaKey } from 'app/providers/store/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersMap = {
  [name in StateSchemaKey]?: Reducer
}

type ReducersMapEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
  reducers: ReducersMap
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const {
    children, reducers, removeAfterUnmount = true,
  } = props;

  const store = useStore() as ReduxStoreWithManager; // temporary
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersMapEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      Object.entries(reducers).forEach(([name]: ReducersMapEntry) => {
        if (removeAfterUnmount) {
          store.reducerManager.remove(name);
          dispatch({ type: `@DESTROY ${name} reducer` });
        }
      });
    };
    // eslint-disable-next-line
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {children}
    </>
  );
};
