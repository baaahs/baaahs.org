import React from 'react';

// Documentation pages
import {
  Introduction as IntroductionView,
  QuickStartReactScripts as QuickStartReactScriptsView,
  QuickStartNextJS as QuickStartNextJSView,
  QuickStartGatsbyJS as QuickStartGatsbyJSView,
  Colors as ColorsView,
  TypographyComponent as TypographyComponentView,
  Shadows as ShadowsView,
  PageComponent as PageComponentView,
  ContainerComponent as ContainerComponentView,
  Layouts as LayoutsView,
  Support as SupportView,
  Icons as IconsView,
  Illustrations as IllustrationsView,
  ChangeLog as ChangeLogView,
  Setup as SetupView,
} from 'docs';

const routes = [
  {
    path: '/docs',
    renderer: (params = {}) => <IntroductionView {...params} />,
  },
  {
    path: '/docs/introduction',
    renderer: (params = {}) => <IntroductionView {...params} />,
  },
  {
    path: '/docs/quick-start-react-scripts',
    renderer: (params = {}) => <QuickStartReactScriptsView {...params} />,
  },
  {
    path: '/docs/quick-start-nextjs',
    renderer: (params = {}) => <QuickStartNextJSView {...params} />,
  },
  {
    path: '/docs/quick-start-gatsbyjs',
    renderer: (params = {}) => <QuickStartGatsbyJSView {...params} />,
  },
  {
    path: '/docs/colors',
    renderer: (params = {}) => <ColorsView {...params} />,
  },
  {
    path: '/docs/typography',
    renderer: (params = {}) => <TypographyComponentView {...params} />,
  },
  {
    path: '/docs/shadows',
    renderer: (params = {}) => <ShadowsView {...params} />,
  },
  {
    path: '/docs/page',
    renderer: (params = {}) => <PageComponentView {...params} />,
  },
  {
    path: '/docs/container',
    renderer: (params = {}) => <ContainerComponentView {...params} />,
  },
  {
    path: '/docs/layouts',
    renderer: (params = {}) => <LayoutsView {...params} />,
  },
  {
    path: '/docs/icons',
    renderer: (params = {}) => <IconsView {...params} />,
  },
  {
    path: '/docs/illustrations',
    renderer: (params = {}) => <IllustrationsView {...params} />,
  },
  {
    path: '/docs/support',
    renderer: (params = {}) => <SupportView {...params} />,
  },
  {
    path: '/docs/change-log',
    renderer: (params = {}) => <ChangeLogView {...params} />,
  },
  {
    path: '/docs/setup',
    renderer: (params = {}) => <SetupView {...params} />,
  },
];

export default routes;
