import { graphql, useStaticQuery } from 'gatsby'
import GatsbyImage from 'gatsby-image'

export const Picture = ({ path, width }: { path: string; width?: string }) => {
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
    <GatsbyImage
      css={{
        borderStyle: 'solid',
        borderColor: 'rgba(255,255,255,.5)',
        borderWidth: '1px',
        borderRadius: '50%',
        width: width,
      }}
      fluid={fileEdge.node.childImageSharp.fluid}
    />
  )
}
