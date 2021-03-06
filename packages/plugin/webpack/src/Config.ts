import { Configuration as WebpackConfiguration } from 'webpack';

export interface WebpackPluginEntryPoint {
  /**
   * Relative or absolute path to the HTML template file for this entry point
   *
   * If this is a window, you MUST provide this.  Only leave it unset for things
   * like WebWorker scripts.
   */
  html?: string;
  /**
   * Relative or absolute path to the main JS file for this entry point
   */
  js: string;
  /**
   * Human friendly name of your entry point
   */
  name: string;
  /**
   * Additional entries to put in the array of entries for this entry point,
   * useful if you need to set up things like error reporting as separate
   * entry files into your application.
   */
  prefixedEntries?: string[];
  /**
   * Additional chunks to include in the outputted HTML file, use this if you
   * set up some custom chunking.  E.g. CommonChunksPlugin
   */
  additionalChunks?: string[];
  /**
   * Information about the preload script for this entry point, if you don't use
   * preload scripts you don't need to set this.
   */
  preload?: WebpackPreloadEntryPoint;
}

export interface WebpackPreloadEntryPoint {
  /**
   * Relative or absolute path to the preload JS file
   */
  js: string;
  /**
   * Additional entries to put in the array of entries for this preload script,
   * useful if you need to set up things like error reporting as separate
   * entry files into your application.
   */
  prefixedEntries?: string[];
}

export interface WebpackPluginRendererConfig {
  /**
   * The webpack config for your renderer process
   */
  config: WebpackConfiguration | string;
  /**
   * Array of entry points, these should map to the windows your app needs to
   * open.  Each window requires it's own entry point
   */
  entryPoints: WebpackPluginEntryPoint[];
}

export interface WebpackPluginConfig {
  /**
   * The webpack config for your main process
   */
  mainConfig: WebpackConfiguration | string;
  /**
   * Electron Forge webpack configuration for your renderer process
   */
  renderer: WebpackPluginRendererConfig;
  /**
   * The TCP port for the dev servers. Defaults to 3000.
   */
  port?: number;
}
