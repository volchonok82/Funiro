// обработка кликов на простые ссылки и ссылки меню
import {
    onClickLink,
    onMenuLinkClick
} from "./header.js";
//=======================
// popup
// import * as popup from "./popup.js";
//=======================
// tab and filter (выбрать что нужно и раскоментировать)
/*
import {
    toggleDocumentFilter,
    toggleDocumentTabs
} from "./filter&tabs.js"; */
//=======================



// слушатель всего документа
document.addEventListener('click', documentActions);

// делегирование события клик
function documentActions(e) {
    const targetElement = e.target;

    // переключение фильтра(раскоментировать код ниже)
    /* 
    if (targetElement.closest('.filter__button')) {
        toggleDocumentFilter(targetElement, '.filter__button', '.filter__item', 'all');
    }*/

    // переключение табов(раскоментировать код ниже)
    /* 
    if (targetElement.closest('.tabs__button')) {
        toggleDocumentTabs(targetElement, '.tabs__button', '.tabs__block');
    }*/

    // открытие попапов
    // if (targetElement.closest('.popup-link')) {
    //     e.preventDefault();
    //     let popupName = targetElement.closest('.popup-link').getAttribute('href').replace('#', '');
    //     popup.popupOpen(popupName);
    // }

    //   обработка ссылок
    if (targetElement.closest('a')) {
        onClickLink(e, true);
    }

    //   обработка ссылок из меню
    if (targetElement.closest('.menu__link') && targetElement.hasAttribute('href')) {
        onMenuLinkClick(e, false, false, '.menu__link');
    }

}
