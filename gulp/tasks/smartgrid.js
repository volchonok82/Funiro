import smartGrid from "smart-grid";

export const sgrid = (done) => {

    let settings = {
        outputStyle: "scss",

        // число колонок
        columns: 12,

        // межколночный интервал
        offset: '20px',
        // offset: '3.1%', /* можем задать в rem или процентах */

        // для mobile first
        // mobileFirst: true, /* меняет направление медиазапростов на min-width */

        // настройки контейнера
        container: {
            // максимальная ширина, берем размер макета и прибавляем поля
            // например если макет на 1200 а поля 20, то ставим 1240
            maxWidth: '1200px',
            // поля
            fields: '15px' /* не меньше половины offset a */
        },
        // настройка брейкпоинтов
        breakPoints: {
            // lg: {
            //     width: "1200px"
            // },
            md: {
                width: '991.9px',
                // fields: '10px'
            },
            sm: {
                width: '767.9px',
                // fields: '10px' /* задаем fields только если нужно поменять поля на другом экране */
            },
            xs: {
                width: '575.9px',
                fields: '10px' /* например чтобы на маленьком экране все прилегало ближе к краям экрана */
            },
            xxs: {
                width: '359.9px',
                // offset: '10px', /* offset меняем только если надо уменьшить на телефоне поля,
                //                 но придется всем элементам у которых нет параметра xxs задать его */
                // fields: '20px' /* и тогда можем изменить размер поля */
            }

        },
        // можем поменять значение в медиазапросах например на all вместо screen по дефолту
        // defaultMediaDevice: 'all'

        // можем переименовать примеси
        // mixinNames:{
        //     // например вместо size написать razmer
        //     size: 'razmer'
        // }
    };
    smartGrid(`${app.path.src.grid}`, settings);
    done();
};