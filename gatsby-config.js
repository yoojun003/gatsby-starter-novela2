module.exports = {
  siteMetadata: {
      title: `Park yong jun // Data Analylst`,
      name: `| Made with ❤ by Markus Haack | Built with: Gatsby.js & Novela theme`,
      siteUrl: `https://novela.narative.co`,
      description: `Software Engineer working at Adobe and proud dad of a wonderful daughter.`,
      hero: {
          heading: `Park yong jun's Portfolio`,
          subHeading: `Data Analysts & Researcher`,
          maxWidth: 652
      },
      social: [
          {
              name: `instagram`,
              url: `https://www.instagram.com/yoojun3651`
          },
          {
              name: `github`,
              url: `https://github.com/yoojun003`
          },
          {
              name: `linkedin`,
              url: `www.linkedin.com/in/yoojun3651`
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
              name: `Park yong jun // Data Analylst`,
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