import React, {
  ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
  className?: string;
  value?: string | number
  onChange?: (value: string) => void
  autofocus?: boolean
}
/**
 * Use new components from "redesigned" folder
 * @deprecated
 */
export const Input = memo((props: InputProps) => {
  const {
    className, value, onChange, type = 'text', placeholder, autofocus, readOnly, ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  const isCaretVisible = isFocused && !readOnly;

  useEffect(() => {
    if (autofocus) {
      ref.current?.focus();
      setIsFocused(true);
    }
  }, [autofocus]);

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    setCaretPosition(e.target.selectionStart || String(value ?? '')?.length || 0);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  return (
    <div className={classNames(cls.inputWrapper, { [cls.readOnly]: readOnly }, [className])}>
      {placeholder && (
      <div className={cls.placeholder}>
        {`${placeholder}>`}
      </div>
      )}
      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          type={type}
          {...otherProps}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onSelect={handleSelect}
          value={value ?? ''}
          onChange={handleChange}
          className={cls.input}
          readOnly={readOnly}
        />
        {isCaretVisible
          && <span className={cls.caret} style={{ left: `${caretPosition * 8.8}px` }} />}
      </div>
    </div>
  );
});
