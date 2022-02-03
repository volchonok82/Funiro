export const phpmailer = () => {
    return app.gulp.src(app.path.src.phpmailer)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "phpMailer",
                message: "Error: <%= error.message %>"
            })
        ))
     
        .pipe(app.gulp.dest(app.path.build.phpmailer))
        .pipe(app.plugins.browserSync.stream());
};