import '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import { mediaDesktop } from '../../helpers/media-selectors'
import { filterMarkdownFilesByLanguage } from '../../config/i18n'
import { CoachPicture } from './coach-picture'

export const CoachSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/content/coach.*.md" } }
      ) {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              name
              picture
              titles
            }
            html
          }
        }
      }
    }
  `)

  const pictureSize = 160

  const remark = filterMarkdownFilesByLanguage(data)[0]

  return (
    <section
      css={{
        color: 'black',
        fontFamily: 'Raleway',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: `${20 + pictureSize / 2}px`,
        maxWidth: '800px',
        paddingTop: `${pictureSize / 2}px`,
        paddingLeft: '20px',
        paddingRight: '20px',
        position: 'relative',
        [mediaDesktop]: {
          borderColor: '#5DB3AD',
          borderStyle: 'solid',
          borderWidth: '5px',
        },
      }}
    >
      <CoachPicture path={remark.frontmatter.picture} size={pictureSize} />
      <h3
        css={{
          color: '#5DB3AD',
          fontWeight: 800,
          fontSize: '1.5em',
          [mediaDesktop]: {
            left: 'calc(50% + 90px)',
            position: 'absolute',
            top: '-60px',
          },
        }}
      >
        {remark.frontmatter.name}
      </h3>

      {/* Coach container. */}
      <div css={{ margin: '40px 0' }}>
        {remark.frontmatter.titles.map(title => (
          <h4
            css={{
              fontSize: '1.2em',
              fontWeight: 800,
              margin: '5px',
            }}
            key={title}
          >
            {title}
          </h4>
        ))}
      </div>
      <div
        css={{
          lineHeight: '1.5em',
          textAlign: 'justify',
        }}
        dangerouslySetInnerHTML={{ __html: remark.html }}
      />
    </section>
  )
}
