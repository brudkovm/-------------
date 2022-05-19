// записываем элементы в переменные

const alert = document.querySelector('.alert'); //оповещение вверху
const form = document.querySelector('.cart-form'); // вся форма
const cart = document.getElementById('cart'); //окно ввода наименования товара
const submitBtn = document.querySelector('.submit-btn'); // кнопка отправки формы - добавить
const container = document.querySelector('.cart-container'); // появляющийся список товаров и кнопка удаления
const list = document.querySelector('.cart-list'); //список выбранных товаров
const clearBtn = document.querySelector('.clear-btn'); //кнопка удалить все товары

//опции редактирования
let editElement;
let editFlag = false;
let editId = "";

//добавляем eventlistener
form.addEventListener('submit', addItem) //submit это и есть click по кнопке формы

//пишем функции

function addItem(e) {
    e.preventDefault(); //потому что по умолчанию у клика по форме есть встроенные действия
    const value = cart.value;
    const id = new Date().getTime().toString();
    console.log(cart.value);
    if (value !== '' && editFlag === false) {
        const element = document.createElement('article');
        element.classList.add('cart-item');
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
            <button type="button" class="edit-btn">ред</button>
            <button type="button" class="delete-btn">уд</button>
        </div>`;
        list.appendChild(element);
        displayAlert_positive();
        setBackToDefault();
    } else if (value !== '' && editFlag === true) {
        console.log('editing');
    } else {
        displayAlert();
    };
}

function displayAlert() {
    alert.textContent = 'товар не выбран';
    alert.classList.add('alert-danger');
    setTimeout(function() {
        alert.textContent = '';
        alert.classList.remove('alert-danger');
    }, 1000)
}

function displayAlert_positive() {
    alert.textContent = `${cart.value}`;
    alert.classList.add('alert-success');
    setTimeout(function() {
        alert.textContent = '';
        alert.classList.remove('alert-success');
    }, 1000)
}

function setBackToDefault() {
    cart.value = '';
    editFlag = false;
    editId = '';
    submitBtn.textContent = 'Добавить';
}