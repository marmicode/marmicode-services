import { css } from '@emotion/core'
import React from 'react'

export function TopSlant() {
  const height = '5vh'
  return (
    <_Slant
      height={height}
      points={'0,100 100,0 100,100'}
      style={{ top: `-${height}` }}
    />
  )
}

export function BottomSlant() {
  const height = '5vh'
  return (
    <_Slant
      height={height}
      points={'0,0 100,0 0,100'}
      style={{ bottom: `-${height}` }}
    />
  )
}

export function _Slant({ height, points, style }) {
  return (
    <svg
      css={css({
        height,
        left: 0,
        width: '100%',
        position: 'absolute',
        zIndex: 1,
        ...style,
      })}
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      <polygon points={points} css={css({ fill: 'white' })} />
    </svg>
  )
}
