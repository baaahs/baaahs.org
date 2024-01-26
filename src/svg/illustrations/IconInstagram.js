import React from 'react';
import { useTheme } from '@mui/material/styles';

const IconInstagram = () => {
  const theme = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      width="32"
      height="32"
      viewBox="0 0 48 48"
    >
      <path
        fill="none"
        stroke={theme.palette.text.primary}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="3"
        d="M41.5,21.1v-4.6c0-5.5-4.5-10-10-10h-15c-5.5,0-10,4.5-10,10v3"
      ></path>
      <path
        fill="none"
        stroke={theme.palette.text.primary}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="3"
        d="M6.5,25.6v5.9c0,5.5,4.5,10,10,10h15c5.5,0,10-4.5,10-10v-4.6"
      ></path>
      <path
        fill="none"
        stroke={theme.palette.text.primary}
        stroke-miterlimit="10"
        stroke-width="3"
        d="M24,15.5c-4.7,0-8.5,3.8-8.5,8.5s3.8,8.5,8.5,8.5s8.5-3.8,8.5-8.5S28.7,15.5,24,15.5z"
      ></path>
      <path d="M34,12c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S35.1,12,34,12z"></path>
    </svg>
  );
};

export default IconInstagram;
