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
      'Anyone may be a part of Burning Man. We welcome and respect the stranger. No prerequisites exist for participation in our community.',
    icon: 'https://static.baaahs.org/Z/wick-radical-inclusion.png'
  },
  {
    title: 'Gifting',
    subtitle:
      'Burning Man is devoted to acts of gift giving. The value of a gift is unconditional. Gifting does not contemplate a return or an exchange for something of equal value.',
    icon: 'https://static.baaahs.org/Z/wick-gifting.png',
  },
  {
    title: 'Decommo-dification',
    subtitle:
      'In order to preserve the spirit of gifting, our community seeks to create social environments that are unmediated by commercial sponsorships, transactions, or advertising. We stand ready to protect our culture from such exploitation. We resist the substitution of consumption for participatory experience.',
    icon: 'https://static.baaahs.org/Z/wick-decommodification.png',
  },
  {
    title: 'Radical Self-reliance',
    subtitle:
      'Burning Man encourages the individual to discover, exercise and rely on their inner resources.',
    icon: 'https://static.baaahs.org/Z/wick-radical-self-reliance.png',
  },
  {
    title: 'Radical Self-expression',
    subtitle:
      'Radical self-expression arises from the unique gifts of the individual. No one other than the individual or a collaborating group can determine its content. It is offered as a gift to others. In this spirit, the giver should respect the rights and liberties of the recipient.',
    icon: 'https://static.baaahs.org/Z/wick-radical-self-expression.png',
  },
  {
    title: 'Communal Effort',
    subtitle:
      'Our community values creative cooperation and collaboration. We strive to produce, promote and protect social networks, public spaces, works of art, and methods of communication that support such interaction.',
    icon: 'https://static.baaahs.org/Z/wick-communal-effort.png',
  },
  {
    title: 'Civic Responsibility',
    subtitle:
      'We value civil society. Community members who organize events should assume responsibility for public welfare and endeavor to communicate civic responsibilities to participants. They must also assume responsibility for conducting events in accordance with local, state and federal laws.',
    icon: 'https://static.baaahs.org/Z/wick-civic-responsibility.png',
  },
  {
    title: 'Leaving No Trace',
    subtitle:
      'Our community respects the environment. We are committed to leaving no physical trace of our activities wherever we gather. We clean up after ourselves and endeavor, whenever possible, to leave such places in a better state than when we found them.',
    icon: 'https://static.baaahs.org/Z/wick-leaving-no-trace.png',
  },
  {
    title: 'Participation',
    subtitle:
      'Our community is committed to a radically participatory ethic. We believe that transformative change, whether in the individual or in society, can occur only through the medium of deeply personal participation. We achieve being through doing. Everyone is invited to work. Everyone is invited to play. We make the world real through actions that open the heart.',
    icon: 'https://static.baaahs.org/Z/wick-participation.png',
  },
  {
    title: 'Immediacy',
    subtitle:
      'Immediate experience is, in many ways, the most important touchstone of value in our culture. We seek to overcome barriers that stand between us and a recognition of our inner selves, the reality of those around us, participation in society, and contact with a natural world exceeding human powers. No idea can substitute for this experience.',
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
