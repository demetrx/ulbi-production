import {
  FC, MouseEventHandler, ReactNode, useCallback, useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/theme';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal: FC<ModalProps> = (props) => {
  const {
    className, children, isOpen, onClose,
  } = props;

  const { theme } = useTheme();

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

  const handleContentClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
  };

  return (
    <Portal>
      <div className={classNames(cls.modal, { [cls.opened]: isOpen }, [className])}>
        <div className={cls.overlay} onClick={handleClose}>
          <div className={classNames(cls.content, {}, [cls[theme]])} onClick={handleContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
