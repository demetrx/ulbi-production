import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions{
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    // absolute imports from following folders
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {}
  }
}