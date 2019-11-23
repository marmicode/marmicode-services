import '@emotion/core'
import React from 'react'
import { Splash } from '../components/landing/splash'
import { Layout } from '../components/layout'
import { Slant } from '../components/slant'
import { marmicodeColor, marmicodeColorWithOpacity } from '../config/config'
import { createGradient } from '../helpers/create-gradient'

export interface SectionData {
  title: string
}

export const SectionTitle = ({
  hasBackground,
  title,
}: {
  hasBackground: boolean
  title: string
}) => {
  return (
    <>
      <h2
        css={{
          color: hasBackground ? '#fff' : '#444',
          fontFamily: '"Source Sans Pro", Arial, sans-serif',
          fontSize: '30px',
          fontWeight: 300,
          marginBottom: '10px',
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
          background: hasBackground
            ? 'rgba(255,255,255,.5)'
            : marmicodeColorWithOpacity(0.7),
          left: '50%',
          marginLeft: '-40px',
        }}
      />
    </>
  )
}

export const Section = ({
  hasBackground,
  section,
}: {
  hasBackground: boolean
  section: SectionData
}) => {
  const backgroundStyle = hasBackground
    ? {
        background: [
          ...createGradient({
            colorA: marmicodeColorWithOpacity(0.7),
            colorB: marmicodeColor,
          }),
        ],
      }
    : {}

  return (
    <div css={{ position: 'relative' }}>
      <section
        css={{
          height: '100vh',
          paddingTop: '20px',
          textAlign: 'center',
          ...backgroundStyle,
        }}
      >
        <SectionTitle hasBackground={hasBackground} title={section.title} />
      </section>
      <Slant />
    </div>
  )
}

export const Service = ({ service }) => {
  return <div />
}

export const IndexPage = () => {
  const serviceList = []

  const sectionList = [
    {
      title: 'Services',
      content: (
        <>
          {serviceList.map(service => (
            <Service service={service} />
          ))}
        </>
      ),
    },
    // {
    //   title: 'Pricing',
    // },
    // {
    //   title: 'Testimonials',
    // },
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
      {sectionList.map((section, index) => (
        <Section
          key={section.title}
          hasBackground={index % 2 !== 0}
          section={section}
        />
      ))}
    </Layout>
  )
}

export default IndexPage
