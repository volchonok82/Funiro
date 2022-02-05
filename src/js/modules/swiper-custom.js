// документация https://swiperjs.com/


// подключение слайдера Swiper из node_modules
// при необходимости подключаем дополнительные модули, указывая их в {} через запятую
// например {Navigation, Autoplay}
import Swiper, {
    Navigation,
    Pagination,
    A11y,
    Parallax
} from 'swiper';
/*
основные модули слайдера:
Navigation, Pagination, Autoplay, EffectFade, Lazy,
*/

// добавление классов слайдерам
// swiper главному блоку, swiper-wrapper, swiper-slide для слайдов
function bildSliders() {
    // BildSlider
    let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
    if (sliders) {
        sliders.forEach(slider => {
            slider.parentElement.classList.add('swiper');
            slider.classList.add('swiper-wrapper');
            for (const slide of slider.children) {
                slide.classList.add('swiper-slide');
            }
        });
    }
}

initSliders();

// инициализация слайдеров
function initSliders() {

    bildSliders(); // добавление классов слайдера (при необходимости отключить)

    // перечень слайдеров
    if (document.querySelector('.slider-main__body')) {
        new Swiper('.slider-main__body', {
            // подключение модулей
            modules: [Navigation, Pagination,A11y,Parallax],

            watchOverflow: true, // отключение функционала если слайдов меньше чем нужно
            // initialSlide: 0, // стартовый слайд
            slidesPerView: 1, // количество видимых слайдов
            slidesPerGroup: 1, // количество пролистываемых слайдов
            // centeredSlides: true,// активный слайд по центру
            spaceBetween: 32, //расстояние между слайдами
            // autoHeight: true, //автовысота(если задаем фиксированное значение отключить)
            speed: 800, //скорость прокрутки(по умолчанию 300)
            loop: true, //бесконечный сладер
            loopedSlides: 3, // колучество дублирующих сладов
            parallax: true, //paralax effect

            /*//свободный режим(перемещаем слайды без фиксированной позиции,  скролится колесом мыши)
            freeMode: {
                enabled: true,
                minimumVelocity: 0.2,
                momentum: false,
            },*/

            /* // Автопрокрутка
            autoplay: {
                delay: 1000, // пауза между прокруткой
                stopOnLastSlide: true, // закончить на последнем слайде
                disableOnInteraction: false // отключить после ручного переключения
            },*/

            /************* */
            // стрелки и дотсы могут быть где угодно в документе, будут отрабатывать по указанным ниже классам
            // arrows
            navigation: {
                nextEl: '.slider-main .slider-arrow__next',
                prevEl: '.slider-main .slider-arrow__prev',
            },
            /************* */
            // dotts
            pagination: {
                el: '.controls-slider-main__dotts',
                clickable: true, // если не включено, не кликабельно
                // тип пагинации "bullets", "fraction", "progressbar" or "custom"
                // Буллеты
                type: 'bullets',
                // dynamicBullets: true, // Динамические буллеты(изменяют размер в зависимости от дальности к текущему слайду)

                // type: 'fraction',// Фракция (текущий номер слайда из общего числа)

                // type: 'progressbar',// Прогрессбар(не работает с бесконечным слайдером)
            },
            /*
            // Скролл
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            }, */

            /************* */
            // Эффекты переключения слайдов       
            effect: 'slide', // листание(по умолчанию) 
            /* 
            effect: 'fade', // смена прозрачности(будет выведен только один слайд)           
            fadeEffect:{  // дополнение к fade           
                crossFade: true // параллельная смена прозрачности
            },*/
            // effect: 'flip',// переворот
            /* 
            effect: 'cube', // куб    
            cubeEffect: { // дополнение к cube
                // настройки тени
                slideShadows: true,
                shadow: true,
                shadowOffset: 20,
                shadowScale: 0.94
            },*/
            /* 
            effect: 'coverflow',// эффект потока          
            coverflowEffect:{// дополнение к coverflow            
                rotate: 50,// угол
                stretch: 0,// наложение
                scale: 1,
                slideShadows: true,// тень
            }, */
            /************* */
            // simulateTouch: false, // перетаскивания на ПК
            touchRatio: 1, // чувствительность свайпа(для меньшего усилия увеличить число, 0 отключит возможность перетаскивания на всех устройствах)  
            touchAngle: 45, // Угол срабатывания свайпа/перетаскивания         
            grabCursor: true, // Курсор перетаскивания     
            slideToClickedSlide: true, // перключение на слайд при клике на него

            /************* */
            observer: true, // Обновить свайпер (например когда он изначально скрыт)при изменении элементов слайдера      
            observeParents: true, // при изменении родительских элементов слайдера       
            observeSlideChildren: true, // при изменении дочерних элементов слайда
            /************* */
            // управление колесом мыши
            mousewheel: {
                enabled: false,
                sensitivity: 1, // чувствительность колеса
                eventsTarget: ".swiper-container" // класс объекта на котором будет срабатывать прокрутка мышью (если сладеров несколько оставляем по умолчанию)
            },

            // управление клавиатурой
            keyboard: {
                enabled: true, // вкл/выкл   
                onlyInViewport: true, // вкл/выкл только когда слайдер в пределах вьюпорта 
                pageUpDown: false, // вкл/выкл управление клавишами pageUp pageDown
            },
            /************* */
            // preloadImages: false, // отключить предзагрузку картинок        
            lazy: { // Lazy Loading
                loadOnTransitionStart: true, // подгружать на старте переключения слайда         
                loadPrevNext: true, // подгрузить предыдущую и следующую картинки
            },
            watchSlidesProgress: true, // слежка за видимыми слайдами            
            watchSlidesVisibility: true, // добавление класса видимым слайдам
            /************* */

            // доступность
            a11y: {
                enabled: true, // включить/выключить
                // сообщения
                prevSlideMessage: 'Previous slide',
                nextSlideMessage: 'Next slide',
                firstSlideMessage: 'This is the first slide',
                lastSlideMessage: 'This is the last slide',
                paginationBulletMessage: 'Go to slide {{index}}',
                // notificationClass: 'swiper-notification',
                // containerMessage: '',
                // containerRoleDescriptionMessage: '',
                // itemRoleDescriptionMessage: '',
            },


            /*  // брейкпоинты (адаптив)
            breakpoints:{
                320:{
                    slidesPerView: 1,
                    spaceBetween:0,
                    autoHeight: true,
                },
          
                768:{
                    slidesPerView: 2,
                    spaceBetween:20,
                },
                992:{
                    slidesPerView: 3,
                    spaceBetween:20,
                },
                1268:{
                    slidesPerView: 4,
                    spaceBetween:30,
                }
            },*/
            on: {

            }

        });

    }

}