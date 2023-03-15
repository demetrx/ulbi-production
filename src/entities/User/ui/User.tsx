import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './User.module.scss';

interface UserProps {
  className?: string;
}

export const User: FC<UserProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(cls.user, {}, [className])}>

    </div>
  );
};
