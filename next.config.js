
/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
module.exports = {
  webpack: (config, { isServer }) => {
    config.watchOptions = {
      poll: 1000, // Verifica mudanças a cada 1000ms
      aggregateTimeout: 300, // Espera 300ms antes de refazer build
    };
    return config;
  },
  images: {
    // domains: ['example.com', 'another-domain.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'softstar.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'another-example.com',
      },
    ],
  },
 
  reactStrictMode: true,
};



