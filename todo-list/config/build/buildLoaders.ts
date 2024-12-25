import { ModuleOptions } from 'webpack'
import { BuildOptions } from './types/types'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshTypeScript from 'react-refresh-typescript'
import {buildBabelLoader} from "./babel/buildBabelLoader";

export function builderLoaders(options: BuildOptions): ModuleOptions['rules'] {
	const isDev = options.mode === 'development'

	const assetsLoader = {
		test: /\.(png|jpg|jpeg|gif)$/i,
		type: 'asset/resource',
	}

	const svgrLoader = {
		test: /\.svg$/i,
		use: [
			{
				loader: '@svgr/webpack',
				options: {
					icon: true,
					svgoConfig: {
						plugins: [
							{
								name: 'convertColors',
								params: {
									currentColor: true,
								},
							},
						],
					},
				},
			},
		],
	}

	/** Создает определенное название scss файла в браузере **/
	const cssLoaderWithModules = {
		loader: 'css-loader',
		options: {
			modules: {
				localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
			},
		},
	}

	const scssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			cssLoaderWithModules,
			'sass-loader',
		],
	}

	const tsLoader = {
		test: /\.tsx?$/,
		use: [
			{
				loader: 'ts-loader',
				options: {
					transpileOnly: true,
					getCustomTransformers: () => ({
						before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
					}),
				}
			}
		],
		exclude: /node_modules/,
	}

	const babelLoader =  buildBabelLoader(options)

	return [
		assetsLoader,
		scssLoader,
		// tsLoader,
		svgrLoader,
		babelLoader
	]
}
