const storage = {
  todos: [
    { key: 1, title: 'title1', completed: false },
  ],
};

const ol = document.getElementById('todo-list');
const li = document.createElement('li');
const button = document.createElement('Button');

li.textContent = storage.todos[0].title;

button.textContent = '완료';

li.appendChild(button);
ol.appendChild(li);
