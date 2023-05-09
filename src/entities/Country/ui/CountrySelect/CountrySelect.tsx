import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country
  onChange?: (value: Country) => void
  readOnly?: boolean
}

// Content: translations may be specified
const options = Object.values(Country).map((val) => ({ value: val, content: val }));

export const CountrySelect = memo((props: CountrySelectProps) => {
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
      defaultValue={t('Choose Country')}
      readonly={readOnly}
      direction="top right"
      label={t('Choose Country')}
    />
  );
});
