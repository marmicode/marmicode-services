import { css } from '@emotion/core'

const slant = ({ height }: { height: number }) => css`
  background-color: #fff;
  transform: rotate(-2deg);
  overflow: hidden;
  height: ${height}px;
  width: 102%;
  position: absolute;
  bottom: -${height / 2}px;
`

const slantContainer = ({ height }: { height: number }) => css`
  position: absolute;
  bottom: 0;
  overflow: hidden;
  height: ${height}px;
  width: 100%;
  z-index: 1;
`

export const Slant = () => {
  const height = 80
  return (
    <div css={slantContainer({ height })}>
      <div css={slant({ height })}></div>
    </div>
  )
}
