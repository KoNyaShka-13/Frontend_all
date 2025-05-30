import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from "html-webpack-plugin";//импортируем, как в ts
//const path = require('path');//Это импорт js
//const HTMLWebpackPlugin = require('html-webpack-plugin');//Так как пока что пишем в среде NODE-JS, то используем require
//const webpack = require('webpack');

const config: webpack.Configuration = {//Указываем тип, чтобы пользоваться прелестями автокомплита
    mode: "development",//Пока что этап разработки
    entry: path.resolve(__dirname, 'src', 'index.ts'),//Связываем пути, лучше так, чем писать полные пути
    output: {
        //Определенный шаблон для динамических названий
        filename: "[name].[contenthash].js",//contenthash нужен для создания новой версии сайта после изменений, обновления сразу будут добавляться
        path: path.resolve(__dirname, 'build'),
        clean: true,//Удаляем старые версии сайта
    },
        plugins: [
            new HTMLWebpackPlugin({
                //Будем использовать файл из паблика, как шаблон, чтобы в него все скрипты вслаивались
                template: path.resolve(__dirname, 'public', 'index.html')//div.root сейчас не отображается при загрузке, так как создается с нуля, эта строка загружает его
            }),
            new webpack.ProgressPlugin(),//Отображает прогресс
        ],
        module: {
            rules: [
                {
                test: /\.tsx?$/,//Отображаются файлы, которые нужно пропустить через лоадер
                use: 'ts-loader',
                exclude: /node_modules/,
                },
            ],
        },
        resolve: {
        extensions: ['.tsx', '.ts', '.js'],//Указываем те файлы, для которых не будем указывать расширения при импорте
        },
}
 
export default config;