import React from 'react';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useMediaQuery from '@mui/material/useMediaQuery';

import Main from 'layouts/Main';
import FullScreenHeader from 'components/FullScreenHeader';
import { useTheme } from '@emotion/react';
import NavItems from './NavItems';

const contentItems = [
  {
    src: 'https://raw.githubusercontent.com/baaahs/baaahs.org/main/resized/20230527_174212.webp',
    cols: 3,
    rows: 2,
  },
  {
    src: 'https://raw.githubusercontent.com/baaahs/baaahs.org/main/resized/IMG_0448.webp',
    cols: 3,
    rows: 3,
  },
  {
    src: 'https://raw.githubusercontent.com/baaahs/baaahs.org/main/resized/20230527_174339.webp',
    cols: 3,
    rows: 3,
  },
  {
    src: 'https://raw.githubusercontent.com/baaahs/baaahs.org/main/resized/20230528_004535.webp',
    cols: 2,
    rows: 3,
  },
  {
    src: 'https://raw.githubusercontent.com/baaahs/baaahs.org/main/resized/20230529_002733.webp',
    cols: 3,
    rows: 2,
  },
  {
    src: 'https://raw.githubusercontent.com/baaahs/baaahs.org/main/resized/20230528_174740.webp',
    cols: 3,
    rows: 2,
  },
  {
    src: 'https://raw.githubusercontent.com/baaahs/baaahs.org/main/resized/20230528_004629.webp',
    cols: 2,
    rows: 3,
  },
  {
    src: 'https://raw.githubusercontent.com/baaahs/baaahs.org/main/resized/20230528_172118.webp',
    cols: 3,
    rows: 2,
  },
  {
    src: 'https://raw.githubusercontent.com/baaahs/baaahs.org/main/resized/20230528_232605.webp',
    cols: 3,
    rows: 2,
  },
  {
    src: 'https://raw.githubusercontent.com/baaahs/baaahs.org/main/resized/20230528_065034.webp',
    cols: 3,
    rows: 2,
  },
  {
    src: 'https://raw.githubusercontent.com/baaahs/baaahs.org/main/resized/20230528_172109.webp',
    cols: 3,
    rows: 2,
  },
  {
    src: 'https://raw.githubusercontent.com/baaahs/baaahs.org/main/resized/20230528_052014.webp',
    cols: 3,
    rows: 2,
  },
  {
    src: 'https://raw.githubusercontent.com/baaahs/baaahs.org/main/resized/20230528_051741.webp',
    cols: 3,
    rows: 3,
  },
  {
    src: 'https://raw.githubusercontent.com/baaahs/baaahs.org/main/resized/afik_hugging.webp',
    cols: 3,
    rows: 3,
  },
  {
    src: 'https://raw.githubusercontent.com/baaahs/baaahs.org/main/resized/baaahs_dark_sign.webp',
    cols: 3,
    rows: 3,
  },
  {
    src: 'https://raw.githubusercontent.com/baaahs/baaahs.org/main/resized/dark_rainbow_pasture.webp',
    cols: 3,
    rows: 3,
  },
  {
    src: 'https://raw.githubusercontent.com/baaahs/baaahs.org/main/resized/eric_and_phillip.webp',
    cols: 3,
    rows: 3,
  },
  {
    src: 'https://raw.githubusercontent.com/baaahs/baaahs.org/main/resized/mendocino_view_1.webp',
    cols: 4,
    rows: 3,
  },
  {
    src: 'https://raw.githubusercontent.com/baaahs/baaahs.org/main/resized/pasture_lights_c%2526j.webp',
    cols: 4,
    rows: 3,
  },
  {
    src: 'https://static.baaahs.org/pasture_preview_lights.mov',
    cols: 4,
    rows: 3,
    isVideo: true,
  },
  {
    src: 'https://raw.githubusercontent.com/baaahs/baaahs.org/main/resized/pelican.webp',
    cols: 3,
    rows: 3,
  },
  {
    src: 'https://raw.githubusercontent.com/baaahs/baaahs.org/main/resized/shae_green.webp',
    cols: 3,
    rows: 3,
  },
  {
    src: 'https://static.baaahs.org/the_grove_lights_preview.mov',
    cols: 3,
    rows: 4,
    isVideo: true,
  },
  {
    src: 'https://raw.githubusercontent.com/baaahs/baaahs.org/main/resized/the_pasture_crowd.webp',
    cols: 3,
    rows: 3,
  },
  {
    src: 'https://raw.githubusercontent.com/baaahs/baaahs.org/main/resized/the_pasture_wide_shot.webp',
    cols: 3,
    rows: 3,
  },
];

const LastYear = () => {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Main colorInvert={true} navItems={NavItems}>
      <Box gap={3}>
        <FullScreenHeader
          image={
            'https://raw.githubusercontent.com/baaahs/baaahs.org/main/resized/drag_bingpo_candid0.webp'
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
    </Main>
  );
};

export default LastYear;
