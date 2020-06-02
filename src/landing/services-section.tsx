import React from 'react'
import { TopLeftSlant } from '../shared/slant'
import { LandingSection } from './landing-section'
import { ServiceCard } from './service-card'

export function ServicesSection() {
  return (
    <LandingSection title={'Services'}>
      <TopLeftSlant />

      <ServiceCard title={'WORKSHOPS'} picture={'landing/workshop.jpg'}>
        Our training is the opportunity to deep dive in some advanced topics:
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Angular</li>
        <li>APIs ReST</li>
        <li>Agility & testing</li>
      </ServiceCard>

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
    </LandingSection>
  )
}
