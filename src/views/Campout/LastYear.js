import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Grid';

import CampoutMain from 'layouts/CampoutMain.js';
const contentItems = [
  {
    name: 'Item 1',
    height: 300,
    width: 500,
  },
  {
    name: 'Item 2',
    height: 300,
    width: 500,
  },
  {
    name: 'Item 3',
    height: 300,
    width: 500,
  },
  {
    name: 'Item 4',
    height: 300,
    width: 700,
  },
  {
    name: 'Item 5',
    height: 500,
    width: 200,
  },
  {
    name: 'Item 6',
    height: 600,
    width: 400,
  },
];
const LastYear = () => {
  const theme = useTheme();
  return (
    <CampoutMain>
      <Box>
        <Grid container spacing={2} justifyContent={'center'}>
          <Grid
            item
            container
            justifyContent={'center'}
            alignItems={'center'}
            xs={12}
            lg={8}
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
                  component={Avatar}
                  width={200}
                  height={200}
                  bgcolor={theme.palette.primary.main}
                  color={theme.palette.background.paper}
                >
                  Campout Logo
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box marginBottom={4}>
          <Typography align={'center'} fontWeight={600} component="h1">
            Previous Years
          </Typography>
        </Box>
        <Grid container spacing={2} justifyContent={'center'}>
          {contentItems.map((item, key) => (
            <Grid
              contentItems
              key={key}
              xs={3}
            >
              <Box display="flex" alignItems="center" justifyContent="center" marginBottom={4}>
                <Box
                  width={item.width}
                  height={item.height}
                  bgcolor={theme.palette.primary.main}
                  color={theme.palette.background.paper}
                  display="flex"
                  alignItems="center" 
                  justifyContent="center"
                >
                  {item.name}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </CampoutMain>
  );
};

export default LastYear;
