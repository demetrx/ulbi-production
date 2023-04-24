import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui';

interface LangSwitcherProps {
  className?: string;
  short?: boolean
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
  const { className, short } = props;
  const { t, i18n } = useTranslation();

  const toggle = () => {
    const nextLang = i18n.language === 'en' ? 'ua' : 'en';
    document.documentElement.lang = nextLang;
    i18n.changeLanguage(nextLang);
  };

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggle}
      className={classNames('', {}, [className])}
    >
      {t(short ? 'Language short' : 'Language')}
    </Button>
  );
});
