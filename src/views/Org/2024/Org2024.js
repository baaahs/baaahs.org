import React, { Fragment } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from '../../../components/Container';

const RingDefs = () => {
  return (
    <Fragment>
      <Ring name="Build" x="-282" y="-98" rx="293" ry="190"/>
      <Ring name="Lights" x="-165" y="-336" rx="144" ry="118"/>
      <Ring name="Tech" x="28" y="-302" rx="124" ry="109"/>
      <Ring name="Sound" x="88" y="-79" rx="117" ry="134"/>
      <Ring name="Camp" x="20" y="167" rx="223" ry="156"/>
      <Ring name="Depot" x="18" y="433" rx="210" ry="153"/>
      <Ring name="Events" x="325" y="37" rx="190" ry="150"/>
      <Ring name="Theme & Art" x="420" y="506" rx="264" ry="124"/>
      <Ring name="Campout" x="602" y="14" rx="142" ry="150"/>
      <Ring name="Community" x="447" y="278" rx="313" ry="140"/>
      <Ring name="Communications" x="899" y="89" rx="205" ry="219"/>
      <Ring name="Infrastructure" x="860" y="441" rx="226" ry="168"/>
      <Ring name="Admin/Default World Relations" x="1206" y="39" rx="151"
        ry="182"/>
      <Ring name="Food" x="1213" y="316" rx="172" ry="124"/>
      <Ring name="Fundraising" x="1184" y="496" rx="130" ry="98"/>
      <Ring name="Exodus" x="1360" y="-175" rx="143" ry="91"/>
      <Ring name="Pearl Tamer" x="154" y="655" rx="143" ry="91"/>
      <Ring name="Ringleader General" x="1046" y="657" rx="143" ry="91"/>

      {/* Build */}
      <Project name="Panel Resto" x="-447" y="-194"/>
      <Project name="Party Side" x="-465" y="-127"/>
      <Project name="Business Side" x="-472" y="-67"/>
      <Project name="Head/Face" x="-432" y="-5"/>
      <Project name="Hole" x="-319" y="-27"/>
      <Project name="Pearl Resto" x="-315" y="-226"/>
      <Project name="Interior" x="-315" y="-160"/>
      <Project name="Disco Balls" x="-175" y="-192"/>
      <Project name="Upgrades" x="-118" y="-131"/>
      <Project name="Workshop" x="-108" y="-68"/>
      <Project name="Strike" x="-225" y="-47"/>
      <Project name="Outfits" x="-302" y="46"/>
      <Project name="Fire" x="-167" y="15"/>

      {/* Lights */}
      <Project name="Eyes" x="-143" y="-444"/>
      <Project name="Biz Side" x="-246" y="-395"/>
      <Project name="Mapping" x="-134" y="-383"/>
      <Project name="QA" x="-253" y="-342"/>
      <Project name="Face" x="-250" y="-279"/>
      <Project name="Other" x="-168" y="-251"/>

      {/* Tech */}
      <Project name="VJs" x="-58" y="-365"/>
      <Project name="Network" x="-67" y="-315"/>
      <Project name="Shows" x="-74" y="-257"/>
      <Project name="baaahs.org" x="39" y="-366"/>
      <Project name="Playa Comms" x="126" y="-310"/>
      <Project name="Sparkle Motion" x="132" y="-248"/>

      {/* Sound */}
      <Project name="Electrical" x="-12" y="-192"/>
      <Project name="Recording" x="91" y="-186"/>
      <Project name="Install" x="-6" y="-120"/>
      <Project name="Assets" x="99" y="-131"/>
      <Project name="Tuning" x="185" y="-136"/>
      <Project name="Booth" x="-12" y="-34"/>
      <Project name="Design" x="77" y="-34"/>

      {/* Camp */}
      <Project name="Depot Sound" x="66" y="30"/>
      <Project name="Layout" x="-75" y="96"/>
      <Project name="Shade" x="-129" y="184"/>
      <Project name="Hospitality" x="-101" y="287"/>
      <Project name="Lighting" x="30" y="289"/>
      <Project name="Greeters" x="140" y="165"/>
      <Project name="Camp Organization" x="194" y="232"/>
      <Project name="On-Playa Resources" x="155" y="298"/>

      {/* Events */}
      <Project name="BRC Parties" x="180" y="-31"/>
      <Project name="In-Camp Events" x="165" y="77"/>
      <Project name="Tower" x="-109" y="390"/>
      <Project name="Bar" x="-7" y="370"/>
      <Project name="Drivers" x="276" y="-96"/>
      <Project name="Off-Playa Events" x="402" y="-89"/>
      <Project name="Music Direction" x="452" y="-6"/>
      <Project name="Crew" x="273" y="-16"/>
      <Project name="Promotions" x="290" y="92"/>
      <Project name="Stage Mgr" x="410" y="85"/>
      <Project name="Programming" x="518" y="71"/>

      {/* Depot */}
      <Project name="Fire" x="136" y="389"/>
      <Project name="Shade & Interior" x="-99" y="475"/>
      <Project name="Sign" x="-7" y="535"/>
      <Project name="Strike" x="104" y="536"/>
      <Project name="Design" x="225" y="435"/>

      {/* Theme & Art */}
      <Project name="Signage" x="223" y="516"/>
      <Project name="Handbook" x="354" y="413"/>
      <Project name="Flockbook" x="407" y="398"/>
      <Project name="Art Dept." x="514" y="428"/>
      <Project name="Bandanas" x="286" y="542"/>
      <Project name="Badges" x="395" y="544"/>
      <Project name="Photo/Video" x="526" y="499"/>
      <Project name="Art" x="614" y="88"/>

      {/* Campout */}
      <Project name="Services" x="559" y="-42"/>
      <Project name="Lights" x="536" y="-97"/>
      <Project name="Sound" x="634" y="-98"/>
      <Project name="Food" x="699" y="-41"/>
      <Project name="Registration" x="692" y="66"/>

      {/* Community */}
      <Project name="On-Playa Shifts Management" x="360" y="166"/>
      <Project name="Activism" x="345" y="232"/>
      <Project name="Roster" x="466" y="232"/>
      <Project name="Build Weekends" x="555" y="149"/>
      <Project name="Orientation and Training" x="583" y="221"/>
      <Project name="BRC Bootcamp" x="702" y="151"/>
      <Project name="Ticket Management" x="360" y="337"/>
      <Project name="Camp Dues" x="525" y="350"/>

      {/* Communications */}
      <Project name="baaahs.org" x="926" y="-40"/>
      <Project name="Social Media" x="850" y="207"/>

      {/* Infrastructure */}
      <Project name="Community Transport" x="687" y="361"/>
      <Project name="Power" x="689" y="450"/>
      <Project name="Showers" x="756" y="523"/>
      <Project name="Water" x="810" y="364"/>
      <Project name="Weekly Digests" x="781" y="278"/>
      <Project name="Fuel" x="869" y="533"/>
      <Project name="Transport" x="994" y="522"/>
      <Project name="Storage" x="1044" y="447"/>
      <Project name="Assets" x="993" y="369"/>

      {/* Food */}
      <Project name="Dining" x="1135" y="365"/>
      <Project name="Build Week" x="1128" y="285"/>
      <Project name="Menu" x="1227" y="236"/>
      <Project name="Prep" x="1338" y="266"/>
      <Project name="Burn Week" x="1322" y="340"/>
      <Project name="Kitchen" x="1249" y="389"/>

      {/* Admin */}
      <Project name="Program Management" x="1222" y="154"/>
      <Project name="Meeting Facilitation" x="1080" y="160"/>
      <Project name="IT" x="1072" y="1"/>
      <Project name="Accounts/Treasurer" x="1135" y="-74"/>
      <Project name="Budgets/Comptroller" x="1266" y="-51"/>
      <Project name="Borg Relations" x="1334" y="88"/>

      {/* Fundraising */}
      <Project name="Donor Relations" x="1154" y="447"/>
      <Project name="Parties" x="1139" y="546"/>
      <Project name="Merchandise" x="1269" y="554"/>

      {/* Exodus */}
      <Project name="Rubbish" x="1257" y="-157"/>
      <Project name="Strike" x="1291" y="-219"/>
      <Project name="Load-Out" x="1389" y="-225"/>
      <Project name="LNT" x="1464" y="-172"/>
      <Project name="Post" x="1391" y="-121"/>
    </Fragment>
  );
};

