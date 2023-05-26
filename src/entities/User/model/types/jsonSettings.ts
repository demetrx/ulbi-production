import { Theme } from '@/app/providers/theme';

export interface JsonSettings {
  theme?: Theme;
  isFirstVisit?: boolean;
  settingsPageHasBeenOpened?: boolean;
}
