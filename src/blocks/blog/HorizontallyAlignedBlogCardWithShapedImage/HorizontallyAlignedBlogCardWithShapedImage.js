import React from 'react';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Container from 'components/Container';

const mock = {
  image: 'https://assets.maccarianagency.com/backgrounds/img4.jpg',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  title: 'BAAAHS Campout 2024 - WHAAAT?',
  date: '24-27 May',
  author: {
    name: 'Clifford Hall',
    avatar: 'https://assets.maccarianagency.com/avatars/img1.jpg',
  },
  link: '/campout',
};

const HorizontallyAlignedBlogCardWithShapedImage = ({ data }) => {
  const theme = useTheme();
  const {
    image,
    description,
    title,
    date,
    author,
    flip,
    maxHeight,
    maxWidth,
    fontSize,
    link,
  } = data || mock;

  return (
    <Container>
      <Box
        component={'a'}
        href={''}
        display={'block'}
        width={1}
        height={1}
        sx={{
          textDecoration: 'none',
          transition: 'all .2s ease-in-out',
          '&:hover': {
            transform: `translateY(-${theme.spacing(1 / 2)})`,
          },
        }}
      >
        <Link underline="none" component="a" href={link}>
          <Box
            component={Card}
            width={1}
            height={1}
            boxShadow={4}
            display={'flex'}
            flexDirection={{
              xs: flip ? 'column' : 'column-reverse',
              md: flip ? 'row-reverse' : 'row',
            }}
            sx={{ backgroundImage: 'none' }}
          >
            <Box
              sx={{
                width: { xs: 1, md: '50%' },
                position: 'relative',
                display: 'flex',
              }}
            >
              <Box
                component={'img'}
                height={1}
                width={1}
                src={image}
                alt="..."
                sx={{
                  width: maxWidth ?? '100%',
                  height: maxHeight ?? '100%',
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                }}
              />
              <Box
                component={'svg'}
                viewBox="0 0 112 690"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  top: '-50%',
                  left: 0,
                  right: 0,
                  color: theme.palette.background.paper,
                  transform: 'scale(2)',
                  height: 1,
                  width: 'auto',
                  transformOrigin: 'top center',
                  display: { xs: 'none', md: 'block' },
                }}
              />
            </Box>
            <CardContent
              sx={{
                position: 'relative',
                width: { xs: 1, md: '50%' },
                padding: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Typography
                  variant={'h5'}
                  gutterBottom
                  fontFamily={'var(--font-smooth-circulars)'}
                >
                  {title}
                </Typography>
                <Typography color="text.secondary" fontSize={fontSize}>
                  {description}
                </Typography>
              </Box>
              <Box>
                <Divider sx={{ marginY: 2 }} />
                <Box
                  display={'flex'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                >
                  {author && (
                    <Box display={'flex'} alignItems={'center'}>
                      <Avatar src={author.avatar} sx={{ marginRight: 1 }} />
                      <Typography color={'text.secondary'}>
                        {author.name}
                      </Typography>
                    </Box>
                  )}
                  <Typography color={'text.secondary'}>{date}</Typography>
                </Box>
              </Box>
            </CardContent>
          </Box>
        </Link>
      </Box>
    </Container>
  );
};

export default HorizontallyAlignedBlogCardWithShapedImage;
