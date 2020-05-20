import { css } from '@emotion/core'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import { marmicodeSecondaryColor } from '../config/config'
import { theme } from '../config/theme'

export default function WorkshopPage() {
  const { t } = useTranslation('workshop')

  return (
    <Layout title={t('title')}>
      <h1>WORKSHOPS</h1>
    </Layout>
  )
}
