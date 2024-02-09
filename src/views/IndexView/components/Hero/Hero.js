import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';

import Container from 'components/Container';

const images = [
  {
    group: [
      {
        cover:
          'https://storage.googleapis.com/static.baaahs.org/2013_sheep.jpeg',
        coverDark: undefined,
      },
      {
        cover:
          'https://storage.googleapis.com/static.baaahs.org/2015_sheep.jpeg',
        coverDark: undefined,
      },
      {
        cover:
          'https://storage.googleapis.com/static.baaahs.org/shady_xian_discoballs.jpeg',
        coverDark: undefined,
      },
    ],
  },
  {
    group: [
      {
        cover:
          'https://storage.googleapis.com/static.baaahs.org/2019_sheep.jpeg',
        coverDark: undefined,
      },
      {
        cover:
          'https://storage.googleapis.com/static.baaahs.org/rainbow_baaahs.png',
        coverDark: undefined,
      },
      {
        cover:
          'https://storage.googleapis.com/static.baaahs.org/sunset_balls_sheep.jpeg',
        coverDark: undefined,
      },
    ],
  },
  {
    group: [
      {
        cover:
          'https://storage.googleapis.com/static.baaahs.org/2019_sheep_2.jpeg',
        coverDark: undefined,
      },
      {
        cover:
          'https://storage.googleapis.com/static.baaahs.org/build_sheep.jpeg',
        coverDark: undefined,
      },
      {
        cover:
          'https://storage.googleapis.com/static.baaahs.org/kinky_sheep.jpeg',
        coverDark: undefined,
      },
      {
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img12.png',
        coverDark: undefined,
      },
    ],
  },
];

const HoverableLetter = ({ letterSelector, children }) => {
  return (
    <span
      onMouseOver={() => {
        document.querySelectorAll(letterSelector).forEach((el) => {
          el.classList.add('baaahs-letter-hover');
        });
      }}
      onMouseOut={() => {
        document.querySelectorAll(letterSelector).forEach((el) => {
          el.classList.remove('baaahs-letter-hover');
        });
      }}
    >
      {children}
    </span>
  );
};

const Hero = () => {
  const theme = useTheme();
  // const isMd = useMediaQuery(theme.breakpoints.up('md'), {
  //   defaultMatches: true,
  // });

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, ${alpha(
          theme.palette.background.paper,
          0,
        )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
        backgroundRepeat: 'repeat-x',
        position: 'relative',
      }}
    >
      <Box paddingY={{ xs: 0, sm: '4rem', md: '8rem' }}>
        <Container>
          <Box maxWidth={{ xs: 1, sm: '50%' }}>
            <Typography
              component="h2"
              gutterBottom={true}
              width={{ xs: 300, md: 580 }}
              marginBottom={{ xs: 1, sm: 2 }}
              color="text.primary"
              fontFamily={'Smooth Circulars'}
              fontSize={{
                xs: '3.7rem',
                sm: '4rem',
                md: '4.5rem',
                lg: '5.75rem',
                xl: '5.75.rem',
              }}
              sx={{ cursor: 'default' }}
            >
              <HoverableLetter letterSelector=".baaahs-letter-b">
                B
              </HoverableLetter>
              <HoverableLetter letterSelector=".baaahs-letter-a1">
                A
              </HoverableLetter>
              <HoverableLetter letterSelector=".baaahs-letter-a2">
                A
              </HoverableLetter>
              <HoverableLetter letterSelector=".baaahs-letter-a3">
                A
              </HoverableLetter>
              <HoverableLetter letterSelector=".baaahs-letter-h">
                H
              </HoverableLetter>
              <HoverableLetter letterSelector=".baaahs-letter-s">
                S
              </HoverableLetter>
            </Typography>

            <Typography
              variant="h3"
              marginTop="-20px"
              marginBottom="2em"
              gutterBottom={true}
              component="p"
              color="text.primary"
              fontFamily={'Smooth Circulars'}
              fontSize={{
                xs: '.55rem',
                sm: '.59rem',
                md: '.67rem',
                lg: '.85rem',
                xl: '.85rem',
              }}
              whiteSpace="nowrap"
              sx={{
                fontWeight: 400,
                cursor: 'default',
                '& .baaahs-letter-hover': {
                  fontWeight: 700,
                  fontStyle: 'italic',
                },
              }}
            >
              <span className="baaahs-letter-b">Big</span>-
              <span className="baaahs-letter-a1">Ass</span>
              <span> </span>
              <span className="baaahs-letter-a2">Amazingly</span>
              <span> </span>
              <span className="baaahs-letter-a3">Awesome</span>
              <span> </span>
              <span className="baaahs-letter-h">Homosexual</span>
              <span> </span>
              <span className="baaahs-letter-s">Sheep</span>
              <span> </span>
            </Typography>

            <Typography variant="h6" component="p" color="text.primary">
              The Big-Ass Amazingly Awesome Homosexual Sheep (BAAAHS) is a
              mutant vehicle, a mobile disco, and a penetrable social statement.
            </Typography>
            {/*
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'flex-start' }}
              marginTop={4}
            >
              <Button
                component={'a'}
                variant="contained"
                color="primary"
                size="large"
                fullWidth={isMd ? false : true}
                href={'/crew'}
              >
                Join the flock
              </Button>
              <Box
                marginTop={{ xs: 2, sm: 0 }}
                marginLeft={{ sm: 2 }}
                width={{ xs: '100%', md: 'auto' }}
              >
                <Button
                  component={'a'}
                  href={'/about'}
                  variant="outlined"
                  color="primary"
                  size="large"
                  fullWidth={isMd ? false : true}
                >
                  Learn more
                </Button>
              </Box>
            </Box>
          */}
          </Box>
        </Container>
        <Box
          sx={{
            transform: 'rotate(-20deg)',
            display: { xs: 'none', sm: 'block' },
          }}
        >
          <Box
            display={'flex'}
            width={'50rem'}
            left={'45%'}
            top={0}
            position={'absolute'}
            sx={{ transform: 'translate3d(20%, -40%, 0)' }}
          >
            {images.map((item, i) => (
              <Box key={i} marginTop={{ sm: i * 4 }} marginX={1}>
                {item.group.map((g, j) => (
                  <Box
                    key={j}
                    padding={1}
                    bgcolor={'background.paper'}
                    borderRadius={2}
                    boxShadow={3}
                    marginTop={2}
                  >
                    <Box
                      component={'img'}
                      loading="lazy"
                      src={
                        theme.palette.mode === 'dark'
                          ? g.coverDark ?? g.cover
                          : g.cover
                      }
                      height={1}
                      width={1}
                      maxWidth={320}
                    />
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        component={'svg'}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 100.1"
        sx={{
          width: '100%',
          marginBottom: theme.spacing(-1),
        }}
      >
        <path
          fill={theme.palette.background.paper}
          d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
        ></path>
      </Box>
    </Box>
  );
};

export default Hero;
