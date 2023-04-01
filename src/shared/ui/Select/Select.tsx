import { ChangeEvent, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

interface SelectOption {
  value: string
  content: string
}
interface SelectProps {
  className?: string;
  label?: string
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean
}

export const Select = memo((props: SelectProps) => {
  const {
    className, label, options, value, onChange, readOnly,
  } = props;

  const optionsList = useMemo(() => options?.map((opt) => (
    <option
      key={opt.value}
      value={opt.value}
      className={cls.option}
    >
      {opt.content}
    </option>
  )), [options]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cls.wrapper, {}, [className])}>
      {label && <span className={cls.label}>{`${label}>`}</span>}

      <select className={cls.select} value={value} onChange={handleChange} disabled={readOnly}>
        {optionsList}
      </select>
    </div>
  );
});
