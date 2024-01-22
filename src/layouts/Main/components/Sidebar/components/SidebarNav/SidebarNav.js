import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import NavItem from './components/NavItem';

const SidebarNav = ({ pages }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const {
    landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
  } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="BAAAHS"
          width={{ xs: 120, md: 150 }}
        >
          <Box
            component={'img'}
            src={
              mode === 'light'
                ? '/images/baaahs-logo.svg'
                : '/images/baaahs-logo.svg'
            }
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <Link
            underline="none"
            component="a"
            href="/events"
            sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}
          >
            events
          </Link>
        </Box>
        <Box>
          <Link
            underline="none"
            component="a"
            href="/music"
            sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}
          >
            music
          </Link>
        </Box>
        <Box>
          <Link
            underline="none"
            component="a"
            href="/fundraising"
            sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}
          >
            fundraising
          </Link>
        </Box>
        <Box>
          <Link
            underline="none"
            component="a"
            href="/about"
            sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}
          >
            about
          </Link>
        </Box>

        <Box>
          <NavItem title={'Landings'} items={landingPages} />
        </Box>
        <Box>
          <NavItem title={'Company'} items={companyPages} />
        </Box>
        <Box>
          <NavItem title={'Pages'} items={secondaryPages} />
        </Box>
        <Box>
          <NavItem title={'Account'} items={accountPages} />
        </Box>
        <Box>
          <NavItem title={'Blog'} items={blogPages} />
        </Box>
        <Box>
          <NavItem title={'Portfolio'} items={portfolioPages} />
        </Box>
        <Box marginTop={2}>
          <Button
            size={'large'}
            variant="outlined"
            fullWidth
            component="a"
            href="/crew"
          >
            Join the flock
          </Button>
        </Box>
        <Box marginTop={1}>
          <Button
            size={'large'}
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            target="blank"
            href="/crew"
          >
            Crew login
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
