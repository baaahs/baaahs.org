import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Main from 'layouts/Main';
import FullScreenHeader from 'components/FullScreenHeader';
import { HorizontallyAlignedBlogCardWithShapedImage } from 'blocks/blog';
import NavItems from './NavItems';

const content = [
  {
    header: 'The Incline',
    body: 'The Incline is situated in the mountains of the Mendocino National Forest. You’ll have views for days, plus more like: a pool, multiple indoor and outdoor party spaces, lots of campsites, fancy outdoor shower, and beautiful forest trails.',
    img: {
      src: 'https://storage.googleapis.com/static.baaahs.org/mendocino_view.jpeg',
      height: 380,
      width: '100%',
    },
  },
  {
    header: 'Pure Queer Fun',
    body: 'Other than parties, we put on events through the week like Drag Bingo, a No-Talent Show, arts and crafts, and more! Lots of opportunities for folks to really express themselves and share it with the world.',
    img: {
      src: 'https://storage.googleapis.com/static.baaahs.org/eric_and_phillip.png',
      height: '100%',
      width: '100%',
      round: true,
    },
  },
  {
    header: 'Iconic BAAAHS Lights and Sound',
    body: 'Our parties are some of the best in the Bay Area and we bring it to you on a mountain. BAAAHS DJs and friends will be spinning till sunrise, and you can expect some of the same technology powering our art car to decorate the canopy of trees as you’re dancing your ass off.',
    img: {
      src: 'https://storage.googleapis.com/static.baaahs.org/dark_rainbow_pasture.png',
      height: '100%',
      width: '100%',
    },
  },
  {
    header: 'Family Meals',
    body: 'We serve breakfast and dinner every day and it’s campout tradition that we all sit down together to enjoy your meal. After all, you’re part of the BAAAHS family now.',
    img: {
      src: 'https://storage.googleapis.com/static.baaahs.org/drag_bingo_pan.png',
      height: '100%',
      width: '100%',
    },
  },
  {
    header: 'Gear Transport',
    body: 'We are weary of too many cars going up on the narrow road up to the Incline. So we offer to transport your camping gear for you free of charge! With the extra space in everyone’s vehicles, we strongly encourage folks to offer space in their vehicle leading up to the event. We will announce drop-off and pick-up locations in San Francisco closer to the event and carpool sign up soon.',
    img: {
      src: 'https://storage.googleapis.com/static.baaahs.org/yotam_mood.png',
      height: '100%',
      width: '100%',
    },
  },
  {
    header: 'Camping',
    body: 'We are sleeping (mostly) in tents folks! There will be some campsite power for charging phones and lights, but nothing crazy. There are also VERY LIMITED RV passes available at extra cost.',
    img: {
      src: 'https://storage.googleapis.com/static.baaahs.org/Baaahs-camp%20out-fire-fb.png',
      height: '100%',
      width: '100%',
    },
  },
  {
    header: 'Map',
    body: 'TBD',
    img: {
      height: '100%',
      width: '100%',
    },
  },
];

const WhatToExpect = () => {
  return (
    <Main colorInvert={true} navItems={NavItems}>
      <Box gap={3}>
        <FullScreenHeader
          image={
            'https://storage.googleapis.com/static.baaahs.org/drag_bingo_pan.png'
          }
          title={'What To Expect'}
          text={
            'BAAAHS Campout is a 3-night queer-Burner camping experience for your NERVES'
          }
        />
        <Grid container spacing={2} justifyContent={'center'}>
          <Grid
            container
            item
            xs={12}
            xl={8}
            spacing={2}
            justifyContent="center"
          >
            {content.map((item, key) => (
              <HorizontallyAlignedBlogCardWithShapedImage
                key={key}
                flip={key % 2 === 0}
                data={{
                  image: item.img.src,
                  description: item.body,
                  title: item.header,
                  maxHeight: item.img.height,
                  maxWidth: item.img.width,
                  fontSize: 32,
                }}
              />
            ))}
          </Grid>
        </Grid>
      </Box>
    </Main>
  );
};

export default WhatToExpect;
