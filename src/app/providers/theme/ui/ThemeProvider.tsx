import React, {
  FC, ReactNode, useEffect, useMemo, useState,
} from 'react';
import { Theme, ThemeContext } from '../lib/ThemeContext';
import { useJsonSettings } from '@/entities/User';

interface ThemeProviderProps {
  initialTheme?: Theme
  children: ReactNode
}
const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const { theme: defaultTheme } = useJsonSettings();
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme || Theme.LIGHT);
  const [isThemeInitialized, setIsThemeInitialized] = useState(false);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    if (isThemeInitialized || !defaultTheme) return;

    setTheme(defaultTheme);
    setIsThemeInitialized(true);
  }, [defaultTheme, isThemeInitialized]);

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
