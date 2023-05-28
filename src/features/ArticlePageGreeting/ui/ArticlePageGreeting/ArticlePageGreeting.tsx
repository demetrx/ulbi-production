import {
  memo, useCallback, useEffect, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { Drawer, Modal, Text } from '@/shared/ui';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch, useDevice } from '@/shared/lib/hooks';

export const ArticlePageGreeting = memo(() => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { wasArticlesPageOpened } = useJsonSettings();
  const dispatch = useAppDispatch();
  const isMobile = useDevice();

  useEffect(
    () => {
      if (!wasArticlesPageOpened) {
        setIsModalOpen(true);
        dispatch(saveJsonSettings({ wasArticlesPageOpened: true }));
      }
    },
    [dispatch, wasArticlesPageOpened],
  );

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const text = (
    <Text
      title={t('Welcome to articles page')}
      text={t('Here you can find and look through articles on different topics')}
    />
  );

  if (isMobile) {
    return (
      <Drawer>
        {text}
      </Drawer>
    );
  }

  return (
    <Modal lazy isOpen={isModalOpen} onClose={handleCloseModal}>
      {text}
    </Modal>
  );
});
