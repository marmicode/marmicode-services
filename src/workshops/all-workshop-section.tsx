import React from 'react'
import { LandingSection } from '../landing/landing-section'
import { TopLeftSlant } from '../shared/slant'
import { WorkshopsCard } from './workshops-card'

export function AllWorkshopSection() {
  return (
    <LandingSection title={'Upcoming workshops'}>
      <TopLeftSlant />
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: 'white',
          flexWrap: 'wrap',
          margin: 'auto',
          marginTop: '20px',
        }}
      >
        <WorkshopsCard />
        <WorkshopsCard />
        <WorkshopsCard />
        <WorkshopsCard />
      </div>
    </LandingSection>
  )
}
