import webpack from 'webpack'
import { buildDevServer } from './buildDevServer'
import { builderLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { BuildOptions } from './types/types'

export function buildWebpack(options: BuildOptions): webpack.Configuration {
	const { mode, paths } = options
	const isDev = mode === 'development'

	return {
		mode: mode ?? 'development',
		entry: paths.entry,
		output: {
			path: paths.output,
			filename: '[name].[contenthash].js',
			clean: true,
		},
		devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
		plugins: buildPlugins(options),
		module: {
			rules: builderLoaders(options),
		},
		resolve: buildResolvers(options),
		devServer: isDev ? buildDevServer(options) : undefined,
	}
}
