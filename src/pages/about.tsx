import { css } from '@emotion/core'
import { Layout } from '../components/layout'

const redText = {
  color: 'red',
}

const redTextClass = css`
  font-size: 2em;
  color: orange;
`

export const Title = ({ name }) => {
  return <h1 css={redText}>{name}</h1>
}

// export const AboutPage = () => {
//   return (
//     <section>
//       <Title name={'jacques'}></Title>
//       <Title name={'bernard'}></Title>
//       <p css={redTextClass}>bonjour à tous</p>
//       <p>novfozoio</p>
//     </section>
//   )
// }

export const AboutPage = () => {
  return <Layout title={'about'}>
    <h1>Page About</h1>
    <p></p>
  </Layout>
}

export default AboutPage
