import webpack  from "webpack"

export function buildLoaders(): webpack.RuleSetRule[] {

    const typescriptLoader = {
                test: /\.tsx?$/,//Отображаются файлы, которые нужно пропустить через лоадер
                use: 'ts-loader',
                exclude: /node_modules/,
                }

    return [
            typescriptLoader 
            ]
}