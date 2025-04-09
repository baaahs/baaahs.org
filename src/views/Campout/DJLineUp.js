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
            {/* <DJ
              name="Ben Fonik"
              affiliation=""
              bio=""
              soundcloud=""
              instagram=""
              image=""
            /> */}
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
              affiliation="Deep South"
              bio="Venezuelan born Atlanta based Brian rojas immersion in dance music goes back to his childhood, surrounded by the sounds of Caribbean dance music. horizons were broadened after coming to the US and learning about disco house and techno allowed Brian to fully identify being a chameleon in embracing and immersing into the music of his surroundings. Being allowed to share the wide range of his crate digging cultivation is a gift worth sharing. "
              soundcloud="https://on.soundcloud.com/vLX72jx9sWsEBLie8"
              instagram="https://www.instagram.com/official_fabuloso"
              image="https://storage.googleapis.com/static.baaahs.org/brian_rojas.jpeg"
            />
            <DJ
              name="CamBam"
              bio="'I am passionate about elevating anyone who chooses to lend their ear to my sets. My go-to genre to spread the good vibes is UKG, so be ready to keep dancing from start to finish with my sets. I like to throw in a mix of nostalgic hits that scratch the deepest cracks of your memories, while bringing in current hits to keep up the excitement of that track you can't help but listen to on repeat.'"
              soundcloud="https://on.soundcloud.com/RxBELi5RJJ14Jr3w6"
              instagram="https://www.instagram.com/cam_bam"
              image="https://storage.googleapis.com/static.baaahs.org/cam_bam.JPG"
            />
            <DJ
              name="Chelsea Star"
              bio="Chelsea Starr is a club and radio dj from Portland, Oregon. She has played all over the country and in Mexico, from gay clubs to warehouse raves, to beach clubs, to house parties. She loves dancing and playing music for the beautiful queers more than any other thing in the world."
              soundcloud="https://soundcloud.com/chelsea-starr"
              instagram="https://www.instagram.com/thechelseastarr"
              image="https://storage.googleapis.com/static.baaahs.org/chelsea_star.jpeg"
            />
            <DJ
              name="Dev"
              affiliation=""
              bio="Dev is a new DJ with a passion for music and creating the perfect vibe. Whether spinning high-energy beats or smooth grooves, Dev is always looking to refine his craft and bring fresh energy to every set. As he continues to grow in the industry, he’s excited to share his sound and make his mark."
              soundcloud="https://www.instagram.com/devlovesdoritos"
              instagram="https://www.instagram.com/devlovesdoritos"
              image="https://storage.googleapis.com/static.baaahs.org/dev.jpeg"
            />
            <DJ
              name="eMote"
              affiliation="BAAAHS"
              bio="Grounded around dreamy, emotional melodies, eMote brings the energy to the dancefloor with trance, progressive, and the occasional DnB or dubstep banger."
              soundcloud="https://www.instagram.com/linn.david"
              instagram="https://www.instagram.com/linn.david"
              image="/images/campout/2024/djs/emote.jpg"
            />
            <DJ
              name="Faster Kill Faster"
              affiliation="BAAAHS"
              bio="Faster is all faggotry, all play, all beats, and conquering artistic feats."
              soundcloud="https://soundcloud.com/arorah-1"
              instagram="https://www.instagram.com/afro_pup"
              image="https://storage.googleapis.com/static.baaahs.org/faster_kill_faster.jpeg"
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
              bio="ISSA was born/raised in SF, creating a fixation for dance music as a child in the 90s. He brings a zest to the dance floor that stems from blending multiple genres of classic house, disco, Arabic & Latin sounds, hip-hop, pop and techno--throughout multiple decades. His signature sound and genre-bending flair will make you move for hours—day AND night."
              soundcloud="https://soundcloud.com/itsissa"
              instagram="https://instagram.com/issaaraj"
              image="https://storage.googleapis.com/static.baaahs.org/z_issa.png"
            />
            <DJ
              name="Jumpr"
              affiliation="Synthia, Fog City Pack, STANK"
              bio="Hailing from San Francisco, Joe Weidman (aka Jumpr) has been a staple of SF nightlife since 2016. He got his start in the leather scene as the creative director for Fog City Pack before jumping behind the decks himself in 2018. In 2021, Jumpr, along with his dj partner Fawks, became resident of the monthly party Stank, one of SF’s longest running fetish nights. In 2023, he launched Synthia, a party that celebrates the queer sci-fi futurism of the 1970s & 80s with an emphasis on vintage synths & space disco, and along with Fog City Pack resurrected Deviants: Adult Arcade, the closing party of the Folsom Street Fair which boasted 2000 guests in attendance. Jumpr prides himself on being a dance floor filler, agnostic of genre, spinning everything from sweaty bathhouse disco to throbbing techno bangers. Jumpr wants to bring the rush and keep the energy ecstatic."
              soundcloud="https://on.soundcloud.com/jump_r"
              instagram="https://instagram.com/unluck"
              image="https://storage.googleapis.com/static.baaahs.org/jumpr.jpeg"
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
              bio="Koppertone ‘aka Kopper’ is a genre-fluid DJ, sonic alchemist and an embodiment of chaos rooted in the heart of Seattle’s underground scene. Throughout his work, he weaves together a mycelial tapestry of sounds from Jazz to Techno and everything in between that invokes a mystical ether that is sure to unlock a new sense of ‘gnoing’ in you. Calling on queer ancestors, Koppertone summons an unapologetic symphony of spiritual vibrations that will awaken you to the esoteric divine absurdity of life and beyond."
              soundcloud="https://on.soundcloud.com/koppertone"
              instagram="https://www.instagram.com/kopper.tone/"
              image="https://storage.googleapis.com/static.baaahs.org/koppertone.jpeg"
            />
            <DJ
              name="LOVR"
              bio="'I’m a bear. I party. I make u fun'. Hailing from Detroit, LOVR blends techno and house, creating
               immersive experiences with pulsating beats and hypnotic melodies.
               His empathetic sets connect deeply with audiences, embodying
               Detroit's rich electronic music history."
              soundcloud="https://www.instagram.com/yakewiththecake"
              instagram="https://www.instagram.com/yakewiththecake"
              image="/images/campout/2024/djs/lovr.jpg"
            />
            <DJ
              name="M*J*R"
              affiliation="BTW (Oakland), Pyramid Scheme (BRC)"
              bio=""
              soundcloud="https://soundcloud.com/majorjohn"
              instagram="https://www.instagram.com/johnemajorjr"
              image="/images/campout/2024/djs/major.jpg"
            />
            <DJ
              name="Mondo Nexus"
              affiliation=""
              bio="Mondo Nexus is a DJ and event producer based in San Francisco. He is a part of the queer disco DJ collective DAD SF. An avid record collector, Mondo is known for his deep cut selections which span a variety of genres of dance music."
              soundcloud="https://soundcloud.com/mondonexus"
              instagram="https://www.instagram.com/mondonexus"
              image="https://storage.googleapis.com/static.baaahs.org/z_mondo.png"
            />
            <DJ
              name="MorrisMORE!"
              affiliation="DAD, BAAAHS, Something Queer"
              bio="From the birthing hips of Juanita MORE!, Spenser brings feel-good Pop and Disco vibes to keep the dance floor moving with smooth blends and high-energy beats."
              soundcloud="https://soundcloud.com/morris_more"
              instagram="https://www.instagram.com/spenser_morris"
              image="https://storage.googleapis.com/static.baaahs.org/z_spenser.png"
            />
            <DJ
              name="RemyD"
              soundcloud="https://soundcloud.com/jeremy-moore-703165379"
              bio="Remy D’s  musical inspiration started at a young age listening to power pop, but has since evolved to include all aspects of music genres.  His sound is always house as a base with a blend of funk, pop, hip hop, country, disco - anything you can think of as long it’s got vocals and a sick beat.  He pours his soul into the tracks he plays and in the end, as long as people are dancing and vibing, he’s the happiest DJ there can be."
              affiliation="Pink Ponies"
              instagram="https://www.instagram.com/jeremymoore414"
              image="https://storage.googleapis.com/static.baaahs.org/remy_d.jpg"
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
              name="Sammy Taylor"
              affiliation="Electroluxx, Velvet"
              bio="Southern-bred and Ohio-raised, Sammy is somewhat of the new kid on the block. Since moving to San Francisco two years ago, the singer-turned-DJ has made himeself known at queer events like Young Hearts, Electroluxx, Gemini,  and Provocateur and playing support for Alinka, Above & Beyond, and Marc Kinchen among others. In his own words, his sound highlights 'the groovier side of the underground'. He joins the BAAAHS campout for the first time in 2025."
              soundcloud="https://soundcloud.com/sammy-taylor-sf"
              instagram="https://www.instagram.com/justsammy.dj"
              image="https://storage.googleapis.com/static.baaahs.org/sammy.jpg"
            />
            <DJ
              name="Sindri"
              affiliation="Sebastiane, Party Suspiria, Hot Dog Sundays"
              bio="Originally from the San Francisco Bay and now residing in LA. Lover of all things Italo, Nudisco, and Techno. Sindri has been sharing music on dancefloors around the globe for the past 13 years."
              soundcloud="https://soundcloud.com/djsindri"
              instagram="https://www.instagram.com/djsindri"
              image="https://storage.googleapis.com/static.baaahs.org/sindri.jpeg"
            />
            <DJ
              name="Starkey"
              affiliation="SEATTLE EAGLE, SF EAGLE, MASSIVE (SEATTLE)"
              bio="STARKEY is resident DJ at the San Francisco Eagle, Seattle Eagle, and Massive (Seattle), and is the producer of jizznasium in Seattle and SF each month."
              soundcloud="https://linktr.ee/_s_t_a_r_k_e_y_?utm_source=linktree_profile_share&ltsid=e9074aa0-c5da-4723-840c-67a0e431ff4f"
              instagram="https://linktr.ee/_s_t_a_r_k_e_y_?utm_source=linktree_profile_share&ltsid=e9074aa0-c5da-4723-840c-67a0e431ff4f"
              image="https://storage.googleapis.com/static.baaahs.org/starkey.jpeg"
            />
            <DJ
              name="Stefan Ways"
              affiliation="CHOICES (Denver)"
              bio="Stefan Ways is a multidisciplinary artist who enjoys dynamic sets and storytelling; primarily playing several sub-genres of house, acid, disco, with splashes of wave. Together, he blends a mix of energetic percussive elements, synthy sounds, driving bass lines, psychedelic melodies, and tasteful harmonics to compliment the energy of the space."
              soundcloud="https://soundcloud.com/stefanways"
              instagram="https://www.instagram.com/stefanways"
              image="https://storage.googleapis.com/static.baaahs.org/stefan_ways.jpeg"
            />
            <DJ
              name="StormyRoxx"
              affiliation="Lust (PDX), The Locker Room (PDX), Shift Festival"
              bio="I'm a cool Daddy who plays cool music, and I'm looking for a good time... 😎"
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
              name="Twunkerbell"
              affiliation="BAAAHS"
              bio="Twunkerbell has been a raver since the late 90's when he threw an underground rave in his crib. Music connoisseurs and headbanging ravers alike have referred to his DJ sets as 'decent', 'pretty good', and 'something people listen to'. Armed with his last remaining brain cell, some real gnarly remixes of songs you've probably twerked to, and a keyboard that is just good enough to be playable but not too expensive for him to care if it gets destroyed at Burning Man, he incorporates live elements into his high-energy sets to take your ears on a magical journey of sunshine, rainbows, and unicorn ketamine."
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
                <Link
                  underline="none"
                  component="a"
                  href={soundcloud ?? instagram}
                  color={'text.primary'}
                  sx={{ display: 'flex', alignItems: 'center' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={image}
                    style={Object.assign({
                      width: '100%',
                    })}
                    alt=""
                  />
                </Link>
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
                    target="_blank"
                    rel="noopener noreferrer"
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
                    target="_blank"
                    rel="noopener noreferrer"
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
