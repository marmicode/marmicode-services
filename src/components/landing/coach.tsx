import '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import { CoachPicture } from './coach-picture'

export const CoachSection = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(fileAbsolutePath: { glob: "**/content/coach.md" }) {
        frontmatter {
          name
          picture
          title
        }
        html
      }
    }
  `)

  const pictureSize = 160

  return (
    <div
      css={{
        position: 'relative',
        borderColor: 'rgba(255, 255, 255, .5)',
        borderStyle: 'solid',
        borderWidth: '1px',
        color: 'rgba(255, 255, 255, .7)',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: `${20 + pictureSize / 2}px`,
        maxWidth: '800px',
        paddingTop: `${pictureSize / 2}px`,
      }}
    >
      <CoachPicture
        path={data.markdownRemark.frontmatter.picture}
        size={pictureSize}
      />
      <h3>{data.markdownRemark.frontmatter.name}</h3>
      <h4>{data.markdownRemark.frontmatter.title}</h4>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
    </div>
  )
}
