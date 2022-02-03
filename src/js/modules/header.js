import {
    lockPadding,
    lockPaddingValue,
    unlock,
    timeout,
    bodyLock,
    bodyUnLock
} from "./body-lock.js";





/*-------------------------- */
export function actionBurgerMenu(iconBurger = '.icon-menu', bodyMenu = '.menu__body') {
    const iconMenu = document.querySelector(iconBurger);
    const menuBody = document.querySelector(bodyMenu);


    function closeBurger() {
        iconMenu.classList.remove("_active");
        menuBody.classList.remove("_active");
        menuBody.removeAttribute('style');
        iconMenu.ariaExpanded = "false";
        bodyUnLock();
    }

    function openBurger() {
        iconMenu.classList.add("_active");
        menuBody.classList.add("_active");
        iconMenu.ariaExpanded = "true";
        bodyLock();
    }

    if (iconMenu && menuBody) {
        iconMenu.addEventListener("click", function (e) {
            // если менюшка не на весь экран (раскоментировать код ниже)
            // let windowHeight = window.innerHeight;
            // let menuHeight = menuBody.offsetHeight;
            // if(windowHeight <= menuHeight){
            //     menuBody.setAttribute('style', `height:${windowHeight}px; overflow: auto`);
            // }


            if (iconMenu.classList.contains('_active')) {
                closeBurger();
            } else {
                openBurger();
            }
        });
        window.addEventListener('resize', () => {
            closeBurger();
        });
    }

}

/*-------------------------- */
//   для слушателя всего документа
export function onMenuLinkClick(e, fixedHeader = false, activeMenuItem = false, linkMenu = '.menu__link', iconBurger = '.icon-menu', bodyMenu = '.menu__body') {

    if (activeMenuItem && linkMenu) {
        let linksMenu = document.querySelectorAll(linkMenu);
        linksMenu.forEach(linkMenu => {
            linkMenu.classList.remove('_active');
        });
        e.target.closest(linkMenu).classList.add('_active');
    }
    onClickLink(e, fixedHeader);
    let menuIcon = document.querySelector(iconBurger);
    let menuBody = document.querySelector(bodyMenu);

    if (menuIcon.classList.contains('_active')) {
        onClickLink(e, fixedHeader);
        bodyUnLock();
        menuIcon.classList.remove('_active');
        menuBody.classList.remove('_active');
    }
}




export function onClickLink(e, headerFixed = false) {
    let targetElement = e.target.closest('a');
    let linkName = targetElement.getAttribute('href');
    //   console.log(linkName);
    if (targetElement.classList.contains('_exc')) {
        e.preventDefault();
    } else {

        if (linkName[0] == '#' && linkName.length > 1) {
            //   console.log("якорь");
            e.preventDefault();
            let gotoBlockName = document.querySelector(linkName);
            if (gotoBlockName) {
                if (headerFixed) {
                    let gotoBlockValue = gotoBlockName.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

                    //   let gotoBlockValue = gotoBlockName.getBoundingClientRect().top + document.documentElement.scrollTop - document.querySelector('header').offsetHeight;

                    window.scrollTo({
                        top: gotoBlockValue,
                        behavior: "smooth"
                    });
                } else {
                    gotoBlockName.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        }
        if (linkName[0] == '#' && linkName.length == 1) {
            e.preventDefault();
            //   console.log("ссылка никуда не ведет");
        }
    }
}

/*-------------------------- */
export function hideHeader(headerElement = '.header', topOfset = 200) {
    let lastScroll = 0;
    const header = document.querySelector(headerElement);
    const defaultOfset = topOfset;
    const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
    const containHide = () => header.classList.contains('_hide');

    if (header) {
        window.addEventListener('scroll', () => {
            if (scrollPosition() > lastScroll && !containHide()) {
                //scroll down с нуля
                header.classList.add('_vis');
            }
            if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOfset) {
                //scroll down после определенной позиции
                header.classList.add('_hide');
            }
            if (scrollPosition() < lastScroll && containHide()) {
                //scroll up
                header.classList.remove('_hide');
            }
            if (scrollPosition() == 0) {
                header.classList.remove('_vis');
            }
            lastScroll = scrollPosition();
        });
    }
}



export function setPaddingHeaderNextBlock(headerElement = '.header', nextBlock) {
    let header = document.querySelector(headerElement);
    let nextB = document.querySelector(nextBlock);

    if (header && nextB) {
        let height;

        function setHeight() {
            height = (header.offsetHeight / 16) + "rem";
            //если background не надо двигать убрать из списка
            nextB.setAttribute("style", `padding-top:${height}; background-position-y:${height};`);
        }
        setHeight();

        window.addEventListener("resize", () => {
            setHeight();
        });

    }
}