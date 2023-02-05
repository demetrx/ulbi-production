import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
  // order in final array matters

  // if vanilla js (not ts), we need babel-loader to process jsx
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader, // Styles in 1) js bundle 2) separate css files
      {
        loader: "css-loader", // Translates CSS into CommonJS
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
          },
        }
      },
      "sass-loader", // Compiles Sass to CSS
    ],
  }

  return [
    typescriptLoader,
    cssLoader,
  ]
}