import { WorkshopsCard } from './workshops-card'
import React from 'react'
import { LandingSection } from '../landing/landing-section'

export function AllWorkshopSection() {
  return (
    <LandingSection title={'Upcomming workshops'}>
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
