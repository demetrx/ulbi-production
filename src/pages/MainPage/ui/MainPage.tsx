import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page data-testid="MainPage">
            <VStack max gap="16" align="center">
                <Text size="l" align="center" title={t('Main page')} />
                <Text text={t('Main info')} />
                <Text text={t('Main credentials')} />
            </VStack>
        </Page>
    );
};

export default MainPage;
