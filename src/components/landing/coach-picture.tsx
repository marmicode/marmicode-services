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
        top: `-${size / 2}px`,
        borderStyle: 'solid',
        borderColor: 'rgba(255,255,255,.5)',
        borderWidth: '1px',
        borderRadius: '50%',
        margin: 'auto',
        width: `${size}px`,
      }}
      fluid={data.file.childImageSharp.fluid}
    ></GatsbyImage>
  )
}
