isMobile();
isWebp();
isIE();

function isMobile() {
    // код определяющий на каком устройстве открыта страница
    let isMob = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (
                isMob.Android() ||
                isMob.BlackBerry() ||
                isMob.iOS() ||
                isMob.Opera() ||
                isMob.Windows());
        }
    };

    if (isMob.any()) {
        document.documentElement.classList.add('_touch');

    } else {
        document.documentElement.classList.add('_pc');
    }
}

// Проверка поддержки webp
function isWebp() {
    function testWebp(callback) {

        let webp = new Image();
        webp.onload = webp.onerror = function () {
            callback(webp.height == 2);
        };
        webp.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    }
    testWebp(function (support) {
        let className = support === true ? '_webp' : "_no-webp";
        document.documentElement.classList.add(className);
    });
}


// IE
function isIE() {
    function isInternetExplorer() {
        return window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
    }
    if (isInternetExplorer() === false) {
        // alert('Браузер не IE');
    } else {
        alert('Ваш браузер не поддерживается, страница может отображаться некорректно!');
        document.documentElement.classList.add('_ie');
    }
}