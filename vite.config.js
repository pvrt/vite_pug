// https://vituum.dev/guide/
import vituum from 'vituum'

// https://github.com/vituum/vite-plugin-posthtml
import posthtml from '@vituum/vite-plugin-posthtml'

// https://github.com/vnphanquang/vite-plugin-beautify/
import beautify from 'vite-plugin-beautify';

// https://github.com/FatehAK/vite-plugin-image-optimizer
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://htmlnano.netlify.app/
import htmlnano from 'htmlnano'

// https://github.com/jonathantneal/posthtml-lorem
import posthtmlLorem from 'posthtml-lorem'



export default {
  plugins: [
    vituum({
      imports: {
        filenamePattern: {
          '+.css': [],
          '+.scss': 'src/styles'
        }
      }
    }),

    posthtml({
      root: './src',
      plugins: [
        htmlnano({
          minifySvg: {
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: {
                    convertColors: {
                      currentColor: true,
                    },
                    removeViewBox: false,
                    removeUselessStrokeAndFill: true,
                  },
                },
              }
            ]
          },
          minifyCss: false,
          minifyJs: false,
          collapseWhitespace: 'all',
          deduplicateAttributeValues: true,
          collapseBooleanAttributes: true
        }),
        posthtmlLorem(),
      ]
    }),

    beautify({
      inDir: 'dist',
      html: {
        enabled: true,
        options: {
          indent_size: 2,
          indent_inner_html: true,
          indent_empty_lines: true,
          extra_liners: [
            'head',
            'title',
            'body',
            '/html',
          ],
          inline: [],
        }
      },
      js: {
        enabled: false,
      },
      css: {
        options: {
          indent_size: 2,
        },
      },
    }),

    ViteImageOptimizer({
      test: /\.(jpe?g|png|webp)$/i,
      logStats: true,
      ansiColors: true,
      png: {
        quality: 100,
      },
      jpeg: {
        quality: 100,
      },
      jpg: {
        quality: 100,
      },
      webp: {
        lossless: true,
      },
    }),


  ],
  build: {
    cssMinify: false,
    rollupOptions: {
      output: {
        entryFileNames: `js/[name].js`,
        chunkFileNames: `js/[name].js`,
        assetFileNames: (assetInfo) => {
          var info = assetInfo.name.split(".");
          var extType = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "images";
          } else if (/woff|woff2|otf|ttf/.test(extType)) {
            extType = "fonts";
          } else if (/css/.test(extType)) {
            extType = "css";
          }
          return `${extType}/[name].[ext]`;
        },
      }
    }
  },
  server: {
    port: 3000
  }
}
