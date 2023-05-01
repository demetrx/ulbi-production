export type BuildMode = 'development' | 'production';

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string
  locales: string;
  buildLocales: string;
}

export interface BuildEnv {
  mode: BuildMode,
  port: number
  analyze: boolean | undefined
  apiURL: string
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number
  analyze: boolean
  apiURL: string
  project: 'frontend' | 'storybook' | 'jest'
}
