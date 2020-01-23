import { css } from '@emotion/core'

const slant = ({ height }: { height: number }) => {
  const bandHeight = height / 2
  return css({
    backgroundColor: '#fff',
    transform: 'rotate(-1.3deg)',
    overflow: 'hidden',
    height: `${bandHeight}px`,
    width: '102%',
    position: 'absolute',
    bottom: `calc(50% - ${bandHeight / 2}px)`,
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
  const height = 100
  return (
    <div css={slantContainer({ height })}>
      <div css={slant({ height })}></div>
    </div>
  )
}
