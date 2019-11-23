import '@emotion/core'
import React from 'react'
import { Section, SectionData } from '../components/landing/section'
import { Splash } from '../components/landing/splash'
import { Layout } from '../components/layout'
import { Slant } from '../components/slant'

export interface ServiceData {
  icon: string
  title: string
  content: React.Element
}

export const Service = ({ service }: { service: ServiceData }) => {
  return (
    <div
      css={{
        boxShadow: '7px 14px 42px 3px rgba(163, 174, 184, 0.4)',
        margin: '20px',
        minWidth: '300px',
      }}
    >
      <h3
        css={{
          color: '#444',
          fontFamily: '"Source Sans Pro",Arial,sans-serif',
          fontWeight: 300,
        }}
      >
        {service.title}
      </h3>
      {service.content}
    </div>
  )
}

export const ServicesSection = () => {
  const serviceList: ServiceData[] = [
    {
      icon: null,
      title: 'Training',
      content: null,
    },
    {
      icon: null,
      title: 'Coaching',
      content: null,
    },
    {
      icon: null,
      title: 'Remote Consultations',
      content: null,
    },
    {
      icon: null,
      title: 'Code Review',
      content: null,
    },
  ]

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
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
