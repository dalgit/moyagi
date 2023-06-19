import { DefaultSeoProps } from 'next-seo'
import { baseUrl } from 'constants/baseUrl'

const SEO: DefaultSeoProps = {
  titleTemplate: '%s | Moyagi',
  description: '서로의 이야기를 공유해보세요.',
  defaultTitle: 'Moyagi',
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/docs/favicon.ico',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: baseUrl,
    site_name: 'Moyagi',
    title: 'Moyagi',
    images: [{ url: '/docs/logo_og.png' }],
  },
}

export default SEO
