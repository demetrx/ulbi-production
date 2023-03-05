import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev: boolean) {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // Styles in 1) js bundle 2) separate css files
      {
        loader: 'css-loader', // Translates CSS into CommonJS
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
            exportLocalsConvention: 'camelCase',
          },
        },
      },
      'sass-loader', // Compiles Sass to CSS
    ],
  };
}
