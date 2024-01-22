import React from 'react';

// Building blocks Tables components
import {
  IndexView as TablesIndexView,
  WithAvatarsAndMultilineContent as WithAvatarsAndMultilineContentView,
  SimpleStriped as SimpleStripedView,
  Simple as SimpleView,
} from 'blocks/tables';

const routes = [
  {
    path: '/blocks/tables',
    renderer: (params = {}) => <TablesIndexView {...params} />,
  },
  {
    path: '/blocks/tables/with-avatars-and-multiline-content',
    renderer: (params = {}) => (
      <WithAvatarsAndMultilineContentView {...params} />
    ),
  },
  {
    path: '/blocks/tables/simple-striped',
    renderer: (params = {}) => <SimpleStripedView {...params} />,
  },
  {
    path: '/blocks/tables/simple',
    renderer: (params = {}) => <SimpleView {...params} />,
  },
];

export default routes;
