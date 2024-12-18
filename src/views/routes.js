import React from 'react';

import {
  IndexView,
  // About,
  NotFound,
  NotFoundCover,
  CampoutHome,
  CampoutWhatToExpect,
  CampoutLastYear,
  CampoutQAndA,
  CampoutSchedule,
  CampoutDJLineUp,
  Org2024,
  Setup,
} from 'views';

function page(path, view) {
  return {
    path,
    renderer: (params) => React.createElement(view, params),
  };
}

const routes = [
  page('/', IndexView),
  page('/not-found', NotFound),
  page('/not-found-cover', NotFoundCover),
  page('/campout', CampoutHome),
  page('/campout/what-to-expect', CampoutWhatToExpect),
  page('/campout/last-year', CampoutLastYear),
  page('/campout/q-and-a', CampoutQAndA),
  page('/campout/schedule', CampoutSchedule),
  page('/campout/dj-lineup', CampoutDJLineUp),
  page('/org/2024', Org2024),
  page('/setup', Setup),
];

export default routes;
