import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack, { Configuration } from 'webpack'
import { BuildOptions } from './types/types'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import path from 'path'
import CopyPlugin from 'copy-webpack-plugin'

export function buildPlugins({
  mode,
  paths,
  analyzer,
  platform,
}: BuildOptions): Configuration['plugins'] {
  const isDev = mode === 'development'
  const isProd = mode === 'production'

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: path.resolve(paths.public, 'favicon.ico'),
    }),
    new webpack.DefinePlugin({
      __PLATFORM__: JSON.stringify(platform),
      __ENV__: JSON.stringify(mode),
    }),
    new webpack.EnvironmentPlugin({
      REACT_APP_FIREBASE_API_KEY: 'ERROR_ENV_FIREBASE_API_KEY',
      REACT_APP_FIREBASE_AUTH_DOMAIN: 'ERROR_ENV_FIREBASE_AUTH_DOMAIN',
      REACT_APP_FIREBASE_PROJECT_ID: 'ERROR_ENV_FIREBASE_PROJECT_ID',
      REACT_APP_FIREBASE_STORAGE_BUCKET: 'ERROR_ENV_FIREBASE_STORAGE_BUCKET',
      REACT_APP_FIREBASE_MESSAGING_SENDER_ID:
        'ERROR_ENV_FIREBASE_MESSAGING_SENDER_ID',
      REACT_APP_FIREBASE_APP_ID: 'ERROR_ENV_FIREBASE_APP_ID',
    }),
  ]

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin())
    /** Выносит проверку типов в отдельный процесс **/
    plugins.push(new ForkTsCheckerWebpackPlugin())
    plugins.push(new ReactRefreshWebpackPlugin())
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      })
    )
    plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(paths.public, 'locales'),
            to: path.resolve(paths.output, 'locales'),
          },
        ],
      })
    )
  }

  if (analyzer) {
    plugins.push(new BundleAnalyzerPlugin())
  }

  return plugins
}
