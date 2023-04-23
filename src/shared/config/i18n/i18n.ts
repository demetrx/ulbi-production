import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    // debug: __IS_DEV__,
    debug: false,
    // ns: ['articles', 'main', 'profile', 'about'], // ns to load

    interpolation: {
      escapeValue: false,
    },
    nsSeparator: false,
    keySeparator: false,

    saveMissingTo: 'all',
    saveMissing: true,

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export { i18n };
