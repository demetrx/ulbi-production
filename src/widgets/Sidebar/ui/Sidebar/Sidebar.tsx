import cls from './Sidebar.module.scss'

import {FC, useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = props => {
  const {className} = props

  const [collapsed, setCollapsed] = useState(false)

  const handleToggle = () => {
    setCollapsed(pv => !pv)
  }

  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <button onClick={handleToggle}>toggle</button>

      <div className={cls.switchers}>
        <ThemeSwitcher />
      {/*  LangSwitcher*/}
      </div>
    </div>
  );
};