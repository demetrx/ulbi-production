import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
          {t('Main')}
        </AppLink>
        <AppLink theme={AppLinkTheme.RED} to="/about">
          {t('About')}
        </AppLink>
      </div>
    </div>
  );
};
