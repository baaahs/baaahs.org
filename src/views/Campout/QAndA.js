import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Grid';

import CampoutMain from 'layouts/CampoutMain.js';
import BAAAHSLogo from 'layouts/Main/BAAAHSLogo';

const content = [
  {
    question: 'Where is The Incline?',
    answer:
      'The Incline is in Potter Valley, Mendocino, about two and a half hours drive from San Francisco. We’ll help you get there with detailed directions.',
  },
  {
    question: 'Do I need a special vehicle to get up to The Incline?',
    answer:
      'Yes and no, some have managed to get their Prius up to the event, but others find it easier to find a friend with AWD instead.',
  },
  {
    question: 'When is it?',
    answer:
      'May 24-27. Arrival will start on Friday 5/24 (Encouraging people to arrive by 9:30PM for an opening talk). Saturday and Sunday are full days of activities. Monday we clean up and pack out.',
  },
  {
    question: 'Is this event open for everyone?',
    answer:
      'Yes! The campout is created by BAAAHS but is intended for everyone. If you’re interested in getting involved with BAAAHS, the campout is the perfect way to get to know our community, but can also be just a fun adventure full of meeting new people and enjoying nature and dancing your ass off.',
  },
  {
    question: 'This is everything I want. I’m in. What do I need to bring?',
    answer:
      'Check out our packing list. Don’t forget a good tent, lights, and your own cup, plate and utensils.',
  },
  {
    question: 'Is there anything I shouldn’t bring?',
    answer:
      'Anything that draws too much power (fridge, A/C, hair dryer, etc) is discouraged as camp power won’t be strong enough to support it and you’re gonna ruin it for everyone.',
  },
  {
    question: 'Do I need to bring food?',
    answer:
      'Included in your registration are breakfast and dinner with lots of delicious and healthy omnivore, veggie, or vegan options. But bringing snacks to share is a great way to make friends.',
  },
  {
    question: 'Can I bring my dog to the event?',
    answer:
      'Dogs (or any other pet) are not allowed at the event. We can accommodate some folks if absolutely necessary, but we strongly discourage it as there is wildlife nearby and waste from an animal is hard to manage at all times.',
  },
  {
    question: 'What if I have a question that is not in the Q&A section',
    answer:
      'Email campout@baaahs.org and we will answer',
  },
  {
    question: 'Can I bring my RV or can I camp with my car?',
    answer:
      'RV camping will be VERY limited, so be sure to get your ticket ASAP. Also note that we won’t have any hook ups for you, plus getting a trailer up the mountain can be challenging. Car camping  is NOT ALLOWED, you will have to leave your car at the designated parking area.',
  },
  {
    question: 'Will there be a schedule?',
    answer:
      'Yes there will be! We’ll send out a post and put it here when we have it ready.',
  },
  {
    question: 'What can I expect for Arrival?',
    answer:
      'There will be a check-in stop on the way to the grounds. If you are camping, you will park your car and we’ll transport you from there to your site. You’ll then be responsible for picking up your camping gear at the designated spot. If you are RVing or car camping, you’ll be directed where to go.',
  },
  {
    question: 'What can I expect for Departure?',
    answer:
      'Monday will be our pack up and go day. Everyone will be expected to clean up their own area as well as help out when asked to help with event tear down and pack up. It goes quick when everyone helps!',
  },
];

const QAndA = () => {
  const theme = useTheme();

  return (
    <CampoutMain>
      <Box>
        <Grid container spacing={2} justifyContent={'center'} direction="column">
          <Grid
            item
            container
            justifyContent={'center'}
            alignItems={'center'}
            xs={12}
            xl={8}
          >
            <Box position="relative" width={1}>
              <Box
                component={'img'}
                loading="lazy"
                height={721}
                width={1}
                src={
                  'https://s3-alpha-sig.figma.com/img/c89d/4e12/eefe946ff30cbb1cb7a179dbdea276cb?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Laf-0O8AHbiQ3adR48PYDVWA6Bz~~hAmuaJ2Cb7nisp2ZbAs2~1DTjLei-HnHJ2hlfdZ-UtrhU1DeovvyLd4gEEf3dCstgWjEuFz-Y~o1KKZ~P6tLV7rc7kkQk86dUWXLwBvAQrsvsquvEhup5tKgTb2XkhiVfQZnOM0i-CLhfOKjLoTSIFDlS9oVdUIx9xbVrtRVeMuce4jGUysvqwElDDf60PvOzSNBVvQjRTiCx~28mfzlpUNL2OxB75zNfD77Xk805XOTHiGv~XrbTxETueqWp0gM48GF~IFLyX3SuEGEXDV9vg5JIrhjfT7zZxfD2lXBZK22K~Z7MvPfNM~Fg__'
                }
                alt="BAAAHS Campout 2024 background image"
                sx={{
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.6)' : 'none',
                }}
              />
              <Box
                position="absolute"
                top={0}
                left={0}
                width={1}
                height={1}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Box 
                  width={500} 
                  bgcolor={theme.palette.primary.main}
                >
                  <BAAAHSLogo />
                </Box>
              </Box>
            </Box>
          </Grid>
          {content.map((item, key) => (
            <Grid item xs={11} key={key} sx={{ margin: '24px'}}>
              <Typography component="h1">{item.question}</Typography>
              <Typography>{item.answer}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </CampoutMain>
  );
};

export default QAndA;
