// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/prismic"],

  prismic: {
    endpoint: "prismicnuxt3",
      clientConfig: {
      routes: [
        // Resolves the Homepage document to "/"
        {
          type: "blog",
          path: "/blog",
        },
        {
          type: "blog",
          path: "/blog/[uid]",
        },
      ],
    },
  }
})