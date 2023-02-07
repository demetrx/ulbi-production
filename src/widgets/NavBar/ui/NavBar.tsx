import cls from './NavBar.module.scss'

import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = props => {
  const {className} = props

  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.RED } to={'/about'}>
          О сайте
        </AppLink>
      </div>
    </div>
  );
};