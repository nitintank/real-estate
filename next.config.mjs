// /** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a.khelogame.xyz',
        port: '',
        pathname: '/property/**',
      },
    ],
  },
};

export default nextConfig;