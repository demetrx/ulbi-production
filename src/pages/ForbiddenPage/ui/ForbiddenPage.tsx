import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const ForbiddenPage = () => {
    const { t } = useTranslation('');

    return (
        <Page data-testid="ForbiddenPage">
            {t("You don't have required rights to access this page")}
        </Page>
    );
};

export default ForbiddenPage;
