import Card from '@material-ui/core/Card'
import { theme } from '../config/theme'
import { Picture } from '../shared/picture'
import React from 'react'

export function WorkshopCard() {
  return (
    <Card
      css={{
        height: '100%',
        display: 'flex',
        margin: 'auto',
        flexDirection: 'column',
        width: '70%',
        [theme.breakpoints.up('md')]: {
          width: '50%',
        },
      }}
    >
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: '#380030',
          color: 'white',
        }}
      >
        <Picture path={'workshop/angular.png'} height={'250px'} width={'50%'} />
        <div css={{ display: 'flex', flexDirection: 'column', margin: 'auto' }}>
          <h3> - Avantage 1 </h3>
          <h3> - Avantage 2 </h3>
          <h3> - Avantage 3 </h3>
          <h3> - Avantage 4 </h3>
        </div>
      </div>
      <div css={{ display: 'flex', flexDirection: 'row' }}>
        <div
          css={{
            textAlign: 'center',
            flex: 1,
            border: 'solid',
            borderColor: '#380030',
          }}
        >
          <h3>Next date</h3>
          <h2>TUE, JUN 23 </h2>
        </div>
        <div
          css={{
            textAlign: 'center',
            flex: 1,
            border: 'solid',
            borderColor: '#380030',
          }}
        >
          <h3>Price</h3>
          <h2>From €495,60</h2>
        </div>
      </div>
    </Card>
  )
}
