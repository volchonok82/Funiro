// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./build`; // тут можно использовать rootFolder
const srcdFolder = `./src`;

export const path = {
    build: {
        phpmailer: `${buildFolder}/PHPMailer`,
        js: `${buildFolder}/js`,
        images: `${buildFolder}/img`,
        fonts:`${buildFolder}/fonts/`,
        css: `${buildFolder}/css`,
        html: `${buildFolder}`,
        php: `${buildFolder}`,
        files: `${buildFolder}/files`,
    },
    src: {
        phpmailer: `${srcdFolder}/PHPMailer/**/*.*`,
        js:`${srcdFolder}/js/app.js`, 
        images: `${srcdFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcdFolder}/img/**/*.svg`,
        scss: `${srcdFolder}/scss/style.scss`,
        html: `${srcdFolder}/*.html`, // или .pug
        php: `${srcdFolder}/*.php`,
        files: `${srcdFolder}/files/**/*.*`,
        grid: `${srcdFolder}/scss`,
    },
    watch: {
        js: `${srcdFolder}/js/**/*.js`,
        images: `${srcdFolder}/img/**/*.{svg,ico,jpg,jpeg,png,gif,webp}`,
        scss: `${srcdFolder}/scss/**/*.*`,
        html: `${srcdFolder}/**/*.html`, // или .pug
        php: `${srcdFolder}/**/*.php`,
        files: `${srcdFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcdFolder: srcdFolder,
    rootFolder: rootFolder,
    ftp: ``,
};