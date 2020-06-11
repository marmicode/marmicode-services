import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import { Banner } from './banner'
import { Footer } from './footer'
import { LandingSection } from './landing-section'
import { NewsSection } from './news-section'
import { PresentationCard } from './presentation-card'
import { ServicesSection } from './services-section'
import { TalksSection } from './talks-section'
import { AllWorkshopSection } from '../workshops/all-workshop-section'

export function LandingPage() {
  const { t } = useTranslation('landing')

  return (
    <Layout title={t('title')}>
      <Banner />
      <AllWorkshopSection />
      <LandingSection title={'coach'}>
        <PresentationCard />
      </LandingSection>
      <ServicesSection />
      <Footer />
    </Layout>
  )
}
