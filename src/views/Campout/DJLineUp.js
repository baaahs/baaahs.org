/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Main from 'layouts/Main';
import FullScreenHeader from 'components/FullScreenHeader';
import NavItems from './NavItems';
import IconInstagram from 'svg/illustrations/IconInstagram';
import IconSoundcloud from 'svg/illustrations/IconSoundcloud';

const DJLineup = () => {
  return (
    <Main colorInvert={true} navItems={NavItems}>
      <Box gap={3}>
        <FullScreenHeader
          image={'https://static.baaahs.org/twunkerbell_backshot.jpeg'}
          title={'DJ Lineup'}
          text={`It wouldn't be a BAAAHS Campout without a sick lineup of DJs. Check out the 2025 lineup below.`}
        />
        <Grid container marginTop={2} spacing={2} justifyContent="center">
          <Grid container item xs={12} xl={8} spacing={2}>
            <DJ
              name="Aphex"
              affiliation="BAAAHS"
              bio="Trance, Melodic Techno, Progressive House"
              soundcloud="https://soundcloud.com/aphexcx"
              instagram="http://aphex.dj"
              image="https://storage.googleapis.com/static.baaahs.org/z_aphek.png"
            />
            <DJ
              name="Faster Kill Faster"
              affiliation="BAAAHS"
              soundcloud="https://soundcloud.com/arorah-1"
              instagram=""
              image=""
            />
            <DJ
              name="Booty Juice"
              affiliation="DAD SF, BAAAHS"
              bio="San Francisco's Wettest DJ. 🪩 Noise Polluter. Hot Mess & Neighborhood Friendly Dumpster Fire."
              soundcloud="https://soundcloud.com/bootyjuicesf"
              instagram="https://www.instagram.com/bootyjuicesf"
              image="https://storage.googleapis.com/static.baaahs.org/z_booty.png"
            />
            <DJ
              name="Brian Rojas"
              bio=""
              soundcloud="https://soundcloud.com/brianrojasatlanta"
              instagram=""
              image=""
            />
            <DJ
              name="CamBam"
              affiliation=""
              bio=""
              soundcloud="https://on.soundcloud.com/RxBELi5RJJ14Jr3w6"
              instagram=""
              image=""
            />
            <DJ
              name="Chelsea Star"
              bio=""
              soundcloud="https://soundcloud.com/chelsea-starr"
              instagram=""
              image=""
            />
            <DJ
              name="Dev"
              affiliation="Port Bar, Steamworks (Berkeley), Eli's Mile High Club"
              bio="As a pioneer in bringing Jersey Club to the Bay Area, her high energy cross genre sets and flawless blends are guaranteed to make any dance floor shake."
              soundcloud="https://on.soundcloud.com/HKpGb"
              instagram="https://www.instagram.com/inebriatedfelon"
              image="https://storage.googleapis.com/static.baaahs.org/z_del.png"
            />
            <DJ
              name="eMote"
              affiliation="BAAAHS"
              bio="Grounded around dreamy, emotional melodies, eMote brings the energy to the dancefloor with trance, progressive, and the occasional DnB or dubstep banger."
              soundcloud=""
              instagram="https://www.instagram.com/linn.david"
              image="/images/campout/2024/djs/emote.jpg"
            />
            <DJ
              name="hunnycut"
              affiliation="Naarak (NYC), BAAAHS"
              bio="hunnycut is here to make you dance.
               Bringing bouncy beats and some heavy bass for girls, theys, &
               gays. a recent addition to baaahs station's dj lineup, they're
               all about the kind of house music that honors its history,
               born from Black excellence and queer resistance."
              soundcloud="https://soundcloud.com/hunnycut"
              instagram="https://www.instagram.com/jckc.ny"
              image="/images/campout/2024/djs/hunnycut.jpg"
            />
            <DJ
              name="ISSA"
              affiliation="Provacateur (SF)"
              bio="ISSA developed a passion for dance music growing up in SF in
               the 90s. He blends classic house, Arabic and Latin sounds,
               hip-hop, disco, R&B, techno, and pop across decades. His
               trademark sound and genre-bending flair will keep you moving for
               hours, day or night."
              soundcloud="https://soundcloud.com/itsissa"
              instagram="http://instagram.com/issaaraj"
              image="https://storage.googleapis.com/static.baaahs.org/z_issa.png"
            />
            <DJ
              name="Jumpr"
              affiliation="Syynthia, Stank"
              bio=""
              soundcloud="https://soundcloud.com/jump_r"
              instagram=""
              image=""
            />
            <DJ
              name="Kelly Naughton"
              affiliation="DAD SF, BAAAHS"
              bio="Kelly Naughton is a San Francisco based DJ focusing on
               delectable Disco, racy Italo, sassy House, & thumping Techno.
               He created DAD SF, a disco/vers unabashedly joyous dance party in
               SF's SOMA district."
              soundcloud="https://soundcloud.com/kellynaughton"
              instagram="https://www.instagram.com/naughtontime"
              image="https://storage.googleapis.com/static.baaahs.org/z_kelly.png"
            />
            <DJ
              name="Koppertone"
              bio=""
              soundcloud="https://soundcloud.com/koppertone"
              instagram=""
              image=""
            />
            <DJ
              name="LOVR"
              bio="Hailing from Detroit, LOVR blends techno and house, creating
               immersive experiences with pulsating beats and hypnotic melodies.
               His empathetic sets connect deeply with audiences, embodying
               Detroit's rich electronic music history."
              soundcloud=""
              instagram="https://www.instagram.com/yakewiththecake"
              image="/images/campout/2024/djs/lovr.jpg"
            />
            <DJ
              name="M*J*R"
              affiliation="BTW (Oakland), Pyramid Scheme (BRC)"
              bio=""
              soundcloud="https://soundcloud.com/majorjohn"
              instagram=""
              image="/images/campout/2024/djs/major.jpg"
            />
            <DJ
              name="Mondo Nexus"
              affiliation=""
              bio=""
              soundcloud="https://soundcloud.com/mondonexus"
              instagram=""
              image=""
            />
            <DJ
              name="MorrisMORE!"
              affiliation="DAD SF, BAAAHS"
              bio="Disco Pop Good vibes :)"
              soundcloud="https://soundcloud.com/morris_more"
              instagram="https://www.instagram.com/spenser_morris"
              image="https://storage.googleapis.com/static.baaahs.org/z_spenser.png"
            />
            <DJ
              name="RemyD"
              soundcloud="https://soundcloud.com/jeremy-moore-703165379"
              bio=""
              affiliation=""
              instagram=""
              image=""
            />
            {/* <DJ
              name="Rich King"
              affiliation="the SUNDAYSITUATION, EASY/NYC, SNAXX (NYC)"
              bio="RICH KING has been celebrating life through music, starting
               on college radio in the 80s, playing venues from dive bars to the
               Black Party to panoramic playas. All vinyl, all the time —
               contemporary to classic, house to disco, funk to far-out.
               RICH KING is excited to see the sunrise with you!"
              soundcloud="https://soundcloud.com/djrichking"
              instagram="https://www.instagram.com/heyrichking"
              image="/images/campout/2024/djs/richking.jpg"
            /> */}
            <DJ
              name="SammyD"
              affiliation=""
              bio=""
              soundcloud="https://soundcloud.com/sammy-taylor-sf"
              instagram=""
              image=""
            />
            <DJ
              name="Sindri"
              affiliation=""
              bio=""
              soundcloud="https://soundcloud.com/djsindri"
              instagram=""
              image=""
            />
            <DJ
              name="Starkey"
              affiliation=""
              bio=""
              soundcloud="https://soundcloud.com/user-575675417"
              instagram=""
              image=""
            />
            <DJ
              name="StefanWays"
              affiliation=""
              bio=""
              soundcloud="https://soundcloud.com/stefanways"
              instagram=""
              image=""
            />
            <DJ
              name="StormyRoxx"
              affiliation="Lust (PDX), The Locker Room (PDX), Shift Festival"
              bio="A cool daddy who plays cool music."
              soundcloud="https://soundcloud.com/stormyroxx"
              instagram="https://www.instagram.com/stormyroxx"
              image="https://storage.googleapis.com/static.baaahs.org/z_stormy.png"
            />
            <DJ
              name="Tim Hansen"
              affiliation=""
              bio=""
              soundcloud=""
              instagram="https://www.instagram.com/thansen6390"
              image="/images/campout/2024/djs/timhansen.jpg"
            />
            {/* <DJ
              name="Tiny Tim"
              affiliation="Something Queer, Chonies"
              bio="Combining 21 years of mixing with production, I love to produce and play music that comes from the soul, goes to the decks and is felt on the floor!"
              soundcloud="https://www.soundcloud.com/djtinytp"
              instagram="https://www.instagram.com/djtinytp"
              image="https://storage.googleapis.com/static.baaahs.org/z_tiny.png"
            /> */}
            <DJ
              name="Twunkerbell"
              affiliation="BAAAHS"
              bio='Music connoisseurs and headbanging ravers alike have referred to his DJ sets as "decent", "pretty good", and "something people listen to". Combining 20 years of classical piano training with complementary musical genres such as slut pop, tech house, and nu disco, he incorporates live elements into his high-energy sets to take your ears on a magical journey of sunshine, rainbows, and unicorn ketamine.'
              soundcloud="https://soundcloud.com/twunkerbell"
              instagram="https://www.instagram.com/twunkerbell.music"
              image="https://storage.googleapis.com/static.baaahs.org/z_twunkerbell.png"
            />
          </Grid>
        </Grid>
      </Box>
    </Main>
  );
};

