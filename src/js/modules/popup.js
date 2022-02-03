import {
    unlock,
    bodyLock,
    bodyUnLock
} from "./body-lock.js";


const popupLinks = document.querySelectorAll('.popup-link');

// код ниже если не включен слушатель всего документа
// находим все ссылки на попапы, убираем у них # и по клику на ссылку открываем попап с таким именем
if (popupLinks.length > 0) {
    popupLinks.forEach(popupLink => {
        popupLink.addEventListener('click', (e)=>{
            e.preventDefault();
            popupOpen(popupLink.getAttribute('href').replace('#',''));
        });
    });
}


// функция открытия попапа
export function popupOpen(popupNameID) {
    let currentPopup = document.getElementById(popupNameID);
    if (currentPopup && unlock) {
        let popupActive = document.querySelector('.popup.open');
        if (popupActive) {     
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        currentPopup.classList.add('open');
        currentPopup.addEventListener('click', function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(currentPopup);
            }
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                popupClose(currentPopup);
            }
        });

        let closePopupElement = currentPopup.querySelector('.popup__close');
        closePopupElement.addEventListener('click',(e)=>{
            e.preventDefault();
            popupClose(currentPopup);
        });
    }

}

// функция закрытия попапа
export function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove("open");
        if (doUnlock) {
            bodyUnLock();
        }
    }
}
