import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './TestEntity.module.scss';

interface TestEntityProps {
    className?: string;
}

export const TestEntity = memo((props: TestEntityProps) => {
    const { className } = props;
    const { t } = useTranslation();
    
    return (
        <div className={classNames(cls.testEntity, {}, [className])}>
           
        </div>
    );
});