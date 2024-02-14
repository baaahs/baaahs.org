import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import BAAAHSLogo from '../../BAAAHSLogo';

const Footer = ({ links }) => {
  const navItems = links || [
    { title: 'campout', href: '/campout' },
    { title: 'apply', href: '/apply' },
    // { title: 'music', href: '/music' },
    // { title: 'fundraising', href: '/fundraising' },
    // { title: 'about', href: '/about' },
  ];
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="theFront"
            width={100}
          >
            <BAAAHSLogo />
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems="center"
            gap={2}
          >
            {navItems.map((item, i) => (
              <Box key={i} marginTop={1} gap={2}>
                <Link
                  underline="none"
                  component="a"
                  href={item.href}
                  color="text.primary"
                  variant={'subtitle2'}
                >
                  {item.title}
                </Link>
              </Box>
            ))}
            <Box marginTop={1}>
              <Button
                variant="outlined"
                color="primary"
                component="a"
                target="blank"
                href="mailto:info@baaahs.org?subject=Writing%20from%20the%20web"
                size="small"
              >
                contact
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          Hey cutie
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
        >
          Thanks for reading this. Xoxo BAAAHS
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
