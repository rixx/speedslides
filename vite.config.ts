import { defineConfig } from 'vite'

export default defineConfig({
  slidev: {
    vue: {
        reactivityTransform: true,
    },
    // markdown: {
    //   /* markdown-it options */
    //   markdownItSetup(md) {
    //     /* custom markdown-it plugins */
    //     md.use(/* ... */)
    //   },
    // },
    /* options for other plugins */
  },
})

