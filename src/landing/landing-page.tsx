import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import { AllWorkshopSection } from '../workshops/all-workshop-section'
import { Banner } from './banner'
import { LandingSection } from './landing-section'
import { PresentationCard } from './presentation-card'
import { ServicesSection } from './services-section'

export function LandingPage() {
  const { t } = useTranslation('landing')

  return (
    <Layout title={t('title')}>
      <Banner />
      <AllWorkshopSection />
      <LandingSection title={'Coach'}>
        <PresentationCard />
      </LandingSection>
      <ServicesSection />
    </Layout>
  )
}
