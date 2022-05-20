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
    //clear items
clearBtn.addEventListener('click', clearItems)

// функции

function addItem(e) {
    e.preventDefault(); //потому что по умолчанию у клика по форме есть встроенные действия
    const value = cart.value;
    const id = new Date().getTime().toString();
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
        const deleteBtn = element.querySelector('.delete-btn'); //создаем переменные тут чтобы обращаться к ним когда 
        const editBtn = element.querySelector('.edit-btn'); //они уже реально созданы
        deleteBtn.addEventListener('click', deleteItem);
        editBtn.addEventListener('click', editItem);
        list.appendChild(element);
        displayAlert_positive();
        setBackToDefault();
        container.classList.add('not-hidden');
    } else if (value !== '' && editFlag === true) {
        editElement.innerHTML = value;
        displayAlert_positive();
        setBackToDefault();
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
//удаляем 1 позицию товара
function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement; //так мы выбираем конкретный кликнутый элемент списка
    list.removeChild(element);
    if (list.children.length === 0) {
        container.classList.remove('not-hidden');
        displayAlert();
    }
}

function editItem(e) {
    editElement = e.currentTarget.parentElement.previousElementSibling;
    cart.value = editElement.innerHTML;
    editFlag = true;
    submitBtn.innerHTML = `Изменить`;
}


function clearItems() {
    list.innerHTML = ``;
    container.classList.remove('not-hidden');
    displayAlert();
}