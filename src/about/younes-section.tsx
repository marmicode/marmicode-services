import { TheCoach } from './the-coach'
import React from 'react'

export function YounesSection() {
  return (
    <>
      <h1 css={{ fontSize: '60px', marginLeft: '40px', color: '#380030' }}>
        {' '}
        The coach.
      </h1>
      <TheCoach name={'Younes Jaaidi'}>
        Younes is a trainer, consultant & eXtreme Programming coach who loves
        the challenge of boosting teams efficiency and helping everyone enjoy
        every part of their job. He is passionate about testing, continuous
        deployment, automation and simplicity. His experience convinced him that
        the key to making quality products is collective ownership, passion and
        knowledge sharing. In his spare time, you will find him contributing to
        open-source software, writing articles or speaking at meetups or
        conferences… and sometimes sailing. His favorite trick? Adding features
        by removing code.{''}
      </TheCoach>
    </>
  )
}
