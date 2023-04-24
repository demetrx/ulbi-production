import { FC, useEffect, useState } from 'react';
import { Button } from 'shared/ui';
import { useTranslation } from 'react-i18next';

export const BugButton: FC = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  const throwError = () => setError(true);

  return (
    <Button onClick={throwError}>
      {t('throw error')}
    </Button>
  );
};
