import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { HStack } from 'shared/ui/Stack';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Page } from 'widgets/Page';

const MainPage = memo(() => {
  const { t } = useTranslation('main');

  return (
    <Page>
      {t('Main Page')}
      <div>adasasfsafdasdsa</div>
      <HStack>
        <div>adasasfsafdasdsa</div>
        <ListBox
          defaultValue="Select value"
          onChange={(value: string) => console.log(value)}
          value={undefined}
          items={[
            { value: '1', content: '123' },
            { value: '12', content: 'asf', disabled: true },
            { value: '123', content: '1asdd23' },
          ]}
        />
      </HStack>
      <div>adasasfsafdasdsa</div>
      <div>adasasfsafdasdsa</div>
      <div>adasasfsafdasdsa</div>
      <div>adasasfsafdasdsa</div>
    </Page>
  );
});

export default MainPage;
