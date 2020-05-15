import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { AccessAlarm, Menu } from '@material-ui/icons'
import { Global, css } from '@emotion/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
)

const globalStyle = css`
  body {
    margin: 0;
  }
`

export default function LandingPage() {
  const classes = useStyles()

  return (
    <>
      <Global styles={globalStyle}></Global>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <IconButton>
              <AccessAlarm />
            </IconButton>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    </>
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
