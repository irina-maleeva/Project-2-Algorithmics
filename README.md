## Проект "Разработка трекера задач"

Приложение сделано для записи небольших задач в текстовом формате.
Внешний вид соответствует макету : 
https://www.figma.com/file/KsxpDgPhRS3zEmuGx8qcKk/PTM2-Todo-list?node-id=0%3A1 

Инзначально список пустой, но есть поле куда можно вписать дело в список.

![todoList](https://user-images.githubusercontent.com/92203369/194569491-9f82e875-49c3-46f2-9916-367503e6e9a1.png)

У каждой записи есть кнопка удаления, которая реагирует на наведение мыши. При удалении всплывающее окно просит подтвердить удаление

![deleteFromTodoList](https://user-images.githubusercontent.com/92203369/194570623-54acc85f-4c20-4376-95a5-ef01c933f80c.png)

При наведении на кнопку сортировку, кнопка становится яркой, при нажатии выполняется сортировка по алфавиту или в обратную сторону (кнопка меняется после каждой сортировки на противоположную).


![activeSortingButton](https://user-images.githubusercontent.com/92203369/194571364-20b3a60b-61a6-4af3-856f-b4de4baece74.png)

Также реализована функция drag&drop - можно перетаскивать вручную задачи внутри списка.

Список сохраняется в локальном хранилище и загружается из него при перезагрузке.







