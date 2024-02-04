import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';

import CampoutMain from 'layouts/CampoutMain.js';
import FullScreenHeader from 'components/FullScreenHeader';

const content = [
  {
    header: 'The Incline',
    body: 'The Incline is situated in the mountains of the Mendocino National Forest. You’ll have views for days, plus more like: a pool, multiple indoor and outdoor party spaces, lots of campsites, fancy outdoor shower, and beautiful forest trails.',
    img: {
      src: 'https://s3-alpha-sig.figma.com/img/4d8c/832d/a460f2d5899aaec02848a79ba5aad279?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ANHQXUE01KsAhYGOZNLwdAYZMtkd~vjwAObzy6yswggQcj-YQUF-8tiJguLUw4f7Mu~R0lB7amCbsvEJ8eS1d5E1EL39P-1NBP275iRR3OqLMZpdw1GUDd4PaF0SCyzERSQXhKS5q~KAa2YDhERNdcNhs~KNIlDrmHTJO0TVNfR03skKOboFX26ExnbA22gXGfR1MZQSa1AxhQ17iXn4L9ZqNnMkBRp5gA5mHaF5gitHmwznbx4WlQLx~HSOcdtBiaMjGvwHIRvsiCFkun~LWZdA0o01Y-xqNL9V2kFvHWUs3FmaQC4eXbzKls9BvllPUkOzZ9H~0COHu-P1q8OlzQ__',
      height: 380,    
      width: '100%',
    },
  },
  {
    header: 'Pure Queer Fun',
    body: 'Other than parties, we put on events through the week like Drag Bingo, a No-Talent Show, arts and crafts, and more! Lots of opportunities for folks to really express themselves and share it with the world.',
    img: {
      src: 'https://s3-alpha-sig.figma.com/img/4abc/d349/aa2e8b9545fbabd6de4a376e8fe20d55?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GfK~9I92mdiwgKgSmPplYWR0jZnCZGBPNnO0VuXAAp6gwEWLlSZUxTsYjJQ7h-7uDOy8yIEu~5Pzt6a32cSvsboq8CM8GYIyW9ax8hw2ZTsTBMguGE5kpDmwsDmL5EYVQ2nn5GsTMXQK8qJimlNoXof2kctxtR9~M-FICuzB8QVRCv9CPUBqksTcKdcGulSsXYBHqB92uul9lz3ZGMOKWl9WLYX33VHG5yl28BT29enCSN1w4nJDDWn9V58PwHntyY5duwQNucwjUz-booiH3M7xC-sge2-GTzLQ-T47Wuou0Sj797a9XUlxUtLstwgQFFz6~fiG-4WFAM5jXWcIyA__',
      height: 429,    
      width: 429,
      round: true,
    },
  },
  {
    header: 'Iconic BAAAHS Lights and Sound',
    body: 'Our parties are some of the best in the Bay Area and we bring it to you on a mountain. BAAAHS DJs and friends will be spinning till sunrise, and you can expect some of the same technology powering our art car to decorate the canopy of trees as you’re dancing your ass off.',
    img: {
      src: 'https://s3-alpha-sig.figma.com/img/73cc/07c6/b1cc5fe49d990f86882ec885b1b7144a?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=npxZE0DpTfnErJDqnhXxbE4mM~bLwQJ9mU4gcGCUf2F1AD3im9xyHz6qy2gFomr~L06vS8W2NDxNPu0wrO5fE~IBMjsw4AxuBsL2fmmk5RnqKkv8ch8-RE~bF1vviWAouM76s2JteFYBJn5oPQHX8DLKfTTGL~cOpe3s52cdLlJALUl9PRkWk5xHNuybmsFd7hUjpFh71KxlKWi780uOP3J5yiexeUpD0auGn0ICOoi21aLo2EYc-dfyC8ACJtemyz7xvFSNaVTeIoCarKvyuDuqvLQ7wOCDDtUSIEk16qI1rjRSdzhvZQKNCF47XiZCjWnJTPapFarcJgbnOta-Ww__',
      height: 380,
      width: 580,
    },
  },
  {
    header: 'Family Meals',
    body: 'We serve breakfast and dinner every day and it’s campout tradition that we all sit down together to enjoy your meal. After all, you’re part of the BAAAHS family now.',
    img: {
      src: 'https://s3-alpha-sig.figma.com/img/73cc/07c6/b1cc5fe49d990f86882ec885b1b7144a?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=npxZE0DpTfnErJDqnhXxbE4mM~bLwQJ9mU4gcGCUf2F1AD3im9xyHz6qy2gFomr~L06vS8W2NDxNPu0wrO5fE~IBMjsw4AxuBsL2fmmk5RnqKkv8ch8-RE~bF1vviWAouM76s2JteFYBJn5oPQHX8DLKfTTGL~cOpe3s52cdLlJALUl9PRkWk5xHNuybmsFd7hUjpFh71KxlKWi780uOP3J5yiexeUpD0auGn0ICOoi21aLo2EYc-dfyC8ACJtemyz7xvFSNaVTeIoCarKvyuDuqvLQ7wOCDDtUSIEk16qI1rjRSdzhvZQKNCF47XiZCjWnJTPapFarcJgbnOta-Ww__',
      height: 380,
      width: 580,
    },
  },
  {
    header: 'Gear Transport',
    body: 'We are weary of too many cars going up on the narrow road up to the Incline. So we offer to transport your camping gear for you free of charge! With the extra space in everyone’s vehicles, we strongly encourage folks to offer space in their vehicle leading up to the event. We will announce drop-off and pick-up locations in San Francisco closer to the event and carpool sign up soon.',
    img: {
      src: 'https://s3-alpha-sig.figma.com/img/73cc/07c6/b1cc5fe49d990f86882ec885b1b7144a?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=npxZE0DpTfnErJDqnhXxbE4mM~bLwQJ9mU4gcGCUf2F1AD3im9xyHz6qy2gFomr~L06vS8W2NDxNPu0wrO5fE~IBMjsw4AxuBsL2fmmk5RnqKkv8ch8-RE~bF1vviWAouM76s2JteFYBJn5oPQHX8DLKfTTGL~cOpe3s52cdLlJALUl9PRkWk5xHNuybmsFd7hUjpFh71KxlKWi780uOP3J5yiexeUpD0auGn0ICOoi21aLo2EYc-dfyC8ACJtemyz7xvFSNaVTeIoCarKvyuDuqvLQ7wOCDDtUSIEk16qI1rjRSdzhvZQKNCF47XiZCjWnJTPapFarcJgbnOta-Ww__',
      height: 380,
      width: 580,
    },
  },
  {
    header: 'Camping',
    body: 'We are sleeping (mostly) in tents folks! There will be some campsite power for charging phones and lights, but nothing crazy. There are also VERY LIMITED RV and car camping slots available at extra cost.',
    img: {
      src: 'https://s3-alpha-sig.figma.com/img/73cc/07c6/b1cc5fe49d990f86882ec885b1b7144a?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=npxZE0DpTfnErJDqnhXxbE4mM~bLwQJ9mU4gcGCUf2F1AD3im9xyHz6qy2gFomr~L06vS8W2NDxNPu0wrO5fE~IBMjsw4AxuBsL2fmmk5RnqKkv8ch8-RE~bF1vviWAouM76s2JteFYBJn5oPQHX8DLKfTTGL~cOpe3s52cdLlJALUl9PRkWk5xHNuybmsFd7hUjpFh71KxlKWi780uOP3J5yiexeUpD0auGn0ICOoi21aLo2EYc-dfyC8ACJtemyz7xvFSNaVTeIoCarKvyuDuqvLQ7wOCDDtUSIEk16qI1rjRSdzhvZQKNCF47XiZCjWnJTPapFarcJgbnOta-Ww__',
      height: 380,
      width: 580,
    },
  },
  {
    header: 'Map',
    body: 'TBD',
    img: {
      height: 380,
      width: 580,
    },
  },
];

