// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "@vueuse/nuxt",
    "@unocss/nuxt",
  ],
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
  },
  compatibilityDate: "2024-09-05",
  ssr: false,
  runtimeConfig: {
    public: {
      appwriteProjectId: process.env.APPWRITE_PROYECT_ID,
      appwriteEndpointUrl: process.env.APPWRITE_ENDPOINT_URL,
      appwriteDatabaseId: process.env.APPWRITE_DATABASE_ID,
    },
  },
});
