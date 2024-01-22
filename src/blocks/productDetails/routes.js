import React from 'react';

// Building blocks productDetails components
import {
  IndexView as ProductDetailsIndexView,
  WithLargeImage as WithLargeImageView,
  WithImageGrid as WithImageGridView,
} from 'blocks/productDetails';

const routes = [
  {
    path: '/blocks/product-details',
    renderer: (params = {}) => <ProductDetailsIndexView {...params} />,
  },
  {
    path: '/blocks/product-details/with-large-image',
    renderer: (params = {}) => <WithLargeImageView {...params} />,
  },
  {
    path: '/blocks/product-details/with-image-grid',
    renderer: (params = {}) => <WithImageGridView {...params} />,
  },
];

export default routes;
