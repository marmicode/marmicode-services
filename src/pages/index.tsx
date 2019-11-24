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
        color: '#444',
        fontWeight: 300,
        fontFamily: '"Source Sans Pro",Arial,sans-serif',
        margin: '20px',
        '@media screen and (min-width: 768px)': {
          boxShadow: '7px 14px 25px 3px rgba(163, 174, 184, 0.4)',
          padding: '10px',
          width: '300px',
        },
      }}
    >
      <h3
        css={{
          fontWeight: 500,
          fontSize: '1.5em',
        }}
      >
        {service.title}
      </h3>
      <div>{service.content}</div>
    </div>
  )
}

export const ServicesSection = () => {
  const serviceList: ServiceData[] = [
    {
      icon: null,
      title: 'Training',
      content: (
        <>
          <p>
            Some folks describe our job as “the opposite of a freelance” while
            others compare us to “Gordon Ramsay in Hell’s Kitchen but nicer”.
          </p>

          <p>
            Our main goal is to achieve collective ownership and propagate
            knowledge & skills in the team “Accidentally” and not only through
            docs…
          </p>

          <p>
            …but the known side effects are test automation and TDD addiction.
          </p>
        </>
      ),
    },
    {
      icon: null,
      title: 'Coaching',
      content: (
        <div>
          <p>
            Some folks describe our job as “the opposite of a freelance” while
            others compare us to “Gordon Ramsay in Hell’s Kitchen but nicer”.
          </p>

          <p>
            Our main goal is to achieve collective ownership and propagate
            knowledge & skills in the team “Accidentally” and not only through
            docs…
          </p>

          <p>
            …but the known side effects are test automation and TDD addiction.
          </p>
        </div>
      ),
    },
    {
      icon: null,
      title: 'Remote Consultations',
      content: (
        <div>
          <p>
            Some folks describe our job as “the opposite of a freelance” while
            others compare us to “Gordon Ramsay in Hell’s Kitchen but nicer”.
          </p>

          <p>
            Our main goal is to achieve collective ownership and propagate
            knowledge & skills in the team “Accidentally” and not only through
            docs…
          </p>

          <p>
            …but the known side effects are test automation and TDD addiction.
          </p>
        </div>
      ),
    },
    {
      icon: null,
      title: 'Code Review',
      content: (
        <div>
          <p>
            Some folks describe our job as “the opposite of a freelance” while
            others compare us to “Gordon Ramsay in Hell’s Kitchen but nicer”.
          </p>

          <p>
            Our main goal is to achieve collective ownership and propagate
            knowledge & skills in the team “Accidentally” and not only through
            docs…
          </p>

          <p>
            …but the known side effects are test automation and TDD addiction.
          </p>
        </div>
      ),
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
