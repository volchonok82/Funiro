// проверка на webp, mobile, IE, touchpad и т.д.(всегда включено)
import * as is from "./modules/is.js";
//================================================

// body-lock(подгружен в те файлы где нужен тут не включать)
// import * as bodyLock from "./modules/body-lock.js";
//================================================

// ===== HEADER =====
import * as headerAction from "./modules/header.js";
// работа бургера
headerAction.actionBurgerMenu();
// скрытие хедера при прокрутке
headerAction.hideHeader('.header', 100);
// установка отступа для следующего за хедером элемента (не main)
// headerAction.setPaddingHeaderNextBlock('.header', "Selector");
//================================================

// ===== dynamic adaptiv=====
// import * as da from "./modules/dynamicAdapt.js";
//================================================  

// ===== spollers (ломают IE11)=====
import * as spollers from "./modules/spoller.js";
//================================================

// ===== filter and tabs =====
// (по дефолту импортированы в слушатель всего документа
// если не надо, то там закоментировать а ниже раскоментировать)
// import * as filterAndTab from "./modules/filter&tabs.js";
//================================================

// ===== popup =====
// import * as popup from "./modules/popup.js";
//================================================

// ===== star rating =====
// import * as starRating from "./modules/star_rating.js";
//================================================

// ===== form ===== 
// import * as form from "./modules/form.js";
// инициализируем все формы(если передать параметр false отключим валидацию оставив все по дефолту)
// form.initForms();
//================================================

// ===== form-quantity(счетчик - +) ===== 
// import * as quantity from "./modules/quantity.js";
//================================================

//  ===== SWIPER (не работает в IE11)===== 
// import * as swiper from "./modules/swiper-custom.js";
//================================================

//  ===== noUiSlider===== 
// import * as noUiSliderCustom from "./modules/noUi-custom.js";
//================================================

//  ====== google maps (ломают IE11) ======
// import * as gmaps from "./modules/google-map.js";
//================================================

// ленивая загрузка видео с youtube
// import * as lazyVideo from './modules/video-lazy.js';
//================================================

//  ====== btn-up ======
// import {showAndClickBtnUp} from "./modules/btn-up.js";
// установить "тегКнопки", количество пикселей при котом появиться кнока, скорость прокрутки
// showAndClickBtnUp('#btnUp');
//================================================

// обработка клика на всем документе
import * as documentClick from "./modules/document-click.js";
//================================================

// ===== ДОП ФУНКЦИИ =====
// вставить текущий год в указанный элемент
// import {getAndInsertCurrentYear} from "./modules/functions.js";
// getAndInsertCurrentYear('.date');
//================================================

// любой другой код
import * as myScripts from "./modules/myscript.js";