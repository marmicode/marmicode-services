import '@emotion/core'
import { Picture } from '../shared/picture'

export const CoachPicture = ({
  path,
  size,
}: {
  path: string
  size: number
}) => {
  return (
    <div
      css={{
        position: 'absolute',
        boxSizing: 'border-box',
        top: `-${size / 2}px`,
        left: `calc(50% - ${size / 2}px)`,
      }}
    >
      <Picture path={path} width={`${size}px`} />
    </div>
  )
}
