import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Grid';

import CampoutMain from 'layouts/CampoutMain.js';

const WhatToExpect = () => {
  const theme = useTheme();
  return (
    <CampoutMain>
      <Box>
        <Box marginBottom={4}>
          <Grid
            container
            spacing={2}
            justifyContent={'center'}
          >
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
                  height={599}
                  width={1}
                  src={'https://s3-alpha-sig.figma.com/img/f6ef/7aa3/355af7866134365ca27494dcfbd78f51?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GvuXE7YdqZL67nSS8h4f8Nze7oNeDypOqsDXBr05uxL9ZUYNJbkGM~~TXbz45LdefCfwzqMeO-Mcy73cr4kcGNLZ88Y1INxdwwKwda-eTkhY7QlmlmvNi67jGoumBsJTGffhZS0KMKxE6R7Us0mURuFdbRdFm~05XGaKCrFqtKosjvafpYtzOwSzDW7yBO7EijpIzCN4hhy5NnzhPTy5GHGoFW-kmTYdMNsX~X4HiFeHJE46s7l2nazcuO8eFy5IjvC4T1cyjZ9FBOoxmiPx8SRFR2d71WrSrz6UsAoduAatUDHmKJaU5tsH6WPFwwKF2iglzfxmiPaoecOpfPHAKA__'}
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
                    width={600}
                    height={200}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bgcolor={theme.palette.background.level1}
                    color={theme.palette.primary.light}
                  >
                    <Typography component="h1" align="center">
                      What To Expect
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Box marginBottom={4}>
            <Grid 
              container 
              spacing={2}
              justifyContent={'center'}
            >
              <Grid 
                container 
                item 
                xs={4}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Typography component="h1" align="center">
                  Beautiful views of the Mendocino National Forest
                </Typography>
              </Grid>
              <Grid 
                container 
                item 
                xs={8}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Box 
                  component="img" 
                  loading="lazy"
                  src="https://s3-alpha-sig.figma.com/img/4d8c/832d/a460f2d5899aaec02848a79ba5aad279?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ANHQXUE01KsAhYGOZNLwdAYZMtkd~vjwAObzy6yswggQcj-YQUF-8tiJguLUw4f7Mu~R0lB7amCbsvEJ8eS1d5E1EL39P-1NBP275iRR3OqLMZpdw1GUDd4PaF0SCyzERSQXhKS5q~KAa2YDhERNdcNhs~KNIlDrmHTJO0TVNfR03skKOboFX26ExnbA22gXGfR1MZQSa1AxhQ17iXn4L9ZqNnMkBRp5gA5mHaF5gitHmwznbx4WlQLx~HSOcdtBiaMjGvwHIRvsiCFkun~LWZdA0o01Y-xqNL9V2kFvHWUs3FmaQC4eXbzKls9BvllPUkOzZ9H~0COHu-P1q8OlzQ__" 
                  alt="Beautiful views of the Mendocino National Forest"
                  width={580}
                  height={380}
                  sx={{
                    objectFit: 'cover',
                    filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.6)' : 'none',
                  }}
                />
              </Grid>
            </Grid>
          </Box>
          <Box marginBottom={4}>
            <Grid 
              container 
              spacing={2}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Grid 
                container 
                item 
                xs={8}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Box 
                  component="img" 
                  loading="lazy"
                  src="https://s3-alpha-sig.figma.com/img/4abc/d349/aa2e8b9545fbabd6de4a376e8fe20d55?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GfK~9I92mdiwgKgSmPplYWR0jZnCZGBPNnO0VuXAAp6gwEWLlSZUxTsYjJQ7h-7uDOy8yIEu~5Pzt6a32cSvsboq8CM8GYIyW9ax8hw2ZTsTBMguGE5kpDmwsDmL5EYVQ2nn5GsTMXQK8qJimlNoXof2kctxtR9~M-FICuzB8QVRCv9CPUBqksTcKdcGulSsXYBHqB92uul9lz3ZGMOKWl9WLYX33VHG5yl28BT29enCSN1w4nJDDWn9V58PwHntyY5duwQNucwjUz-booiH3M7xC-sge2-GTzLQ-T47Wuou0Sj797a9XUlxUtLstwgQFFz6~fiG-4WFAM5jXWcIyA__"
                  alt="Pure Queer Fun"
                  width={429}
                  height={429}
                  borderRadius={429}
                  sx={{
                    objectFit: 'cover',
                    filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.6)' : 'none',
                  }}
                />
              </Grid>
              <Grid 
                container 
                item 
                xs={4}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Typography component="h1" align="center">
                  Pure Queer Fun
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box marginBottom={4}>
            <Grid 
              container 
              spacing={2}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Grid 
                container 
                item 
                xs={4}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Typography component="h1" align="center">
                  Iconic BAAAHS Lights and Sound
                </Typography>
              </Grid>
              <Grid 
                container 
                item 
                xs={8}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Box 
                  component="img" 
                  loading="lazy"
                  src="https://s3-alpha-sig.figma.com/img/73cc/07c6/b1cc5fe49d990f86882ec885b1b7144a?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=npxZE0DpTfnErJDqnhXxbE4mM~bLwQJ9mU4gcGCUf2F1AD3im9xyHz6qy2gFomr~L06vS8W2NDxNPu0wrO5fE~IBMjsw4AxuBsL2fmmk5RnqKkv8ch8-RE~bF1vviWAouM76s2JteFYBJn5oPQHX8DLKfTTGL~cOpe3s52cdLlJALUl9PRkWk5xHNuybmsFd7hUjpFh71KxlKWi780uOP3J5yiexeUpD0auGn0ICOoi21aLo2EYc-dfyC8ACJtemyz7xvFSNaVTeIoCarKvyuDuqvLQ7wOCDDtUSIEk16qI1rjRSdzhvZQKNCF47XiZCjWnJTPapFarcJgbnOta-Ww__"
                  alt="Iconic BAAAHS Lights and Sound"
                  width={580}
                  height={380}
                  sx={{
                    objectFit: 'cover',
                    filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.6)' : 'none',
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </CampoutMain>
  );
};

export default WhatToExpect;
