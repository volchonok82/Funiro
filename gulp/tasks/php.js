export const php = () => {
    return app.gulp.src(app.path.src.php)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "PHP",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(app.plugins.fileInclude())
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        .pipe(app.plugins.if(
            app.isBuild,
            app.plugins.versionNumber({
                'value': '%DT%',
                'append': {
                    'key': '_v',
                    'cover': 0,
                    'to': [
                        'css',
                        'js',
                    ]
                },
                'output': {
                    'file': 'gulp/version.json'
                }
            })))
        .pipe(app.gulp.dest(app.path.build.php))
        .pipe(app.plugins.browserSync.stream());
};