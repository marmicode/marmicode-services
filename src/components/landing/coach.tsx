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
        borderColor: 'white',
        borderStyle: 'solid',
        borderWidth: '1px',
        color: 'white',
        fontFamily: 'Raleway',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: `${20 + pictureSize / 2}px`,
        maxWidth: '800px',
        paddingTop: `${pictureSize / 2}px`,
        paddingLeft: '20px',
        paddingRight: '20px',
        position: 'relative',
      }}
    >
      <CoachPicture path={remark.frontmatter.picture} size={pictureSize} />
      <h3 css={{ fontWeight: 800, fontSize: '1.5em' }}>
        {remark.frontmatter.name}
      </h3>
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
      <div
        css={{
          lineHeight: '1.5em',
          marginTop: '40px',
          textAlign: 'justify',
        }}
        dangerouslySetInnerHTML={{ __html: remark.html }}
      />
    </div>
  )
}
