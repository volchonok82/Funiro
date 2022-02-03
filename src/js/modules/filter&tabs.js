// переключение фильтра( для слушателя всего документа)

// встроить в слушатель всего документа
// if (targetElement.closest('.filter__button')) {
//   toggleDocumentFilter(targetElement, '.filter__button', '.filter__item', 'all');
// }

export function toggleDocumentFilter(targetElement, buttonFilter, itemsFilter, filterShowAll = 'all') {


    let filterNames = document.querySelectorAll(buttonFilter);
    let filterName = targetElement.closest(buttonFilter).dataset.filterName;
    let filterItems = document.querySelectorAll(itemsFilter);

    // выделяем активный фильтер
    filterNames.forEach(filterButton => {
        filterButton.classList.remove('_active');
    });
    targetElement.closest(buttonFilter).classList.add('_active');

    // получаем все блоки фильтра
    filterItems.forEach(filterItem => {
        //если имя кнопки показать все 
        if (filterName == filterShowAll) {
            filterItem.classList.remove('_hide');
        } else {
            // скрываем все
            filterItem.classList.add('_hide');
            // показываем блоки с текушими фильтрами
            if (filterItem.dataset.filterItem.split(" ").includes(`${filterName}`)) {
                filterItem.classList.remove('_hide');
            }
        }
    });
}

// простое переключение фильтра
// toggleFilter('.filter__button', '.filter__item');

function toggleFilter(buttonFilter, itemsFilter, filterShowAll = 'all') {

    let filterButtons = document.querySelectorAll(buttonFilter);
    let filterItems = document.querySelectorAll(itemsFilter);

    function activeFilter() {

        // подсвечиваем активный фильтер
        filterButtons.forEach(filterButton => {
            filterButton.classList.remove('_active');
            this.classList.add('_active');

            filterButton.addEventListener('click', activeFilter);
        });

        // получаем имя активного фильтра
        let filterName = this.dataset.filterName;
        console.log(filterName);

        // получаем все блоки фильтра
        filterItems.forEach(filterItem => {

            //если имя кнопки показать все 
            if (filterName == filterShowAll) {
                filterItem.classList.remove('_hide');
            } else {
                // скрываем все
                filterItem.classList.add('_hide');
                // показываем блоки с текушими фильтрами
                if (filterItem.dataset.filterItem.split(" ").includes(`${filterName}`)) {
                    filterItem.classList.remove('_hide');
                }
            }
        });
    }

    filterButtons.forEach(filterButton => {
        filterButton.addEventListener('click', activeFilter);
    });

}


//=========== TABS ===============

//переключение табов(для слушателя всего документа)

// встроить в слушатель всего документа
//   if (targetElement.closest('.tabs__button')) {
//       toggleDocumentTabs(targetElement, '.tabs__button', '.tabs__block');
//   }

export function toggleDocumentTabs(targetElement, buttonTab, blockTab) {
    let tabsTitles = document.querySelectorAll(buttonTab);
    let tabsBlocks = document.querySelectorAll(blockTab);
    let id = targetElement.closest(buttonTab).dataset.tab;
    tabsTitles.forEach(title => {
        title.classList.remove('_active');

    });
    targetElement.closest(buttonTab).classList.add("_active");
    tabsBlocks.forEach(tabsBlock => {
        tabsBlock.classList.remove('_active');
        if (tabsBlock.dataset.tab == id) {
            tabsBlock.classList.add('_active');
        }
    });
}

//простое переключение табов

// toggleTabs('.tabs-button', '.tabs-block');

function toggleTabs(buttonTab, blockTab) {
    let tabsButtons = document.querySelectorAll(buttonTab);
    let tabsBlocks = document.querySelectorAll(blockTab);

    function activeTab() {
        tabsButtons.forEach(tabsButton => {
            tabsButton.classList.remove('_active');
            this.classList.add('_active');
            let id = this.dataset.tab;
            tabsBlocks.forEach(tabBlock => {
                tabBlock.classList.remove('_active');
                if (tabBlock.dataset.tab == id) {
                    tabBlock.classList.add('_active');
                }
            });
        });
    }
    tabsButtons.forEach(tabsButton => {
        tabsButton.addEventListener('click', activeTab);
    });
}