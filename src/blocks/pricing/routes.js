import React from 'react';

// Building blocks Pricing components
import {
  IndexView as PricingIndexView,
  WithHighlightingAndPrimaryColor as WithHighlightingAndPrimaryColorView,
  WithTwoColumnAndMixedHeight as WithTwoColumnAndMixedHeightView,
  WithSimpleBorderedCards as WithSimpleBorderedCardsView,
  SingleChoiceOption as SingleChoiceOptionView,
  WithHighlightingAndSecondaryColor as WithHighlightingAndSecondaryColorView,
  WithOptionTogglerButton as WithOptionTogglerButtonView,
  CompareTable as CompareTableView,
} from 'blocks/pricing';

const routes = [
  {
    path: '/blocks/pricing',
    renderer: (params = {}) => <PricingIndexView {...params} />,
  },
  {
    path: '/blocks/pricing/with-highlighting-and-primary-color',
    renderer: (params = {}) => (
      <WithHighlightingAndPrimaryColorView {...params} />
    ),
  },
  {
    path: '/blocks/pricing/with-two-column-and-mixed-height',
    renderer: (params = {}) => <WithTwoColumnAndMixedHeightView {...params} />,
  },
  {
    path: '/blocks/pricing/with-simple-bordered-cards',
    renderer: (params = {}) => <WithSimpleBorderedCardsView {...params} />,
  },
  {
    path: '/blocks/pricing/single-choice-option',
    renderer: (params = {}) => <SingleChoiceOptionView {...params} />,
  },
  {
    path: '/blocks/pricing/with-highlighting-and-secondary-color',
    renderer: (params = {}) => (
      <WithHighlightingAndSecondaryColorView {...params} />
    ),
  },
  {
    path: '/blocks/pricing/with-option-toggler-button',
    renderer: (params = {}) => <WithOptionTogglerButtonView {...params} />,
  },
  {
    path: '/blocks/pricing/compare-table',
    renderer: (params = {}) => <CompareTableView {...params} />,
  },
];

export default routes;
