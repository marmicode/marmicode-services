import styled from '@emotion/styled'
import { mediaDesktop } from '../helpers/media-selectors'

export const HeroContainer = styled.div`
  color: white;
  font-size: 1.2em;
  text-align: center;
  ${mediaDesktop} {
    font-size: 1.8em;
  }
`

export const HeroSubtitle = styled.h2`
  font-style: italic;
`

export const Hero = ({ title, subtitle }) => (
  <HeroContainer>
    <h1>{title}</h1>
    <HeroSubtitle>{subtitle}</HeroSubtitle>
  </HeroContainer>
)
