import {
  FC, MouseEventHandler, ReactNode, useCallback, useEffect, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/theme';
import { Overlay } from 'shared/ui/Overlay/Overlay';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean
}

export const Modal: FC<ModalProps> = (props) => {
  const {
    className, children, isOpen, onClose, lazy,
  } = props;

  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const handleEscPress = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  }, [handleClose]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleEscPress);
    }

    return () => {
      window.removeEventListener('keydown', handleEscPress);
    };
  }, [isOpen, handleEscPress]);

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.modal, { [cls.opened]: isOpen }, [className])}>
        <Overlay onClick={handleClose} />
        <div className={classNames(cls.content, {}, [cls[theme]])}>
          {children}
        </div>
      </div>
    </Portal>
  );
};
