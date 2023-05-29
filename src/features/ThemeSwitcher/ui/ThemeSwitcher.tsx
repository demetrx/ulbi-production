import { memo, useCallback } from 'react';
import { Theme, useTheme } from '@/app/providers/theme';
import ThemeIcon from '@/shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme, Icon } from '@/shared/ui';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const { toggleTheme } = useTheme();

  const handleThemeChange = useCallback(() => {
    toggleTheme?.((theme: Theme) => {
      dispatch(saveJsonSettings({ theme }));
    });
  }, [dispatch, toggleTheme]);

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={className}
      onClick={handleThemeChange}
    >
      <Icon Svg={ThemeIcon} width={40} height={40} inverted />
    </Button>
  );
});
