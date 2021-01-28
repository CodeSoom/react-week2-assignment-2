const storage = {
  todos: [
    { key: 1, title: 'title1', completed: false },
    { key: 2, title: 'title2', completed: false },
    { key: 3, title: 'title3', completed: false },
    { key: 4, title: 'title4', completed: false },
  ],
};

function createLi(todo) {
  const li = document.createElement('li');
  const button = document.createElement('Button');

  li.textContent = todo.title;

  button.textContent = '완료';
  li.appendChild(button);
  return li;
}

const ol = document.getElementById('todo-list');

function update() {
  ol.textContent = '';
  storage.todos.map((todo) => ol.appendChild(createLi(todo)));
}

const form = document.getElementById('todo-input');
const input = document.getElementById('todo-input-title');

form.addEventListener('submit', (submitEvent) => {
  submitEvent.preventDefault();

  const title = input.value;
  storage.todos = [
    ...storage.todos,
    { key: storage.todos.length + 1, title, complted: false },
  ];

  update();
});

update();
