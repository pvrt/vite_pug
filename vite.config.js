import path from 'path';
import fs from 'fs';

// https://vituum.dev/guide/
import vituum from 'vituum'

// https://github.com/vituum/vite-plugin-pug
import pug from '@vituum/vite-plugin-pug'

// https://github.com/vnphanquang/vite-plugin-beautify/
import beautify from 'vite-plugin-beautify';

// https://github.com/vituum/vite-plugin-postcss
import postcss from '@vituum/vite-plugin-postcss'

// https://github.com/FatehAK/vite-plugin-image-optimizer
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://github.com/atlowChemi/vite-svg-2-webfont
import viteSvgToWebfont from 'vite-svg-2-webfont';


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

    postcss(),

    pug({
      root: './src'
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
      test: /\.(jpe?g|png|webp|svg)$/i,
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
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false
              },
            },
          }
        ]
      }
    }),

    viteSvgToWebfont({
      context: path.resolve(__dirname, 'src', 'assets', 'icons'),
      inline: true,
      fontName: 'icons',
    }),

    {
      closeBundle: async () => {
        await fs.readdir('./dist/js/', (err, files) => {
          if (err) {
            console.log(err);
          }
          files.forEach(file => {
            const fileDir = path.join('./dist/js/', file);
            if (file !== 'main.js') {
              fs.unlinkSync(fileDir);
            }
          });
        });
      }
    }
  ],


  build: {
    assetsInlineLimit: 0,
    cssMinify: false,
    rollupOptions: {
      output: {
        entryFileNames: `js/[name].js`,
        manualChunks: () => '',
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
      },
    }
  },
  server: {
    port: 3000
  }
}
