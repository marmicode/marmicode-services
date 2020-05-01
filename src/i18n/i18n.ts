import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { landingEn } from '../components/landing/landing.en'
import { landingFr } from '../components/landing/landing.fr'

i18n.use(initReactI18next).init({
  preload: ['en', 'fr'],
  fallbackLng: 'en',
  lng: process.env.GATSBY_LANGUAGE,
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

export const language = process.env.GATSBY_LANGUAGE || 'en'
