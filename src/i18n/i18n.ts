import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { landingEn } from './landing.en'
import { landingFr } from './landing.fr'

i18n
  .use(initReactI18next)
  .init({
    preload: ['en', 'fr'],
    fallbackLng: 'fr',
    lng: 'fr',
    ns: ['landing'],
    interpolation: {
      escapeValue: false, /* not needed for react as it escapes by default. */
    },
    resources: {
      en: {
        landing: landingEn,
      },
      fr: {
        landing: landingFr
      }
    }
  });
