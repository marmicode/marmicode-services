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
import { Banner } from '../landing/banner'
import { Person } from '../shared/person'
import { Picture } from '../shared/picture'
import { TopLeftSlant } from '../shared/slant'
import { AppBar, IconButton } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import CardActionArea from '@material-ui/core/CardActionArea'

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
    <Person name={'Younes Jaaidi'} picturePath={'younes.jpg'}>
      <div
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '5px',
          flexDirection: 'column',
          alignItems: 'center',
          [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            alignItems: 'start',
          },
        }}
      >
        <div>
          <h3>Google Developers Expert</h3>
          <p>For angular and Web Technologies</p>
        </div>
        <div css={css({ width: '160px' })} />
        <div>
          <h3>eXtreme Programming Coach</h3>
        </div>
      </div>
      <div
        css={{
          border: 'solid 2px black',
          minWidth: '30',
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

export function LandingSection({
  children,
  title,
}: {
  children
  title: string
}) {
  return (
    <section
      css={css({
        position: 'relative',
        backgroundColor: 'white',
        paddingTop: '30px',
      })}
    >
      <DottyLine />
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        color={'primary'}
        style={{
          padding: '30px',
          fontSize: '40px',
          [theme.breakpoints.up('md')]: {
            fontSize: '65px',
          },
        }}
      >
        {title}
      </Typography>
      <div
        css={css({
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: '20px',
        })}
      >
        {children}
      </div>
    </section>
  )
}

export function ServicesSection() {
  return (
    <LandingSection title={'Services'}>
      <TopLeftSlant />

      <ServiceCard title={'WORKSHOPS'} picture={'landing/workshop.jpg'}>
        Our training is the opportunity to deep dive in some advanced topics:
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
    </LandingSection>
  )
}

export function TalksSection() {
  return (
    <LandingSection title={'Talks & publications'}>
      <div css={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <div
          css={css({
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          })}
        >
          <CardActionArea css={{ width: '50%' }}>
            <PublicationSection picture={'landing/talk1.png'}>
              White-labeling & A/B testing with interchangeable components |
              AngularConnect 2018{' '}
            </PublicationSection>
          </CardActionArea>

          <CardActionArea css={{ width: '50%' }}>
            <PublicationSection picture={'landing/talk2.png'}>
              Boost Your Time to Market by Dancing the Limbo | AngualrUP 2019{' '}
            </PublicationSection>
          </CardActionArea>
        </div>
        <div
          css={css({
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          })}
        >
          <CardActionArea css={{ width: '50%' }}>
            <PublicationSection picture={'landing/blog.png'}>
              The blog
            </PublicationSection>
          </CardActionArea>
          <CardActionArea css={{ width: '50%' }}>
            <PublicationSection picture={'landing/recipes.png'}>
              All the recipes
            </PublicationSection>
          </CardActionArea>
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
    </LandingSection>
  )
}

export function NewsSection() {
  return (
    <LandingSection title={'Subscribe to our newsletter'}>
      <div css={{ display: 'flex', flexDirection: 'column', margin: '10px' }}>
        <form autoComplete="off">
          <TextField
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            css={{
              width: '100%',
              [theme.breakpoints.up('md')]: {
                width: '600px',
              },
            }}
          />
        </form>
        <p css={{ fontSize: '14px' }}>
          *En renseignant votre adresse mail vous affirmez avoir pris
          connaissance de la politique de confidentialité
        </p>
        <Button variant="outlined" color="primary" css={{ width: '120px' }}>
          Confirm
        </Button>
      </div>
    </LandingSection>
  )
}

export default function LandingPage() {
  const { t } = useTranslation('landing')

  return (
    <Layout title={t('title')}>
      <Banner />
      <ServicesSection />
      <LandingSection title={'coach'}>
        <PresentationCard />
      </LandingSection>
      <TalksSection />
      <NewsSection />
      <Footer />
    </Layout>
  )
}

export function Footer() {
  return (
    <footer
      css={{ display: 'flex', padding: '25px', backgroundColor: 'white' }}
    >
      <Picture width={'90px'} height={'90px'} path={'icon.png'} />
      <div
        css={{
          display: 'flex',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          fontSize: '12px',
          [theme.breakpoints.up('md')]: {
            fontSize: '16px',
          },
        }}
      >
        <div>
          <h3>CONTACT</h3>
          <p>younes@marmicode.io</p>
          <p>+33 (0) 4 26 83 61 92 </p>
        </div>
        <div>
          <h3>INFORMATIONS</h3>
          <p>Privacy policy</p>
          <p>Personal data</p>
        </div>
      </div>
    </footer>
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

// export default LandingPage
