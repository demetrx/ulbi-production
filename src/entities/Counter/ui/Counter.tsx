import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounter/getCounter';

export const Counter: FC = () => {
  const counterValue = useCounterValue();
  const { t } = useTranslation();
  const { increment, decrement } = useCounterActions();
  const handleIncrement = () => {
    increment();
  };

  const handleDecrement = () => {
    decrement();
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button onClick={handleIncrement} data-testid="increment-btn">{t('increment')}</Button>
      <Button onClick={handleDecrement} data-testid="decrement-btn">{t('decrement')}</Button>
    </div>
  );
};
