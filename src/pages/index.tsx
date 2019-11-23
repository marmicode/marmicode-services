import '@emotion/core'
import React from 'react'
import { Section } from '../components/landing/section'
import { Splash } from '../components/landing/splash'
import { Layout } from '../components/layout'
import { Slant } from '../components/slant'

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
