import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// TODO: Principles icons

const principles = [
  {
    title: 'Radical Inclusion',
    subtitle:
      'We want everyone to ride the BAAAHS.  No prerequisites exist to slide through his butt and party on the big gay sheep. We\'re the art car you can always count on.',
    icon: '/images/resized/wick-radical-inclusion.webp'
  },
  {
    title: 'Gifting',
    subtitle:
      'Our favorite thing to do is to throw a party for other people. We love seeing people at our parties have the time of their lives. All the hours of hard work are worth seeing the look on someone\'s face the moment they slide into the sheep.',
    icon: '/images/resized/wick-gifting.webp',
  },
  {
    title: 'Decommo-dification',
    subtitle:
      'As a burning man camp and as a community we value space that is not centered around money or transactions.',
    icon: '/images/resized/wick-decommodification.webp',
  },
  {
    title: 'Radical Self-reliance',
    subtitle:
      'If you can build a sheep in the desert, you can do anything. BAAAHS teaches you to fix your own stuff, and that with a little can-do attitude and a lot of ratchet straps, anything is possible. With so many wrenches around camp you\'ve already gained two dexterity points.',
    icon: '/images/resized/wick-radical-self-reliance.webp',
  },
  {
    title: 'Radical Self-expression',
    subtitle:
      'We are literally a stage and a big-ass sound system on wheels. We create the platform for everyone to show us what they got, and make sure everyone on the playa can see it.',
    icon: '/images/resized/wick-radical-self-expression.webp',
  },
  {
    title: 'Communal Effort',
    subtitle:
      'Building BAAAHS alone just can\'t be done. The foundation of our camp is the miracle of this huge project that is only possible thanks to the work of multitudes of people who\'ve come together to make it happen.',
    icon: '/images/resized/wick-communal-effort.webp',
  },
  {
    title: 'Civic Responsibility',
    subtitle:
      'It’s all fun and games but if you drive the sheep you need your driver\'s license and you need to be sober.',
    icon: '/images/resized/wick-civic-responsibility.webp',
  },
  {
    title: 'Leaving No Trace',
    subtitle:
      'Want to leave no trace? Take the BAAAHS. We obsessively aim for the lowest possible environmental impact on the planet, at our parties, in our camp, and in every way we can off-playa.',
    icon: '/images/resized/wick-leaving-no-trace.webp',
  },
  {
    title: 'Participation',
    subtitle:
      'Being a part of BAAAHS means participating in creating it. Everyone in BAAAHS is welcome (and expected) to find an awesome project to bring to life, and shape their own little (or ginormous) part of BAAAHS.',
    icon: '/images/resized/wick-participation.webp',
  },
  {
    title: 'Immediacy',
    subtitle:
      'No amount of pictures, words or sounds can capture the BAAAHS experience. You just have to be there.',
    icon: '/images/resized/wick-immediacy.webp',
  },
];

const TenPrinciples = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant="h4"
        color="text.primary"
        align={'center'}
        gutterBottom
        padding={2}
        sx={{
          fontWeight: 700,
        }}
        fontFamily={'Smooth Circulars'}
      >
        Burning Man Principles
      </Typography>
      <Grid container spacing={2} >
        {principles.map((item, i) => (
          <Grid item xs={12} sm={6} md={12 / 5} key={i}>
            <Box
              alignItems="center"
              component={Card}
              padding={2}
              borderRadius={2}
              width={1}
              height={1}
              data-aos={'fade-up'}
              data-aos-delay={i * 100}
            >
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems="center"
                gap={2}
              >
                <Box
                  alignItems="center"
                  component={Avatar}
                  sx={{
                    width: 150,
                    height: 150,
                    marginBottom: 2,
                    color: theme.palette.background.paper,
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                <Typography
                  // variant={'h6'}
                  gutterBottom
                  sx={{ fontWeight: 250, wordWrap: 'break-word'}}
                  fontFamily={'Smooth Circulars'}
                  textAlign={'center'}
                >
                  {item.title}
                </Typography>
                <Typography color="text.secondary">{item.subtitle}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TenPrinciples;
