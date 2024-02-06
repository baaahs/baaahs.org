import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import MetaTags from 'react-meta-tags';
import Container from 'components/Container';

import Main from 'layouts/Main';

import '../../styles/setup/screen.scss';
import { Input } from '@mui/material';

const Measure = ({children}) => {
  const fractionOfInch = /(\d+)\/(\d+)"/.exec(children);
  if (fractionOfInch) {
    return (
      <span className="measure"><sup>{fractionOfInch[1]}</sup>⁄<sub>{fractionOfInch[2]}</sub>&Prime;</span>
    );
  }

  const metric = /([\d.]+)([a-z]+)/.exec(children);
  if (metric) {
    return (
      <span className="measure">{metric[1]}<small>{metric[2]}</small></span>
    );
  }

  return (
    <span className="measure">{children}</span>
  );
};

const Setup = () => {
  const theme = useTheme();

  const EDITIONS = ['setup-lead', 'party-crew', 'business-crew', 'head-and-hind-crew', 'tech-crew'];
  const [edition, setEdition] = useState('');
  theme;
  edition;
  setEdition;

  const applyEdition = function (edition) {
    if (edition && EDITIONS.indexOf(edition) === -1) return;

    EDITIONS.forEach(function (itEdition) {
      Array.apply(null, document.getElementsByClassName(itEdition)).forEach(function (el) {
        if (!el.classList.contains('crew-marker')) {
          el.classList.toggle('hidden', edition && itEdition !== edition);
        }
      });
    });

    if (!edition) {
      Array.apply(null, document.getElementsByClassName('special-edition-only')).forEach(function (el) {
        el.classList.add('hidden');
      });
    }

    document.body.className = 'article';

    if (edition) {
      document.body.classList.add('special-edition');
      document.body.classList.add(edition + '-edition');
    }
  };

  function updateBrcEdition() {
    let isBrcEdition = document.getElementById('brc-edition-checkbox').checked;
    document.body.classList.toggle('brc-edition', isBrcEdition);
    document.body.classList.toggle('street-edition', !isBrcEdition);
  }

  useEffect(() => {
    applyEdition(document.location.hash.substring(1));
    updateBrcEdition();
  }, [applyEdition, updateBrcEdition]);

  window.addEventListener('hashchange', function () {
    applyEdition(document.location.hash.substring(1));
  });

  return (
    <Main className="setup">
      <MetaTags>
        <title>BAAAHS Setup Guide</title>

        <meta name="name" content="BAAAHS Setup Guide"/>
        <meta name="description"
          content="BAAAHS is the Big-Ass Amazingly Awesome Homosexual Sheep, and you can put him together!"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans|Open+Sans+Condensed:300|Special+Elite|Noto+Sans:400,700,400italic,700italic"
          rel="stylesheet" type="text/css"/>

        <link href="../../styles/setup/screen.scss"
          media="screen, projection" rel="stylesheet" type="text/css"/>
        <link href="../../styles/setup/print.scss" media="print"
          rel="stylesheet" type="text/css"/>
      </MetaTags>

      <Container>
        <div id="edition-picker">
          Edition:
          <ul>
            <li><a href="#">All</a></li>
            <li><a href="#setup-lead">Setup Lead</a></li>
            <li><a href="#party-crew">Party Crew</a></li>
            <li><a href="#business-crew">Business Crew</a></li>
            <li><a href="#head-and-hind-crew">Head & Hind Crew</a></li>
            <li><a href="#tech-crew">Tech</a></li>
            <li><label><Input id="brc-edition-checkbox" type="checkbox" checked onChange={updateBrcEdition}/> BRC</label></li>
          </ul>
        </div>

        <header>
          <h1>BAAAHS Setup Guide</h1>

          <h2 className="special-edition-only setup-lead">Setup Lead Edition</h2>

          <h2 className="special-edition-only party-crew">Party Crew Edition</h2>

          <h2 className="special-edition-only business-crew">Business Crew Edition</h2>

          <h2 className="special-edition-only head-and-hind-crew">Head & Hind Crew Edition</h2>

          <h2 className="special-edition-only tech-crew">Tech Edition</h2>
        </header>

        <div id="contents">
          <section>
            <h2>Contents</h2>

            <img src="/images/setup/pretty-render.png" width="66%" style={{ position: 'absolute', top: '0', right: '0', marginTop: '30vh' }}/>

            <ul>
              <li><a href="#roles-section">Roles</a></li>
              <li><a href="#safety-section">Safety</a></li>
              <li>Setup:
                <ul>
                  <li><a href="#setup-useful-info-section">Generally Useful Knowledge!</a></li>
                  <li className="setup-lead"><a href="#setup-lead-section">Setup Lead</a></li>
                  <li className="party-crew"><a href="#setup-party-crew-section">Party Crew</a></li>
                  <li className="business-crew"><a href="#setup-business-crew-section">Business Crew</a></li>
                  <li className="head-and-hind-crew"><a href="#setup-head-and-hind-crew-section">Head & Hind Crew</a></li>
                  <li className="tech-crew"><a href="#setup-tech-crew-section">Tech Crew</a></li>
                </ul>
              </li>
              <li>Teardown:
                <ul>
                  <li className=""><a href="#teardown-useful-info-section">Generally Useful Knowledge!</a></li>
                  <li className="setup-lead"><a href="#teardown-setup-lead-section">Setup Lead</a></li>
                  <li className="party-crew"><a href="#teardown-party-crew-section">Party Crew</a></li>
                  <li className="business-crew"><a href="#teardown-business-crew-section">Business Crew</a></li>
                  <li className="head-and-hind-crew"><a href="#teardown-head-and-hind-crew-section">Head & Hind Crew</a></li>
                  <li className="tech-crew"><a href="#teardown-tech-crew-section">Tech Crew</a></li>
                </ul>
              </li>
            </ul>
          </section>

          <section id="roles-section">
            <h2>Roles</h2>

            <section className="street-edition">
              <h3>Event Producer</h3>

              <p>The event producer is responsible for logistics and ___ related to the event. They:</p>
              <ul>
                <li>make sure shifts are staffed ahead of setup.</li>
                <li>book any rental vehicles or heavy equipment needed.</li>
                <li>support setup lead during setup and teardown (not necessarily on site).</li>
              </ul>
            </section>

            <section>
              <h3>Setup Lead</h3>

              <p>The setup lead is ultimately responsible for making setup happen. They:</p>
              <ul>
                <li>ensure that all necessary hardware, tools, parts, and equipment are obtained and on site.</li>
                <li>are on site during setup and teardown.</li>
                <li>make sure all crews are properly staffed.</li>
                <li>set up work area (crew tables, parts and panel staging areas, craft services, worklights, music).</li>
                <li className="street-edition">manage arrival, placement, and departure of vehicles.</li>
                <li className="street-edition">manage any outside parties (vendors, clients, cops, concerned busybodies, etc).</li>
                <li>mind schedule, re-balance teams, call in reinforcements, etc.</li>
                <li>frequently check in with crew leads.</li>
                <li>watch for potential problems, mistakes, safety issues, etc.</li>
                <li>help debug any problems that arise.</li>
              </ul>
            </section>

            <section>
              <h3>Crew Lead</h3>

              <p>There is a crew lead for each of the crews (Party, Business, Head & Hind, and Tech). Each crew lead is
                responsible for instructing (often inexperienced) crew members in safely assembling
                their part of the sheep. They should:</p>
              <ul>
                <li>read and understand the setup instructions ahead of time.</li>
                <li>be aware of the setup schedule.</li>
                <li>give crew members an overview of what they'll be working on, and communicate goals for the shift.</li>
                <li>demonstrate procedures (e.g. panel hanging).</li>
                <li>educate crew members on setup basics —&nbsp;sizes of hardware, names of tools, etc.</li>
                <li>give <a href="#safety-section">safety briefing</a> to crew and watch for any safety issues.</li>
                <li>if issues arise, help debug them and pull in the setup lead.</li>
              </ul>
            </section>

            <section>
              <h3>Fluffer</h3>

              <p>Each crew should have a fluffer. The fluffer picks up stuff their crew drops, grabs stuff on request,
                makes sure they're hydrated and taking enough breaks, etc.</p>
            </section>

            <section>
              <h3>Noms</h3>

              <p>Noms manages the craft services table. Keep cold drinks (water, soft drinks) and light snacks available
                throughout setup. Coffee and pastries in the AM. For shifts that overlap normal meal times, and for shifts
                of four hours or more, provide something more substantial like pizza, a sandwich platter, or a traditional
                German stew made of marinated rabbit or hare with braised onions and a side of Spätzle and perhaps a nice
                seasonal vegetable. Why not?</p>
            </section>
          </section>

          <section className="crew-instructions all-crews" id="safety-section">
            <h2>Safety</h2>

            <p><b>Be careful.</b> Falling tools will hurt if they land on your head. Hardhats aren't a terrible idea. Try
              not to stand where something might land on you. Actively communicate what you're doing. Hold people's ladders
              steady. <b>Watch out for each other!</b></p>

            <p>If you're about to step somewhere precarious, always test that the thing you're about to stand on or balance against is actually secure. If you need to
              lean against or step on a strut for balance, place your weight only at the ends of the strut, never in the
              middle.
            </p>

            <p>When installing a component, <b>don't leave it partially secured and walk away</b>! Don't leave components or
              tools placed precariously on a ladder or ledge. Don't leave struts/handrails/etc. in places where they might roll or cause someone to slip.</p>

            <p>Wear boots or other footwear that protects your toes and has good grip. Wear gloves, especially when handling
              panels. Use sunblock. Hydrate. Take breaks when you need to.</p>
          </section>

          <section className="crew-instructions all-crews" id="setup-useful-info-section">
            <h2>Generally Useful Knowledge!</h2>

            <h3>Setup Crews</h3>

            <p>Setup is performed by four teams working simultaneously and (mostly) independently:</p>
            <ul>
              <li className="crew-marker party-crew">The <b>Party Crew</b> puts up stuff on the party (driver/left/port) side of
                the bus. Their stuff is marked red.
              </li>
              <li className="crew-marker business-crew">The <b>Business Crew</b> puts up stuff on the business
                (passenger/right/starboard) side of the bus. Their stuff is marked green.
              </li>
              <li className="crew-marker head-and-hind-crew">The <b>Head & Hind Crew</b> puts up the face, head, neck, and rear.
                Their stuff is marked blue.
              </li>
              <li className="crew-marker tech-crew">The <b>Tech Crew</b> sets up sound and lights.
                Their stuff is marked orange.
              </li>
            </ul>

            <p>Each crew has their own set of commonly-used tools marked with colored tape. Power tools are shared, and should
              be returned to the common table when not in use.
            </p>

            <h3>Identifying Panels</h3>

            <div className="sidebar">
              <img src="/images/setup/sample-label.png"/>
            </div>

            <p>
              Panels are (mostly) identified on each edge with a label. Party side panels have a 'D' in their name after the
              number, and a red dot. Business side panels have a 'P', and a green dot. Front panels' names start with an 'F',
              and rear panels start with an 'R'. Yes, this could have been thought out better. Sorry!
            </p>

            <p>
              Labels also indicate the neighboring panel for this edge, and which direction is up when mounted properly.
            </p>

            <h3>Hanging Panels</h3>

            <div className="parts-needed">
              <h4>Requires:</h4>
              <span className="street-edition"> • Lots of heavy-duty zip ties.<br/></span>
              • Lots of <Measure>1/4"</Measure>quot; bolts, various lengths, with wing nuts.
              <br/><b>Tools:</b> vice grips, aligner pins.
            </div>

            <p className="street-edition">For stationary setup, use heavy-duty zip ties wherever possible. In some cases, zip ties may not be strong
              enough and ¼&quot; hardware (bolt, two washers, and a wingnut) will be necessary. Use your judgement when
              hanging panels: if the connection is under a lot of tension or shearing force, use a bolt instead.
            </p>

            <ol>
              <li>Pre-assemble sections of panels on the ground according to the panel map.</li>
              <li>Raise the panel or section of panels into place.</li>
              <li>Align edges of panel and use tapered steel aligner pin to line up holes. Pick a hole as near to the end of
                the edge as possible while still allowing zip tie or hardware to be inserted. Try to reuse holes from previous
                installations if possible.
              </li>
              <li>Use a vice grip to clamp the panel to its neighbor.</li>
              <li>Remove the steel pin and replace with a heavy-duty zip tie or ¼&quot; hardware.</li>
              <li>Tighten zip ties to medium tension. Tighten hardware finger-tight, but do not over-tighten.</li>
              <li>Remove vice grip.</li>
              <li>Repeat for the other end of the edge.</li>
              <li>Repeat for other edges on the panel or panel group.</li>
            </ol>
          </section>

          <h3>Bus Parts</h3>
          <table>
            <tr>
              <td style={{ verticalAlign: 'top' }}>
                <img src="/images/setup/bus-party-quarter-view.png" width="100%"/>
                <h4 style={{ position: 'relative', top: '-5em' }}>Party side</h4>
              </td>
              <td style={{ verticalAlign: 'top' }}>
                <img src="/images/setup/bus-business-quarter-view.png" width="100%" style={{ marginTop: '10em' }}/>
                <h4 style={{ textAlign: 'right', position: 'relative', top: '-5em' }}>Business side</h4>
              </td>
            </tr>
          </table>

          <section className="crew-instructions setup-lead" id="setup-lead-section">
            <h2>Setup Lead Guide</h2>
            <h4>Setting up for setup:</h4>

            <p><b>Crew tables:</b> each of the crews (Party, Business, and Head & Hind) need a folding table near their
              workspace.</p>

            <p>Tape the following sheets to each table:</p>
            <ul>
              <li>Sign-in sheet</li>
              <li>Shift signup list</li>
              <li>Schedule</li>
              <li>Bolt sizing chart</li>
              <li>Panel map (for that crew)</li>
            </ul>

            <p>Place these items on or under each table:</p>

            <div className="sidebar" style={{ width: '60%' }}>
              <img src="/images/setup/tools.jpg" srcset="/images/setup/tools@2.jpg 2x"/>
            </div>

            <ul>
              <li>Handbook (for that crew) containing:
                <ul>
                  <li>Panel map</li>
                  <li>This setup guide</li>
                  <li>Bolt sizing chart</li>
                  <li>Schedule</li>
                </ul>
              </li>
              <li>Tool bin containing these items, marked with tape of the appropriate color for that crew:
                <ul>
                  <li>Aligner pin</li>
                  <li>2 Vice grips</li>
                  <li>3 Clippers or snips</li>
                  <li>Zip ties, various sizes</li>
                  <li>Pliers</li>
                  <li>Crescent wrench</li>
                  <li>Ratchet wrenches or socket wrenches:
                    <ul>
                      <li><Measure>3/4"</Measure> or <Measure>19mm</Measure> (for <Measure>1/2"</Measure> hardware)</li>
                      <li><Measure>9/16"</Measure> or <Measure>15mm</Measure> (for <Measure>3/8"</Measure> hardware)</li>
                      <li><Measure>1/2"</Measure> or <Measure>13mm</Measure> (for <Measure>5/16"</Measure> hardware) (optional)</li>
                      <li><Measure>3/8"</Measure> or <Measure>10mm</Measure> (for <Measure>1/4"</Measure> hardware) (optional)</li>
                    </ul>
                  </li>
                  <li>Bin with <Measure>1/4"</Measure> hardware sets</li>
                </ul>
              </li>
              <li>Gloves</li>
              <li>Other hardware</li>
              <li>Hardhats</li>
              <li>Head lamps (if night)</li>
            </ul>

            <p><b>Craft services:</b> space for food, snacks, and drinks.</p>

            <p><b>Safety:</b> ensure that a well-stocked first aid kit and a fire extinguisher is on site their locations
              are well-known.</p>
          </section>

          <section className="crew-instructions party-crew" id="setup-party-crew-section">
            <h2>Party (Driver) Side Setup</h2>

            <p>The Party Crew works mostly on the "party side", a.k.a. the driver side, of the sheep.</p>

            <section>
              <h3>Overview:</h3>
              <ol>
                <li>Unload parts.</li>
                <li>Install speaker shelves.</li>
                <li>Deploy DJ platform.</li>
                <li>Install mounting struts.</li>
                <li>Install initial mount panels.</li>
                <li>Install remainder of panels.</li>
              </ol>
            </section>

            <section>
              <div className="parts-needed">
                <h4>Requires:</h4>
                3 people
                <br/>5 8"×<Measure>1/2"</Measure> bolts.
                <br/><b>Tools:</b> <Measure>9/16"</Measure> socket wrench, pliers.
              </div>

              <h3>Install speaker shelves.</h3>

              <p>There are three shelves. The largest goes in the center.
                Slide center shelf into holes on side of bus. You’ll need to wiggle it to get it in. It should end up
                flush with the side of the bus. Secure with bolts through bus. One person will need to be inside the bus
                holding bolt heads, which are located inside the benches.
              </p>

              <p>Next, install the right shelf and bolt to center shelf and through bus.</p>

              <p>Last, install the left shelf and bolt through bus.</p>
            </section>

            <section>
              <div className="parts-needed">
                <h4>Requires:</h4>
                3 people
                <br/>2﹫4&quot;×½&quot; bolts.
                <br/><b>Tools:</b> None.
              </div>

              <h3>Deploy DJ platform.</h3>

              <p>The platform and table are permanently attached to the bus and tip into position.</p>
              <ol>
                <li>Remove ratchet straps holding platform and table in place.</li>
                <li>With two people standing on the center speaker shelf or on ladders, raise the table section and hold it horizontal, while the person in the DJ booth inserts 2&quot; bolts on both ends of the table to secure it in place.</li>
                <li>Slowly lower the platform section into place.</li>
              </ol>
              <p></p>
            </section>

            <section>
              <div className="parts-needed">
                <h4>Requires:</h4>
                4 people.
                <br/><b>Parts:</b>
                <br/>• All party-side struts. A collar tube for 17D and 33A.
                <br/><b>Hardware:</b>
                <br/>• A dozen-ish nuts and washers to attach struts to bus, ½&quot; and ⅜&quot;.
                <br/>• 5 short ⅜&quot; bolts, nuts, and washers to connect strut groups.
                <br/><b>Tools: ladders, ratcheting wrenches, impact drivers.</b>
              </div>

              <h3>Install panel support struts</h3>

              <ol>
                <li>Find and group struts 7ABC, 17ABC, 17DEF, 33ABC, and 41ABC near where they'll be installed.</li>
                <li>Working through each strut group,
                  <ol>
                    <li>Find each strut's attachment point on the bus. It should be labeled in paint pen with the strut's name, and an arrow indicating its rough angle of projection.</li>
                    <li>
                      Orient the strut. Each strut is marked with an arrow, which should point <i>away</i> from the bus.
                      Two struts (17D and 33A) have collar tubes which should be placed around the strut.
                    </li>
                    <li><b>Without removing any nuts that are already in place on the bus</b>, attach each strut to its bus attachment point bolt, finger tight, with a washer on each side and a bolt.</li>
                    <li>Prepare to join the strut groups. Each group of three struts joins at one point, usually stacked in A-B-C order (with A being the lowest), but not always. They should line up fairly easily; if not, something might be wrong.</li>
                    <li>Use a short ⅜&quot; bolt, with a washer on each side, to join the struts. The bolt should point skyward, and should extend a little past the nut so panels can be added.</li>
                    <li>Tighten all bolts with a wrench or impact driver.</li>
                  </ol>
                </li>
              </ol>

              <div className="safety-checks">
                <h3>Safety Checks:</h3>
                <ul>
                  <li>All bolts are tight.</li>
                  <li>Strut groups should feel extremely sturdy. A human should feel confident putting all their weight on the conjunction point.</li>
                </ul>
              </div>
            </section>

            <section>
              <h3>Install the panels.</h3>

              <p>Labeling: Each party (driver) side panel is labeled with its number, a red dot, the numbers of its
                neighbors, and an arrow indicating which way is up. If tags or labels are illegible or missing, let the
                setup lead know!
              </p>
            </section>

            <section>
              <h3>Install the Primary Mount panels (7, 17, and 21).</h3>
              <ul>
                <li>Panel 7 sits on strut 7ABC. Use a short ⅜&quot; bolt, finger-tight. It hangs loose until the Foreshank group is installed.</li>
                <li>Panel 17 sits on struts 17ABC and 17DEF. Use short ⅜&quot; bolts, finger-tight.</li>
                <li>
                  Panel 21 connects to a punched angle iron bracket on the DJ platform. Use a short ⅜&quot; bolt, finger-tight.
                  The other end attaches to panel 17. Use ¼&quot; hardware, finger-tight.
                </li>
              </ul>
            </section>

            <section>
              <h3>Install forward panel sections (as described above in <a href="#setup-useful-info-section">Generally Useful Knowledge</a>) in this order:</h3>

              <ul>
                <li>Belly (14D … 18D … 23D)</li>
                <li>Foreshank, first section (8D … 9D)</li>
                <li>Tenderloin (20D)</li>
                <li>Rack (13D … 15D … 16D)</li>
                <li>Shoulder (4D … 5D … 6D … 11D … 12D) — panel 6D has a support strut to the platform to hold it in place.</li>
                <li>Breast (1D … 2D … F3D … F4D)</li>
                <li>Foreshank, second section (3D … F5D … F6D)</li>
                <li>Fore Hoof (10D — inset a bit behind the other panels, attach loosely with zip ties)</li>
              </ul>
            </section>

            <section>
              <h3>Install aft panel sections (as described above in <a href="#setup-useful-info-section">Generally Useful Knowledge</a>) in this order:</h3>

              <ul>
                <li>
                  Leg (33D … 34D … 36D … 37D … 43D — panel 33 sits on strut 33ABC.
                  Use a short ⅜&quot; bolt, finger-tight.)
                </li>
                <li>Ribs (27D … 28D … 29D)</li>
                <li>Flank (22D … 30D … 31D)</li>
                <li>Hock (35D … 41D … 42D … R7D — panel 41 sits on strut 41ABC)</li>
                <li>Loin (24D … 25D … 26D)</li>
                <li>Hind Hoof (38D — inset a bit behind the other panels, attach loosely with zip ties)
                </li>
              </ul>
            </section>

            <section>
              <h3>Safety Checks:</h3>
              <ul>
                <li>Tighten all bolts attaching panels to struts with a wrench.</li>
                <li>Finger-tighten all wing nuts.</li>
                <li>All tension cables are correctly oriented and tensioned.</li>
              </ul>
            </section>
          </section>

          <section className="crew-instructions business-crew" id="setup-business-crew-section">
            <h2>Business (Passenger) Side Setup</h2>

            <p>The Business Crew works mostly on the "business side", a.k.a. the passenger side, of the sheep.</p>

            <section>
              <h3>Overview:</h3>
              <ol>
                <li>Unload parts.</li>
                <li className="brc-edition">Prepare to install generator.</li>
                <li>Install lower side platform.</li>
                <li>Deploy upper platform extension.</li>
                <li>Install side stair.</li>
                <li>Install mounting struts.</li>
                <li>Install initial mount panels.</li>
                <li>Install remainder of panels.</li>
              </ol>
            </section>

            <section className="brc-edition">
              <div className="parts-needed">
                <h4>Requires:</h4>
                4 people.
                <br/>• generator platform
                <br/>• 3﹫2&quot;×⅜&quot; bolts, 2﹫2&quot;×½&quot; bolts.
                <br/>• Deep-socket wrenches, impact drivers, aligner pin.
              </div>

              <h3>Prepare to install generator.</h3>

              <ol>
                <li>
                  Slide generator shelf rails into their receiving holes until the shelf is flush with the bus.
                  <b>Until the shelf is secured with bolts, two people should hold it in place.</b>
                </li>
                <li>Bolt shelf rails in place.
                  A person will need to get under the bus to place the bolts.
                  One rail has two bolts, the other has just one.
                  The people holding the shelf will need to help bring the bolt holes into alignment by nudging it around.
                  Bolts should be tightened with a socket wrench.
                </li>

                <li>Bolt shelf through bus wall using ½&quot; bolts.</li>
                <li>
                  Attach support cables over the bus roof.
                  They connect to the middle and rear speaker shelves.
                  Rest several long 2x4's along the bus roof for the cables to rest on.
                </li>
                <li>Get Joey and Xian to check the installation.</li>
                <li>Move generator trailer into position next to the bus.</li>
                <li>Request assistance from HEAT.</li>
                <li>Bolt generator to shelf.</li>
              </ol>
            </section>

            <section>
              <div className="parts-needed">
                <h4>Requires:</h4>
                4 people.
                <br/><b>Hardware:</b> none.
              </div>

              <h3>Install lower side platform.</h3>

              <ol>
                <li>
                  Remove the rear side door.
                  Draw the four door bolts open and remove the wooden door from the frame and place it somewhere for storage.
                </li>
                <li>Align the platform with the rectangular holes in the bus below the rear side door.</li>
                <li>Keeping the platform level and square with the bus, slide it into the openings until it's fully in contact with the bus.</li>
              </ol>
              <p></p>
            </section>

            <section>
              <div className="parts-needed">
                <h4>Requires:</h4>
                4 people.
                <br/><b>Hardware:</b>
                <br/>• In case of missing hardware, some short and long ½&quot; bolts, nuts, and washers.
                <br/><b>Tools: ratcheting wrenches, impact drivers.</b>
              </div>

              <h3>Deploy upper platform extension.</h3>

              <p>The upper platform extension is permanently attached to the bus. It deploys by tilting out 90°.</p>

              <ol>
                <li>Keep people off the top platform until the extension is completely secured.</li>
                <li>Remove any ratchet straps holding platform in place.</li>
                <li>Find each pair of bolt holes. There are 5(?) along the top platform horizontal beam and 4(?) that join to the vertical posts.</li>
                <li>Remove any hardware from the bolt holes, but keep it nearby.</li>
                <li>Position three people to carefully extend the platform with their feet and hold it there briefly.</li>
                <li>A fourth person should be ready to place a bolt (with washers and a nut, finger tight) somewhere near the middle of the platform.</li>
                <li>Replace bolts through the rest of the bolt holes, finger tight at first.</li>
                <li>Tighten all bolts with tools.</li>
              </ol>
            </section>

            <section>
              <div className="parts-needed">
                <h4>Requires:</h4>
                4 people.
                <br/>Rope.
                <br/><b>Hardware:</b> 4 - 3&quot;, 2 - 6&quot; bolts, 4 - 4&quot; long lag bolts.
              </div>

              <h3>Install side stair.</h3>

              <ol>
                <li>With four people, raise the stair so that it is vertical between the two platforms. Position the top of
                  the stair within the C-channel and top of platform (the two metal angles sit on the top surface of the
                  platform). The bottom of the stair sits on top of the lower platform (the two metal angles sit on the top
                  surface of the platform). Position wood blocking between the gap on the side of the lower platform and face
                  of stair, use 2 - 6&quot; bolts to hold in place.
                </li>
                <li>Secure top and bottom metal angles with 3&quot; bolts.</li>
                <li>4&quot; lag bolts are drilled into the backside of the stair thru the c-channel. Use the top two holes,
                  and the two bottom holes. Wood blocking is required - install between channel and stair - for the two bottom
                  bolts. Use the hammer drill. You will need to be below the main platform, on top of the bus roof.
                </li>
              </ol>
            </section>

            <section>
              <div className="parts-needed">
                <h4>Requires:</h4>
                3 people.
                <br/><b>Hardware:</b> 8 - 2 ½&quot; long structural screws.
              </div>

              <h3>Install side stair handrail.</h3>

              <p>Instructions!</p>
            </section>

            <section>
              <div className="parts-needed">
                <h4>Requires:</h4>
                4 people.
                <br/><b>Parts:</b>
                <br/>• All party-side struts. A collar tube for 17D and 33A.
                <br/><b>Hardware:</b>
                <br/>• A dozen-ish nuts and washers to attach struts to bus, ½&quot; and ⅜&quot;.
                <br/>• 5 short ⅜&quot; bolts, nuts, and washers to connect strut groups.
                <br/><b>Tools: ladders, ratcheting wrenches, impact drivers.</b>
              </div>

              <h3>Install panel support struts</h3>

              <ol>
                <li>Find and group struts 7ABC, 17ABC, 17DEF, 41ABC(?), and 41DE(?) near where they'll be installed.</li>
                <li>Working through each strut group,
                  <ol>
                    <li>Find each strut's attachment point on the bus. It should be labeled in paint pen with the strut's name, and an arrow indicating its rough angle of projection.</li>
                    <li>
                      Orient the strut. Each strut is marked with an arrow, which should point <i>away</i> from the bus.
                      One strut (41A?) has a collar tube which should be placed around the strut.
                    </li>
                    <li><b>Without removing any nuts that are already in place on the bus</b>, attach each strut to its bus attachment point bolt, finger tight, with a washer on each side and a bolt.</li>
                    <li>Prepare to join the strut groups. Each group of three struts joins at one point, usually stacked in A-B-C order (with A being the lowest), but not always. They should line up fairly easily; if not, something might be wrong.</li>
                    <li>Use a short ⅜&quot; bolt, with a washer on each side, to join the struts. The bolt should point skyward, and should extend a little past the nut so panels can be added.</li>
                    <li>Tighten all bolts with a wrench or impact driver.</li>
                    <li>Tape a pool noodle around the strut nearest the side stair to protect people's tender skulls.</li>
                  </ol>
                </li>
              </ol>

              <section className="safety-checks">
                <h3>Safety Checks:</h3>
                <ul>
                  <li>All bolts are tight.</li>
                  <li>Strut groups should feel extremely sturdy. A human should feel confident putting all their weight on the conjunction point.</li>
                </ul>
              </section>
            </section>

            <h3>Install the panels.</h3>

            <p>Labeling: Each business (passenger) side panel is labeled with its number, a green dot, the numbers of its neighbors,
              and an arrow indicating which way is up. If tags or labels are illegible or missing, let the setup lead know!
            </p>

            <p>Install the Primary Mount panels (7, 17, and 21).</p>
            <ol>
              <li>Panel 7 sits on strut 7ABC. Use a short ⅜&quot; bolt, finger-tight. It hangs loose until the Foreshank group is installed.</li>
              <li>Panel 17 sits on struts 17ABC and 17DEF. Use short ⅜&quot; bolts, finger-tight.</li>
              <li>
                Panel 21 connects to a punched angle iron bracket on the side extension platform. Use a short ⅜&quot;bolt, finger-tight.
                The other end attaches to panel 17. Use ¼&quot; hardware, finger-tight.
              </li>
            </ol>
            <p></p>

            <section>
              <h3>Install forward panel sections (as described above in <a href="setup-useful-info-section">Generally Useful Knowledge</a>) in this order:</h3>

              <ul>
                <li>Belly (14P … 18P … 23P)</li>
                <li>Foreshank (8P … 9P)</li>
                <li>Breast (1P … 2P … 3P … F3P … F4P)</li>
                <li>Tenderloin (20P)</li>
                <li>Rack (13P … 15P … 16P)</li>
                <li>Shoulder (4P … 5P … 6P … 11P … 12P)</li>
                <li>Fore Hoof (10P — inset a bit behind the other panels, attach loosely with zip ties)</li>
              </ul>
            </section>

            <section>
              <h3>Install aft panels (as described above in <a href="setup-useful-info-section">Generally Useful Knowledge</a>) in this order:</h3>

              <ul>
                <li>Hock (35P … 41P … 42P … R7P) (panel 41 sits on struts 41ABC and 41DEF at the labeled spots. Use short ⅜&quot;
                  bolts, finger-tight.)
                </li>
                <li>Leg (33P … 34P … 36P … 37P … 43P)</li>
                <li>Ribs (27P … 28P … 29P)</li>
                <li>Flank (22P … 30P … 31P)</li>
                <li>Loin (24P … 25P … 26AP … 26BP)</li>
                <li>Hind Hoof (38P — inset a bit behind the other panels, attach loosely with zip ties)
                </li>
                <li>Dock 39/32/35/RP2</li>
                <li>24 (and maybe 25?)</li>
                <li>Back (19AP … 19BP)</li>
              </ul>
            </section>

            <section className="safety-checks">
              <h3>Safety Checks:</h3>
              <ul>
                <li>Tighten all bolts attaching panels to struts with a wrench.</li>
                <li>Finger-tighten all wing nuts.</li>
                <li>All tension cables are correctly oriented and tensioned.</li>
              </ul>
            </section>
          </section>

          <section className="crew-instructions head-and-hind-crew" id="setup-head-and-hind-crew-section">
            <h2>Head Assembly</h2>

            <section>
              <div className="parts-needed">
                <h4>Requires:</h4>
                4 people
                <br/>15’ rope, front platform, 2 black steel support beams
                <br/>• 2@2"×<Measure>3/8"</Measure> bolts
                <br/>• 4@3"×<Measure>1/2"</Measure> bolts
                <br/>Tools: 2 C-clamps, pliers, impact driver with <Measure>3/4"</Measure> socket.
                <br/>Shop stairs.
              </div>
              <h3>Install front platform extension.</h3>

              <ul>
                <li>Attach support beams to the sides of the platform using the <Measure>3/8"</Measure> bolts. They'll hang down at a 45° angle.</li>
                <li>Feed rope through loops at front of platform.</li>
                <li>Place a person on each side of the narrower front section of the fixed platform. Each should have a
                  C-clamp and two <Measure>1/2"</Measure> bolts.
                </li>
                <li>Position platform vertically above Arch #1. Align it so the bolt holes will match when lowered into
                  place.
                </li>
                <li>Using the rope, carefully lower the platform into position. Make sure it doesn't tip forward. The support
                  beams should rest on the horizontal beam just above the bus roof.
                </li>
                <li>Use C-clamps to temporarily secure the platform.</li>
                <li>One side at a time, insert <Measure>1/2"</Measure> bolts and tighten using impact driver. You may need
                  to leave the bolts a little loose until they've all been inserted since the holes aren't perfectly aligned.
                </li>
              </ul>
            </section>

            <section>
              <div className="parts-needed">
                <h4>Requires:</h4>
                4 people, 10' rope, 4 <Measure>1/4"</Measure> bolts, hammer, 2 large vice grips, 4 wood screws, drill.
              </div>

              <h3>Install face.</h3>

              <ol>
                <li>Set face on the top platform facing forward, and tilted back so he’s looking upward. Attach L and R face
                  support struts to the 5-hole punched angle iron bracket on the brow (use the outer holes, attach with ¼&quot;
                  hardware). Tie one end of the rope between the struts.
                </li>
                <li>With the face still tilted back so he’s looking forward and upward, slide the face to the edge of the
                  front platform extension so it aligns with the rusty guides.
                </li>
                <li>Position a person to help drop the face into the rusty guides. They'll need a hammer to force it in,
                  maybe.
                </li>
                <li>Holding onto the L and R face support struts, tilt the face forward until he’s looking
                  straight ahead. It's further out than you think.
                </li>
                <li>Drop the face (at the back of his chin) into the rusty guides. Secure it using a vice grip on each side.
                </li>
                <li>Temporarily secure the L and R face support struts to the platform where indicated using two wood screws
                  for each strut. Tie the rope to any fixed point on the platform.
                </li>
              </ol>
            </section>
            <section>
              <div className="parts-needed">
                <h4>Requires:</h4>
                2 people
                <br/>Panel F15.
                <br/>Two longish ¼&quot; bolts/wing nuts.
              </div>

              <h3>Install neck.</h3>

              <ol>
                <li>Hang F15 from the front of the front platform extension and bolt in place.</li>
              </ol>
            </section>

            <p><b>Install ears.</b></p>

            <p>Need: L and R aluminum head support studs; L and R ears; F16D/F20D/F17D and F16P/F20P/F17P panels
              (preassembled);
              aligner pin; impact driver with 9/16&quot; deep socket; pliers; nine 1.5&quot;×⅜&quot; bolts; 1’ length of rope;
              four 4&quot;×⅜&quot; bolts; two 10’ lengths of rope.
            </p>

            <p></p>

            <p>Repeat for D(L) and P(R) sides:</p>
            <ol>
              <li>On the top platform, attach the F16/F20/F17 panel assembly to the aluminum head support stud using three 1½&quot;×⅜&quot;
                bolts. Attachment points are marked on the stud and on the panels.
              </li>
              <li>Slide the punched angle iron protruding from the ear through the forward hole in the F16/F20/F17 panel
                assembly
                and bolt it to the stud.
              </li>
              <li>Attach the back of the ear to the panel (using a ¼&quot; bolt on the P side and a short rope on the D side).
              </li>
              <li>Mount the aluminum head support stud (with panels and ear already attached) to Arch #1 using two 4&quot;×⅜&quot;
                bolts. The stud sits on the outside of the 2&quot;×2&quot; arch column, resting on the lower 1&quot;×1½&quot;
                part of the column.
              </li>
            </ol>
            <p></p>

            <section>
              <h3>Install remaining head panels.</h3>
            </section>

            <section>
              <h3>Install hind panels (as described above in <a href="#setup-useful-info-section">Generally Useful Knowledge</a>) in this order:</h3>

              <ul>
                <li>Party Side Dock 2 (32D)</li>
                <li>Business Side Dock 2 (32P)</li>
                <li>Party Side Dock (39D … 40D … R2D)</li>
                <li>Business Side Dock (39P … 40P … R2P)</li>
                <li>Dock Bridge (R1)</li>
                <li>Party Side Twist (R3D … R4D … R5D … R6D)</li>
                <li>Business Side Twist (R3P … R4P … R5P … R6P)</li>
              </ul>
            </section>

            <p>Disable bus suspension.
              <span className="stationary">For stationary setup, use four jack stands. Position the stands so they support a
              part of the bus that is connected to the frame with heavy-gauge steel (<Measure>1/4"</Measure> or thicker),
              as close to the outer edges of the bus as possible. You'll likely need cinder or wood blocks under the rear
              jacks. Lift the bus an inch or two using the bottle jack, place the jack stands, and lower the bus onto them.</span>
              <span className="mobile">For mobile setup, use wood blocks between axle and bus.</span>
            </p>
          </section>

          <section className="crew-instructions party-crew" id="teardown-party-crew-section">
            <h2>Party Crew Teardown</h2>

            <p>All light tubes and bins should have already been removed before starting! It&#39;s ok if the soundsystem is
              still in place.
            </p>

            <ul>
              <li>Take down the panels in reverse order of setup. Lean the panels against a wall or something.
              </li>
              <li>Take down struts. DO NOT DISASSEMBLE! LEAVE HARDWARE IN PLACE!</li>
              <li>Remove speakers.</li>
              <li>Remove speaker shelves.</li>
              <li></li>
            </ul>
            <p></p>
          </section>

          <section className="crew-instructions business-crew" id="teardown-business-crew-section">
            <h2>Business Crew Teardown</h2>

          </section>

          <section className="crew-instructions head-and-hind-crew" id="teardown-head-and-hind-crew-section">
            <h2>Head & Hind Teardown</h2>

            <h2></h2>
            <ul>
              <li><h2 style={{ display: 'inline' }}>Take down the rear panels in reverse order.
              </h2></li>
              <li>Detach the outer sphincter</li>
            </ul>
          </section>

        </div>
      </Container>
    </Main>
  );
};

export default Setup;