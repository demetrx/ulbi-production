import { useContext } from 'react';
import { Theme, ThemeContext } from './ThemeContext';
import { THEME_LS_KEY } from '@/shared/consts/localStorage';

interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: Theme;

    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT;
        break;
      case Theme.LIGHT:
        newTheme = Theme.ORANGE;
        break;
      case Theme.ORANGE:
        newTheme = Theme.DARK;
        break;
      default:
        newTheme = Theme.LIGHT;
    }

    setTheme?.(newTheme);
    localStorage.setItem(THEME_LS_KEY, newTheme);
  };

  return { theme: theme || Theme.LIGHT, toggleTheme };
}
