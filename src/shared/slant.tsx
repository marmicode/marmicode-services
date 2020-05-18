import { css } from '@emotion/core'
import React from 'react'

export function Slant() {
  const height = '5vh'
  return (
    <svg
      css={css({
        height,
        width: '100%',
        position: 'relative',
        top: `-${height}`,
      })}
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      <polygon points="0,100 100,0 100,100" css={css({ fill: 'white' })} />
    </svg>
  )
}
