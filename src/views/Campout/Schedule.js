/* eslint-disable quotes */
import React from 'react';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import NavItems from './NavItems';

const Schedule = () => {
  return (
    <Main navItems={NavItems}>
      <Box marginY={10} justifyContent="center" display="flex">
        <iframe src="https://drive.google.com/file/d/1gO0RlqMr0uMUHOKEiC4_DrG2-_19mvg6/preview" width="950" height="4300" allow="autoplay"></iframe>
      </Box>
    </Main>
  );
};

export default Schedule;
