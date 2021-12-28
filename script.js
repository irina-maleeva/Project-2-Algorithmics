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


