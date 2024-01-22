import React from 'react';

// Building blocks Notifications components
import {
  IndexView as NotificationsIndexView,
  Simple as SimpleView,
  WithActionButtons as WithActionButtonsView,
  WithAvatarAndButtonsBelow as WithAvatarAndButtonsBelowView,
  WithSplitButtons as WithSplitButtonsView,
} from 'blocks/notifications';

const routes = [
  {
    path: '/blocks/notifications',
    renderer: (params = {}) => <NotificationsIndexView {...params} />,
  },
  {
    path: '/blocks/notifications/simple',
    renderer: (params = {}) => <SimpleView {...params} />,
  },
  {
    path: '/blocks/notifications/with-action-buttons',
    renderer: (params = {}) => <WithActionButtonsView {...params} />,
  },
  {
    path: '/blocks/notifications/with-avatar-and-buttons-below',
    renderer: (params = {}) => <WithAvatarAndButtonsBelowView {...params} />,
  },
  {
    path: '/blocks/notifications/with-split-buttons',
    renderer: (params = {}) => <WithSplitButtonsView {...params} />,
  },
];

export default routes;
