import {
    scrollToTop
} from "./functions.js";

// находим кнопку и задаем верхний отступ при котором она будет появляться 
// по дефолту отступ при котором появляется кнопка 300px, если надо другой указать в скобках
export function showAndClickBtnUp(btnUp, topOfset = 300, duration) {
    
    let btn = document.querySelector(btnUp);
    if (btn) {
        window.addEventListener('scroll', () => {
            // let top = document.documentElement.scrollTop;
            let top = window.pageYOffset;
            if (top > topOfset) {
                btn.classList.add('_visible');
            } else {
                btn.classList.remove('_visible');
            }
        });

        btn.onclick = (e) => {
            e.preventDefault();
            scrollToTop(0, duration);
        };
    }
}
