import React from 'react';

import {
  IndexView,
  Home as HomeView,
  Customers as CustomersView,
  HireUs as HireUsView,
  Faq as FaqView,
  Agency as AgencyView,
  CareerListing as CareerListingView,
  CareerListingMinimal as CareerListingMinimalView,
  CareerOpening as CareerOpeningView,
  ContactPage as ContactPageView,
  Coworking as CoworkingView,
  Elearning as ElearningView,
  Enterprise as EnterpriseView,
  Service as ServiceView,
  WebBasic as WebBasicView,
  DesktopApp as DesktopAppView,
  Expo as ExpoView,
  Startup as StartupView,
  DesignCompany as DesignCompanyView,
  MobileApp as MobileAppView,
  JobListing as JobListingView,
  Rental as RentalView,
  CloudHosting as CloudHostingView,
  Logistics as LogisticsView,
  Ecommerce as EcommerceView,
  Pricing as PricingView,
  About as AboutView,
  HelpCenter as HelpCenterView,
  HelpCenterArticle as HelpCenterArticleView,
  PortfolioPage as PortfolioPageView,
  PortfolioMasonry as PortfolioMasonryView,
  PortfolioGrid as PortfolioGridView,
  CompanyTerms as CompanyTermsView,
  ContactPageSidebarMap as ContactPageSidebarMapView,
  ContactPageCover as ContactPageCoverView,
  AboutSideCover as AboutSideCoverView,
  BlogSearch as BlogSearchView,
  BlogNewsroom as BlogNewsroomView,
  BlogArticle as BlogArticleView,
  BlogReachView as BlogReachViewView,
  PasswordResetCover as PasswordResetCoverView,
  PasswordResetSimple as PasswordResetSimpleView,
  SigninSimple as SigninSimpleView,
  SigninCover as SigninCoverView,
  SignupSimple as SignupSimpleView,
  SignupCover as SignupCoverView,
  AccountBilling as AccountBillingView,
  AccountGeneral as AccountGeneralView,
  AccountNotifications as AccountNotificationsView,
  AccountSecurity as AccountSecurityView,
  NotFound as NotFoundView,
  NotFoundCover as NotFoundCoverView,
} from 'views';

