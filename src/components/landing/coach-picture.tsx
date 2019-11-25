import '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import GatsbyImage from 'gatsby-image'

export const CoachPicture = ({
  path,
  size,
}: {
  path: string
  size: number
}) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { glob: "*.(jpg|png)" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const fileEdge = data.allFile.edges.find(
    ({ node }) => node.relativePath === path
  )

  return (
    <div
      css={{
        position: 'absolute',
        boxSizing: 'border-box',
        top: `-${size / 2}px`,
        left: `calc(50% - ${size / 2}px)`,
      }}
    >
      <GatsbyImage
        css={{
          borderStyle: 'solid',
          borderColor: 'rgba(255,255,255,.5)',
          borderWidth: '1px',
          borderRadius: '50%',
          width: `${size}px`,
        }}
        fluid={fileEdge.node.childImageSharp.fluid}
      ></GatsbyImage>
    </div>
  )
}
