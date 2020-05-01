import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { landingEn } from '../components/landing/landing.en'
import { landingFr } from '../components/landing/landing.fr'

export const language = process.env.GATSBY_LANGUAGE || 'en'

i18n.use(initReactI18next).init({
  initImmediate: true,
  preload: [language],
  lng: language,
  ns: ['landing'],
  interpolation: {
    escapeValue: false /* not needed for react as it escapes by default. */,
  },
  resources: {
    en: {
      landing: landingEn,
    },
    fr: {
      landing: landingFr,
    },
  },
})
