import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  Avatar, Text, Skeleton, AppLink,
  VStack,
} from '@/shared/ui';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { getRouteProfile } from '@/app/providers/router';

interface CommentCardProps {
  className?: string;
  comment?: Comment
  isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <VStack gap={8} max className={classNames(cls.commentCard, {}, [className, cls.loading])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton className={cls.username} height={16} width={100} />
        </div>
        <Skeleton className={cls.text} width="100%" height={50} />
      </VStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <VStack gap={8} max className={classNames(cls.commentCard, {}, [className])}>
      <AppLink to={getRouteProfile(comment.user.id)} className={cls.header}>
        {comment.user.avatar && <Avatar src={comment.user.avatar} size={30} />}
        <Text className={cls.username} text={comment.user.username} />
      </AppLink>
      <Text className={cls.text} text={comment.text} />
    </VStack>
  );
});
