/** @type {import('next').NextConfig} */
const withImages = require('next-images')
module.exports = withImages()
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/lor/cards',
        destination: '/lor/cards/1',
        permanent: true,
      },
    ]
  },
}

