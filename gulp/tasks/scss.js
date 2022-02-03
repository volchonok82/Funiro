import dartSass from 'sass';
import gulpSass from 'gulp-sass';


import cleanCss from 'gulp-clean-css'; // сжатие CSS
import autoprefixer from 'gulp-autoprefixer'; // добавление вендорных префиксов
import groupCssMediaQueries from "gulp-group-css-media-queries"; //Группировка медиа запросов


const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, {
            sourcemaps: app.isDev
        })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SCSS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(groupCssMediaQueries())
        .pipe(
            app.plugins.if(
                app.isBuild,
                autoprefixer({
                    grid: "autoplace",
                    overrideBrowsersList: ["last 3 versions"],
                    cascade: true
                })
            )
        )
        //если нужен не сжатый файл css
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(
            app.plugins.if(
                app.isBuild,
                cleanCss()
            )
        )
        .pipe(app.plugins.rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browserSync.stream());
};