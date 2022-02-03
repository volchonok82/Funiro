// удаляем класс у выбранных элементов
export function _removeClasses(elemSelector, elemClass) {
    let el = document.querySelectorAll(elemSelector);
    if (el.length >0) {
        for (let i = 0; i < el.length; i++) {
            el[i].classList.remove(elemClass);
        }
    }
}

/*  -------------------------------------------------------*/
/*  Функция для прокрутки с контролем скорости
/*  -------------------------------------------------------*/
export function scrollToTop(to, duration = 700) {
    const
        element = document.scrollingElement || document.documentElement,
        start = element.scrollTop,
        change = to - start,
        startDate = +new Date(),
        // t = current time
        // b = start value
        // c = change in value
        // d = duration
        easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        },
        animateScroll = function () {
            const currentDate = +new Date();
            const currentTime = currentDate - startDate;
            element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            } else {
                element.scrollTop = to;
            }
        };
    animateScroll();
}

// вставить текущий год
export function getAndInsertCurrentYear(insertTag) {
    let tagInsert = document.querySelector(insertTag);
    if (tagInsert) {
        let currentDate = new Date();
        tagInsert.textContent = currentDate.getFullYear();
    }else{
        console.log('Проверь тег');
    }
}
