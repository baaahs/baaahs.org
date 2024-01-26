import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

const BAAAHSLogo = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Box
      component={'img'}
      src={
        mode === 'light' ? '/images/baaahs-logo.svg' : '/images/baaahs-logo.svg'
      }
      height={1}
      width={1}
      sx={{
        filter:
          mode === 'dark'
            ? 'drop-shadow(0 0 2px white) drop-shadow(0 0 1px white)'
            : '',
      }}
    >
      {/* TODO: Add link to root page */}
    </Box>
  );
};

export default BAAAHSLogo;
