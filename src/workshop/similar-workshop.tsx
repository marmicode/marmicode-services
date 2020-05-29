import { PageSection } from '../shared/page-section'
import { theme } from '../config/theme'
import { WorkshopsCard } from '../workshops/workshops-card'
import React from 'react'

export function SimilarWorkshop() {
  return (
    <PageSection title={'Similar Workshops'}>
      <div
        css={{
          display: 'flex',
          margin: 'auto',
          flexWrap: 'wrap',
          [theme.breakpoints.down('sm')]: {
            width: '350px',
          },
        }}
      >
        <WorkshopsCard />
        <div css={{ width: '20px' }} />
        <WorkshopsCard />
      </div>
    </PageSection>
  )
}
