import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import {BuildOptions} from "./types/config";

//export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
            new HTMLWebpackPlugin({
                //Будем использовать файл из паблика, как шаблон, чтобы в него все скрипты вслаивались
                //template: path.resolve(__dirname, 'public', 'index.html')//div.root сейчас не отображается при загрузке, так как создается с нуля, эта строка загружает его
                template: paths.html,
            }),
            new webpack.ProgressPlugin(),//Отображает прогресс
        ]
 }