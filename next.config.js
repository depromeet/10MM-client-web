9;
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['page.tsx', 'page.ts', 'api.tsx', 'api.ts'],
  experimental: {
    appDir: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kr.object.ncloudstorage.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'image.10mm.today',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'image.10mm.site',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
