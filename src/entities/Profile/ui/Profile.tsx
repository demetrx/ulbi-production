import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Profile.module.scss';

interface ProfileProps {
  className?: string;
}

export const Profile: FC<ProfileProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(cls.profile, {}, [className])}>

    </div>
  );
};
