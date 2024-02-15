import Box from '@mui/material/Box';

const BAAAHSLogo = () => {
  return (
    <Box
      component={'img'}
      src='/images/baaahs-logotype.svg'
      height={1}
      width={1}
      alt='BAAAHS Logo'
      sx={{ filter: 'drop-shadow(0 0 2px white) drop-shadow(0 0 1px white)' }}
    />
  );
};

export default BAAAHSLogo;
