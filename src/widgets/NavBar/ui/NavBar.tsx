import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = (props) => {
  const { className } = props;

  const [isAuthModalOpened, setIsAuthModalOpened] = useState(false);

  const { t } = useTranslation();

  const handleToggleModal = () => {
    setIsAuthModalOpened((prevState) => !prevState);
  };

  return (
    <div className={classNames(cls.navBar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={handleToggleModal}>
        {t('Log In')}
      </Button>
      <Modal isOpen={isAuthModalOpened} onClose={() => setIsAuthModalOpened(false)}>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        {/* eslint-disable-next-line i18next/no-literal-string */}
        Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
      </Modal>
    </div>
  );
};
