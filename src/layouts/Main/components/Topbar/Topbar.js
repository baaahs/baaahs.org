import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import IconSoundcloud from 'svg/illustrations/IconSoundcloud';
import IconEmail from 'svg/illustrations/IconEmail';
import IconInstagram from 'svg/illustrations/IconInstagram';
import IconFacebook from 'svg/illustrations/IconFacebook';
import BAAAHSLogo from '../../BAAAHSLogo';
import pages from '../../../navigation';

const Topbar = ({ onSidebarOpen, colorInvert = false, data }) => {
  const theme = useTheme();

  const navItems = data?.navItems ?? pages.sections;
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="theFront"
        width={{ xs: 120, md: 150 }}
      >
        <BAAAHSLogo />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        {navItems.map((item, i) => {
          return (
            <Box key={i} marginRight={{ xs: 2, sm: 4 }}>
              <Link
                underline="none"
                component="a"
                href={item.href}
                color={colorInvert ? 'common.white' : 'text.primary'}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: 'bold',
                  textTransform: 'lowercase',
                }}
              >
                {item.title}
              </Link>
            </Box>
          );
        })}
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'right'}>
        <Box marginLeft={4}>
          <Link
            underline="none"
            component="a"
            href="https://soundcloud.com/baaahs"
            color={colorInvert ? 'common.white' : 'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <IconSoundcloud />
          </Link>
        </Box>
        <Box marginLeft={4}>
          <Link
            underline="none"
            component="a"
            href="mailto:info@baaahs.org?subject=Writing%20from%20the%20web"
            color={colorInvert ? 'common.white' : 'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <IconEmail />
          </Link>
        </Box>
        <Box marginLeft={4}>
          <Link
            underline="none"
            component="a"
            href="https://www.instagram.com/baaahsstation"
            color={colorInvert ? 'common.white' : 'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <IconInstagram />
          </Link>
        </Box>
        <Box marginLeft={4}>
          <Link
            underline="none"
            component="a"
            href="https://facebook.com/BAAAHS.13"
            color={colorInvert ? 'common.white' : 'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <IconFacebook />
          </Link>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
