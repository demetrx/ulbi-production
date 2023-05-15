import React, {
  FC, ReactNode, useEffect, useMemo, useState,
} from 'react';
import { Theme, ThemeContext } from '../lib/ThemeContext';
import { THEME_LS_KEY } from '@/shared/consts/localStorage';

const defaultTheme = localStorage.getItem(THEME_LS_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
  initialTheme?: Theme
  children: ReactNode
}
const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    document.body.classList.add(theme);

    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