const Ring = ({ name, x, y, rx, ry }) => {
  const theme = useTheme();
  theme;

  return (
    <Fragment>
      <g className="ring-group">
        <ellipse cx={x} cy={y} rx={rx} ry={ry}/>
        <text x={x} y={y}>
          {name}
        </text>
      </g>
    </Fragment>
  );
};

const Project = ({ name, x, y }) => {
  const theme = useTheme();
  theme;
  let lastWord = 0;

  return (
    <Fragment>
      <g className="project-group">
        <rect x={x} y={y} width="0" height="0" data-orig-x={x} data-orig-y={y}/>
        <text x={x} y={y} dx="100%">
          {
            name.split(' ').map((word, i) => {
              const lastWordLength = lastWord * -8;
              lastWord = word.length;
              return <tspan dx={lastWordLength} dy={i + 'em'}>{word}</tspan>;
            })
          }
        </text>
      </g>
    </Fragment>
  );
};

function adjustProjectBox(g) {
  const paddingX = 10;
  const paddingY = 10;

  if (g.childNodes.length !== 2) {
    console.debug('huh?', g);
  } else {
    const rect = g.childNodes[0];
    const text = g.childNodes[1];
    const textBounds = text.getBBox();
    console.log(text, textBounds);
    let origX = parseInt(rect.getAttribute('data-orig-x'));
    let origY = parseInt(rect.getAttribute('data-orig-y'));
    rect.setAttribute('x', origX - textBounds.width / 2 - paddingX);
    rect.setAttribute('y', origY - textBounds.height / 2 - paddingY);
    rect.setAttribute('width', textBounds.width + paddingX * 2);
    rect.setAttribute('height', textBounds.height + paddingY * 2);
  }
}

export const Org2024 = () => {
  const theme = useTheme();
  theme;

  const svgLoaded = React.useCallback(node => {
    node;
    if (node !== null) {
      Array.from(node.getElementsByClassName('project-group'))
        .forEach(adjustProjectBox);
    }
  }, []);

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Main bgcolor={'background.paper'}>
        <Container>
          <span>BAAAHS Org 2024</span>

          <svg ref={svgLoaded} viewBox="-576 -20 2100 356" width="1200px"
            height="726px" xmlns="http://www.w3.org/2000/svg">
            <style>{`
              .ring-group ellipse {
                stroke: black;
                stroke-width: 1;
                fill: rgb(210, 230, 255);
              }
              .ring-group text, .ring-group tspan {
                text-anchor: middle;
                alignment-baseline: middle;
                font-size: 2em;
                fill: black;
               }
  
              .project-group rect {
                stroke: black;
                stroke-width: 1;
                fill: rgb(135, 135, 240);
                opacity: .5;
              }
              
              .project-group text {
                text-anchor: middle;
                alignment-baseline: middle;
                font-size: 20px;
                fill: black;
              }
            `}</style>

            <RingDefs/>
            <ellipse cx={0} cy={0} rx={10} ry={10} fill="red"/>
          </svg>
        </Container>
      </Main>
    </Box>
  );
};