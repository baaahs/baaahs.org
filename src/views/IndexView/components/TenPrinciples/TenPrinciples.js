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
      'Anyonecan ride the BAAAHS.  No prerequisites exist to slide through the butt into our party on the big gay sheep. It’s the art car you can always count on.',
    icon: 'https://static.baaahs.org/Z/wick-radical-inclusion.png'
  },
  {
    title: 'Gifting',
    subtitle:
      'Our favorite thing to do is to throw a party for other people. We love watching people at our parties having the time of their lives. All the hours of hard work are worth the look on someone's face the moment they slide into the sheep.',
    icon: 'https://static.baaahs.org/Z/wick-gifting.png',
  },
  {
    title: 'Decommo-dification',
    subtitle:
      'As a burning man camp and as a community we value the space that is not centered around money or transactions.',
    icon: 'https://static.baaahs.org/Z/wick-decommodification.png',
  },
  {
    title: 'Radical Self-reliance',
    subtitle:
      'BIf you build a sheep in the desert, you can do anything. BAAAHS teaches you to fix your own stuff, and that with a little can-do attitude and a lot of ratchet straps, anything is possible. With so many wrenches around camp you already gained two dexterity points.',
    icon: 'https://static.baaahs.org/Z/wick-radical-self-reliance.png',
  },
  {
    title: 'Radical Self-expression',
    subtitle:
      'We are literally a stage with a big-ass sound system on wheels. We create the platform for everyone to show us what they got, and we drive around the playa so everyone can see it.',
    icon: 'https://static.baaahs.org/Z/wick-radical-self-expression.png',
  },
  {
    title: 'Communal Effort',
    subtitle:
      'Building BAAAHS alone is not really a thing. The very definition of our camp is the miracle of this huge project that is only possible thanks to everyone who come together to make it happen.',
    icon: 'https://static.baaahs.org/Z/wick-communal-effort.png',
  },
  {
    title: 'Civic Responsibility',
    subtitle:
      'It’s all fun and games but if you drive the sheep you need your driver license and to be sober.',
    icon: 'https://static.baaahs.org/Z/wick-civic-responsibility.png',
  },
  {
    title: 'Leaving No Trace',
    subtitle:
      'Want to leave no trace? Take the BAAAHS. We put a lot of effort into cleaning our area, and also in BAAAHS events off playa we encourage carpooling and the use of reusable dishes to minimize our impact on the planet.',
    icon: 'https://static.baaahs.org/Z/wick-leaving-no-trace.png',
  },
  {
    title: 'Participation',
    subtitle:
      'Being a part of BAAAHS means participating in creating it. Everyone in BAAAHS is welcome (And expected) to find an awesome project to bring to life, and shape their own little part of BAAAHS.',
    icon: 'https://static.baaahs.org/Z/wick-participation.png',
  },
  {
    title: 'Immediacy',
    subtitle:
      'No amount of pictures, words or sounds can capture the BAAAHS experience. You just have to be there.',
    icon: 'https://static.baaahs.org/Z/wick-immediacy.png',
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
