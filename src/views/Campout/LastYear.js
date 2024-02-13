import React from 'react';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useMediaQuery from '@mui/material/useMediaQuery';

import CampoutMain from 'layouts/CampoutMain.js';
import FullScreenHeader from 'components/FullScreenHeader';
import { useTheme } from '@emotion/react';

const contentItems = [
  {
    src: 'https://storage.googleapis.com/static.baaahs.org/20230527_174212.jpg',
    cols: 3,
    rows: 2,
  },
  {
    src: 'https://storage.googleapis.com/static.baaahs.org/IMG_0448.png',
    cols: 3,
    rows: 3,
  },
  {
    src: 'https://storage.googleapis.com/static.baaahs.org/20230527_174339.jpg',
    cols: 3,
    rows: 3,
  },
  {
    src: 'https://storage.googleapis.com/static.baaahs.org/20230528_004535.jpg',
    cols: 2,
    rows: 3,
  },
  {
    src: 'https://storage.googleapis.com/static.baaahs.org/20230529_002733.jpg',
    cols: 3,
    rows: 2,
  },
  {
    src: 'https://storage.googleapis.com/static.baaahs.org/20230528_174740.jpg',
    cols: 3,
    rows: 2,
  },
  {
    src: 'https://storage.googleapis.com/static.baaahs.org/20230528_004629.jpg',
    cols: 2,
    rows: 3,
  },
  {
    src: 'https://storage.googleapis.com/static.baaahs.org/20230528_172118.jpg',
    cols: 3,
    rows: 2,
  },
  {
    src: 'https://storage.googleapis.com/static.baaahs.org/20230528_232605.jpg',
    cols: 3,
    rows: 2,
  },
  {
    src: 'https://storage.googleapis.com/static.baaahs.org/20230528_065034.jpg',
    cols: 3,
    rows: 2,
  },
  {
    src: 'https://storage.googleapis.com/static.baaahs.org/20230528_172109.jpg',
    cols: 3,
    rows: 2,
  },
  {
    src: 'https://storage.googleapis.com/static.baaahs.org/20230528_052014.jpg',
    cols: 3,
    rows: 2,
  },
  {
    src: 'https://storage.googleapis.com/static.baaahs.org/20230528_051741.jpg',
    cols: 3,
    rows: 3,
  },
  {
    src: 'https://storage.googleapis.com/static.baaahs.org/afik_hugging.jpg',
    cols: 3,
    rows: 3,
  },
  {
    src: 'https://storage.googleapis.com/static.baaahs.org/baaahs_dark_sign.jpg',
    cols: 3,
    rows: 3,
  },
  {
    src: 'https://storage.googleapis.com/static.baaahs.org/dark_rainbow_pasture.png',
    cols: 3,
    rows: 3,
  },
  {
    src: 'https://storage.googleapis.com/static.baaahs.org/eric_and_phillip.png',
    cols: 3,
    rows: 3,
  },
  {
    src: 'https://storage.googleapis.com/static.baaahs.org/mendocino_view_1.jpg',
    cols: 4,
    rows: 3,
  },
  {
    src: 'https://storage.googleapis.com/static.baaahs.org/pasture_lights_c%26j.jpeg',
    cols: 4,
    rows: 3,
  },
  {
    src: 'https://storage.googleapis.com/static.baaahs.org/pasture_preview_lights.mov',
    cols: 4,
    rows: 3,
    isVideo: true,
  },
  {
    src: 'https://storage.googleapis.com/static.baaahs.org/pelican.jpg',
    cols: 3,
    rows: 3,
  },
  {
    src: 'https://storage.googleapis.com/static.baaahs.org/shae_green.jpg',
    cols: 3,
    rows: 3,
  },
  {
    src: 'https://storage.googleapis.com/static.baaahs.org/the_grove_lights_preview.mov',
    cols: 3,
    rows: 4,
    isVideo: true,
  },
  {
    src: 'https://storage.googleapis.com/static.baaahs.org/the_pasture_crowd.jpg',
    cols: 3,
    rows: 3,
  },
  {
    src: 'https://storage.googleapis.com/static.baaahs.org/the_pasture_wide_shot.jpg',
    cols: 3,
    rows: 3,
  },
];

const LastYear = () => {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <CampoutMain colorInvert={true}>
      <Box gap={3}>
        <FullScreenHeader
          image={
            'https://storage.googleapis.com/static.baaahs.org/drag_bingpo_candid0.jpeg'
          }
          title={'Previous Years'}
          text={
            'Our Campout has been going on for years. Here are some of the highlights from previous years.'
          }
        />
        <Box display="flex" justifyContent={'center'}>
          <ImageList sx={{ maxWidth: 1200 }} cols={isLg ? 9 : (isMd ? 6 : 3)} variant="quilted" gap={16} rowHeight={121}>
            {contentItems.map((item, key) => (
              <ImageListItem
                key={key}
                cols={item.cols || 1}
                rows={item.rows || 1}
                sx={{ display: 'flex' }}
              >
                {item.isVideo ? (
                  <CardMedia
                    component="video"
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    sx={{
                      objectFit: 'cover',
                      filter:
                        theme.palette.mode === 'dark'
                          ? 'brightness(0.6)'
                          : 'none',
                    }}
                  />
                ) : (
                  <Box
                    width={1}
                    component="img"
                    loading="lazy"
                    src={item.src}
                    sx={{
                      objectFit: 'cover',
                      filter:
                        theme.palette.mode === 'dark'
                          ? 'brightness(0.6)'
                          : 'none',
                    }}
                  />
                )}
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
    </CampoutMain>
  );
};

export default LastYear;
