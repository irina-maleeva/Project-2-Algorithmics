let sortButton = document.querySelector('.sort');
let addButton = document.querySelector('.add');
let input = document.querySelector('input');
let ul = document.querySelector('ul');
let sortImage = document.querySelector('.sort');

// добавление строчки списка с кнопкой удаления, и функционал кнопки удаления
addButton.addEventListener('click', () => {
       let li = document.createElement('li');
        li.innerHTML = 
        `<li> ${input.value} <p><img class='remove' src=./remove_button.png alt="кнопка удаления"></p></li>`;
        li.querySelector('img').addEventListener('click', (event) => {
            event.target.parentElement.parentElement.remove();   
            });
    // добавила тут аттрибут draggable, чтобы можно было потом перемещать
        li.draggable = true;

        ul.append(li);
        input.value = '';      
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
        sortImage.src = './sort_down.png';
        break;
        case -1:
        sortImage.src = './sort_up.png';
        break;
    }
    
});


// Добавляю drag and drop к элементам списка
// аттрибут draggable добавила выше при создании записи li
// работает, но c двумя ошибками:  
// 1) работает только пока не нажмешь кнопку сортировки, после нажатия кнопки сортировки уже не работает; 
// 2) перетаскивет как саму запись списка, так и картинку внутри списка - может перетащить картинку удаления без самого текста
ul.addEventListener('dragstart', (event) => {
    event.target.classList.add('selected');
})
ul.addEventListener('dragend', (event) => {
    event.target.classList.remove('selected');
});

ul.addEventListener('dragover', (event) => {
    event.preventDefault();
    let activeLi = document.querySelector('.selected');
    let currentLi = event.target;
    // if (!activeLi.contains('li')) {
    //     return;
    // }
    ul.insertBefore(activeLi, currentLi.nextElementSibling);
});

