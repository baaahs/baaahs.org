import React from 'react';

// Building blocks Team components
import {
  IndexView as TeamIndexView,
  TeamWithCircledPhotos as TeamWithCircledPhotosView,
  WithOverlappedCards as WithOverlappedCardsView,
  WithLargeImagesAndSocialIcons as WithLargeImagesAndSocialIconsView,
  TeamWithSmallSquarePhotos as TeamWithSmallSquarePhotosView,
  WithSimpleCards as WithSimpleCardsView,
  WithAlternateCards as WithAlternateCardsView,
} from 'blocks/team';

const routes = [
  {
    path: '/blocks/team',
    renderer: (params = {}) => <TeamIndexView {...params} />,
  },
  {
    path: '/blocks/team/team-with-circled-photos',
    renderer: (params = {}) => <TeamWithCircledPhotosView {...params} />,
  },
  {
    path: '/blocks/team/with-overlapped-cards',
    renderer: (params = {}) => <WithOverlappedCardsView {...params} />,
  },
  {
    path: '/blocks/team/with-large-images-and-social-icons',
    renderer: (params = {}) => (
      <WithLargeImagesAndSocialIconsView {...params} />
    ),
  },
  {
    path: '/blocks/team/team-with-small-square-photos',
    renderer: (params = {}) => <TeamWithSmallSquarePhotosView {...params} />,
  },
  {
    path: '/blocks/team/with-simple-card',
    renderer: (params = {}) => <WithSimpleCardsView {...params} />,
  },
  {
    path: '/blocks/team/with-alternate-card',
    renderer: (params = {}) => <WithAlternateCardsView {...params} />,
  },
];

export default routes;
