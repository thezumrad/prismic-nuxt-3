// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
     "@nuxtjs/i18n",
    "@nuxtjs/prismic"
  ],
  i18n: {
    strategy: "prefix_except_default",
    locales: [{
        code: "en",
        iso: "en-US",
        name: "English"
      },
      {
        code: "it",
        iso: "it-IT",
        name: "Italiano"
      },
      {
        code: "az",
        iso: "az-AZ",
        name: "Azərbaycanca"
      },
    ],
    defaultLocale: "en",
    // detectBrowserLanguage: false,
    vueI18n: './i18n.config.ts'
  },
  prismic: {
    endpoint: "prismicnuxt3",
    clientConfig: {
      routes: [
        // Resolves the Homepage document to "/"
        {
          type: "homepage",
          path: "/:lang",
        },
        {
          type: "blog",
          path: "/:lang/blog",
        },
        {
          type: "blog",
          path: "/:lang/blog/[uid]",
        },
      ],
    },
  }
})