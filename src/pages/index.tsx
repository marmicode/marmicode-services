import '@emotion/core'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { CoachSection } from '../components/landing/coach'
import { ContactSection } from '../components/landing/contact'
import { SectionContainer } from '../components/landing/section-container'
import { ServicesSection } from '../components/landing/services'
import { Splash } from '../components/landing/splash'
import { Layout } from '../components/layout'
import { Slant } from '../components/slant'
import { marmicodeColor, marmicodeColorWithOpacity } from '../config/config'
import { createGradient } from '../helpers/create-gradient'
import { mediaDesktop } from '../helpers/media-selectors'

export const PublicationsSection = () => {
  const publicationList = [
    {
      title:
        'White-labeling & A/B testing with interchangeable components @AngularConnect',
      youtubeVideoId: 'nX_HhiqmFAI',
    },
    {
      title: 'Boost Your Time to Market by Dancing the Limbo @AngularUP',
      youtubeVideoId: 'izGz7H-8yIk',
    },
  ]

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '90vh',
        justifyContent: 'space-around',
        [mediaDesktop]: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          minHeight: 0,
        },
      }}
    >
      {publicationList.map(publication => (
        <div key={publication.title} css={{ minWidth: '500px' }}>
          <iframe
            css={{
              boxSizing: 'border-box',
              height: '30vh',
              width: '100vw',
              /* @hack fix white line between videos. */
              marginBottom: '-4px',
              [mediaDesktop]: {
                height: '50vh',
                width: '40vw',
              },
            }}
            src={`https://www.youtube.com/embed/${publication.youtubeVideoId}`}
            frameBorder="0"
            allowFullScreen
          />
          <div
            css={{
              backgroundColor: marmicodeColorWithOpacity(0.8),
              boxShadow: '7px 14px 25px 3px rgba(163, 174, 184, 0.4)',
            }}
          >
            <h3
              css={{
                color: 'white',
                fontSize: '1em',
                fontWeight: 500,
                margin: 0,
                padding: '20px',
              }}
            >
              {publication.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export const IndexPage = () => {
  const { t } = useTranslation('landing')

  /* @todo add pricing section */
  /* @todo add testimonials section */
  return (
    <Layout title={'Welcome'}>
      <Splash />
      <Slant />

      {/* Services. */}
      <SectionContainer
        hasBackground={false}
        hasSlant={true}
        title={t('sections.services')}
      >
        <ServicesSection />
      </SectionContainer>

      {/* Coach. */}
      <SectionContainer
        hasBackground={true}
        hasSlant={true}
        title={t('sections.coach')}
      >
        <CoachSection />
      </SectionContainer>

      {/* Content & publications. */}
      <SectionContainer
        hasBackground={false}
        hasSlant={true}
        title={t('sections.publications')}
      >
        <PublicationsSection />
      </SectionContainer>

      {/* Contact. */}
      <SectionContainer hasBackground={false} title={t('sections.contact')}>
        <ContactSection />
      </SectionContainer>
    </Layout>
  )
}

export default IndexPage
