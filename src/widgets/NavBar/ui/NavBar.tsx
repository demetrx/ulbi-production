import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = (props) => {
  const { className } = props;

  const [isAuthModalOpened, setIsAuthModalOpened] = useState(false);

  const { t } = useTranslation();

  const handleOpenModal = () => {
    setIsAuthModalOpened(true);
  };
  const handleCloseModal = () => {
    setIsAuthModalOpened(false);
  };

  return (
    <div className={classNames(cls.navBar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={handleOpenModal}>
        {t('Log In')}
      </Button>
      <LoginModal isOpen={isAuthModalOpened} onClose={handleCloseModal} />
    </div>
  );
};
