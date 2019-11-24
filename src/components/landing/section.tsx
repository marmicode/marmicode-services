import React from 'react'
import { marmicodeColor, marmicodeColorWithOpacity } from '../../config/config'
import { createGradient } from '../../helpers/create-gradient'
import { Slant } from '../slant'

export interface SectionData {
  title: string
  content: React.Element
}

export const SectionTitle = ({
  hasBackground,
  title,
}: {
  hasBackground: boolean
  title: string
}) => {
  return (
    <>
      {/*Section title*/}
      <h2
        css={{
          color: hasBackground ? '#fff' : '#444',
          fontFamily: '"Source Sans Pro", Arial, sans-serif',
          fontSize: '30px',
          fontWeight: 300,
          marginBottom: '10px',
          textTransform: 'uppercase',
          '@media screen and (min-width: 768px)': {
            fontSize: '50px',
          },
        }}
      >
        {title}
      </h2>
      {/*Section title underline.*/}
      <div
        css={{
          position: 'absolute',
          width: '80px',
          height: '2px',
          background: hasBackground
            ? 'rgba(255,255,255,.5)'
            : marmicodeColorWithOpacity(0.7),
          left: '50%',
          marginLeft: '-40px',
        }}
      />
    </>
  )
}
export const Section = ({
  hasBackground,
  section,
}: {
  hasBackground: boolean
  section: SectionData
}) => {
  const backgroundStyle = hasBackground
    ? {
        background: [
          ...createGradient({
            colorA: marmicodeColorWithOpacity(0.7),
            colorB: marmicodeColor,
          }),
        ],
      }
    : {}

  return (
    <section
      css={{
        boxSizing: 'border-box',
        minHeight: '100vh',
        paddingBottom: '70px',
        paddingTop: '20px',
        textAlign: 'center',
        ...backgroundStyle,
      }}
    >
      <SectionTitle hasBackground={hasBackground} title={section.title} />
      {section.content}
    </section>
  )
}
