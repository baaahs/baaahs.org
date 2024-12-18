/* eslint-disable quotes */
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Grid';

import Main from 'layouts/Main';
import FullScreenHeader from 'components/FullScreenHeader';
import NavItems from './NavItems';

const content = [
  {
    question: 'Where is The Incline?',
    answer:
      '<a href="https://maps.app.goo.gl/66XPhYAn7Pd9A4kJ7">The Incline</a> is in Potter Valley, Mendocino, about two and a half hours drive from San Francisco. We\'ll help you get there with detailed directions.',
  },
  {
    question: 'Do I need a special vehicle to get up to The Incline?',
    answer:
      "Yes and no: the road is a little steep (it's called The Incline for a reason). We recommend an all-wheel drive vehicle if possible, but we've had all sorts of vehicles arrive successfully. To encourage carpooling we offer a free option to load your gear on a truck in San Francisco and it'll be waiting for you at the Incline!",
  },
  {
    question: 'Is there carpooling available?',
    answer:
      "Yep, there sure is. <a href='https://docs.google.com/spreadsheets/d/1HZyYwVZVLAgMPyCyRWRg3wjS6Ev7XIz06YwK64eWkzQ/edit?usp=sharing'>Sign up here</a> to either provide a ride or let folks know you're looking!"
  },
  {
    question: 'When is it?',
    answer:
      'May 24-27th. Arrival will start on Friday morning. We encourage everyone to arrive by 6PM so you can find a spot and set up with some daylight. The fun starts Friday evening, and Saturday and Sunday are full days of activities. Monday we clean up and pack out. <br><br> There\'s also a pregame event May 17-19th! If you want to get your booty moving with us while we get some last things finished, you can sign up <a href="https://docs.google.com/spreadsheets/d/1HZyYwVZVLAgMPyCyRWRg3wjS6Ev7XIz06YwK64eWkzQ/edit?usp=sharing">right here.</a>',
  },
  {
    question: 'Is this event open for everyone?',
    answer:
      "Yes! The campout is created by BAAAHS but is intended for everyone. If you're interested in getting involved with BAAAHS, the campout is the perfect way to get to know our community, but can also be just a fun adventure full of meeting new people and enjoying nature and dancing your ass off.",
  },
  {
    question: "This is everything I want. I'm in. What do I need to bring?",
    answer:
      'Check out our <a href="https://docs.google.com/document/d/1a3cFYl_xIt_aG26M7SRYsMUY78l2k4Q-cjS4X9po4xw/edit?usp=sharing">packing list</a>. Don\'t forget a good tent, lights, and your own cup, plate and utensils.',
  },
  {
    question: "Is there anything I shouldn't bring?",
    answer:
      "Dogs, ferrets, or pets of any kind. And anything that draws too much power (fridge, A/C, hair dryer, etc) is discouraged as camp power won't be strong enough to support it and you're gonna ruin it for everyone.",
  },
  {
    question: 'Do I need to bring food?',
    answer:
      'Included in your registration are breakfast and dinner with lots of delicious and healthy omnivore, veggie, or vegan options. But bringing snacks to share is a great way to make friends.',
  },
  {
    question: 'Can I bring my dog to the event?',
    answer:
      'NO! Dogs (or any other pet) are not allowed at the event. Leave your fur babies at home and away from coyotes',
  },
  {
    question: 'Can I bring my RV or can I camp with my car?',
    answer:
      "RV camping will be VERY limited, so be sure to get your ticket ASAP. Also note that we won't have any hook ups for you, plus getting a trailer up the mountain can be challenging. Car camping is NOT ALLOWED, you will have to leave your car at the designated parking area.",
  },
  {
    question: 'Is there a schedule?',
    answer:
      "The schedule of the campout is 100% optional and 100% awesome, and you can view it <a href='/campout/schedule'>here!</a><br><br>" +
      "Some of the highlights:<br><br>" + 
      "Drag Dodgeball(!) - We are proud to present the first ever[citation needed] drag dodgeball tournament. We’ll have wigs, we’ll have balls, and we’ll have an extremely special half-time show. Dodgeballing with wigs is a must. Dodgeballing on hills is at your own risk.<br><br>" + 
      "Talent(less) show - Come and show us what you can, or can’t do. Historically, we have some amazing talents showing up, and a supportive audience providing a perfect opportunity to flirt with your exhibitionist side. <a href='https://docs.google.com/forms/d/e/1FAIpQLSfO86JVDOqTte0OdU9c-bCTzDyDycbbLwTFVXl1N0DIGaWe1g/viewform'>Sign up here.</a><br><br>" + 
      "DAD Gone Wild West Pool Party - You get the gist ;)<br><br>" + 
      "Themed parties - Get your LEWKS ready. Or don’t. We love you either way.<br><br>",
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
  {
    question: 'What if I have a question that is not in the Q&A section',
    answer:
      'Email <a href="mailto:campout@baaahs.org">campout@baaahs.org</a> and we will answer',
  },
];

const QAndA = () => {
  return (
    <Main navItems={NavItems} colorInvert={true}>
      <Box gap={3}>
        <FullScreenHeader
          image={
            '/images/resized/twunkerbell_backshot.webp'
          }
          title={'Q&A'}
          text={'Your questions, our answers!'}
        />
        <Grid container spacing={2} justifyContent={'center'}>
          {content.map((item, key) => (
            <Grid
              item
              xs={11}
              xl={8}
              key={key}
              sx={{ margin: '24px' }}
              textAlign={'center'}
            >
              <Typography component="h1" fontFamily={'Smooth Circulars'}>
                {item.question}
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html: item.answer,
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Main>
  );
};

export default QAndA;
