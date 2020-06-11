import { ConceptCard } from '../shared/concept-card'
import { ConceptRight } from '../shared/concept-right'
import React from 'react'

export function ReviewSection() {
  return (
    <>
      <ConceptCard
        title={'What is "Consulting" ?'}
        picture={'review/review1.jpg'}
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet,{' '}
      </ConceptCard>
      <ConceptRight title={'Our method.'} picture={'review/review2.jpg'}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet,
      </ConceptRight>
      <ConceptCard title={'Avantages'} picture={'review/review3.jpg'}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet,{' '}
      </ConceptCard>
    </>
  )
}
