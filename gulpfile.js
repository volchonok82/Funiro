// Основной модуль
import gulp from "gulp";
// Импорт путей
import {
    path
} from "./gulp/config/path.js";
// Импорт общих плагинов
import {
    plugins
} from "./gulp/config/plugins.js";

// Передаем значения в глобальную переменную
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins,
};

// импорт задач
import {
    copy
} from "./gulp/tasks/copy.js";
import {
    reset
} from "./gulp/tasks/reset.js";
import {
    html
} from "./gulp/tasks/html.js";
import {
    php
} from "./gulp/tasks/php.js";
import {
    server
} from "./gulp/tasks/server.js";
import {
    scss
} from "./gulp/tasks/scss.js";
import {
    js,
    jsNoMin
} from "./gulp/tasks/js.js";
import {
    images
} from "./gulp/tasks/images.js";
import {
    otfToTtf,
    ttfToWoff,
    fontsStyle
} from "./gulp/tasks/fonts.js";

// если нужен раскоментировать 81 строку и закоментировать 82
import {
    phpmailer
} from "./gulp/tasks/php-mailer.js";

import {
    zip
} from "./gulp/tasks/zip.js";

import {
    sgrid
} from "./gulp/tasks/smartgrid.js";


// Наблюдатель за изменениями
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.php, php);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

// последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// Основные задачи
// const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, php, scss, js, images, phpmailer));
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, php, scss, js, images));

// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const buildJSnoMin = gulp.series(reset, mainTasks, jsNoMin);
const deployZip = gulp.series(reset, mainTasks, zip);

// Экспорт сценариев
export {
    dev
};
export {
    build
};
export {
    buildJSnoMin
};
export {
    deployZip
};

export {
    sgrid
};


// Выполнение сценария по умолчанию
gulp.task('default', dev);