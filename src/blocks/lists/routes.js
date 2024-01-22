import React from 'react';

// Building blocks Lists components
import {
  IndexView as ListsIndexView,
  ListWithNestedItem as ListWithNestedItemView,
  WithAvatars as WithAvatarsView,
  ListWithVerticalLine as ListWithVerticalLineView,
} from 'blocks/lists';

const routes = [
  {
    path: '/blocks/lists',
    renderer: (params = {}) => <ListsIndexView {...params} />,
  },
  {
    path: '/blocks/lists/list-with-nested-item',
    renderer: (params = {}) => <ListWithNestedItemView {...params} />,
  },
  {
    path: '/blocks/lists/with-avatars',
    renderer: (params = {}) => <WithAvatarsView {...params} />,
  },
  {
    path: '/blocks/lists/list-with-vertical-line',
    renderer: (params = {}) => <ListWithVerticalLineView {...params} />,
  },
];

export default routes;