const routes = [
  {
    path: '/',
    renderer: (params = {}) => <IndexView {...params} />,
  },
  {
    path: '/home',
    renderer: (params = {}) => <HomeView {...params} />,
  },
  {
    path: '/customers',
    renderer: (params = {}) => <CustomersView {...params} />,
  },
  {
    path: '/hire-us',
    renderer: (params = {}) => <HireUsView {...params} />,
  },
  {
    path: '/faq',
    renderer: (params = {}) => <FaqView {...params} />,
  },
  {
    path: '/career-listing',
    renderer: (params = {}) => <CareerListingView {...params} />,
  },
  {
    path: '/career-listing-minimal',
    renderer: (params = {}) => <CareerListingMinimalView {...params} />,
  },
  {
    path: '/career-opening',
    renderer: (params = {}) => <CareerOpeningView {...params} />,
  },
  {
    path: '/contact-page',
    renderer: (params = {}) => <ContactPageView {...params} />,
  },
  {
    path: '/coworking',
    renderer: (params = {}) => <CoworkingView {...params} />,
  },
  {
    path: '/e-learning',
    renderer: (params = {}) => <ElearningView {...params} />,
  },
  {
    path: '/enterprise',
    renderer: (params = {}) => <EnterpriseView {...params} />,
  },
  {
    path: '/service',
    renderer: (params = {}) => <ServiceView {...params} />,
  },
  {
    path: '/web-basic',
    renderer: (params = {}) => <WebBasicView {...params} />,
  },
  {
    path: '/desktop-app',
    renderer: (params = {}) => <DesktopAppView {...params} />,
  },
  {
    path: '/expo',
    renderer: (params = {}) => <ExpoView {...params} />,
  },
  {
    path: '/agency',
    renderer: (params = {}) => <AgencyView {...params} />,
  },
  {
    path: '/startup',
    renderer: (params = {}) => <StartupView {...params} />,
  },
  {
    path: '/design-company',
    renderer: (params = {}) => <DesignCompanyView {...params} />,
  },
  {
    path: '/mobile-app',
    renderer: (params = {}) => <MobileAppView {...params} />,
  },
  {
    path: '/job-listing',
    renderer: (params = {}) => <JobListingView {...params} />,
  },
  {
    path: '/rental',
    renderer: (params = {}) => <RentalView {...params} />,
  },
  {
    path: '/cloud-hosting',
    renderer: (params = {}) => <CloudHostingView {...params} />,
  },
  {
    path: '/logistics',
    renderer: (params = {}) => <LogisticsView {...params} />,
  },
  {
    path: '/e-commerce',
    renderer: (params = {}) => <EcommerceView {...params} />,
  },
  {
    path: '/help-center',
    renderer: (params = {}) => <HelpCenterView {...params} />,
  },
  {
    path: '/help-center-article',
    renderer: (params = {}) => <HelpCenterArticleView {...params} />,
  },
  {
    path: '/portfolio-page',
    renderer: (params = {}) => <PortfolioPageView {...params} />,
  },
  {
    path: '/portfolio-masonry',
    renderer: (params = {}) => <PortfolioMasonryView {...params} />,
  },
  {
    path: '/portfolio-grid',
    renderer: (params = {}) => <PortfolioGridView {...params} />,
  },
  {
    path: '/company-terms',
    renderer: (params = {}) => <CompanyTermsView {...params} />,
  },
  {
    path: '/contact-sidebar-map',
    renderer: (params = {}) => <ContactPageSidebarMapView {...params} />,
  },
  {
    path: '/contact-page-cover',
    renderer: (params = {}) => <ContactPageCoverView {...params} />,
  },
  {
    path: '/about',
    renderer: (params = {}) => <AboutView {...params} />,
  },
  {
    path: '/about-side-cover',
    renderer: (params = {}) => <AboutSideCoverView {...params} />,
  },
  {
    path: '/pricing',
    renderer: (params = {}) => <PricingView {...params} />,
  },
  {
    path: '/blog-search',
    renderer: (params = {}) => <BlogSearchView {...params} />,
  },
  {
    path: '/blog-newsroom',
    renderer: (params = {}) => <BlogNewsroomView {...params} />,
  },
  {
    path: '/blog-article',
    renderer: (params = {}) => <BlogArticleView {...params} />,
  },
  {
    path: '/blog-reach-view',
    renderer: (params = {}) => <BlogReachViewView {...params} />,
  },
  {
    path: '/password-reset-cover',
    renderer: (params = {}) => <PasswordResetCoverView {...params} />,
  },
  {
    path: '/password-reset-simple',
    renderer: (params = {}) => <PasswordResetSimpleView {...params} />,
  },
  {
    path: '/signin-simple',
    renderer: (params = {}) => <SigninSimpleView {...params} />,
  },
  {
    path: '/signin-cover',
    renderer: (params = {}) => <SigninCoverView {...params} />,
  },
  {
    path: '/signup-simple',
    renderer: (params = {}) => <SignupSimpleView {...params} />,
  },
  {
    path: '/signup-cover',
    renderer: (params = {}) => <SignupCoverView {...params} />,
  },
  {
    path: '/account-billing',
    renderer: (params = {}) => <AccountBillingView {...params} />,
  },
  {
    path: '/account-general',
    renderer: (params = {}) => <AccountGeneralView {...params} />,
  },
  {
    path: '/account-notifications',
    renderer: (params = {}) => <AccountNotificationsView {...params} />,
  },
  {
    path: '/account-security',
    renderer: (params = {}) => <AccountSecurityView {...params} />,
  },
  {
    path: '/not-found',
    renderer: (params = {}) => <NotFoundView {...params} />,
  },
  {
    path: '/not-found-cover',
    renderer: (params = {}) => <NotFoundCoverView {...params} />,
  },
];

export default routes;
