import { css } from '@emotion/core'

const slant = ({ height, isTop }: { height: number; isTop: boolean }) => {
  return css({
    backgroundColor: '#fff',
    transform: 'rotate(-2deg)',
    overflow: 'hidden',
    height: `${height}px`,
    width: '102%',
    position: 'absolute',
    bottom: `-${height / 2}px`,
  })
}

const slantContainer = ({
  height,
  isTop,
}: {
  height: number
  isTop: boolean
}) => {
  return css({
    position: 'absolute',
    bottom: 0,
    overflow: 'hidden',
    height: `${height}px`,
    width: '100%',
    zIndex: 1,
  })
}

export const Slant = ({ isTop }: { isTop?: boolean }) => {
  const height = 80
  return (
    <div css={slantContainer({ height, isTop })}>
      <div css={slant({ height, isTop })}></div>
    </div>
  )
}
