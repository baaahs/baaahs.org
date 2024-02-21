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
      src: 'https://static.baaahs.org/Z/mendocino_view.jpeg',
      height: 380,
      width: '100%',
    },
  },
  {
    header: 'Pure Queer Fun',
    body: 'There\'s never a dull moment. Besides some epic parties, dive in to Draaag Dodgeball, a No-Talent Show, arts and crafts, nature walks, and more! We’re also planning a bunch of other surprises, so stay tuned.',
    img: {
      src: 'https://static.baaahs.org/Z/eric_and_phillip.png',
      height: '100%',
      width: '100%',
      round: true,
    },
  },
  {
    header: 'Off of the Playa, Into the Woods',
    body: 'We\'re bringing our legendary Burning Man parties to you on a mountain. BAAAHS DJs and friends will be spinning till sunrise, and the lights from our big gay sheep will decorate the canopy of trees as you’re dancing your ass off.',
    img: {
      src: 'https://static.baaahs.org/Z/dark_rainbow_pasture.png',
      height: '100%',
      width: '100%',
    },
  },
  {
    header: 'Family Meals',
    body: 'We\'ve got you covered for food. Join the herd for delicious vegan, veggie, and omnivore options for brunch and dinner every day, and some delightful surprise snaaacks!',
    img: {
      src: 'https://static.baaahs.org/Z/drag_bingo_pan.png',
      height: '100%',
      width: '100%',
    },
  },
  {
    header: 'Transportation',
    body: 'To keep the event as green as possible we offer transportation for your camping gear free of charge! With the extra space in everyone’s vehicles, and we strongly encourage carpooling. We will announce drop-off and pick-up locations in San Francisco closer to the event and the carpool sign up is coming soon.',
    img: {
      src: 'https://static.baaahs.org/Z/yotam_mood.png',
      height: '100%',
      width: '100%',
    },
  },
  {
    header: 'Camping & Glamping',
    body: 'We are sleeping (mostly) in tents folks! There will be some campsite power for charging phones and lights, but nothing crazy, bring your own extension cord. There are also limited RV passes available at extra cost. Outdoor showers and toilets are available for everyone.',
    img: {
      src: 'https://static.baaahs.org/Z/Baaahs-camp%20out-fire-fb.png',
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
            'https://static.baaahs.org/Z/drag_bingo_pan.png'
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
                  fontSize: 24,
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
