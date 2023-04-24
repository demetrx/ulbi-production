import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui';
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
    <Select
      className={className}
      label={t('Choose Country')}
      value={value}
      options={options}
      readOnly={readOnly}
      onChange={onChange as (value: string) => void}
    />
  );
});
