import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config, { isServer, webpack }) => {
    if (process.env.TURBOPACK) {
      return config;
    }

    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      };
    }
    return config;
  },
  turbopack: {
    resolveAlias: {},
  },
};

export default nextConfig;
