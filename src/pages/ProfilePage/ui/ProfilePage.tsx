import React, { memo } from 'react';
import { Page } from 'widgets/Page';
import { VStack } from 'shared/ui/Stack';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui';
import { useTranslation } from 'react-i18next';

const ProfilePage = () => {
  const { id } = useParams<{id: string}>();
  const { t } = useTranslation('profile');

  if (!id) {
    return <Text title={t('Profile not found')} />;
  }

  return (
    <Page>
      <VStack gap={16} max>
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
};
export default memo(ProfilePage);
