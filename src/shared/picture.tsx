import '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import GatsbyImage from 'gatsby-image'

export const Picture = ({
  path,
  borderColor,
  borderWidth = '1px',
  isCircle,
  height,
  width,
}: {
  path: string
  borderColor?: string
  borderWidth?: string
  isCircle?: boolean
  height?: string
  width?: string
}) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { glob: "**/*.(jpg|png)" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 4000) {
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
    <GatsbyImage
      css={{
        ...(isCircle
          ? {
              borderStyle: 'solid',
              borderColor,
              borderWidth,
              borderRadius: '50%',
            }
          : {}),
        height: height,
        width: width,
      }}
      fluid={fileEdge.node.childImageSharp.fluid}
    />
  )
}
