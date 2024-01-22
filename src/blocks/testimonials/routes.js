import React from 'react';

// Building blocks Testimonials components
import {
  IndexView as TestimonialsIndexView,
  WithLargeImage as WithLargeImageView,
  WithHighlightedCard as WithHighlightedCardView,
  ReviewsWithBorderedGridLayout as ReviewsWithBorderedGridLayoutView,
  WithCompanyLogo as WithCompanyLogoView,
  WithOutlinedCards as WithOutlinedCardsView,
  ReviewsWithSimpleBoxes as ReviewsWithSimpleBoxesView,
  WithBrandBgColor as WithBrandBgColorView,
} from 'blocks/testimonials';

const routes = [
  {
    path: '/blocks/testimonials',
    renderer: (params = {}) => <TestimonialsIndexView {...params} />,
  },
  {
    path: '/blocks/testimonials/with-large-image',
    renderer: (params = {}) => <WithLargeImageView {...params} />,
  },
  {
    path: '/blocks/testimonials/with-highlighted-card',
    renderer: (params = {}) => <WithHighlightedCardView {...params} />,
  },
  {
    path: '/blocks/testimonials/reviews-with-bordered-grid-layout',
    renderer: (params = {}) => (
      <ReviewsWithBorderedGridLayoutView {...params} />
    ),
  },
  {
    path: '/blocks/testimonials/with-company-logo',
    renderer: (params = {}) => <WithCompanyLogoView {...params} />,
  },
  {
    path: '/blocks/testimonials/with-outlined-cards',
    renderer: (params = {}) => <WithOutlinedCardsView {...params} />,
  },
  {
    path: '/blocks/testimonials/reviews-with-simple-boxes',
    renderer: (params = {}) => <ReviewsWithSimpleBoxesView {...params} />,
  },
  {
    path: '/blocks/testimonials/with-brand-bg-color',
    renderer: (params = {}) => <WithBrandBgColorView {...params} />,
  },
];

export default routes;
