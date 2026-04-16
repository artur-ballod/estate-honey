// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-04-01",

  runtimeConfig: {
		public: {
      yandexMapsApiKey: '',
    },
	},

  srcDir: "app/",

  devtools: {
    enabled: true,
  },

  devServer: {
    host: "127.0.0.1",
    port: 3000,
  },

  css: ["~/assets/styles/main.scss"],

  modules: ["@nuxt/image", "nuxt-svgo", "@vueuse/nuxt"],

  app: {
    baseURL: '/estate-honey/',
    head: {
      htmlAttrs: {
        lang: "ru",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
      ignore: ['/404-test', '/some-broken-page'],
      failOnError: false,
    },
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  image: {
    quality: 80,
    format: ['webp'],
    screens: {
      xl: 1440,
    },
  },

  svgo: {
    autoImportPath: "./app/assets/icons/",
    defaultImport: "component",
    svgoConfig: {
      plugins: [
        {
          name: "preset-default",
          params: {
            overrides: {
              removeViewBox: false,
            },
          },
        },
        {
          name: "convertColors",
          params: {
            currentColor: true,
          },
        },
      ],
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/styles/abstracts/_variables.scss" as *;
            @use "~/assets/styles/abstracts/_mixins.scss" as *;
            @use "~/assets/styles/abstracts/_functions.scss" as *;
            @use "~/assets/styles/abstracts/_media.scss" as *;
          `,
        },
      },
    },

    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    },
  },
});