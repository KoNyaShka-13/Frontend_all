import webpack  from "webpack"

export function buildLoaders(): webpack.RuleSetRule[] {
//babel-loader не нужен, так как мы пишем на ts

const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [//Они должны идти в строгом порядке
            // Creates `style` nodes from js strings
            'style-loader',
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