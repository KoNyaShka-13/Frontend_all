//Пропишем механизм, который будет прописывать пути еще до сборки. В бОльшем понимании, мы сможем конфигурировать конфиг за ранее
//Это делается для удобства, так как файлы могут переписыватья, а пути теряться
export type BuildMode = 'production' | 'development';

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}