import cls from './LangSwitcher.module.scss'

import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = props => {
  const {className} = props
  const {t, i18n} = useTranslation()

  const toggle = () => {
    const nextLang = i18n.language === 'en' ? 'ua' : 'en'
    document.documentElement.lang = nextLang
    i18n.changeLanguage(nextLang)
  }

  return (
    <Button theme={ThemeButton.CLEAR} onClick={toggle} className={classNames(cls.LangSwitcher, {}, [className])}>
      {t('Language')}
    </Button>
  );
};