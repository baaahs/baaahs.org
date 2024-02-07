import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
//import Button from '@mui/material/Button';
//import useMediaQuery from '@mui/material/useMediaQuery';
//import { useTheme } from '@mui/material/styles';
import { HorizontallyAlignedBlogCardWithShapedImage } from 'blocks/blog';

const Events = () => {
  //const theme = useTheme();
  /*const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });*/

  return (
    <Box>
      <Typography
        variant="h4"
        color="text.primary"
        align={'center'}
        gutterBottom
        sx={{
          fontWeight: 700,
        }}
        fontFamily={'Smooth Circulars'}
      >
        Upcoming Events
      </Typography>
      <HorizontallyAlignedBlogCardWithShapedImage
        data={{
          // TODO: Move this data somewhere else
          // TODO: Replace image with campout image
          image: 'https://storage.googleapis.com/static.baaahs.org/campout_logo_promo.png',
          description:
            'A campout put on by BAAAHS and friends over Memorial Day weekend. We’ve been putting it on for three years now and excited for our fourth! Our campouts are known for being whimsical, community driven, silly, and of course a whole lot of queer fun. We aim to create a safe space for self-expression, creativity and kindness. Live music, sparkle-tastic lights, dance parties, group events, art and other surprises included. Eccentric outfits, gifting and showing off the best of you is strongly encouraged. And much like Burning Man, it is a Leave No Trace event.',
          title: 'BAAAHS Campout 2024 - WHAAAT?',
          date: '24-27 May',
        }}
      ></HorizontallyAlignedBlogCardWithShapedImage>
    </Box>
  );
};

export default Events;
