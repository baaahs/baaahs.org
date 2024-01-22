import React from 'react';

// Building blocks Blog components
import {
  IndexView as BlogIndexView,
  BlogWithLargeImage as BlogWithLargeImageView,
  VerticallyAlignedBlogCardOverlappedWithDescriptionBox as VerticallyAlignedBlogCardOverlappedWithDescriptionBoxView,
  SimpleVerticalBlogCards as SimpleVerticalBlogCardsView,
  HorizontallyAlignedBlogCardWithShapedImage as HorizontallyAlignedBlogCardWithShapedImageView,
  VerticallyAlignedBlogCardsWithShapedImage as VerticallyAlignedBlogCardsWithShapedImageView,
  BlogCardsWithFullBackgroundImage as BlogCardsWithFullBackgroundImageView,
  VerticalMinimalDesignedBlogCards as VerticalMinimalDesignedBlogCardsView,
} from 'blocks/blog';

const routes = [
  {
    path: '/blocks/blog',
    renderer: (params = {}) => <BlogIndexView {...params} />,
  },
  {
    path: '/blocks/blog/blog-with-large-image',
    renderer: (params = {}) => <BlogWithLargeImageView {...params} />,
  },
  {
    path:
      '/blocks/blog/vertically-aligned-blog-card-overlapped-with-description-box',
    renderer: (params = {}) => (
      <VerticallyAlignedBlogCardOverlappedWithDescriptionBoxView {...params} />
    ),
  },
  {
    path: '/blocks/blog/simple-vertical-blog-cards',
    renderer: (params = {}) => <SimpleVerticalBlogCardsView {...params} />,
  },
  {
    path: '/blocks/blog/horizontally-aligned-blog-card-with-shaped-image',
    renderer: (params = {}) => (
      <HorizontallyAlignedBlogCardWithShapedImageView {...params} />
    ),
  },
  {
    path: '/blocks/blog/vertically-aligned-blog-cards-with-shaped-image',
    renderer: (params = {}) => (
      <VerticallyAlignedBlogCardsWithShapedImageView {...params} />
    ),
  },
  {
    path: '/blocks/blog/blog-cards-with-full-background-image',
    renderer: (params = {}) => (
      <BlogCardsWithFullBackgroundImageView {...params} />
    ),
  },
  {
    path: '/blocks/blog/vertical-minimal-designed-blog-cards',
    renderer: (params = {}) => (
      <VerticalMinimalDesignedBlogCardsView {...params} />
    ),
  },
];

export default routes;
