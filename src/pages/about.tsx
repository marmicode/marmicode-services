import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import { Footer } from '../shared/footer'
import { PageTitle } from '../shared/page-title'
import { Picture } from '../shared/picture'

export default function(AboutPage) {
  const { t } = useTranslation('landing')
  return (
    <Layout title={t('About')}>
      <PageTitle title={'About us.'} />
      <MarmicodeDetails />
      <Title />
      <WwdSection />
      <ValuesSection />
      <YounesSection />
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

export function WhatWeDo({ title, children }) {
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
        <h2 css={{ display: 'flex', margin: 'auto' }}>{title}</h2>
        <p css={{ width: '400px' }}>{children}</p>
      </div>
    </>
  )
}

export function WwdSection() {
  return (
    <>
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <WhatWeDo title={'Workshops'}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          magna aliquyam erat,magna aliquyam erat,
        </WhatWeDo>
        <WhatWeDo title={'Workshops'}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        </WhatWeDo>
        <WhatWeDo title={'Workshops'}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        </WhatWeDo>
      </div>
    </>
  )
}

export function Title() {
  return (
    <h1 css={{ fontSize: '60px', textAlign: 'center', color: '#380030' }}>
      What we do.
    </h1>
  )
}

export function ValuesSection() {
  return (
    <>
      <h1 css={{ fontSize: '60px', marginLeft: '40px', color: '#380030' }}>
        {' '}
        Our values.
      </h1>
      <div>
        <h1
          css={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          Share
        </h1>
        <h1
          css={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          Support
        </h1>
        <h1
          css={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          I don't know
        </h1>
      </div>
    </>
  )
}

export function TheCoach({ picture, name, children }) {
  return (
    <div css={{ display: 'flex', justifyContent: 'space-around' }}>
      <div>
        <Picture path={picture} height={'100%'} width={'400px'} />
      </div>

      <div
        css={{
          width: '50%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h2>{name}</h2>
        <p>{children}</p>
      </div>
    </div>
  )
}

export function YounesSection() {
  return (
    <>
      <h1 css={{ fontSize: '60px', marginLeft: '40px', color: '#380030' }}>
        {' '}
        The coach.
      </h1>
      <TheCoach picture={'images/younes.jpg'} name={'Younes Jaaidi'}>
        Younes is a trainer, consultant & eXtreme Programming coach who loves
        the challenge of boosting teams efficiency and helping everyone enjoy
        every part of their job. He is passionate about testing, continuous
        deployment, automation and simplicity. His experience convinced him that
        the key to making quality products is collective ownership, passion and
        knowledge sharing. In his spare time, you will find him contributing to
        open-source software, writing articles or speaking at meetups or
        conferences… and sometimes sailing. His favorite trick? Adding features
        by removing code.
      </TheCoach>
    </>
  )
}
