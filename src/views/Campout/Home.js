import React from 'react';
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Grid';

import CampoutMain from 'layouts/CampoutMain.js';
import FullScreenHeader from 'components/FullScreenHeader';

const content = [
  {
    title: 'Community Driven',
    subtitle:
      'It really takes a village folks. Campers are expected to participate during the weekend to make the event possible, and we encourage helping and getting involved even before the campout for the full BAAAHS experience.',
    icon: (
      <img
        src="https://storage.googleapis.com/static.baaahs.org/trixie_and_friends.jpeg"
        style={{ borderRadius: '50%', width: '150%' }}
      ></img>
    ),
  },
  {
    title: 'BAAAHS Lights and Sound',
    subtitle:
      'You can expect the iconic BAAAHS light arrays in full display along with our world class sound system while you’re dancing with your closest friends surrounded by nature. There ain’t no party like a BAAAHS party bb!!',
    icon: (
      <img
        src="https://storage.googleapis.com/static.baaahs.org/ben_dancing_lights.png"
        style={{ borderRadius: '50%', width: '150%' }}
      ></img>
    ),
  },
  {
    title: 'Nature',
    subtitle:
      'Hosted at The Incline, a new queer-owned retreat space in the mountains close to the Mendocino National Forest. You can expect majestic views of the surrounding forest and a beautiful canopy to set up your tent under.',
    icon: (
      <img
        src="https://storage.googleapis.com/static.baaahs.org/mendocino_view.jpeg"
        style={{ borderRadius: '50%', height: '120%' }}
      ></img>
    ),
  },
  {
    title: 'Participation',
    subtitle:
      'Through out the weekend we put on amazing parties and activities, and they all need YOU! A big part of our campout is to try something new and leave that pride and judgement at the gate. We are all in this together and we lift each other up when someone challenges themselves to grow and flourish.',
    icon: (
      <img
        src="https://storage.googleapis.com/static.baaahs.org/crafts.jpeg"
        style={{ borderRadius: '50%', width: '150%' }}
      ></img>
    ),
  },
  {
    title: 'Art',
    subtitle:
      'Art is a big part of our campout and have worked hard in previous years to bring queer art from the Bay Area to the Incline. Attendees are encouraged to reach out to us if they themselves want to bring their art to the campout, we are always willing to lend a hand with logistics.',
    icon: (
      <img
        src="https://storage.googleapis.com/static.baaahs.org/simon_art_piece.png"
        style={{ borderRadius: '50%', width: '150%' }}
      ></img>
    ),
  },
  {
    title: 'Values',
    subtitle:
      'BAAAHS is a Burning Man camp and so it’s important for us to follow the Ten Principles of Burning Man. We also STRONGLY value consent of all forms and in general aim to create a Safe Space for ALL.',
    icon: (
      <img
        src="https://storage.googleapis.com/static.baaahs.org/gender_reveal.jpeg"
        style={{ borderRadius: '50%', width: '150%' }}
      ></img>
    ),
  },
];

const CampoutHome = () => {
  const theme = useTheme();

  return (
    <CampoutMain>
      <Box gap={3}>
        <FullScreenHeader
          image={
            'https://storage.googleapis.com/static.baaahs.org/PXL_20230416_022706111.jpeg'
          }
          logo={
            'https://storage.googleapis.com/static.baaahs.org/campout_logo_no_border.png'
          }
          title={'BAAAHS Campout'}
          text={
            'Our Campout has been going on for years. Here are some of the highlights from previous years.'
          }
        />
        <Grid container spacing={2} justifyContent={'center'}>
          <Grid item container xs={10} xl={8}>
            <Box marginBottom={4}>
              <Typography
                align={'center'}
                fontWeight={600}
                component="h1"
                fontFamily={'Smooth Circulars'}
              >
                What is it?
              </Typography>
              <Typography align={'center'}>
                A campout put on by BAAAHS and friends over Memorial Day
                weekend. We’ve been putting it on for three years now and
                excited for our fourth! Our campouts are known for being
                whimsical, community driven, silly, and of course a whole lot of
                queer fun. We aim to create a safe space for self-expression,
                creativity and kindness. Live music, sparkle-tastic lights,
                dance parties, group events, art and other surprises included.
                Eccentric outfits, gifting and showing off the best of you is
                strongly encouraged. And much like Burning Man, it is a Leave No
                Trace event.
              </Typography>
            </Box>
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
                      {item.icon}
                    </Box>
                    <Typography
                      variant={'h6'}
                      gutterBottom
                      fontFamily={'Smooth Circulars'}
                      textAlign={'center'}
                    >
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary" textAlign={'center'}>
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
                size="large"
                href={'/campout/register'}
                fullWidth
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </CampoutMain>
  );
};

export default CampoutHome;
