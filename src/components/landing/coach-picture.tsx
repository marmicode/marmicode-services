import '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import GatsbyImage from 'gatsby-image'

export const CoachPicture = ({ path }: { path: string }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "younes.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <GatsbyImage
      css={{
        position: 'absolute',
        boxSizing: 'border-box',
        top: '-75px',
        borderStyle: 'solid',
        borderColor: 'rgba(255,255,255,.5)',
        borderWidth: '1px',
        borderRadius: '50%',
        margin: 'auto',
        width: '160px',
      }}
      fluid={data.file.childImageSharp.fluid}
    ></GatsbyImage>
  )
}
