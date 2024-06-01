/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'greenviet.org',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
