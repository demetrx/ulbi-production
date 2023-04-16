import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props;
  const sidebarItemsList = useSelector(getSidebarItems);

  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed((pv) => !pv);
  };

  const classname = classNames(
    cls.sidebar,
    { [cls.collapsed]: collapsed },
    [className],
  );

  const itemsList = useMemo(
    () => (
      sidebarItemsList.map((i) => (
        <SidebarItem
          key={i.path}
          item={i}
          collapsed={collapsed}
        />
      ))),
    [collapsed, sidebarItemsList],
  );

  return (
    <div className={classname} data-testid="sidebar">
      <Button
        data-testid="sidebar-toggle"
        type="button"
        onClick={handleToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={cls.items}>
        {itemsList}
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </div>
  );
});
