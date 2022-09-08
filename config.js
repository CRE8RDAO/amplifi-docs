console.log(process.env) // remove this after you've confirmed it working

const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://docs.amplifi.gg',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://docs.amplifi.gg/static/media/AmpliFi.e9119d62.svg',
    logoLink: 'https://docs.amplifi.gg',
    title: 'Docs',
    githubUrl: 'https://github.com/CRE8RDAO/sybil-interface',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/cre8rdao" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://discord.gg/96NZeu4hRA" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],

    search: (() => {
      console.log({
        enabled: true,
        indexName: 'MY_INDEX_NAME',
        algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
        algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
        algoliaAdminKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
      })
      return {
        enabled: true,
        indexName: 'MY_INDEX_NAME',
        algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
        algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
        algoliaAdminKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
      }
    })(),
  },
  sidebar: {
    forcedNavOrder: ['/introduction', '/forclients', '/dev', '/foraffiliates'],
    collapsedNav: ['/introduction', '/forclients', '/dev', '/foraffiliates'],
    links: [{ text: 'AmpliFi', link: 'https://cre8r.vip' }],
    frontLine: false,
    ignoreIndex: true,
    title: '',
  },
  siteMetadata: {
    title: 'AmpliFi Docs | Incentivised KPI based DeFi Referral System',
    description: 'Incentivised KPI based DeFi Referral System ',
    ogImage: null,
    docsLocation: 'https://github.com/CRE8RDAO/amplifi-docs/tree/master/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'AmpliFi Docs',
      short_name: 'AmpliFi Docs',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
}

module.exports = config
