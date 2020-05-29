import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import { Footer } from '../shared/footer'
import { PageTitle } from '../shared/page-title'
import { Picture } from '../shared/picture'

export default function(AboutPage) {
  const { t } = useTranslation('landing')
  return (
    <Layout title={t('Ressources')}>
      <PageTitle title={'About us.'} />
      <MarmicodeDetails />
      <Title />
      <WwdSection />
    </Layout>
  )
}

export function MarmicodeDetails() {
  return (
    <div
      css={{
        textAlign: 'center',
        width: '65%',
        display: 'flex',
        margin: 'auto',
        flexDirection: 'column',
      }}
    >
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
        <br />
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor
      </p>
    </div>
  )
}

export function WhatWeDo({ picture, title, children }) {
  return (
    <>
      <div
        css={{
          width: '400px',
          height: '300px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          paddingLeft: '15px',
          margin: '20px',
          textAlign: 'center',
        }}
      >
        <Picture
          path={picture}
          height={'300px'}
          width={'300px'}
          css={{
            display: 'flex',
            margin: 'auto',
          }}
        />
        <h2 css={{ display: 'flex', margin: 'auto' }}>{title}</h2>
        <p css={{ width: '400px' }}>{children}</p>
      </div>
    </>
  )
}

export function WwdSection() {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}
    >
      <WhatWeDo picture={'landing/blog.png'} title={'Workshops'}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, magna
        aliquyam erat,magna aliquyam erat,
      </WhatWeDo>
      <WhatWeDo picture={'landing/blog.png'} title={'Workshops'}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
      </WhatWeDo>
      <WhatWeDo picture={'landing/blog.png'} title={'Workshops'}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
      </WhatWeDo>
    </div>
  )
}

export function Title() {
  return (
    <h1 css={{ fontSize: '60px', textAlign: 'center', color: '#380030' }}>
      What we do.
    </h1>
  )
}