import React from 'react'
import { TopLeftSlant } from '../shared/slant'
import { LandingSection } from './landing-section'
import { ServiceCard } from './service-card'
import { theme } from '../config/theme'

export function ServicesSection() {
  return (
    <LandingSection title={'Other services'}>
      <div
        css={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          margin: 'auto',
          flexWrap: 'wrap',
          [theme.breakpoints.up('sm')]: {
            width: '80%',
          },
        }}
      >
        <ServiceCard title={'COACHING'} picture={'landing/coaching.jpg'}>
          To complement support
          <li>Resolve the difficulties encountered</li>
          <li>Advise (or help?) the company</li>
          <li>answer the questions</li>
        </ServiceCard>

        <ServiceCard title={'CODE REVIEW'} picture={'landing/codereview.jpg'}>
          In addition to early detection of issues, bugs, security
          vulnerabilities, our Code Reviews will help your team:
          <li>Confidence, serenity and velocity</li>
          <li>Best practices and tools</li>
          <li>Stay up-to-date</li>
        </ServiceCard>
      </div>
    </LandingSection>
  )
}
