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

export function MediaCard() {
  return (
    <Card>
      <CardActionArea>
        <Picture path={'blog.png'} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export function Hero() {
  const textStyle = css({
    color: 'white',
    position: 'absolute',
    left: '10%',
    top: '30%',
  })

  return (
    <div css={{ marginTop: '30vh' }}>
      <div css={textStyle}>
        <h1>This is</h1>
        <h2>Cool!</h2>
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
        <Hero />
      </div>
    </div>
  )
}

export default function LandingPage() {
  const { t } = useTranslation('landing')

  return (
    <Layout title={t('title')}>
      <Banner />
      <div>
        <div css={{ display: 'flex', flexDirection: 'row' }}>
          <MediaCard></MediaCard>
          <MediaCard></MediaCard>
        </div>
      </div>
    </Layout>
  )
}

// import { css } from '@emotion/core'
// import { Layout } from '../components/layout'
// import { AppBar, Toolbar, Button, IconButton, Typography } from '@material-ui/core';

// const redText = {
//   color: 'red',
// }

// const redTextClass = css`
//   font-size: 2em;
//   color: orange;
//   text-align: center;
// `

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
