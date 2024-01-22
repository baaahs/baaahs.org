import React from 'react';

// Building blocks Logo Grid components
import {
  IndexView as LogoGridIndexView,
  LogoGridSimpleCentered as LogoGridSimpleCenteredView,
  WithBoxedLogos as WithBoxedLogosView,
  WithLeftAlignedDescriptionBox as WithLeftAlignedDescriptionBoxView,
  WithSwiperAndBrandBackgroundColor as WithSwiperAndBrandBackgroundColorView,
  WithLeftAlignedDescriptionBoxAndBoxedLogos as WithLeftAlignedDescriptionBoxAndBoxedLogosView,
  WithDarkBackgroundAndSimpleDescriptionBox as WithDarkBackgroundAndSimpleDescriptionBoxView,
} from 'blocks/logoGrid';

const routes = [
  {
    path: '/blocks/logo-grid',
    renderer: (params = {}) => <LogoGridIndexView {...params} />,
  },
  {
    path: '/blocks/logo-grid/logo-grid-simple-centered',
    renderer: (params = {}) => <LogoGridSimpleCenteredView {...params} />,
  },
  {
    path: '/blocks/logo-grid/logo-grid-with-boxed-logos',
    renderer: (params = {}) => <WithBoxedLogosView {...params} />,
  },
  {
    path: '/blocks/logo-grid/logo-grid-with-left-aligned-description-box',
    renderer: (params = {}) => (
      <WithLeftAlignedDescriptionBoxView {...params} />
    ),
  },
  {
    path: '/blocks/logo-grid/logo-grid-with-swiper-and-brand-background-color',
    renderer: (params = {}) => (
      <WithSwiperAndBrandBackgroundColorView {...params} />
    ),
  },
  {
    path:
      '/blocks/logo-grid/logo-grid-with-left-aligned-description-box-and-boxed-logos',
    renderer: (params = {}) => (
      <WithLeftAlignedDescriptionBoxAndBoxedLogosView {...params} />
    ),
  },
  {
    path:
      '/blocks/logo-grid/logo-grid-with-dark-background-and-simple-description-box',
    renderer: (params = {}) => (
      <WithDarkBackgroundAndSimpleDescriptionBoxView {...params} />
    ),
  },
];

export default routes;
