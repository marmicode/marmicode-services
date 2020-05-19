import { css } from '@emotion/core'
import React from 'react'
import { marmicodeColor, marmicodeColorWithOpacity } from '../../config/config'
import { createGradient } from '../../helpers/create-gradient'
import { mediaDesktop } from '../../helpers/media-selectors'
import { BottomSlant, TopSlant } from '../../shared/slant'

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
          [mediaDesktop]: {
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
export const SectionContainer = ({
  children,
  hasBackground,
  hasSlant,
  title,
}: {
  children: React.Element
  hasBackground: boolean
  hasSlant?: boolean
  title: string
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
      css={css({
        position: 'relative',
        boxSizing: 'border-box',
        minHeight: '100vh',
        paddingBottom: '70px',
        paddingTop: '20px',
        textAlign: 'center',
        ...backgroundStyle,
      })}
    >
      {hasSlant && <TopSlant />}
      <SectionTitle hasBackground={hasBackground} title={title} />
      {children}
      {hasSlant && <BottomSlant />}
    </section>
  )
}
