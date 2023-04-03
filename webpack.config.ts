import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode = env.mode || 'development';
  const PORT = env.port || 3000;
  const analyze = !!env.analyze;
  const apiURL = env.apiURL || 'http://localhost:8000';

  const isDev = mode === 'development';
  const project = 'frontend';

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    analyze,
    port: PORT,
    apiURL,
    project,
  });

  return config;
};
