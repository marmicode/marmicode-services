import { mediaDesktop } from '../helpers/media-selectors'
import { Picture } from './picture'

export function Person({
  borderColor,
  children,
  name,
  picturePath,
}: {
  borderColor: string
  children
  name: string
  picturePath: string
}) {
  const pictureSize = 160

  return (
    <section
      css={{
        fontFamily: 'Raleway',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: `${20 + pictureSize / 2}px`,
        maxWidth: '800px',
        paddingTop: '10px',
        paddingLeft: '20px',
        paddingRight: '20px',
        position: 'relative',
        [mediaDesktop]: {
          borderColor: borderColor,
          borderStyle: 'solid',
          borderWidth: '4px',
        },
      }}
    >
      <PersonPicture
        borderColor={borderColor}
        path={picturePath}
        size={pictureSize}
      />
      <h3
        css={{
          color: 'white',
          fontWeight: 800,
          fontSize: '1.5em',
          [mediaDesktop]: {
            left: 'calc(50% + 90px)',
            position: 'absolute',
            top: '-60px',
          },
        }}
      >
        {name}
      </h3>

      {children}
    </section>
  )
}

export function PersonPicture({
  borderColor,
  path,
  size,
}: {
  borderColor: string
  path: string
  size: number
}) {
  return (
    <div
      css={{
        position: 'absolute',
        boxSizing: 'border-box',
        top: `-${size / 2}px`,
        left: `calc(50% - ${size / 2}px)`,
      }}
    >
      <Picture
        borderColor={borderColor}
        isCircle={true}
        path={path}
        width={`${size}px`}
      />
    </div>
  )
}
