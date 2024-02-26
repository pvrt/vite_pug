export default {
  multipass: true,
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
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: '(fill|stroke)'
      }
    },
    "removeDimensions"
  ]
};