import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;
  const dispatch = useDispatch();
  const {
    username, password, isLoading, error,
  } = useSelector(getLoginState);

  const handleChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const handleChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const handleLogin = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  const { t } = useTranslation();

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Text title={t('Authorization form')} />
      {error && <Text theme={TextTheme.Error} text={t(error)} />}

      <Input
        value={username}
        onChange={handleChangeUsername}
        placeholder={t('Enter username')}
        autofocus
      />
      <Input
        value={password}
        onChange={handleChangePassword}
        placeholder={t('Enter password')}
      />
      <Button
        disabled={isLoading}
        onClick={handleLogin}
        theme={ButtonTheme.OUTLINED}
        className={cls.loginBtn}
      >
        {t('Log In')}
      </Button>
    </div>
  );
});
