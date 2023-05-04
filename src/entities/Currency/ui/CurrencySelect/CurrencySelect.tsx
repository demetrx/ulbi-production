import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  value?: Currency
  onChange?: (value?: Currency) => void
  readOnly?: boolean
}

const options = Object.values(Currency).map((val) => ({ value: val, content: val }));

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const {
    className, value, onChange, readOnly,
  } = props;

  const { t } = useTranslation();

  return (
    <ListBox
      className={className}
      onChange={onChange as (value: any) => void}
      value={value}
      items={options}
      defaultValue={t('Choose currency')}
      readonly={readOnly}
      direction="top"
      label={t('Choose currency')}
    />
  );

  // return (
  //   <Select
  //     className={className}
  //     label={t('Choose currency')}
  //     value={value}
  //     options={options}
  //     readOnly={readOnly}
  //     onChange={onChange as (value: string) => void}
  //   />
  // );
});
