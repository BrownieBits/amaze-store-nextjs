/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dslv9ilpbe7p1.cloudfront.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'premium-storefronts.s3.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
