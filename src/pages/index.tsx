import '@emotion/core'
import React from 'react'
import { Splash } from '../components/landing/splash'
import { Layout } from '../components/layout'
import { Slant } from '../components/slant'

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
        <section
          key={section.title}
          css={{ textAlign: 'center', height: '100vh' }}
        >
          <h1>{section.title}</h1>
        </section>
      ))}
    </Layout>
  )
}

export default IndexPage
