import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';
import cls from './Code.module.scss';

interface CodeProps {
  className?: string;
  code: string
}
/**
 * Use new components from "redesigned" folder
 * @deprecated
 */
export const Code = memo((props: CodeProps) => {
  const { className, code } = props;

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code);
  }, [code]);

  return (
    <pre className={classNames(cls.code, {}, [className])}>
      <Button className={cls.copyBtn} theme={ButtonTheme.CLEAR} onClick={handleCopy}>
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>
        {code}
      </code>
    </pre>
  );
});
