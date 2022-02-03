import fileInclude from "gulp-file-include"; //вставка других файлов с параметрами
import replace from "gulp-replace";  //Поиск и замена
import versionNumber from "gulp-version-number"; //отменяет кеширование файлов css и js
import plumber from "gulp-plumber"; // Обработка ошибок
import notify from "gulp-notify"; //Сообщения (позсказки)
import browserSync from "browser-sync"; // локальный сервер
import newer from "gulp-newer"; //проверка обновления
import gulpIf from "gulp-if"; //условное ветвление
import rename from 'gulp-rename'; //переименование



// Экспортируем объект
export const plugins = {
    fileInclude: fileInclude,
    replace: replace,
    versionNumber: versionNumber,
    plumber: plumber,
    notify: notify,
    browserSync: browserSync,
    newer: newer,
    if: gulpIf,
    rename: rename,
}