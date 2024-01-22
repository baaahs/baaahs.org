import React from 'react';

// Building blocks Category Showcase components
import {
  IndexView as CategoryShowcasesIndexView,
  WithImageGrid as WithImageGridView,
  SpanningColumns as SpanningColumnsView,
  ShowcaseGrid as ShowcaseGridView,
  ShowcaseBgImage as ShowcaseBgImageView,
} from 'blocks/categoryShowcases';

const routes = [
  {
    path: '/blocks/category-showcases',
    renderer: (params = {}) => <CategoryShowcasesIndexView {...params} />,
  },
  {
    path: '/blocks/category-showcases/with-image-grid',
    renderer: (params = {}) => <WithImageGridView {...params} />,
  },
  {
    path: '/blocks/category-showcases/on-spanning-columns',
    renderer: (params = {}) => <SpanningColumnsView {...params} />,
  },
  {
    path: '/blocks/category-showcases/showcase-grid',
    renderer: (params = {}) => <ShowcaseGridView {...params} />,
  },
  {
    path: '/blocks/category-showcases/showcase-bg-image',
    renderer: (params = {}) => <ShowcaseBgImageView {...params} />,
  },
];

export default routes;
