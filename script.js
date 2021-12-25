let sortButton = document.querySelector('.sort');
let addButton = document.querySelector('.add');
let input = document.querySelector('input');
let ul = document.querySelector('ul');
let sortReversedButton = document.querySelector('.sort');

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


    // сортировка по алфавиту - пока не работает, ищу ошибку
sortButton.addEventListener('click', () => {

    let listArray = Array.from(document.querySelectorAll('li'));
    listArray.sort((a, b) => {
    return a.firstElementChild.innerHTML.localeCompare(b.firstElementChild.innerHTML);
    })
    let li = document.querySelector('li');
    ul.innerHTML = null;
    listArray.forEach(element => {
        ul.append(element);
    })
});

  // сортировка в обратном порядке - пока не до конца прописана
// sortReversedButton.addEventListener('click', () => {
//   
//     listArray.sort((a, b) => {
//     return a.firstElementChild.innerHTML.localeCompare(b.firstElementChild.innerHTML)*-1;
// //     console.log(rowArray);
//     })
// });


