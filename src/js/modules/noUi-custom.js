import noUiSlider from '../../../node_modules/nouislider/dist/nouislider.mjs';

// для одного слайдера
//  получаем элемент где будет наш слайдер
let rangeSlider = document.getElementById('rangeSlider');


// проверяем есть ли такой елемент и потом работаем с ним
if (rangeSlider) {
    // создаем новый слайдер
    noUiSlider.create(rangeSlider, {
        // orientation: 'vertical',

        //подсказки значений над ползунками 
        // tooltips: true,

        // окрашивающаяся линия внутри значений
        connect: true,

        // начальные значения
        start: [100, 800],
        step: 10,
        // крайние значения слайдера
        range: {
            'min': 0,
            'max': 1000
        },

        // крайнее значение слайдера за которое нельзя заходить
        // padding: 50,

        /*// линейки внизу слайдера
       
        pips: {
            mode: 'values',
            values: [50, 100, 150],
            density: 4
        }, */

        // форматироание значений, по умолчанию float с двумя нулями
        format: {
            //заменим на integer
            to: function (value) {
                return parseInt(value) + ' ₽';
            },
            // Получает строку, должен возвращать число.
            from: function (value) {
                return Number(value.replace(' ₽', ''));
            }
        }
    });


    // Работа с инпутами
    // получаем инпуты
    var inputStart = document.getElementById('range-start');
    var inputEnd = document.getElementById('range-end');

    // выводим значения ползунков в инпуты
    rangeSlider.noUiSlider.on('update', function () {
        let values = rangeSlider.noUiSlider.get();
        let val1 = values[0];
        let val2 = values[1];
        inputStart.value = val1;
        inputEnd.value = val2;
    });

    // передаем введеные пользователем значения в слайдер
    inputStart.addEventListener('change', function () {
        rangeSlider.noUiSlider.set([inputStart.value, null]);
    });

    inputEnd.addEventListener('change', function () {
        rangeSlider.noUiSlider.set([null, inputEnd.value]);
    });
}

//==========================================
// для группы слайдеров
const rangeItems = document.querySelectorAll('[data-range]');

if (rangeItems.length) {
    rangeItems.forEach(rangeItem => {
        const fromValue = rangeItem.querySelector('[data-range-from]');
        const toValue = rangeItem.querySelector('[data-range-to]');
        const item = rangeItem.querySelector('[data-range-slider]');

        noUiSlider.create(item, {
            // окрашивающаяся линия внутри значений
            connect: true,

            // начальные значения
            start: [Number(fromValue.value), Number(toValue.value)],
            step: 1,
            // крайние значения слайдера
            range: {
                'min': Number(fromValue.dataset.rangeFrom),
                'max': Number(toValue.dataset.rangeTo)
            },
            // форматироание значений, по умолчанию float с двумя нулями
            // отдельно задать формат для каждого так не получиться
            format: {
                //заменим на integer
                to: function (value) {
                    return parseInt(value);
                },
                // Получает строку, должен возвращать число.
                from: function (value) {
                    return Number(value);
                }
            }


        });
        // выводим значения ползунков в инпуты
        item.noUiSlider.on('update', function () {
            let values = item.noUiSlider.get();
            let val1 = values[0];
            let val2 = values[1];
            fromValue.value = val1;
            toValue.value = val2;
        });

        // передаем введеные пользователем значения в слайдер
        fromValue.addEventListener('change', function () {
            item.noUiSlider.set([fromValue.value, null]);
        });

        toValue.addEventListener('change', function () {
            item.noUiSlider.set([null, toValue.value]);
        });
    });
}
