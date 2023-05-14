import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    buildLocales: '',
    locales: '',
  };

  config.resolve!.modules!.unshift(paths.src);
  config.resolve!.extensions!.push('.ts', '.tsx');

  const rules = config.module!.rules as RuleSetRule[];
  // eslint-disable-next-line no-param-reassign
  config.module!.rules = rules.map((rule) => (
    /svg/.test(rule.test as string)
      ? { ...rule, exclude: /\.svg$/i }
      : rule
  ));

  config.module!.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  config.module!.rules.push(buildCssLoader(true));

  config.plugins!.push(new DefinePlugin({
    __IS_DEV__: true,
    __API_URL__: JSON.stringify('https://test-api.com'),
    __PROJECT__: JSON.stringify('storybook'),
  }));

  // eslint-disable-next-line no-param-reassign
  config.resolve!.alias = {
    ...config.resolve!.alias,
    '@': paths.src,
  };

  return config;
};
