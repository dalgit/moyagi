/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
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

    domains: ['k.kakaocdn.net'],
  },
}

export default nextConfig
