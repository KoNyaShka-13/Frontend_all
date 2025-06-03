import path from 'path';
import webpack from 'webpack';
//import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
//import {BuildPaths} from "./config/build/types/config";
import HTMLWebpackPlugin from "html-webpack-plugin";//импортируем, как в ts
import { buildPlugins } from './config/build/buildPlugins';
import { buildResolvers } from './config/build/buildResolvers';
import { buildLoaders } from './config/build/buildLoaders';
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
        plugins: buildPlugins(),//Берем билдплагин
        module: {
            rules: buildLoaders()
        },
        resolve: buildResolvers(),
}
 
export default config;