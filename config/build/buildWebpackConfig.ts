//Переносим всю конфигурацию, что делали в корне проекта
import {BuildOptions} from "./types/config";
import webpack from "webpack";
import path from "path";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options;//деструктуризация

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        //Это настройки, если режим разработки(dev), то параметры будут использоваться, в противном случае - нет
        devtool: isDev ? 'inline-source-map' : undefined,//чтобы легче было отслеживать ошибки
        devServer: isDev ? buildDevServer(options) : undefined,//При продакшене не будут соурс мепы и тп
    }
}