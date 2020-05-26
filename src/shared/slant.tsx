import { css } from '@emotion/core'
import React from 'react'

export function TopLeftSlant() {
  return <_Slant points={'0,0 0,100 100,100'} position={'top'} />
}
export function TopRightSlant() {
  return <_Slant points={'0,100 100,0 100,100'} position={'top'} />
}

export function BottomRightSlant() {
  return <_Slant points={'0,0 100,0 0,100'} position={'bottom'} />
}

export function BottomLeftSlant() {
  return <_Slant points={'0,0 0,100 100,0'} position={'bottom'} />
}

export function _Slant({ points, position }) {
  const height = '5vh'
  const style =
    position === 'top'
      ? {
          top: `-${height}`,
        }
      : {
          bottom: `-${height}`,
        }

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
