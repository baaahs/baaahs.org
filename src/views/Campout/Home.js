/* eslint-disable quotes */
import React, { Fragment, useCallback, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from 'components/Link';

import Main from 'layouts/Main';
import FullScreenHeader from 'components/FullScreenHeader';
import NavItems from './NavItems';
import { useInterval } from 'usehooks-ts';
import '../../styles/whaaat.css';

const CampoutHome = () => {
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
          image="/images/resized/PXL_20230416_022706111.webp"
          logo="/images/resized/campout_logo_no_border.webp"
          text={
            <Fragment>
              <Typography
                marginTop={{ xs: '1em', md: '2em' }}
                style={{ fontFamily: 'Smooth Circulars', textAlign: 'center' }}
              >
                Memorial Day Weekend, May 23–26
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
                  disabled
                >
                  Tickets coming soon!
                </Button>
              </Box>
            </Fragment>
          }
        />
        <Grid container spacing={2} justifyContent={'center'}>
          <Grid item container xs={10} xl={8}>
            <!-- <Box marginBottom={1}>
              <Typography
                align={'center'}
                fontWeight={600}
                variant="h3"
                fontFamily={'Smooth Circulars'}
                marginTop=".5em"
              >
                WHAAAT???
              </Typography>
              <Box align={'justify'}> -->
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

                <!-- <p>
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
-->
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
            <ContentItem
              index={0}
              title="Into the Woods"
              subtitle="Hosted at The Incline, a new queer-owned retreat space in the mountains near the Mendocino National Forest, serving majestic views, lush camping, and extensive trails to explore."
              img={{
                src: '/images/resized/mendocino_view.webp',
                style: { width: undefined, height: '120%' },
              }}
            />
            <ContentItem
              index={1}
              title="Enthralling Visions"
              subtitle="Be ready for BAAAHS light wizardry set to full face-melt mode, nestled cutely amongst the trees. There ain’t no party like a BAAAHS party bb!!"
              img={{ src: '/images/resized/dark_rainbow_pasture.webp' }}
            />
            <ContentItem
              index={2}
              title="Aural Pleasures"
              subtitle={
                <fragment>
                  Multiple stages and three nights of BAAAHS-rockin\' beats from your fav BAAAHS DJs and special guests on our world class sound system!
                  <p>Here's this year's <a href="/campout/dj-lineup">line-up!</a></p>
                </fragment>
              }
              link={'/campout/dj-lineup'}
              img={{ src: '/images/resized/ben_dancing_lights.webp' }}
            />
            <ContentItem
              index={3}
              title="Alluring Art"
              subtitle="Art is core to BAAAHS and we work hard to bring queer art from the Bay Area and beyond to our campout. Want to bring art? Let us know, we may be able to help with materials and logistics!"
              img={{ src: '/images/resized/simon_art_piece.webp' }}
            />
            <ContentItem
              index={4}
              title="Participate and Play"
              subtitle="The weekend is packed with amazing parties and activities from nature hikes to screen printing, and our infamous talent expo, and they all need YOU! This is the place to try something new and leave that judgement at the gate."
              img={{ src: '/images/resized/crafts.webp' }}
            />
            <ContentItem
              index={5}
              title="Creating Community"
              subtitle="BAAAHS Campout is a place to find happiness not in things we have or things we need, but in our community and in the simple joy of being present."
              img={{ src: '/images/resized/trixie_and_friends.webp' }}
            />
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
                disabled
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

const ContentItem = ({ title, subtitle, img, link, index }) => {
  const theme = useTheme();

  return <Grid item xs={12} sm={6} md={4} lg={4} xl={2} key={index}>
    <Box
      alignItems="center"
      component={Card}
      padding={2}
      borderRadius={2}
      width={1}
      height={1}
      data-aos={'fade-up'}
      data-aos-delay={index * 100}
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
          <Link href={link}>
            <img
              src={img.src}
              style={Object.assign(
                { borderRadius: '50%', width: '150%' },
                img.style,
              )}
              alt=""
            />
          </Link>
        </Box>
        <Link href={link}>
          <Typography
            variant="h6"
            fontFamily="Smooth Circulars"
            textAlign="center"
          >
            {title}
          </Typography>
        </Link>
        <Typography color="text.secondary" textAlign="center">
          {subtitle}
        </Typography>
      </Box>
    </Box>
  </Grid>;
};

export default CampoutHome;