const DJ = ({ name, image, affiliation, bio, soundcloud, instagram }) => {
  const theme = useTheme();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Box
        alignItems="center"
        component={Card}
        padding={2}
        borderRadius={2}
        width={1}
        height={1}
      >
        <Box flexDirection={'row'} alignItems="center" gap={2}>
          <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems="center"
            gap={2}
          >
            {image && (
              <Box
                alignItems="center"
                component={Avatar}
                width={150}
                height={150}
                bgcolor={theme.palette.primary.main}
                color={theme.palette.background.paper}
              >
                <img
                  src={image}
                  style={Object.assign({
                    width: '100%',
                  })}
                  alt=""
                />
              </Box>
            )}
            <Typography
              variant="h6"
              fontFamily="Smooth Circulars"
              textAlign="center"
            >
              {name}
            </Typography>

            {affiliation && (
              <Box>
                {affiliation.split(', ').map((aff) => (
                  <Typography color="text.secondary" textAlign="center">
                    {aff}
                  </Typography>
                ))}
              </Box>
            )}

            <Typography color="text.secondary" textAlign="center">
              {bio}
            </Typography>
            <Box
              display={'flex'}
              flexDirection={'row'}
              alignItems="center"
              gap={2}
            >
              {soundcloud && (
                <Box>
                  <Link
                    underline="none"
                    component="a"
                    href={soundcloud}
                    color={'text.primary'}
                    sx={{ display: 'flex', alignItems: 'center' }}
                  >
                    <IconSoundcloud color={'text.primary'} />
                  </Link>
                </Box>
              )}
              {instagram && (
                <Box>
                  <Link
                    underline="none"
                    component="a"
                    href={instagram}
                    color={'text.primary'}
                    sx={{ display: 'flex', alignItems: 'center' }}
                  >
                    <IconInstagram color={'text.primary'} />
                  </Link>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default DJLineup;
