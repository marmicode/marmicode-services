import '@emotion/core'
import React from 'react'
import { Section, SectionData } from '../components/landing/section'
import { Splash } from '../components/landing/splash'
import { Layout } from '../components/layout'
import { ServicesSection } from '../components/services'
import { Slant } from '../components/slant'

export const IndexPage = () => {
  const sectionList: SectionData[] = [
    {
      title: 'Services',
      content: <ServicesSection />,
    },
    // {
    //   title: 'Pricing',
    // },
    // {
    //   title: 'Testimonials',
    // },
    {
      title: 'Your Coach',
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
