import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ListIcon from '@/shared/assets/icons/list.svg';
import TileIcon from '@/shared/assets/icons/tile.svg';
import { Button, ButtonTheme, Icon } from '@/shared/ui';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  className?: string;
  view?: ArticleView;
  onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.TILE,
    icon: TileIcon,
  },
  {
    view: ArticleView.LIST,
    icon: ListIcon,
  },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;

  const handleViewClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={classNames(cls.articleViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          key={viewType.view}
          theme={ButtonTheme.CLEAR}
          onClick={handleViewClick(viewType.view)}
        >
          <Icon
            className={classNames('', { [cls.notSelected]: viewType.view !== view })}
            Svg={viewType.icon}
            width={24}
            height={24}
          />
        </Button>
      ))}
    </div>
  );
});
