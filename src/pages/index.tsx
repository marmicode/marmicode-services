import '@emotion/core'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { CoachSection } from '../components/landing/coach'
import { ContactSection } from '../components/landing/contact'
import { PublicationsSection } from '../components/landing/publications'
import { SectionContainer } from '../components/landing/section-container'
import { ServicesSection } from '../components/landing/services'
import { Splash } from '../components/landing/splash'
import { Layout } from '../components/layout'
import { Picture } from '../components/shared/picture'
import { createGradient } from '../helpers/create-gradient'
import { mediaDesktop } from '../helpers/media-selectors'

export const ContentSection = () => {
  /* @todo other guides */

  const contentList = [
    {
      title: 'Blog',
      picture: 'blog.png',
      href: 'https://medium.com/wishtack',
    },
    {
      title: 'Recipes',
      picture: 'recipes.png',
      href: 'https://recettes.marmicode.fr',
    },
    {
      title: 'ReST API Checklist',
      picture: 'rest-api-checklist.png',
      href: 'https://rest-api-checklist.marmicode.io',
    },
    {
      title: 'Guide Angular',
      picture: 'guide-angular.png',
      href: 'https://guide-angular.wishtack.io',
    },
    {
      title: 'Guide API ReST',
      picture: 'guide-api-rest.png',
      href: 'https://guide-api-rest.wishtack.io',
    },
    {
      title: 'Guide Agile',
      picture: 'guide-agile.png',
      href: 'https://guide-agile.wishtack.io',
    },
  ]

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'space-around',
        justifyContent: 'center',
      }}
    >
      {contentList.map(content => (
        <a
          css={{
            position: 'relative',
            width: '100%',
            marginTop: '25px',
            [mediaDesktop]: {
              borderRadius: '10px',
              margin: '25px',
              minWidth: '300px',
              maxWidth: '500px',
              overflow: 'hidden',
            },
          }}
          href={content.href}
          target="_blank"
          key={content.title}
        >
          <Picture path={content.picture} height={'100%'}></Picture>
          {/* Overlay. */}
          <div
            css={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              background: createGradient({
                colorA: 'rgba(0, 0, 0, .5)',
                colorB: 'rgba(0, 0, 0, .7)',
              }),
              position: 'absolute',
              bottom: 0,
              height: '3em',
              width: '100%',
            }}
          >
            <h3 css={{ margin: 0 }}>{content.title}</h3>
            <div css={{ fontSize: '.9em', fontStyle: 'italic' }}>
              {content.href}
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

export const IndexPage = () => {
  const { t } = useTranslation('landing')

  /* @todo add pricing section */
  /* @todo add testimonials section */
  return (
    <Layout title={'Cooking Better Apps'}>
      <Splash />

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

      {/* Content & publications. */}
      <SectionContainer
        hasBackground={true}
        hasSlant={true}
        title={t('sections.content')}
      >
        <ContentSection />
      </SectionContainer>

      {/* Contact. */}
      <SectionContainer hasBackground={false} title={t('sections.contact')}>
        <ContactSection />
      </SectionContainer>
    </Layout>
  )
}

export default IndexPage
