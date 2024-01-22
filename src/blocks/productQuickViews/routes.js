import React from 'react';

// Building blocks productQuickViews components
import {
  IndexView as ProductQuickViewsIndexView,
  PopupBoxWithProductDetails as PopupBoxWithProductDetailsView,
} from 'blocks/productQuickViews';

const routes = [
  {
    path: '/blocks/product-quick-views',
    renderer: (params = {}) => <ProductQuickViewsIndexView {...params} />,
  },
  {
    path: '/blocks/product-quick-views/popup-box-with-product-details',
    renderer: (params = {}) => <PopupBoxWithProductDetailsView {...params} />,
  },
];

export default routes;
