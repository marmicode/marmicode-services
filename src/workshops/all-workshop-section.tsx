import { WorkshopsCard } from './workshops-card'
import React from 'react'

export function AllWorkshopSection() {
  return (
    <>
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
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
    </>
  )
}
