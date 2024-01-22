import React from 'react';

// Building blocks Sidebars components
import {
  IndexView as SidebarsIndexView,
  Simple as SimpleView,
  WithDarkBg as WithDarkBgView,
  WithCollapsibleMenuItems as WithCollapsibleMenuItemsView,
} from 'blocks/sidebars';

const routes = [
  {
    path: '/blocks/sidebars',
    renderer: (params = {}) => <SidebarsIndexView {...params} />,
  },
  {
    path: '/blocks/sidebars/simple',
    renderer: (params = {}) => <SimpleView {...params} />,
  },
  {
    path: '/blocks/sidebars/with-dark-bg',
    renderer: (params = {}) => <WithDarkBgView {...params} />,
  },
  {
    path: '/blocks/sidebars/with-collapsible-menu-items',
    renderer: (params = {}) => <WithCollapsibleMenuItemsView {...params} />,
  },
];

export default routes;
