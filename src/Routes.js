import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import viewsRoutes from 'views/routes';
import { NotFoundCover } from './views';

const Redirect = ({ to }) => {
  document.location.replace(to);
};

const redirects = [
  // redirects to keep!
  [
    '/drive',
    'https://drive.google.com/drive/folders/0B_TasILTM6TWa18zdHdmNHpUYzg',
  ],
  ['/pspride', '/psp/'],
  ['/join', 'https://goo.gl/forms/XUvltyxql2'],
  ['/setup', '/setup/'],
  ['/geometry', 'https://baaahs.github.io/geometry/html/viewer.html?#map'],
  ['/model', 'https://baaahs.github.io/geometry/html/viewer.html?#map'],
  [
    '/cal',
    'https://calendar.google.com/calendar?cid=ODlydDZ0MWs1am1oMm9odnZicXBvbTZyMW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ',
  ],
  [
    '/cal-private',
    'https://calendar.google.com/calendar/embed?src=eo8lcds32ki40o14dr6m5t0o5s%40group.calendar.google.com&ctz=America%2FLos_Angeles',
  ],
  ['/slack', 'https://baaahs.slack.com'],
  [
    '/slack-invite',
    'https://join.slack.com/t/baaahs/shared_invite/enQtODg3MTE3NTk1ODA4LTRhMDEyZTY1MmI4YjIzN2JlYmUxMWQyNGMyYjA4MDhkMmMwMTU3YWFjOTVjNGZhZGY3YTc4MTNlZDE1NzFmMmY',
  ],

  // 2020
  [
    '/2020',
    'https://drive.google.com/drive/folders/1-5VGf1gZXyzGN1lYNVF1KwGBrJ6n9t4L',
  ],
  [
    '/2020-form',
    'https://docs.google.com/forms/d/e/1FAIpQLSfuh4BvWp1q4eQ_W_sVCDsKmlOPPB1N5RekJHLTjCsR5qdeFQ/viewform',
  ],
  [
    '/2020-doc',
    'https://docs.google.com/document/d/10Do2qdITwrQxGOeMGd7pe1jrIxQejF-W5jHK2wbagfE',
  ],
  [
    '/2020-sheet',
    'https://docs.google.com/spreadsheets/d/11FeKLaktPhMq_Oh_mG8TBK3U9_eY2oHBGxE0T3GzLhU',
  ],

  // 2022
  [
    '/crew',
    'https://docs.google.com/document/d/11mQX1lZpP0rMNNV1Uni_J0hutXaMEhsjvKtermUuY6Q',
  ],

  // 2023
  // ['/apply',     'https://bit.ly/baaahs-2023-application'],
  // ['/campout',   'https://baaahs.ticketspice.com/baaahs-campout'],
  [
    '/dj',
    'https://docs.google.com/forms/d/e/1FAIpQLSeaDIVG7c5uKHetUvo1IX4R6PrTg1agjyGdEMnxYOvTBCF_YQ/viewform?usp=sf_link',
  ],

  // 2024
  ['/apply-2024', 'https://bit.ly/baaahs-2024-application'],
  ['/campout/register', 'https://buytickets.at/baaahs24/1128001'],
  ['/campout/perform', 'https://docs.google.com/forms/d/e/1FAIpQLSdl2F0KIvLfD-qslgVMHLVmO4cckyoSjhE9LCieSymyegokyw/viewform?vc=0&c=0&w=1&flr=0'],

  // 2025
  ['/apply', 'https://bit.ly/baaahs-2025-application'],
  ['/apply-2025', 'https://bit.ly/baaahs-2025-application'],
];

const Routes = () => {
  return (
    <ReactRoutes>
      {viewsRoutes.map((item, i) => (
        <Route key={i} path={item.path} element={item.renderer()} />
      ))}

      {redirects.map(([from, to], i) => (
        <Route
          key={'redirect' + i}
          path={from}
          element={<Redirect to={to} />}
        />
      ))}
      <Route path="*" element={<NotFoundCover />} />
    </ReactRoutes>
  );
};

export default Routes;
