import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar = memo((props: NavBarProps) => {
  const { className } = props;

  const [isAuthModalOpened, setIsAuthModalOpened] = useState(false);
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const handleOpenModal = useCallback(() => {
    setIsAuthModalOpened(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsAuthModalOpened(false);
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
    handleCloseModal();
  }, [dispatch, handleCloseModal]);

  if (authData) {
    return (
      <header className={classNames(cls.navBar, {}, [className])}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={handleLogout}>
          {t('Log Out')}
        </Button>
      </header>
    );
  }

  return (
    <header className={classNames(cls.navBar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={handleOpenModal}>
        {t('Log In')}
      </Button>
      {isAuthModalOpened && <LoginModal isOpen={isAuthModalOpened} onClose={handleCloseModal} />}
    </header>
  );
});
