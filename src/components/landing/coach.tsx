import '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import { filterMarkdownFilesByLanguage } from '../../i18n/i18n'
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
    <div
      css={{
        position: 'relative',
        borderColor: 'rgba(255, 255, 255, .5)',
        borderStyle: 'solid',
        borderWidth: '1px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: `${20 + pictureSize / 2}px`,
        maxWidth: '800px',
        paddingTop: `${pictureSize / 2}px`,
        paddingLeft: '20px',
        paddingRight: '20px',
      }}
    >
      <CoachPicture path={remark.frontmatter.picture} size={pictureSize} />
      <h3 css={{ color: 'white', fontWeight: 400, fontSize: '1.5em' }}>
        {remark.frontmatter.name}
      </h3>
      {remark.frontmatter.titles.map(title => (
        <h4
          css={{ color: 'rgba(255, 255, 255, .8)', margin: '5px' }}
          key={title}
        >
          {title}
        </h4>
      ))}
      <div
        css={{
          color: 'rgba(255, 255, 255, .85)',
          textAlign: 'justify',
        }}
        dangerouslySetInnerHTML={{ __html: remark.html }}
      />
    </div>
  )
}
