import { css } from '@emotion/core'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import { Banner } from '../landing/banner'
import { Person } from '../shared/person'
import { Picture } from '../shared/picture'
import { TopLeftSlant } from '../shared/slant'

export function DottyLine() {
  const width = 60
  const style = css({
    borderBottom: '3px solid',
    float: 'left',
    margin: '20px 5px',
  })

  const itemList = [
    {
      color: '#380030',
      width,
    },
    {
      color: '#600053',
      width: width / 2,
    },
    {
      color: '#810070',
      width: width / 4,
    },
  ]

  return (
    <div>
      {itemList.map((item, index) => (
        <div
          key={index}
          css={[
            style,
            css({
              borderBottomColor: item.color,
              width: `${item.width}px`,
            }),
          ]}
        />
      ))}
    </div>
  )
}

export function ServiceCard({ title, picture, children }) {
  return (
    <Card
      elevation={10}
      css={css({
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        margin: '20px',
        minWidth: '300px',
      })}
    >
      <CardContent css={{ textAlign: 'center' }}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Picture path={picture} />
        <Typography variant="body2" color="textSecondary" component="p">
          {children}
        </Typography>
      </CardContent>
      <div css={css({ flex: 1 })} />
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
    <Person
      borderColor={'secondary'}
      name={'Foo BAR'}
      picturePath={'younes.jpg'}
    >
      <div
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0px',
        }}
      >
        <div>
          <h2>Google Developers Experts</h2>
          <p>For angular and Web Technologies</p>
        </div>
        <div>
          <h2>eXtrem Programming Coach</h2>
        </div>
      </div>
      <div
        css={{
          border: 'solid 2px black',
          width: '500px',
          height: '200px',
          margin: 'auto',
          marginBottom: '20px',
          textAlign: 'center',
        }}
      >
        Vidéo
      </div>
    </Person>
  )
}
export function PublicationSection({ picture, children }) {
  return (
    <Card
      elevation={10}
      css={css({
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        margin: '20px',
        minWidth: '300px',
      })}
    >
      <CardContent css={{ textAlign: 'center' }}>
        <Picture path={picture} />
        <Typography variant="body2" color="textSecondary" component="p">
          {children}
        </Typography>
      </CardContent>
      <div css={css({ flex: 1 })} />
    </Card>
  )
}
//export default function () {
//  const classes = useStyles();
//  const bull = <span className={classes.bullet}>•</span>;

//  return (
//    <Card className={classes.root}>
//  <CardContent>
//       <Typography className={classes.title} color="textSecondary" gutterBottom>
//          Word of the Day
//        </Typography>
//        <Typography variant="h5" component="h2">
//          be{bull}nev{bull}o{bull}lent
//        </Typography>
//        <Typography className={classes.pos} color="textSecondary">
//          adjective
//        </Typography>
//        <Typography variant="body2" component="p">
//          well meaning and kindly.
//          <br />
//          {'"a benevolent smile"'}
//        </Typography>
//      </CardContent>
//      <CardActions>
//        <Button size="small">Learn More</Button>
//      </CardActions>
//    </Card>
//  );
//}

//export function TalkSection() {
//  return (
//    <Card>
//      <CardContent>
//        <picture path={'landing/talk1.png'} />
//      </CardContent>
//    </Card>
//  )
//}

export default function LandingPage() {
  const { t } = useTranslation('landing')

  return (
    <Layout title={t('title')}>
      <Banner />
      <div css={css({ position: 'relative', backgroundColor: 'white' })}>
        <TopLeftSlant />
        <DottyLine />
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          color={'primary'}
          style={{ padding: '30px' }}
        >
          Services
        </Typography>
        <div
          css={css({
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          })}
        >
          <ServiceCard title={'WORKSHOPS'} picture={'landing/workshop.jpg'}>
            Our training is the opportunity to deep dive in some advanced
            topics:
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Angular</li>
            <li>APIs ReST</li>
            <li>Agility & testing</li>
          </ServiceCard>

          <ServiceCard title={'COACHING'} picture={'landing/coaching.jpg'}>
            To complement support
            <li>Resolve the difficulties encountered</li>
            <li>Advise (or help?) the company</li>
            <li>answer the questions</li>
          </ServiceCard>

          <ServiceCard title={'CODE REVIEW'} picture={'landing/codereview.jpg'}>
            In addition to early detection of issues, bugs, security
            vulnerabilities, our Code Reviews will help your team:
            <li>Confidence, serenity and velocity</li>
            <li>Best practices and tools</li>
            <li>Stay up-to-date</li>
          </ServiceCard>
        </div>
        <DottyLine />
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          color={'primary'}
          style={{ margin: '30px' }}
        >
          Coach
        </Typography>
        <PresentationCard />
      </div>
      <div css={{ backgroundColor: 'white' }}>
        <DottyLine />
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          color={'primary'}
          style={{ margin: '30px' }}
        >
          Talks & publications
        </Typography>
        <div
          css={css({
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          })}
        >
          <PublicationSection picture={'landing/talk1.png'}>
            Bonjour je test
          </PublicationSection>
          <PublicationSection picture={'landing/talk2.png'}>
            Bonjour je test 2
          </PublicationSection>
        </div>
        <div
          css={css({
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          })}
        >
          <PublicationSection picture={'blog.png'}>
            Bonjour je test 3
          </PublicationSection>
          <PublicationSection picture={'recipes.png'}>
            Bonjour je test 4
          </PublicationSection>
        </div>
        <Button
          variant="contained"
          size="large"
          color="primary"
          css={{
            width: '30%',
            display: 'flex',
            margin: 'auto',
          }}
        >
          See more content
        </Button>
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
