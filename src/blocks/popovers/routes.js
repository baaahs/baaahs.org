import React from 'react';

// Building blocks Popver components
import {
  IndexView as PopoverIndexView,
  Simple as SimpleView,
  StackedWithFooterActions as StackedWithFooterActionsView,
  WithRecentPosts as WithRecentPostsView,
  WithTwoColumnGrid as WithTwoColumnGridView,
} from 'blocks/popovers';

const routes = [
  {
    path: '/blocks/popovers',
    renderer: (params = {}) => <PopoverIndexView {...params} />,
  },
  {
    path: '/blocks/popovers/simple',
    renderer: (params = {}) => <SimpleView {...params} />,
  },
  {
    path: '/blocks/popovers/stacked-with-footer-actions',
    renderer: (params = {}) => <StackedWithFooterActionsView {...params} />,
  },
  {
    path: '/blocks/popovers/with-recent-posts',
    renderer: (params = {}) => <WithRecentPostsView {...params} />,
  },
  {
    path: '/blocks/popovers/with-two-column-grid',
    renderer: (params = {}) => <WithTwoColumnGridView {...params} />,
  },
];

export default routes;
