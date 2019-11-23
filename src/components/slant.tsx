import { css } from '@emotion/core'

const slant = ({ height }: { height: number }) => {
  return css({
    backgroundColor: '#fff',
    transform: 'rotate(-2deg)',
    overflow: 'hidden',
    height: `${height / 2}px`,
    width: '102%',
    position: 'absolute',
    bottom: `${height / 4}px`,
  })
}

const slantContainer = ({ height }: { height: number }) => {
  return css({
    position: 'absolute',
    bottom: `-${height / 2}px`,
    overflow: 'hidden',
    height: `${height}px`,
    width: '100%',
    zIndex: 1,
  })
}

export const Slant = () => {
  const height = 160
  return (
    <div css={slantContainer({ height })}>
      <div css={slant({ height })}></div>
    </div>
  )
}
