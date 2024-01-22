import React from 'react';

// Building blocks CTA components
import {
  IndexView as CtaIndexView,
  CtaSimpleCentered as CtaSimpleCenteredView,
  CtaAlignedLeftWithTypedText as CtaAlignedLeftWithTypedTextView,
  CtaWithRightButtons as CtaWithRightButtonsView,
  SupportCenterCta as SupportCenterCtaView,
  CtaWithInputField as CtaWithInputFieldView,
  CtaWithCoverImage as CtaWithCoverImageView,
  CtaWithRightDownloadButton as CtaWithRightDownloadButtonView,
  CtaWithAppStoreButtons as CtaWithAppStoreButtonsView,
  CtaWithIllustration as CtaWithIllustrationView,
  CtaWithRightAppStoreButtons as CtaWithRightAppStoreButtonsView,
} from 'blocks/cta';

const routes = [
  {
    path: '/blocks/cta',
    renderer: (params = {}) => <CtaIndexView {...params} />,
  },
  {
    path: '/blocks/cta/cta-simple-centered',
    renderer: (params = {}) => <CtaSimpleCenteredView {...params} />,
  },
  {
    path: '/blocks/cta/cta-aligned-left-with-typed-text',
    renderer: (params = {}) => <CtaAlignedLeftWithTypedTextView {...params} />,
  },
  {
    path: '/blocks/cta/cta-with-right-buttons',
    renderer: (params = {}) => <CtaWithRightButtonsView {...params} />,
  },
  {
    path: '/blocks/cta/support-center-cta',
    renderer: (params = {}) => <SupportCenterCtaView {...params} />,
  },
  {
    path: '/blocks/cta/cta-with-input-field',
    renderer: (params = {}) => <CtaWithInputFieldView {...params} />,
  },
  {
    path: '/blocks/cta/cta-with-cover-image',
    renderer: (params = {}) => <CtaWithCoverImageView {...params} />,
  },
  {
    path: '/blocks/cta/cta-with-right-download-button',
    renderer: (params = {}) => <CtaWithRightDownloadButtonView {...params} />,
  },
  {
    path: '/blocks/cta/cta-with-app-store-buttons',
    renderer: (params = {}) => <CtaWithAppStoreButtonsView {...params} />,
  },
  {
    path: '/blocks/cta/cta-with-illustration',
    renderer: (params = {}) => <CtaWithIllustrationView {...params} />,
  },
  {
    path: '/blocks/cta/cta-with-right-app-store-buttons',
    renderer: (params = {}) => <CtaWithRightAppStoreButtonsView {...params} />,
  },
];

export default routes;
