export default defineI18nConfig(nuxt => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      homeTitle: 'Home',
      homeBtn: 'Go to Home',
      aboutTitle: 'About',
      aboutBtn: 'Go to About'
    },
    it: {
      homeTitle: 'Home',
      homeBtn: 'Vai alla Home',
      aboutTitle: 'Chi siamo',
      aboutBtn: 'Vai a Chi siamo'
    },
    az: {
      homeTitle: 'Əsas səhifə',
      homeBtn: 'Əsas səhifəyə get',
      aboutTitle: 'Haqqımızda',
      aboutBtn: 'Haqqımızda'
    }
  }
}))