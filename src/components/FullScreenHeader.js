import React, { useEffect } from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';

function error(message) {
  throw new Error(message);
}

const FullScreenHeader = ({ image, title, text, logo }) => {
  const backgroundImage = image || error('No image provided');
  const titleText = title || error('No title provided');
  const bodyText = text || error('No text provided');
  const displayLogo = logo || false;

  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  });

  return (
    <Box
      className={'jarallax'}
      data-jarallax
      data-speed="0.2"
      position={'relative'}
      minHeight={{ xs: 400, sm: 500, md: 600 }}
      display={'flex'}
      alignItems={'center'}
      marginTop={-13}
      paddingTop={13}
      id="agency__portfolio-item--js-scroll"
    >
      <Box
        className={'jarallax-img'}
        sx={{
          position: 'absolute',
          objectFit: 'cover',
          /* support for plugin https://github.com/bfred-it/object-fit-images */
          fontFamily: 'object-fit: cover;',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundImage:
            `url(${backgroundImage})`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          background: alpha('#161c2d', 0.4),
          zIndex: 1,
        }}
      />
      <Container position={'relative'} zIndex={2}>
        {displayLogo && (
          <Grid container columnGap={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Grid item xs={4}>
              <img src={logo} alt="Logo" width="100%"/>
            </Grid>
            <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              <Typography variant="h2" color='common.white' fontWeight='900'>
                {titleText}
              </Typography>
              <Typography variant="h6" component="p" color="common.white">
                {bodyText}
              </Typography>
            </Grid>
          </Grid>
        )}
        {!displayLogo && (
          <Box>
            <Typography variant="h2" gutterBottom sx={{ fontWeight: 900, color: 'common.white', textTransform: 'uppercase' }}>
              {titleText}
            </Typography>
            <Typography variant="h6" component="p" color="text.primary" sx={{ color: 'common.white' }}>
              {bodyText}
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default FullScreenHeader;
