import {BuildOptions} from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,//Достаем порт из опций вебпака конфига
        open: true,//Автоматически будет открывать страницу с приложением
    }
}