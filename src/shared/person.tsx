import { marmicodeSecondaryColor } from '../config/config'
import { theme } from '../config/theme'
import { mediaDesktop } from '../helpers/media-selectors'
import { Picture } from './picture'

export function Person({
  children,
  name,
  picturePath,
}: {
  children
  name: string
  picturePath: string
}) {
  const borderColor = marmicodeSecondaryColor
  const pictureSize = 160

  return (
    <section
      css={{
        fontFamily: 'Raleway',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: `${20 + pictureSize / 2}px`,
        paddingTop: '10px',
        paddingLeft: '20px',
        paddingRight: '20px',
        position: 'relative',
        borderColor,
        borderStyle: 'solid',
        borderWidth: '3px',
      }}
    >
      <PersonPicture
        borderColor={borderColor}
        path={picturePath}
        size={pictureSize}
      />
      <h3
        css={{
          fontWeight: 800,
          fontSize: '1.5em',
          [theme.breakpoints.up('md')]: {
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
        borderWidth={'2px'}
        isCircle={true}
        path={path}
        width={`${size}px`}
      />
    </div>
  )
}
