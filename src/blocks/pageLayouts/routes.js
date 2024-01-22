import React from 'react';

// Building blocks PageLayouts components
import {
  IndexView as PageLayoutsIndexView,
  WithFixedSidebar as WithFixedSidebarView,
  WithThreeColumns as WithThreeColumnsView,
  WithToggledSidebar as WithToggledSidebarView,
  WithFluidLayoutAndNoSidebar as WithFluidLayoutAndNoSidebarView,
  WithNarrowLayoutAndNoSidebar as WithNarrowLayoutAndNoSidebarView,
} from 'blocks/pageLayouts';

const routes = [
  {
    path: '/blocks/page-layouts',
    renderer: (params = {}) => <PageLayoutsIndexView {...params} />,
  },
  {
    path: '/blocks/page-layouts/with-fixed-sidebar',
    renderer: (params = {}) => <WithFixedSidebarView {...params} />,
  },
  {
    path: '/blocks/page-layouts/with-three-columns',
    renderer: (params = {}) => <WithThreeColumnsView {...params} />,
  },
  {
    path: '/blocks/page-layouts/with-toggled-sidebar',
    renderer: (params = {}) => <WithToggledSidebarView {...params} />,
  },
  {
    path: '/blocks/page-layouts/with-fluid-layout-and-no-sidebar',
    renderer: (params = {}) => <WithFluidLayoutAndNoSidebarView {...params} />,
  },
  {
    path: '/blocks/page-layouts/with-narrow-layout-and-no-sidebar',
    renderer: (params = {}) => <WithNarrowLayoutAndNoSidebarView {...params} />,
  },
];

export default routes;
