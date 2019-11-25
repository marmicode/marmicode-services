import '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import { CoachPicture } from './coach-picture'

export const CoachSection = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(fileAbsolutePath: { glob: "**/content/coach.md" }) {
        frontmatter {
          name
          title
        }
        html
      }
    }
  `)

  return (
    <div
      css={{
        borderColor: 'rgba(255,255,255,.5)',
        borderStyle: 'solid',
        borderWidth: '1px',
        margin: '20px',
        marginTop: '50px',
      }}
    >
      <CoachPicture path={'test'} />
      <h3>{data.markdownRemark.frontmatter.name}</h3>
      <h4>{data.markdownRemark.frontmatter.title}</h4>
      Web Developer, Trainer & eXtreme Programming Coach Après 10 ans
      d’expérience en développement web et sécurité, Younes est convaincu que la
      qualité d’un produit repose principalement sur le Collective Ownership et
      la qualité de code. Son but est de propager cette culture de partage et
      d’améliorer la qualité des produits par l’échange et le levier de la
      Developer eXperience. Il est l’auteur du Guide Angular …et prend parfois
      le temps d’aller bavarder aux meetups et conférences sur différents sujets
      tels que Les Composants Interchangeables à l’AngularConnect
    </div>
  )
}
