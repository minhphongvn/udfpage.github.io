// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxtjs/i18n"],
  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: [
      {
        code: "vi",
        language: "vi-VN",
      },
      {
        code: "en",
        language: "en-US",
      },
    ],
    defaultLocale: "vi",
    strategy: "prefix_except_default",
  },
  nitro: {
    preset: "github_pages",
  },
});
