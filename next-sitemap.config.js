const config = {
  siteUrl: 'https://moyagi.vercel.app',
  generateRobotsTxt: true,
  exclude: ['/404', '/profile/*', '/search', '/users/*'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://moyagi.vercel.app/sitemap/channel-sitemap.xml',
    ],
  },
}

export default config
