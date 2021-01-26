import Card from '@material-ui/core/Card'
import { css } from '@emotion/core'
import CardContent from '@material-ui/core/CardContent'
import { theme } from '../config/theme'
import { Picture } from '../shared/picture'
import React from 'react'
import { ButtonsGroup } from './buttons-group'

export function WorkshopsCard() {
  return (
    <Card
      css={css({
        display: 'flex',
        margin: 'auto',
        flexDirection: 'column',
        backgroundColor: '#F8F8F8',
        flexWrap: 'wrap',
        maxWidth: '600px',
        marginTop: '15px',
        marginBottom: '10px',
      })}
    >
      <CardContent>
        <div>
          <h2
            css={{
              backgroundColor: '#5E335A',
              color: 'white',
              textAlign: 'center',
              margin: '0px',
            }}
          >
            Angular Unit-Testing Workshop- Fundamental & test-driven development{' '}
          </h2>
        </div>
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#380030',
            color: 'white',
            marginTop: '0px',
            padding: '0px',
            alignItems: 'center',
            [theme.breakpoints.up('sm')]: {
              flexDirection: 'row',
            },
          }}
        >
          <Picture
            path={'workshop/angular.png'}
            height={'250px'}
            width={'50%'}
          />
          <div
            css={{
              display: 'flex',
              flexDirection: 'column',
              margin: 'auto',
            }}
          >
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
              borderRightWidth: '0px',
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
        <ButtonsGroup />
      </CardContent>
    </Card>
  )
}
