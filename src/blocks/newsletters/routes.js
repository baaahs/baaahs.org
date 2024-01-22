import React from 'react';

// Building blocks Newsletter components
import {
  IndexView as NewsletterIndexView,
  NewsletterWithCard as NewsletterWithCardView,
  NewsletterWithImage as NewsletterWithImageView,
  WithDarkBackground as WithDarkBackgroundView,
} from 'blocks/newsletters';

const routes = [
  {
    path: '/blocks/newsletters',
    renderer: (params = {}) => <NewsletterIndexView {...params} />,
  },
  {
    path: '/blocks/newsletters/newsletter-with-card',
    renderer: (params = {}) => <NewsletterWithCardView {...params} />,
  },
  {
    path: '/blocks/newsletters/newsletter-with-image',
    renderer: (params = {}) => <NewsletterWithImageView {...params} />,
  },
  {
    path: '/blocks/newsletters/with-dark-background',
    renderer: (params = {}) => <WithDarkBackgroundView {...params} />,
  },
];

export default routes;
