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
  return <GatsbyImage fluid={data.file.childImageSharp.fluid}></GatsbyImage>
}
