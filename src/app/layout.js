'use client'; // This is a client component 👈🏽

/* eslint-disable react/display-name */
import local from 'next/font/local'
// import Document, { Html, Head, Main, NextScript } from 'next/document';
// import createCache from '@emotion/cache';
// import createEmotionServer from '@emotion/server/create-instance';

import Page from '../components/Page';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

const smoothCirculars = local({
  src: [
    {
      path: '/fonts/Smooth-Circulars.otf',
    },
  ],
  variable: '--font-smooth-circulars',
});

/* eslint-disable react/prop-types */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="BAAAHS is the Big-Ass Amazingly Awesome Homosexual Sheep, and you can put him together!"
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content=""
        />
        <meta
          property="og:title"
          content="Big-Ass Amazingly Awesome Homoesexual Sheep"
        />
        <meta
          property="og:description"
          content="BAAAHS is the Big-Ass Amazingly Awesome Homosexual Sheep, and you can put him together!"
        />
        <meta
          property="og:url"
          content="https://baaahs.org"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
        {/* <link href="/fonts/fonts.css" rel="stylesheet" /> */}
      </head>
      <body className={smoothCirculars.variable}>
        <Page>
          {children}
        </Page>
      </body>
    </html>
  );
}
  