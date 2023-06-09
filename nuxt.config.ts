// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // "@nuxtjs/i18n",
    "@nuxtjs/prismic"
  ],
  // i18n: {
  //   strategy: 'prefix_except_default',
  //   defaultLocale: 'en',
  //   locales: [{
  //       code: "en",
  //       iso: "en-US",
  //       name: "English"
  //     },
  //     {
  //       code: "it",
  //       iso: "it-IT",
  //       name: "Italiano"
  //     },
  //     {
  //       code: "az",
  //       iso: "az-AZ",
  //       name: "Azərbaycanca"
  //     },
  //   ],
  //   // detectBrowserLanguage: false,
  //   vueI18n: './i18n.config.ts' // if you are using custom path, default 
  // },
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
        {
          type: "blog",
          path: "/:lang/news",
        },
        {
          type: "blog",
          path: "/:lang/news/[uid]",
        },
      ],
    },
  }
})