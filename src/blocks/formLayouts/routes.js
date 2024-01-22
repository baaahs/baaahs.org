import React from 'react';

// Building blocks FormLayouts components
import {
  IndexView as FormLayoutsIndexView,
  Account as AccountView,
  Contact as ContactView,
} from 'blocks/formLayouts';

const routes = [
  {
    path: '/blocks/form-layouts',
    renderer: (params = {}) => <FormLayoutsIndexView {...params} />,
  },
  {
    path: '/blocks/form-layouts/account',
    renderer: (params = {}) => <AccountView {...params} />,
  },
  {
    path: '/blocks/form-layouts/contact',
    renderer: (params = {}) => <ContactView {...params} />,
  },
];

export default routes;
