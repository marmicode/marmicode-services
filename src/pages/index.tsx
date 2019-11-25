import '@emotion/core'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Section, SectionData } from '../components/landing/section'
import { Splash } from '../components/landing/splash'
import { Layout } from '../components/layout'
import { ServicesSection } from '../components/services'
import { Slant } from '../components/slant'

export const IndexPage = () => {
  const { t } = useTranslation('landing')

  const sectionList: SectionData[] = [
    {
      title: t('sections.services'),
      content: <ServicesSection />,
    },
    // {
    //   title: 'Pricing',
    // },
    // {
    //   title: 'Testimonials',
    // },
    {
      title: t('sections.coach'),
      content: <div />,
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
