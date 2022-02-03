export const server = (done)=>{
    app.plugins.browserSync.init({
        server:{
            baseDir: `${app.path.build.html}`
        },
        notify: false,
        port: 3000,

        // если включаем xammp(для работы с PHP), проект должен быть в папке htdocs и указываем конкретно
		// proxy: "localhost/папка проекта/папка готовой сборки/"
		// proxy: `localhost/${app.path.rootFolder}/${app.path.build.html}`
    });
}