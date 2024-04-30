const nextConfig = {
  async redirects() {
    return [
      {
        source: '/drive',
        destination: 'https://drive.google.com/drive/folders/0B_TasILTM6TWa18zdHdmNHpUYzg',
        permanent: false,
      },
      {
        source: '/pspride', 
        destination: '/psp/',
        permanent: false,
      },
      {
        source: '/join', 
        destination: 'https://goo.gl/forms/XUvltyxql2',
        permanent: false,
      },
      {
        source: '/geometry', 
        destination: 'https://baaahs.github.io/geometry/html/viewer.html?#map',
        permanent: false,
      },
      {
        source: '/model', 
        destination: 'https://baaahs.github.io/geometry/html/viewer.html?#map',
        permanent: false,
      },
      {
        source: '/cal', 
        destination: 'https://calendar.google.com/calendar?cid=ODlydDZ0MWs1am1oMm9odnZicXBvbTZyMW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ',
        permanent: false,
      },
      {
        source: '/cal-private', 
        destination: 'https://calendar.google.com/calendar/embed?src=eo8lcds32ki40o14dr6m5t0o5s%40group.calendar.google.com&ctz=America%2FLos_Angeles',
        permanent: false,
      },
      {
        source: '/slack', 
        destination: 'https://baaahs.slack.com',
        permanent: false,
      },
      {
        source: '/slack-invite', 
        destination: 'https://join.slack.com/t/baaahs/shared_invite/enQtODg3MTE3NTk1ODA4LTRhMDEyZTY1MmI4YjIzN2JlYmUxMWQyNGMyYjA4MDhkMmMwMTU3YWFjOTVjNGZhZGY3YTc4MTNlZDE1NzFmMmY',
        permanent: false,
      },
      {
        source: '/2020', 
        destination: 'https://drive.google.com/drive/folders/1-5VGf1gZXyzGN1lYNVF1KwGBrJ6n9t4L',
        permanent: false,
      },
      {
        source: '/2020-form', 
        destination: 'https://docs.google.com/forms/d/e/1FAIpQLSfuh4BvWp1q4eQ_W_sVCDsKmlOPPB1N5RekJHLTjCsR5qdeFQ/viewform',
        permanent: false,
      },
      {
        source: '/2020-doc', 
        destination: 'https://docs.google.com/document/d/10Do2qdITwrQxGOeMGd7pe1jrIxQejF-W5jHK2wbagfE',
        permanent: false,
      },
      {
        source: '/2020-sheet',
        destination: 'https://docs.google.com/spreadsheets/d/11FeKLaktPhMq_Oh_mG8TBK3U9_eY2oHBGxE0T3GzLhU',
        permanent: false,
      },
      // 2022
      {
        source: '/crew', 
        destination: 'https://docs.google.com/document/d/11mQX1lZpP0rMNNV1Uni_J0hutXaMEhsjvKtermUuY6Q',
        permanent: false,
      },
      // 2023
      // ['/apply',     'https://bit.ly/baaahs-2023-application'],
      // ['/campout',   'https://baaahs.ticketspice.com/baaahs-campout'],
      {
        source: '/dj', 
        destination: 'https://docs.google.com/forms/d/e/1FAIpQLSeaDIVG7c5uKHetUvo1IX4R6PrTg1agjyGdEMnxYOvTBCF_YQ/viewform?usp=sf_link',
        permanent: false,
      },
      // 2024
      {
        source: '/apply', 
        destination: 'https://bit.ly/baaahs-2024-application',
        permanent: false,
      },
      {
        source: '/campout/register', 
        destination: 'https://buytickets.at/baaahs24/1128001',
        permanent: false,
      },
      {
        source: '/campout/perform', 
        destination: 'https://docs.google.com/forms/d/e/1FAIpQLSdl2F0KIvLfD-qslgVMHLVmO4cckyoSjhE9LCieSymyegokyw/viewform?vc=0&c=0&w=1&flr=0',
        permanent: false,
      },
    ];
  },
};
 
module.exports = nextConfig;
