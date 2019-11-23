import '@emotion/core'
import React from 'react'
import { Section } from '../components/landing/section'
import { Splash } from '../components/landing/splash'
import { Layout } from '../components/layout'
import { Slant } from '../components/slant'

export interface ServiceData {
  icon: string
  title: string
  paragraphs: string[]
}

export const Service = ({ service }: { service: ServiceData }) => {
  return (
    <div>
      <h3>{service.title}</h3>
    </div>
  )
}

export const IndexPage = () => {
  const serviceList: ServiceData[] = [
    {
      icon: null,
      title: 'Training',
      paragraphs: [],
    },
    {
      icon: null,
      title: 'Coaching',
      paragraphs: [],
    },
    {
      icon: null,
      title: 'Remote Consultations',
      paragraphs: [],
    },
    {
      icon: null,
      title: 'Code Review',
      paragraphs: [],
    },
  ]

  const sectionList = [
    {
      title: 'Services',
      content: (
        <>
          {serviceList.map(service => (
            <Service key={service.title} service={service} />
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