const WhatToExpect = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <CampoutMain colorInvert={true}>
      <Box gap={3}>
        <FullScreenHeader image={'https://s3-alpha-sig.figma.com/img/f6ef/7aa3/355af7866134365ca27494dcfbd78f51?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GvuXE7YdqZL67nSS8h4f8Nze7oNeDypOqsDXBr05uxL9ZUYNJbkGM~~TXbz45LdefCfwzqMeO-Mcy73cr4kcGNLZ88Y1INxdwwKwda-eTkhY7QlmlmvNi67jGoumBsJTGffhZS0KMKxE6R7Us0mURuFdbRdFm~05XGaKCrFqtKosjvafpYtzOwSzDW7yBO7EijpIzCN4hhy5NnzhPTy5GHGoFW-kmTYdMNsX~X4HiFeHJE46s7l2nazcuO8eFy5IjvC4T1cyjZ9FBOoxmiPx8SRFR2d71WrSrz6UsAoduAatUDHmKJaU5tsH6WPFwwKF2iglzfxmiPaoecOpfPHAKA__'} 
          title={'What To Expect'}
          text={'BAAAHS Campout is a 3-night queer-Burner camping experience for your NERVES'}
        />
        <Grid
          container
          spacing={2}
          justifyContent={'center'}
        >
          <Grid container item xs={12} xl={8} spacing={2} justifyContent="center">
            {content.map((item, key) => (
              <Grid 
                container 
                item 
                spacing={8}
                key={key}
                alignItems='center'
                justifyContent='center'
              >
                {key % 2 === 0 || !isMd ? (
                  <Grid 
                    item
                    container
                    xs={10}
                    md={6}
                    alignItem={isMd ? 'end' : 'center'}
                    direction="column"
                    justifyContent={'center'}
                  >
                    <Typography component="h1" align={isMd ? 'end' : 'center'}>
                      {item.header}
                    </Typography>
                    <Typography align={isMd ? 'end' : 'center'}>
                      {item.body}
                    </Typography>
                  </Grid>
                ) : null}
                <Grid 
                  item
                  container
                  xs={12}
                  md={6}
                  justifyContent={isMd ? (key % 2 === 0 ? 'start' : 'end') : 'center'}
                  alignItems='center'
                >
                  <Box 
                    component="img" 
                    loading="lazy"
                    src={item.img.src}
                    alt={item.body}
                    width={item.img.width}
                    height={item.img.height}
                    borderRadius={item.img.round ? '50%' : null}
                    sx={{
                      objectFit: 'cover',
                      filter:
                      theme.palette.mode === 'dark' ? 'brightness(0.6)' : 'none',
                    }}
                  />
                </Grid>
                {key % 2 !== 0 && isMd ? (
                  <Grid 
                    item
                    container
                    md={6}
                    justifyContent={'center'}
                    alignItems={'start'}
                    direction="column"
                  >
                    <Typography component="h1" align="start">
                      {item.header}
                    </Typography>
                    <Typography align="start">
                      {item.body}
                    </Typography>
                  </Grid>
                ) : null}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </CampoutMain>
  );
};

export default WhatToExpect;
