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
          image:
            '/images/resized/campout_logo_promo.webp',
          description:
            'A campout put on by BAAAHS and friends over July 4th weekend. We’ve been putting it on for four years now and excited for our fifth! Our campouts are known for being whimsical, community driven, silly, and of course a whole lot of queer fun. We aim to create an awesome space for self-expression, creativity and kindness. Live music, sparkle-tastic lights, dance parties, group events, art and other surprises included. Eccentric outfits, gifting and showing off the best of you is strongly encouraged. And much like Burning Man, it is a Leave No Trace event.',
          title: 'BAAAHS Campout 2025: SideQuest?',
          date: '2–5 Jul',
          link: '/campout/register',
        }}
      ></HorizontallyAlignedBlogCardWithShapedImage>
    </Box>
  );
};

export default Events;
