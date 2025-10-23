import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'i.ibb.co', // El dominio de donde viene la imagen
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
