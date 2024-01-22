import React from 'react';

// Building blocks feature section components
import {
  IndexView as FeaturesIndexView,
  SimpleCentered as SimpleCenteredView,
  FeaturesWithCardRepresentation as FeaturesWithCardRepresentationView,
  FeaturesWithSimpleIcons as FeaturesWithSimpleIconsView,
  FeaturesWithCheckMarksAndAbstractImages as FeaturesWithCheckMarksAndAbstractImagesView,
  SimpleLeftAligned as SimpleLeftAlignedView,
  SimpleFeaturesWithAlternateCards as SimpleFeaturesWithAlternateCardsView,
  FeaturesWithLearnMoreLink as FeaturesWithLearnMoreLinkView,
  FeatureCardsWithColorfullIconsAndLearnMoreLink as FeatureCardsWithColorfullIconsAndLearnMoreLinkView,
  FeaturesWithMinimalDesign as FeaturesWithMinimalDesignView,
  OneLineFeatureListWithCheckMarks as OneLineFeatureListWithCheckMarksView,
  FeatureListWithForm as FeatureListWithFormView,
  FeaturesWithIllustration as FeaturesWithIllustrationView,
  FeaturesWithMobileScreenshot as FeaturesWithMobileScreenshotView,
  FeatureCardWithCtaButton as FeatureCardWithCtaButtonView,
  FeatureGridWithBackgrounds as FeatureGridWithBackgroundsView,
  FeaturesWithMasonryCardsAndCheckIcons as FeaturesWithMasonryCardsAndCheckIconsView,
  FeatureListWithDesktopAppScreenshot as FeatureListWithDesktopAppScreenshotView,
  FeaturesWithSimpleLeftAlignedIcons as FeaturesWithSimpleLeftAlignedIconsView,
} from 'blocks/features';

const routes = [
  {
    path: '/blocks/features',
    renderer: (params = {}) => <FeaturesIndexView {...params} />,
  },
  {
    path: '/blocks/features/simple-centered',
    renderer: (params = {}) => <SimpleCenteredView {...params} />,
  },
  {
    path: '/blocks/features/features-with-card-representation',
    renderer: (params = {}) => (
      <FeaturesWithCardRepresentationView {...params} />
    ),
  },
  {
    path: '/blocks/features/features-with-simple-icons',
    renderer: (params = {}) => <FeaturesWithSimpleIconsView {...params} />,
  },
  {
    path: '/blocks/features/features-with-check-marks-and-abstract-images',
    renderer: (params = {}) => (
      <FeaturesWithCheckMarksAndAbstractImagesView {...params} />
    ),
  },
  {
    path: '/blocks/features/simple-left-aligned',
    renderer: (params = {}) => <SimpleLeftAlignedView {...params} />,
  },
  {
    path: '/blocks/features/simple-features-with-alternate-cards',
    renderer: (params = {}) => (
      <SimpleFeaturesWithAlternateCardsView {...params} />
    ),
  },
  {
    path: '/blocks/features/features-with-learn-more-link',
    renderer: (params = {}) => <FeaturesWithLearnMoreLinkView {...params} />,
  },
  {
    path:
      '/blocks/features/feature-cards-with-colorfull-icons-and-learn-more-link',
    renderer: (params = {}) => (
      <FeatureCardsWithColorfullIconsAndLearnMoreLinkView {...params} />
    ),
  },
  {
    path: '/blocks/features/features-with-minimal-design',
    renderer: (params = {}) => <FeaturesWithMinimalDesignView {...params} />,
  },
  {
    path: '/blocks/features/one-line-feature-list-with-check-marks',
    renderer: (params = {}) => (
      <OneLineFeatureListWithCheckMarksView {...params} />
    ),
  },
  {
    path: '/blocks/features/feature-list-with-form',
    renderer: (params = {}) => <FeatureListWithFormView {...params} />,
  },
  {
    path: '/blocks/features/features-with-illustration',
    renderer: (params = {}) => <FeaturesWithIllustrationView {...params} />,
  },
  {
    path: '/blocks/features/features-with-mobile-screenshot',
    renderer: (params = {}) => <FeaturesWithMobileScreenshotView {...params} />,
  },
  {
    path: '/blocks/features/feature-card-with-cta-button',
    renderer: (params = {}) => <FeatureCardWithCtaButtonView {...params} />,
  },
  {
    path: '/blocks/features/feature-grid-with-backgrounds',
    renderer: (params = {}) => <FeatureGridWithBackgroundsView {...params} />,
  },
  {
    path: '/blocks/features/features-with-masonry-cards-and-check-icons',
    renderer: (params = {}) => (
      <FeaturesWithMasonryCardsAndCheckIconsView {...params} />
    ),
  },
  {
    path: '/blocks/features/feature-list-with-desktop-app-screenshot',
    renderer: (params = {}) => (
      <FeatureListWithDesktopAppScreenshotView {...params} />
    ),
  },
  {
    path: '/blocks/features/features-with-simple-left-aligned-icons',
    renderer: (params = {}) => (
      <FeaturesWithSimpleLeftAlignedIconsView {...params} />
    ),
  },
];

export default routes;
