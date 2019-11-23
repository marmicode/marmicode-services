import '@emotion/core'
import React from 'react'
import { Section, SectionData } from '../components/landing/section'
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

export const ServicesSection = () => {
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

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'stretch',
        justifyContent: 'space-around',
      }}
    >
      {serviceList.map(service => (
        <Service key={service.title} service={service} />
      ))}
    </div>
  )
}

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
