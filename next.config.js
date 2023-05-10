/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.AWS_S3_DOMAIN,
        port: '',
        pathname: '**',
      },
    ],
  },
}

export default nextConfig
