module.exports = {
  siteMetadata: {
      title: `PYJ // Data Analyst`,
      name: `| Created by park yong jun | Reference : Novela theme & MH git`,
      siteUrl: `https://novela.narative.co`,
      description: `Data Analys`,
      hero: {
          heading: `Park yong jun's Portfolio`,
          subHeading: `Data Analyst & Hydrological survey Researcher`,
          maxWidth: 1000
      },
      social: [
          {
              name: `instagram`,
              url: `https://www.instagram.com/yoojun3651`
          },
          {
              name: `github`,
              url: `https://github.com/yoojun003`
          }
      ]
  },
  plugins: [
      {
          resolve: "@narative/gatsby-theme-novela",
          options: {
              contentPosts: "content/posts",
              contentAuthors: "content/authors",
              basePath: "/",
              authorsPage: false,
              sources: {
                  local: true
                  // contentful: true,
              }
          }
      },
      {
          resolve: `gatsby-plugin-manifest`,
          options: {
              name: `PYJ // Data Analylst`,
              short_name: `PYJ`,
              start_url: `/`,
              background_color: `#fff`,
              theme_color: `#fff`,
              display: `standalone`,
              icon: `src/assets/favicon.png`
          }
      },
      {
          resolve: `gatsby-plugin-netlify-cms`,
          options: {}
      }
  ]
};