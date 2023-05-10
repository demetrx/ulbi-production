import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, ReactNode } from 'react';
import { useTheme } from 'app/providers/theme';
import { Overlay } from '../Overlay/Overlay';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Drawer = memo((props: DrawerProps) => {
  const {
    className,
    children,
    onClose,
    isOpen,
  } = props;
  const { theme } = useTheme();

  const finalClass = classNames(
    cls.Drawer,
    { [cls.opened]: isOpen },
    [className, theme, 'app_drawer'],
  );

  return (
    <Portal>
      <div className={finalClass}>
        <Overlay onClick={onClose} />
        <div
          className={cls.content}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
});
