/* eslint-disable quotes */
import React, { Fragment, useCallback, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Main from 'layouts/Main';
import FullScreenHeader from 'components/FullScreenHeader';
import NavItems from './NavItems';
import { useInterval } from 'usehooks-ts';
import '../../styles/whaaat.css';

const content = [
  {
    title: 'Into the Woods',
    subtitle:
      'Hosted at The Incline, a new queer-owned retreat space in the mountains near the Mendocino National Forest, serving majestic views, lush camping, and extensive trails to explore.',
    img: {
      src: 'https://static.baaahs.org/Z/mendocino_view.jpeg',
      style: { width: undefined, height: '120%' },
    },
  },
  {
    title: 'Enthralling Visions',
    subtitle:
      'Be ready for BAAAHS light wizardry set to full face-melt mode, nestled cutely amongst the trees. There ain’t no party like a BAAAHS party bb!!',
    img: { src: 'https://static.baaahs.org/Z/dark_rainbow_pasture.png' },
  },
  {
    title: 'Aural Pleasures',
    subtitle:
      "Multiple stages and three nights of BAAAHS-rockin' beats from your fav BAAAHS DJs and special guests on our world class sound system!",
    img: { src: 'https://static.baaahs.org/Z/ben_dancing_lights.png' },
  },
  {
    title: 'Alluring Art',
    subtitle:
      'Art is core to BAAAHS and we work hard to bring queer art from the Bay Area and beyond to our campout. Want to bring art? Let us know, we may be able to help with materials and logistics!',
    img: { src: 'https://static.baaahs.org/Z/simon_art_piece.png' },
  },
  {
    title: 'Participate and Play',
    subtitle:
      'The weekend is packed with amazing parties and activities from nature hikes to screen printing, and our infamous talent expo, and they all need YOU! This is the place to try something new and leave that judgement at the gate.',
    img: { src: 'https://static.baaahs.org/Z/crafts.jpeg' },
  },
  {
    title: 'Creating Community',
    subtitle:
      'BAAAHS Campout is a place to find happiness not in things we have or things we need, but in our community and in the simple joy of being present.',
    img: { src: 'https://static.baaahs.org/Z/trixie_and_friends.jpeg' },
  },
];

const CampoutHome = () => {
  const theme = useTheme();
  const whaaatRef = React.createRef();
  const questions = [
    'Whaaat is the capital of Assyria?',
    'Whaaat is your favorite color?',
    'Whaaat is your favourite colour?',
    'Whaaat is the airspeed velocity of an unladen swallow?',
  ];
  const whiiichRef = React.createRef(0);
  const updateWhaaat = useCallback(() => {
    if (whaaatRef.current) {
      whaaatRef.current.innerText =
        questions[whiiichRef.current++ % questions.length];
    }
  }, [whaaatRef, whiiichRef]);
  useEffect(updateWhaaat, []);
  useInterval(updateWhaaat, 2500);

  return (
    <Main navItems={NavItems}>
      <Box gap={3}>
        <FullScreenHeader
          title={'BAAAHS Campout'}
          image="https://static.baaahs.org/Z/PXL_20230416_022706111.jpeg"
          logo="https://static.baaahs.org/Z/campout_logo_no_border.png"
          text={
            <Fragment>
              <Typography
                marginTop={{ xs: '1em', md: '2em' }}
                style={{ fontFamily: 'Smooth Circulars', textAlign: 'center' }}
              >
                Memorial Day Weekend, May 24–27
              </Typography>
              <Box display="flex" justifyContent="center" mr={{ xs: 2, md: 8 }}>
                <Button
                  component={'a'}
                  variant="contained"
                  color="secondary"
                  className="rainbow"
                  sx={{
                    marginTop: '1.5em',
                    fontFamily: 'Smooth Circulars',
                    width: '60%',
                    textAlign: 'center',
                  }}
                  size="large"
                  href={'/campout/register'}
                >
                  Register Now!
                </Button>
              </Box>
            </Fragment>
          }
        />
        <Grid container spacing={2} justifyContent={'center'}>
          <Grid item container xs={10} xl={8}>
            <Box marginBottom={1}>
              <Typography
                align={'center'}
                fontWeight={600}
                variant="h3"
                fontFamily={'Smooth Circulars'}
                marginTop=".5em"
              >
                WHAAAT???
              </Typography>
              <Box align={'justify'}>
                <p>
                  BAAAHS Campout is a unique three-night queer getaway hosted on
                  The Incline, nestled in the enchanting landscapes of Mendocino
                  County. It’s a micro-cosmos free from the mundane, where you
                  can dance, unwind, laugh, and play to your heart's content.
                  It’s a place to find happiness not in things we have or things
                  we need, but in our community and in the simple joy of being
                  present.
                </p>

                <p>
                  Get ready for epic parties with amazing DJs, an art-filled
                  wonderland that will captivate your senses, and all the
                  daytime adventures you can handle. We have some surprises up
                  our sleeves that you simply must witness firsthand.
                </p>

                <p>
                  Drawing inspiration from the principles of Burning Man and
                  BAAAHS, our aim is to foster an inclusive environment that
                  embraces all forms of self-expression. We believe in the power
                  of teamwork and active participation to create an
                  extraordinary event together.
                </p>

                <p>
                  This year's theme is:
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: 'Smooth Circulars',
                      fontSize: '1.25em',
                      padding: '0 .5em',
                    }}
                  >
                    WHAAAT???
                  </Typography>
                </p>

                <div>Whaaat will you do?</div>
                <div>Whaaat will you be?</div>
                <div ref={whaaatRef}></div>

                <p>
                  BAAAHS beckons you to three zany nights of camping in the
                  Mendocino mountains: to imagine the unthinkable, the dream the
                  undreamable, to delight and be delighted.
                </p>
              </Box>
            </Box>
          </Grid>

          <Grid
            container
            item
            xs={12}
            justifyContent="center"
            sx={{ margin: '0 0 24px 0' }}
          >
            <Grid item xs={4} lg={2} xl={1} sx={{ margin: '0 8px' }}>
              <Button
                component={'a'}
                variant="contained"
                color="primary"
                className="rainbow"
                sx={{ fontFamily: 'Smooth Circulars', textAlign: 'center' }}
                size="large"
                href={'/campout/register'}
                fullWidth
              >
                Sign Me Up!
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            item
            xs={10}
            xl={8}
            spacing={2}
            justifyContent="center"
          >
            {content.map((item, i) => (
              <Grid item xs={12} sm={6} md={4} lg={4} xl={2} key={i}>
                <Box
                  alignItems="center"
                  component={Card}
                  padding={2}
                  borderRadius={2}
                  width={1}
                  height={1}
                  data-aos={'fade-up'}
                  data-aos-delay={i * 100}
                >
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems="center"
                    gap={2}
                  >
                    <Box
                      alignItems="center"
                      component={Avatar}
                      width={150}
                      height={150}
                      bgcolor={theme.palette.primary.main}
                      color={theme.palette.background.paper}
                    >
                      <img
                        src={item.img.src}
                        style={Object.assign(
                          { borderRadius: '50%', width: '150%' },
                          item.img.style,
                        )}
                        alt=""
                      />
                    </Box>
                    <Typography
                      variant="h6"
                      fontFamily="Smooth Circulars"
                      textAlign="center"
                    >
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary" textAlign="center">
                      {item.subtitle}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Grid
            container
            item
            xs={12}
            justifyContent="center"
            sx={{ margin: '24px 0' }}
          >
            <Grid item xs={4} lg={2} xl={1} sx={{ margin: '0 8px' }}>
              <Button
                component={'a'}
                variant="contained"
                color="primary"
                className="rainbow"
                sx={{ fontFamily: 'Smooth Circulars', textAlign: 'center' }}
                size="large"
                href={'/campout/register'}
                fullWidth
              >
                Let's Go Camping!
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Main>
  );
};

export default CampoutHome;
