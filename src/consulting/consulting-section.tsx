import { ConceptCard } from '../shared/concept-card'
import React from 'react'
import { ConceptRight } from '../shared/concept-right'

export function ConsultingSection() {
  return (
    <>
      <ConceptCard
        title={'What is "Consulting" ?'}
        picture={'consulting/consulting1.jpg'}
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet,{' '}
      </ConceptCard>
      <ConceptRight
        title={'Our method.'}
        picture={'consulting/consulting2.jpg'}
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet,
      </ConceptRight>
      <ConceptCard title={'Avantages'} picture={'consulting/consulting3.jpg'}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet,{' '}
      </ConceptCard>
    </>
  )
}
