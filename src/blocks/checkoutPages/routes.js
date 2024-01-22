import React from 'react';

// Building blocks checkoutPages components
import {
  IndexView as CheckoutPagesIndexView,
  WithTwoColumns as WithTwoColumnsView,
} from 'blocks/checkoutPages';

const routes = [
  {
    path: '/blocks/checkout-pages',
    renderer: (params = {}) => <CheckoutPagesIndexView {...params} />,
  },
  {
    path: '/blocks/checkout-pages/with-two-columns',
    renderer: (params = {}) => <WithTwoColumnsView {...params} />,
  },
];

export default routes;
