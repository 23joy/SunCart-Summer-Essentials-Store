/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler:false,
  images: {
    remotePatterns: [
      {

        protocol: 'https',
        hostname: 'i.ibb.co',

        pathname: '/**',
      }
    ]
  }
};

export default nextConfig;
