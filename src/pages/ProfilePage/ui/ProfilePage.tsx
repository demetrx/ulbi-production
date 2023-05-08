import React, { memo } from 'react';
import { Page } from 'widgets/Page';
import { VStack } from 'shared/ui/Stack';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const { id } = useParams<{id: string}>();

  return (
    <Page>
      <VStack gap={16} max>
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
};
export default memo(ProfilePage);
