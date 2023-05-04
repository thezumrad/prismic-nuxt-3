export default defineI18nConfig(nuxt => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      home_title: "Home",
      home_btn: "Go to Home",
      about_title: "About",
      about_btn: "Go to About"
    },
    it: {
      home_title: "Home",
      home_btn: "Vai alla Home",
      about_title: "Chi siamo",
      about_btn: "Vai a Chi siamo"
    },
    az: {
      home_title: "Əsas səhifə",
      home_btn: "Əsas səhifəyə get",
      about_title: "Haqqımızda",
      about_btn: "Haqqımızda"
    }
  }
}))