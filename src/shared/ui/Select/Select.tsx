import { ChangeEvent, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { genericMemo } from 'shared/lib/genericMemo/genericMemo';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
  value: T
  content: string
}
interface SelectProps<T extends string> {
  className?: string;
  label?: string
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readOnly?: boolean
}
export const Select = genericMemo(<T extends string>(props: SelectProps<T>) => {
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
    onChange?.(e.target.value as T);
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
