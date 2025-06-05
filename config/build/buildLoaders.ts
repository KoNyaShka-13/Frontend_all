import MiniCssExtractPlugin from "mini-css-extract-plugin"
import webpack  from "webpack"
import { BuildOptions } from "./types/config"

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
//babel-loader не нужен, так как мы пишем на ts
//Лоадеры нужно ставить в определенном порядке
const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [//Они должны идти в строгом порядке
            // Creates `style` nodes from js strings
            //'style-loader',
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,//Чтобы css перешел отдельно в папку в билде и проверка на режим разработки
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
        ]
    }

    const typescriptLoader = {
                test: /\.tsx?$/,//Отображаются файлы, которые нужно пропустить через лоадер
                use: 'ts-loader',
                exclude: /node_modules/,
                }

    return [
            typescriptLoader,
            cssLoader 
            ]
}