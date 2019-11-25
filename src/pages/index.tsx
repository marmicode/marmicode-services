import '@emotion/core'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { CoachSection } from '../components/landing/coach'
import { Section, SectionData } from '../components/landing/section'
import { Splash } from '../components/landing/splash'
import { Layout } from '../components/layout'
import { ServicesSection } from '../components/landing/services'
import { Slant } from '../components/slant'

export const IndexPage = () => {
  const { t } = useTranslation('landing')

  const sectionList: SectionData[] = [
    {
      title: t('sections.services'),
      content: <ServicesSection />,
    },
    /* @todo add pricing section */
    /* @todo add testimonials section */
    {
      title: t('sections.coach'),
      content: <CoachSection />,
    },
    {
      title: 'Get in touch',
      content: <div />,
    },
  ]

  return (
    <Layout title={'Welcome'}>
      <Splash />
      <Slant />
      {sectionList.map((section, index) => (
        <div css={{ position: 'relative' }} key={section.title}>
          <Section hasBackground={index % 2 !== 0} section={section} />
          {index !== sectionList.length - 1 && <Slant />}
        </div>
      ))}
    </Layout>
  )
}

export default IndexPage
