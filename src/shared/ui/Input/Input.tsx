import React, {
  ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
  className?: string;
  value?: string
  onChange?: (value: string) => void
  autofocus?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    className, value, onChange, type = 'text', placeholder, autofocus, ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

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
    setCaretPosition(e.target.selectionStart || 0);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  return (
    <div className={classNames(cls.inputWrapper, {}, [className])}>
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
          value={value}
          onChange={handleChange}
          className={cls.input}
        />
        {isFocused
          && <span className={cls.caret} style={{ left: `${caretPosition * 8.8}px` }} />}
      </div>
    </div>
  );
});
