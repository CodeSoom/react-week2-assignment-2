const storage = {
  todos: [
  ],
};

const createLi = (todo) => {
  const li = document.createElement('li');
  const button = document.createElement('Button');

  li.textContent = todo.title;

  button.textContent = '완료';
  li.appendChild(button);
  return li;
};

const form = document.getElementById('todo-input');
const ol = document.getElementById('todo-list');
const h4 = document.querySelector('h4');
const emptyMsg = '할일이 없어요!';

const update = () => {
  ol.textContent = '';
  h4.textContent = '';
  if (storage.todos.length === 0) {
    h4.textContent = emptyMsg;
  }
  storage.todos.map((todo) => ol.appendChild(createLi(todo)));
};

const input = document.getElementById('todo-input-title');

form.addEventListener('submit', (submitEvent) => {
  submitEvent.preventDefault();

  const title = input.value;
  input.value = '';
  storage.todos = [
    ...storage.todos,
    { key: storage.todos.length + 1, title, complted: false },
  ];

  update();
});

update();
