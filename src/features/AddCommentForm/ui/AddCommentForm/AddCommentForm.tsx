import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input, Button, HStack } from '@/shared/ui';
import { useAppDispatch } from '@/shared/lib/hooks';
import {
  DynamicModuleLoader, ReducersMap,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersMap = {
  addCommentForm: addCommentFormReducer,
};
const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const text = useSelector(getAddCommentFormText);

  const handleCommentTextChange = useCallback((text: string) => {
    dispatch(addCommentFormActions.setText(text));
  }, [dispatch]);

  const handleSendComment = useCallback(() => {
    onSendComment(text || '');
    handleCommentTextChange('');
  }, [handleCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HStack justify="between" max className={classNames(cls.addCommentForm, {}, [className])}>
        <Input
          className={cls.input}
          placeholder={t('Enter your comment text')}
          value={text}
          onChange={handleCommentTextChange}
        />
        <Button onClick={handleSendComment}>{t('Submit')}</Button>
      </HStack>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
