import React from 'react';

// Building blocks Banner components
import {
  IndexView as BannerIndexView,
  MUIStandardSnackBars as MUIStandardSnackBarsView,
  SimpleSnackBar as SimpleSnackBarView,
} from 'blocks/banners';

const routes = [
  {
    path: '/blocks/banners',
    renderer: (params = {}) => <BannerIndexView {...params} />,
  },
  {
    path: '/blocks/banners/mui-standard-snack-bars',
    renderer: (params = {}) => <MUIStandardSnackBarsView {...params} />,
  },
  {
    path: '/blocks/banners/simple-snack-bar',
    renderer: (params = {}) => <SimpleSnackBarView {...params} />,
  },
];

export default routes;
