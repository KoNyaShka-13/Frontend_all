const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');//Так как пока что пишем в среде NODE-JS, то используем require
//f
module.exports = {
    mode: "development",//Пока что этап разработки
    entry: path.resolve(__dirname, 'src', 'index.js'),//Связываем пути, лучше так, чем писать полные пути
    output: {
        //Определенный шаблон для динамических названий
        filename: "[name].[contenthash]js",//contenthash нужен для создания новой версии сайта после изменений, обновления сразу будут добавляться
        path: path.resolve(__dirname, 'build'),
        clean: true,//Удаляем старые версии сайта
    },
    plugins: []
}