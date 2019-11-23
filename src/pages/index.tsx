import '@emotion/core'
import React from 'react'
import { Splash } from '../components/landing/splash'
import { Layout } from '../components/layout'
import { Slant } from '../components/slant'
import { marmicodeColor } from '../config/config'

export interface SectionData {
  title: string
}

export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <>
      <h2
        css={{
          color: '#444',
          fontFamily: '"Source Sans Pro", Arial, sans-serif',
          fontSize: '30px',
          fontWeight: 300,
          textTransform: 'uppercase',
          '@media screen and (min-width: 768px)': {
            fontSize: '50px',
          },
        }}
      >
        {title}
      </h2>
      <div
        css={{
          position: 'absolute',
          width: '80px',
          height: '2px',
          background: marmicodeColor,
          left: '50%',
          marginLeft: '-40px',
        }}
      />
    </>
  )
}

export const Section = ({ section }: { section: SectionData }) => {
  return (
    <>
      <section css={{ textAlign: 'center', height: '100vh' }}>
        <SectionTitle title={section.title} />
      </section>
      <Slant />
    </>
  )
}

export const IndexPage = () => {
  const sectionList = [
    {
      title: 'Services',
    },
    {
      title: 'Pricing',
    },
    {
      title: 'Testimonials',
    },
    {
      title: 'Your Coach',
    },
    {
      title: 'Get in touch',
    },
  ]

  return (
    <Layout title={'Welcome'}>
      <Splash />
      <Slant />
      {sectionList.map(section => (
        <Section key={section.title} section={section} />
      ))}
    </Layout>
  )
}

export default IndexPage
