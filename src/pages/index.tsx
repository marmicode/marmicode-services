import '@emotion/core'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { CoachSection } from '../components/landing/coach'
import { ContactSection } from '../components/landing/contact'
import { SectionContainer } from '../components/landing/section-container'
import { ServicesSection } from '../components/landing/services'
import { Splash } from '../components/landing/splash'
import { Layout } from '../components/layout'
import { Slant } from '../components/slant'

export const IndexPage = () => {
  const { t } = useTranslation('landing')

  /* @todo add pricing section */
  /* @todo add testimonials section */
  return (
    <Layout title={'Welcome'}>
      <Splash />
      <Slant />

      {/* Services. */}
      <SectionContainer
        hasBackground={false}
        hasSlant={true}
        title={t('sections.services')}
      >
        <ServicesSection />
      </SectionContainer>

      {/* Coach. */}
      <SectionContainer
        hasBackground={true}
        hasSlant={true}
        title={t('sections.coach')}
      >
        <CoachSection />
      </SectionContainer>

      {/* Contact. */}
      <SectionContainer hasBackground={false} title={t('sections.contact')}>
        <ContactSection />
      </SectionContainer>
    </Layout>
  )
}

export default IndexPage
