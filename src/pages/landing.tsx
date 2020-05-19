import { css } from '@emotion/core'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { CoachSection } from '../components/landing/coach'
import Layout from '../components/layout'
import { Picture } from '../shared/picture'
import Avatar from '@material-ui/core/Avatar'
import { Banner } from '../landing/banner'
import { TopSlant } from '../shared/slant'

export function ServiceCard({ title, picture, children }) {
  return (
    <Card css={css({ flex: 1, minWidth: '300px' })}>
      <CardActionArea>
        <CardContent css={{ textAlign: 'center' }}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Picture path={picture} />
          <Typography variant="body2" color="textSecondary" component="p">
            {children}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="contained"
          size="large"
          color="primary"
          css={{ margin: 'auto', width: '100%' }}
        >
          Learn more
        </Button>
      </CardActions>
    </Card>
  )
}

export function PresentationCard() {
  return (
    <Card css={css({ width: '60%', margin: 'auto', border: 'solid #5DB3AD' })}>
      <CardActionArea>
        <CardContent css={{ textAlign: 'center' }}>
          <Avatar alt="younes" src="blog.png" css={{ margin: 'auto' }} />
          <Typography gutterBottom component="h1">
            Younes Jaaidi
          </Typography>
          <div
            css={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <h2>Google Developers Experts</h2>
              <p>For angular and Web Technologies</p>
            </div>
            <h2>eXtreme Programming Coach</h2>
          </div>
          <Picture path={'younes.jpg'} />
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default function LandingPage() {
  const { t } = useTranslation('landing')

  return (
    <Layout title={t('title')}>
      <Banner />
      <div css={css({ backgroundColor: 'white' })}>
        <TopSlant />
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          color={'primary'}
          style={{ padding: '20px' }}
        >
          Services
        </Typography>
        <div
          css={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          <ServiceCard title={'WORKSHOPS'} picture={'landing/coaching.jpg'}>
            Our training is the opportunity to deep dive in some advanced
            topics:
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Angular</li>
            <li>APIs ReST</li>
            <li>Agility & testing</li>
          </ServiceCard>

          <ServiceCard title={'COACHING'} picture={'blog.png'}>
            To complement support
            <li>Resolve the difficulties encountered</li>
            <li>Advise (or help?) the company</li>
            <li>answer the questions</li>
          </ServiceCard>

          <ServiceCard title={'CODE REVIEW'} picture={'blog.png'}>
            In addition to early detection of issues, bugs, security
            vulnerabilities, our Code Reviews will help your team:
            <li>Confidence, serenity and velocity</li>
            <li>Best practices and tools</li>
            <li>Stay up-to-date</li>
          </ServiceCard>
        </div>
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          color={'primary'}
          style={{ margin: '20px' }}
        >
          Coach
        </Typography>
        <PresentationCard></PresentationCard>
        <div css={{ background: 'black' }}>
          <CoachSection />
        </div>
      </div>
    </Layout>
  )
}

//export default function Button() {
// return (
//    <Button variant="contained" size="large" color="primary">
//      All services
//    </Button>
//  )
//}
// import { css } from '@emotion/core'
// import { Layout } from '../components/layout'
// import { AppBar, Toolbar, Button, IconButton, Typography } from '@material-ui/core';

// export const Title = ({ name }) => {
//   return <h1 css={redText}>{name}</h1>
// }

// export const LandingPage = () => {
//   return (
//     // <section>
//     //   <Title name={'jacques'}></Title>
//     //   <Title name={'bernard'}></Title>
//     //   <p css={redTextClass}>bonjour à tous</p>
//     //   <p>novfozoio</p>

//     // </section>
//     <AppBar position="static">
//       <Toolbar>
//         <IconButton
//           edge="start"
//           className={classes.menuButton}
//           color="inherit"
//           aria-label="menu"
//         >
//           <MenuIcon />
//         </IconButton>
//         <Typography variant="h6" className={classes.title}>
//           News
//         </Typography>
//         <Button color="inherit">Login</Button>
//       </Toolbar>
//     </AppBar>
//   )
// }

// export default LandingPage
