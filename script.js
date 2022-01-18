let sortButton = document.querySelector('.sort');
let addButton = document.querySelector('.add');
let input = document.querySelector('input');
let ul = document.querySelector('ul');
let sortImage = document.querySelector('.sort');

// добавление строчки списка и функционал кнопки удаления
// прописала функцию, которая потом вызывается двумя разными событиями
function listLineAdding() {
    if (input.value !='') {
        let li = document.createElement('li');
        li.innerHTML = `${input.value} <p><img class='remove' src=./img/remove_button.png alt="кнопка удаления"></p>`;
        li.querySelector('img').addEventListener('click', (event) => {
            var removeConfirmed = confirm('Вы действительно хотите удалить этот пункт списка?');
            if (removeConfirmed) {
                event.target.parentElement.parentElement.remove();
            } else {
                return;
            }   
        });
        // добавила тут аттрибут draggable, чтобы можно было потом перемещать
        li.draggable = true;
        ul.append(li);
        // здесь стирается написанная ранее строчка
        input.value = '';      
    } else {
        alert('Нужно ввести тест в поле ввода и только после этого нажать кнопку "добавить"');
    }
}

// вызов функции при нажатии кнопки "Добавить" после ввода текста в поле ввода
addButton.addEventListener('click', () => {
    listLineAdding();
});

// вызов функции при нажатии Enter после ввода текста в поле ввода
input.addEventListener('keydown', (event) => {
    if (event.code == 'Enter') {
        listLineAdding();
    }      
});

// сортировка в обе стороны с добавлением переменной оrder, которая меняется
let order = 1;

sortButton.addEventListener('click', () => {
    let listArray = Array.from(document.querySelectorAll('li'));
    listArray.sort((a, b) => {
        return a.innerText.localeCompare(b.innerText)*(order); 
    })             
    ul.innerHTML = null;
    listArray.forEach(element => {
        ul.append(element);
    })
    order = order*(-1);
    switch(order) {
        case 1:
            sortImage.src = './img/sort_down.png';
            break;
        case -1:
            sortImage.src = './img/sort_up.png';
            break;
    } 
});

// Добавила возможность drag and drop к элементам списка

ul.addEventListener('dragstart', (event) => { 
    // это условие нужно чтобы нельзя было перетащить кнопку удаления отдельно от текста списка   
    if (event.target.tagName === 'LI') {
        event.target.classList.add('selected');
    }
})

ul.addEventListener('dragend', (event) => {
    event.target.classList.remove('selected');
});

ul.addEventListener('dragover', (event) => {
    event.preventDefault();
    let activeLi = document.querySelector('.selected');
    if (event.target.tagName === 'LI') {
        let currentLi = event.target;
        ul.insertBefore(activeLi, currentLi);
    }
});

