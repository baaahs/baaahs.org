import React from 'react';

// Building blocks Stats components
import {
  IndexView as StatsIndexView,
  WithCountUpNumbersAndCoverImage as WithCountUpNumbersAndCoverImageView,
  WithCountUpNumbersAndMap as WithCountUpNumbersAndMapView,
  StatsWithCard as StatsWithCardView,
  WithBorderedCardsAndBrandColor as WithBorderedCardsAndBrandColorView,
  WithAbstractVisualRepresentation as WithAbstractVisualRepresentationView,
  ClientSatisfaction as ClientSatisfactionView,
} from 'blocks/stats';

const routes = [
  {
    path: '/blocks/stats',
    renderer: (params = {}) => <StatsIndexView {...params} />,
  },
  {
    path: '/blocks/stats/with-count-up-numbers-and-cover-image',
    renderer: (params = {}) => (
      <WithCountUpNumbersAndCoverImageView {...params} />
    ),
  },
  {
    path: '/blocks/stats/with-count-up-numbers-and-map',
    renderer: (params = {}) => <WithCountUpNumbersAndMapView {...params} />,
  },
  {
    path: '/blocks/stats/stats-with-card',
    renderer: (params = {}) => <StatsWithCardView {...params} />,
  },
  {
    path: '/blocks/stats/with-bordered-cards-and-brand-color',
    renderer: (params = {}) => (
      <WithBorderedCardsAndBrandColorView {...params} />
    ),
  },
  {
    path: '/blocks/stats/with-abstract-visual-representation',
    renderer: (params = {}) => (
      <WithAbstractVisualRepresentationView {...params} />
    ),
  },
  {
    path: '/blocks/stats/client-satisfaction',
    renderer: (params = {}) => <ClientSatisfactionView {...params} />,
  },
];

export default routes;
