import webpack from "webpack-stream";

export const jsNoMin = () => {
    return app.gulp.src(app.path.src.js, {
          
        })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "JS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(webpack({
            mode: "production",
            output: {
                filename: "script.js",
            },
            optimization: {
                minimize: false
            },
        }))

        .pipe(app.gulp.dest(app.path.build.js));
};

export const js = () => {
    return app.gulp.src(app.path.src.js, {
            sourcemaps: app.isDev
        })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "JS",
                message: "Error: <%= error.message %>"
            })
        ))

        .pipe(webpack({
            mode: app.isBuild ? "production" : 'development',
            output: {
                filename: "script.min.js",
            },

            module: {
                rules: [{
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: "babel-loader", //loader name
                        options: { //To configure
                            presets: ['@babel/preset-env'], //Preset
                            plugins: ['@babel/plugin-transform-runtime']
                        }
                    }
                }, ],
            },
            target: ['web', 'browserslist'], //вот из-за этого не работал
        }))

        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browserSync.stream());
};