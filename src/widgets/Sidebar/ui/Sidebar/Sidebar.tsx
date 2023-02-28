import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;

  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const handleToggle = () => {
    setCollapsed((pv) => !pv);
  };

  const classname = classNames(
    cls.Sidebar,
    { [cls.collapsed]: collapsed },
    [className],
  );

  return (
    <div className={classname}>
      <button type="button" onClick={handleToggle}>{t('Toggle')}</button>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
