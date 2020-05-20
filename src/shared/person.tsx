import { marmicodeSecondaryColor } from '../config/config'
import { theme } from '../config/theme'
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
  const borderWidth = 3
  const borderColor = marmicodeSecondaryColor
  const pictureSize = 160

  return (
    <section
      css={{
        fontFamily: 'Raleway',
        marginLeft: '20px',
        marginRight: '20px',
        marginTop: `${20 + pictureSize / 2}px`,
        paddingTop: '10px',
        paddingLeft: '20px',
        paddingRight: '20px',
        position: 'relative',
        borderColor,
        borderStyle: 'solid',
        borderWidth: `${borderWidth}px`,
        width: '100%',
        maxWidth: '800px',
        [theme.breakpoints.up('md')]: {
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      }}
    >
      <PersonPicture
        borderColor={borderColor}
        borderWidth={borderWidth}
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
  borderWidth,
  path,
  size,
}: {
  borderColor: string
  borderWidth: number
  path: string
  size: number
}) {
  return (
    <div
      css={{
        position: 'absolute',
        boxSizing: 'border-box',
        top: `-${borderWidth + size / 2}px`,
        right: `-${borderWidth}px`,
        [theme.breakpoints.up('md')]: {
          left: `calc(50% - ${size / 2}px)`,
        },
      }}
    >
      <Picture
        borderColor={borderColor}
        borderWidth={`${borderWidth}px`}
        isCircle={true}
        path={path}
        width={`${size}px`}
      />
    </div>
  )
}
