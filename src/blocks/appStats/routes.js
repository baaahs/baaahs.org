import React from 'react';

// Building blocks appStats components
import {
  IndexView as AppStatsIndexView,
  Simple as SimpleView,
  WithBrandIcon as WithBrandIconView,
  WithSharedBorders as WithSharedBordersView,
} from 'blocks/appStats';

const routes = [
  {
    path: '/blocks/app-stats',
    renderer: (params = {}) => <AppStatsIndexView {...params} />,
  },
  {
    path: '/blocks/app-stats/simple',
    renderer: (params = {}) => <SimpleView {...params} />,
  },
  {
    path: '/blocks/app-stats/with-brand-icon',
    renderer: (params = {}) => <WithBrandIconView {...params} />,
  },
  {
    path: '/blocks/app-stats/with-shared-borders',
    renderer: (params = {}) => <WithSharedBordersView {...params} />,
  },
];

export default routes;
