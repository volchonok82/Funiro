// если нужен попап при ошибке или отправке
// import * as popup from "./popup.js";


// для инициализации всех форм в документе (при параметре false отключим нашу валидацию оставив только стандартную браузера)
// initForms(false);
export function initForms(validate = true) {
    let forms = document.querySelectorAll('form');
    forms.forEach(form => {

        if (validate) {
            inputReplaceRequired(form);
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                if (form.hasAttribute('data-test')) {
                    // имитация отправки формы
                    sendFormFake(e, form);
                    console.log('test');
                } else {
                    console.log('norm');
                    // отправка формы(настроить sendmail.php для PHPMailer)
                    formSend(e,form);
                }
            });
        }
    });
}

// для обработки каждой формы по отдельности задать имя каждой формы 
// и изменить функцию отправки под конкретную
/* 
const formOne = document.getElementById('one');
// или
const formTwo = document.forms.two;

// для первой формы
if (formOne) {
    // убираем атрибут required для того чтобы не выскакивали стандартные предупреждения, и заменяем его на класс _req для стилизации, если будет ошибка 
    inputReplaceRequired(formOne);

    // отменяем стандартное действие submit и вешаем свое
    formOne.addEventListener('submit', (e) => {
        e.preventDefault();

        // имитация отправки формы
        sendFormFake(e, formOne);

        // отправка формы(настроить sendmail.php для PHPMailer)
        // formSend(e,newForm);
    });
}

// для второй формы
if (formTwo) {

    inputReplaceRequired(formTwo);

    formTwo.addEventListener('submit', (e) => {
        e.preventDefault();

        sendFormFake(e, formTwo);
    });
}
*/


// нормальная отправка формы
async function formSend(event, formName) {
    event.preventDefault();
    let error = formValidate(formName);
    let formData = new FormData(formName);
    if (formImage) {
        formData.append('image', formImage.files[0]);
    }

    if (error === 0) {
        formName.classList.add('_sending');

        const response = await fetch('../PHPMailer/mail.php', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            let result = await response.json();
            //код показывающий что данные отправлены
            alert(result.message);
            console.log(result.message);

            // ----
            if (formPreview) {
                formPreview.innerHTML = '';
            }
            formName.reset();
            formName.classList.remove('_sending');
        } else {
            alert('Ошибка отправки формы');
            formName.classList.remove('_sending');
        }
    } else {
        // код для обработки неправильного заполнения формы
        alert('Проверьте красные поля');
    }
}

// имитация отправки формы
function sendFormFake(e, formName) {
    e.preventDefault();
    let error = formValidate(formName);

    if (error === 0) {
        formName.classList.add('_sending');

        setTimeout(() => {
            console.log('sending ok!');
            // можно добавить попап
            // popup.popupOpen('имя попапа')
            formName.classList.remove('_sending');
            formName.reset();
        }, 3000);
    } else {
        // код для обработки неправильного заполнения формы
        console.log('Validation failed');
        // alert('Проверьте красные поля');

        // или добавить попап
    }
}

// убираем атрибут required для того чтобы не выскакивали стандартные предупреждения, и заменяем его на класс _req для стилизации, если будет ошибка 
function inputReplaceRequired(formName) {

    [...formName.querySelectorAll('input')].forEach(input => {
        if (input.hasAttribute('required')) {
            input.removeAttribute('required');
            input.classList.add('_req');
        }
    });
}

// простая валидация формы
function formValidate(formName) {
    // устанавливаем счетчик ошибок
    let error = 0;

    // получаем все нужные для проверки инпуты
    let formInputsRequire = formName.querySelectorAll('._req');
    //  перебираем их
    formInputsRequire.forEach(input => {

        let errorText = input.dataset.error;
        let errorBlock;
        if (errorText) {
            errorBlock = document.createElement('div');
            errorBlock.className = '_form-error-block';
            errorBlock.innerHTML = errorText;
            formRemoveError(input, errorBlock.className);
        }

        //убираем класс ошибки
        formRemoveError(input);

        // проверяем input type=email
        if (input.type === 'email') {
            if (emailTest(input)) {
                formAddError(input, errorBlock);
                error++;
            }
            //проверяем отмечен ли нужный нам чекбокс (например согласие на рассылку) 
        } else if (input.type === 'checkbox' && input.checked === false) {
            formAddError(input, errorBlock);
            error++;

            // простая проверка на пустое поле
        } else {
            if (input.value === '') {
                formAddError(input, errorBlock);
                error++;
            }
        }
    });
    return error;
}


function formAddError(input, errorBlock) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');

    if (errorBlock) {
        input.after(errorBlock);
    }

}

function formRemoveError(input, errorClassName) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');

    if (errorClassName) {
        [...input.parentElement.children].forEach(child => {
            if (child.classList.contains(errorClassName)) {
                child.remove();
            }
        });
    }

}

// Функция теста email
function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}



// превью загружаемой фотографии
const formImage = document.getElementById('formImage');
const formPreview = document.getElementById('formPreview');

if (formImage && formPreview) {
    formImage.addEventListener('change', () => {
        uploadFile(formImage.files[0]);
    });
}


function uploadFile(file) {
    //проверяем тип файла
    if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
        alert('Разрешены только изображения!');
        formImage.value = '';
        return;
    }
    //проверяем размер файла
    if (file.size > 2 * 1024 * 1024) {
        alert('Файл должен быть менее 2мб.');
        return;
    }

    let reader = new FileReader();
    reader.onload = function (e) {
        formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
    };
    reader.onerror = function (e) {
        alert('Ошибка');
    };
    reader.readAsDataURL(file);
}