/* eslint-disable quotes */
/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
// import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const mock = [
  {
    title: 'Community',
    subtitle:
      "BAAAHS is a community of queerdo's and friends who love to party and create amazing experiences.",
    suffix: '',
  },
  {
    title: 'Music',
    subtitle:
      'BAAAHS is a traveling party on wheels. We have a great sound system and amazing DJs.',
    suffix: '',
  },
  {
    title: 'Art',
    subtitle: 'BAAAHS is a moving mosaic of art and lights.',
    suffix: '',
  },
];

const WhoWeAre = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (isVisible) => {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  };

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={6}>
          <Box marginBottom={4}>
            <Typography sx={{ fontWeight: 700 }} variant={'h4'} gutterBottom fontFamily={'Smooth Circulars'}>
              What is BAAAHS?
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              In 2013, the founders of BAAAHS and a bunch of
              friends got together to build one crazy social experiment. Ten
              years later and we’re still producing amazing parties that brings
              everyone together and supporting our community in the Bay Area. We
              are a community driven organization which values all types of
              expression, participation, social justice, activism, and
              generating electrifying social experiences.
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {mock.map((item, i) => (
              <Grid key={i} item xs={12} md={4}>
                <Typography variant="h4" color={'primary'} gutterBottom>
                  <VisibilitySensor
                    onChange={(isVisible) => setViewPortVisibility(isVisible)}
                    delayedCall
                  >
                    <Typography variant={'h6'} fontFamily={'Smooth Circulars'} >{item.title}</Typography>
                  </VisibilitySensor>
                </Typography>
                <Typography color="text.secondary" component="p" >
                  {item.subtitle}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          item
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
        >
          <Card boxShadow={4} sx={{ minHeight: 300, height: 1 }}>
            <CardMedia
              image="/images/bml_baaahs.png"
              title="Black Lives Matter sign next to BAAAHS"
              sx={{ minHeight: 300, height: 1 }}
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhoWeAre;
