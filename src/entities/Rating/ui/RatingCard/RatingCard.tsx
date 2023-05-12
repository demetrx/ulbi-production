import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RatingCard.module.scss';
import {
  Button, ButtonTheme, Card, Input, Modal, Text,
} from '@/shared/ui';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating/StarRating';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starCount: number) => void;
  onAccept?: (starCount: number, feedback?: string) => void;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className, title, feedbackTitle, hasFeedback, onCancel, onAccept,
  } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startsCount, setStartsCount] = useState(0);
  const [feedback, setFeedback] = useState('');

  const { t } = useTranslation();

  const handleSelectStars = useCallback((selectedStarsCount: number) => {
    setStartsCount(selectedStarsCount);

    if (hasFeedback) {
      setIsModalOpen(true);
    } else {
      onAccept?.(selectedStarsCount);
    }
  }, [hasFeedback, onAccept]);

  const handleAccept = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(startsCount, feedback);
  }, [feedback, onAccept, startsCount]);

  const handleCancel = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(startsCount);
  }, []);

  return (
    <Card className={classNames(cls.ratingCard, {}, [className])}>
      <VStack align="center" gap={8}>
        <Text title={title} />
        <StarRating size={40} onSelect={handleSelectStars} />
      </VStack>
      <Modal isOpen={isModalOpen} lazy onClose={handleCancel}>
        <VStack max gap={32}>
          <Text title={feedbackTitle} />
          <Input placeholder={t('Your feedback')} value={feedback} onChange={setFeedback} />
          <HStack max gap={16} justify="end">
            <Button theme={ButtonTheme.OUTLINED_RED} onClick={handleCancel}>
              {t('Cancel')}
            </Button>
            <Button onClick={handleAccept}>
              {t('Send')}
            </Button>
          </HStack>
        </VStack>
      </Modal>
    </Card>
  );
});
