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
          title={'Lineup'}
          text={'We\'re still herding the DJs for this year, in the meantime take a look at last year amazing ensemble to get an idea of our vibe'}
        />
        <Grid container marginTop={2} spacing={2} justifyContent='center'>
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
              name="Booty Juice"
              affiliation="DAD SF, BAAAHS"
              bio="San Francisco's Wettest DJ. 🪩 Noise Polluter. Hot Mess & Neighborhood Friendly Dumpster Fire."
              soundcloud="https://soundcloud.com/bootyjuicesf"
              instagram="https://www.instagram.com/bootyjuicesf"
              image="https://storage.googleapis.com/static.baaahs.org/z_booty.png"
            />
            <DJ
              name="Brian Maier"
              bio="San Francisco-based DJ Brian Maier blends his love for house music and technology, performing at global venues and events like Toronto Pride and the legendary Real Bad party."
              soundcloud="https://soundcloud.com/brianmaier"
              instagram="https://www.instagram.com/brianmaier"
              image="/images/campout/2024/djs/brianmaier-crop.jpg"
            />
            <DJ
              name="Bryan Hughes"
              bio="Progressive, Trance/Morning, Disco, House, Gospel House"
              soundcloud="https://soundcloud.com/djbryanhughes"
              instagram="https://www.instagram.com/bryanwastaken"
              image="https://storage.googleapis.com/static.baaahs.org/z_bryan_hughes.png"
            />
            <DJ
              name="Del"
              affiliation="Port Bar, Steamworks (Berkeley), Eli's Mile High Club"
              bio="As a pioneer in bringing Jersey Club to the Bay Area, her high energy cross genre sets and flawless blends are guaranteed to make any dance floor shake."
              soundcloud="https://on.soundcloud.com/HKpGb"
              instagram="https://www.instagram.com/inebriatedfelon"
              image="https://storage.googleapis.com/static.baaahs.org/z_del.png"
            />
            <DJ
              name="Dennis Dashing"
              bio="Techno, House"
              soundcloud="https://on.soundcloud.com/u7ATk"
              instagram="https://www.instagram.com/dennisdashing"
              image="https://storage.googleapis.com/static.baaahs.org/z_dennis_dashing.png"
            />
            <DJ
              name="Dunst"
              bio="Your least favorite DJ’s least favorite DJ"
              soundcloud=""
              instagram=""
              image="/images/campout/2024/djs/dunst.jpg"
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
              name="Guerrilla Pump"
              affiliation="Pump Paradise"
              bio="DJ Guardian Guerrilla Pump aka Sailor G is a Queer 1st Gen
              Afro-Pinoy, Award Winning DJ and Community-based Artist/Organizer
              rooted in the East Bay’s Underground Scene."
              soundcloud="https://soundcloud.com/guerrillapump"
              instagram="https://www.instagram.com/shotbyguerrilla"
              image="/images/campout/2024/djs/guerrillapump.jpg"
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
              name="John Major"
              affiliation="BTW (Oakland), Pyramid Scheme (BRC)"
              bio="Dancer & DJ"
              soundcloud="https://soundcloud.com/majorjohn"
              instagram=""
              image="/images/campout/2024/djs/major.jpg"
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
              name="LAKEVERETT"
              affiliation="Callback"
              bio="LAKEVERETT's sound embodies respite, offering joyful and
               relaxing moments amid hectic schedules with splashes of house
               cooled by funk, delivering refreshing tunes that soothe muscles and ease minds."
              soundcloud="https://soundcloud.com/lakeverett"
              instagram="https://www.instagram.com/lakeverett"
              image="/images/campout/2024/djs/lakeverett.jpg"
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
              name="Mike Bradley"
              affiliation=""
              bio="House, Techno, Tech House. Always fun with a splash of sass~"
              soundcloud="https://m.mixcloud.com/mikebradley9216/"
              instagram=""
              image="https://storage.googleapis.com/static.baaahs.org/z_mike_b.png"
            />
            <DJ
              name="Mr Seago"
              affiliation="BAAAHS, Something Queer"
              bio="Funky crazy bitch."
              soundcloud="https://soundcloud.com/mrseago"
              instagram="https://www.instagram.com/mrseago"
              image="/images/campout/2024/djs/mrseago.jpg"
            />
            <DJ
              name="Prince Wolf"
              affiliation="THRUST"
              bio="If the energy of moonlit rendezvous could be distilled into sound, Prince Wolf's sets embody that: thrilling, clandestine encounters with just a tinge of danger. Music that keeps you alert to the prying eyes & enticing bodies gyrating on the dancefloor."
              soundcloud=""
              instagram="https://www.instagram.com/somaqlo"
              image="https://storage.googleapis.com/static.baaahs.org/z_prince_wolf.png"
            />
            <DJ
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
            />
            <DJ
              name="Romii"
              affiliation="DreamTension"
              bio="In addition to his background as a competitive classical solo-violinist, Romii is influenced by Motown era artists, 80’s soul, 90’s hiphop and Detroit synthetic underground sounds."
              soundcloud="https://soundcloud.com/kingromii"
              instagram="https://www.instagram.com/romii_dreamtension"
              image="https://storage.googleapis.com/static.baaahs.org/z_romii.png"
            />
            <DJ
              name="Sir Spense"
              affiliation="DAD SF, BAAAHS"
              bio="Disco Pop Good vibes :)"
              soundcloud=""
              instagram="https://www.instagram.com/spenser_morris"
              image="https://storage.googleapis.com/static.baaahs.org/z_spenser.png"
            />
            <DJ
              name="State of Wayne"
              bio="Transmuting decades of Pop, Disco, Classic Rock, Grunge, House—converging to dance your body & sparkle your soul."
              soundcloud=""
              instagram="https://www.instagram.com/waynebone"
              image="/images/campout/2024/djs/stateofwayne.jpg"
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
            <DJ
              name="Tiny Tim"
              affiliation="Something Queer, Chonies"
              bio="Combining 21 years of mixing with production, I love to produce and play music that comes from the soul, goes to the decks and is felt on the floor!"
              soundcloud="https://www.soundcloud.com/djtinytp"
              instagram="https://www.instagram.com/djtinytp"
              image="https://storage.googleapis.com/static.baaahs.org/z_tiny.png"
            />
            <DJ
              name="Trevor Sigler"
              affiliation="Ever Afters, Ew (SF)"
              bio="A staple on the SF dance music scene, Trevor has been involved in psychedelic queer parties like Romper Room, Mixed Forms, and now The Ever Afters Campout & Ew. A trained audio engineer, his sets and original productions are glacial, roomy, and precise, and take full advantage of where a sound system can go."
              soundcloud="https://on.soundcloud.com/jiaZYGot2TF5eEfo8"
              instagram="https://www.instagram.com/tater_swift"
              image="https://storage.googleapis.com/static.baaahs.org/z_trevor.png"
            />
            <DJ
              name="Twunkerbell"
              affiliation="BAAAHS"
              bio="Music connoisseurs and headbanging ravers alike have referred to his DJ sets as &quot;decent&quot;, &quot;pretty good&quot;, and &quot;something people listen to&quot;. Combining 20 years of classical piano training with complementary musical genres such as slut pop, tech house, and nu disco, he incorporates live elements into his high-energy sets to take your ears on a magical journey of sunshine, rainbows, and unicorn ketamine."
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
              <Box>{
                affiliation.split(', ').map((aff) => (
                  <Typography color="text.secondary"
                    textAlign="center">{aff}</Typography>
                ))
              }</Box>
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
