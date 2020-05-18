import { css } from '@emotion/core'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import { Picture } from '../components/shared/picture'
import Avatar from '@material-ui/core/Avatar'

export function MediaCard({ title, picture, children }) {
  return (
    <Card css={css({ flex: 1, minWidth: '300px' })}>
      <CardActionArea>
        <CardContent css={{ textAlign: 'center' }}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Picture path={'blog.png'} />
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
          See workshops
        </Button>
      </CardActions>
    </Card>
  )
}
const underlineText = {
  textDecoration: 'underline',
  textDecorationColor: '#5DB3AD',
}

export function Hero() {
  const textStyle = css({
    color: 'white',
    position: 'absolute',
    fontSize: '170%',
    left: '6%',
    top: '30%',
  })

  return (
    <div css={{ marginTop: '30vh' }}>
      <div css={textStyle}>
        <h1>
          <span>Cuisinons vos apps</span>
          <span> </span>
          <span css={underlineText}>ensemble</span>
        </h1>
        <h2>Avec les meilleurs ingrédients</h2>
      </div>
    </div>
  )
}

export function Banner() {
  return (
    <div
      css={css({
        width: '100%',
        height: 'calc(100vh - 60px)',
      })}
    >
      <div css={css({ position: 'fixed', top: 0, zIndex: -1 })}>
        <Picture
          height={'100vh'}
          width={'100vw'}
          path={'cooking-pot-wide.jpg'}
        />
      </div>
      <Hero />
    </div>
  )
}
export function SimpleCard() {
  return (
    <Card css={css({ width: '60%', margin: 'auto', border: 'solid #5DB3AD' })}>
      <CardActionArea>
        <CardContent css={{ textAlign: 'center' }}>
          <Avatar alt="younes" src="blog.png" css={{ margin: 'auto' }} />
          <Typography gutterBottom variant="h5" component="h2">
            <h1>Younes Jaaidi</h1>
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
            <h2>eXtrem Programming Coach</h2>
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
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          color={'primary'}
          style={{ margin: '20px' }}
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
          <MediaCard title={'WORKSHOPS'} picture={'landing/coaching.jpg'}>
            Our training is the opportunity to deep dive in some advanced
            topics:
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Angular</li>
            <li>APIs ReST</li>
            <li>Agility & testing</li>
          </MediaCard>

          <MediaCard title={'COACHING'} picture={'blog.png'}>
            To complement support
            <li>Resolve the difficulties encountered</li>
            <li>Advise (or help?) the company</li>
            <li>answer the questions</li>
          </MediaCard>

          <MediaCard title={'CODE REVIEW'} picture={'blog.png'}>
            In addition to early detection of issues, bugs, security
            vulnerabilities, our Code Reviews will help your team:
            <li>Confidence, serenity and velocity</li>
            <li>Best practices and tools</li>
            <li>Stay up-to-date</li>
          </MediaCard>
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
        <SimpleCard></SimpleCard>
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
