let todoItem = [
  { id: 0, text: 'todo1', checked: false },
  { id: 1, text: 'todo2', checked: false },
  { id: 2, text: 'todo3', checked: false },
]

let count = todoItem.length;
const todo_ul = document.getElementById('todo_ul');

const reGenerate = () => {
  while (todo_ul.firstChild) {
    todo_ul.removeChild(todo_ul.firstChild);
  }
  for (const item of todoItem) {
    const listEl = document.createElement('li');
    listEl.setAttribute('id', 'todo-item');

    const labelEl = document.createElement('label');
    labelEl.textContent = item.text;

    const checkEl = document.createElement('input');
    checkEl.setAttribute('type', 'checkbox');
    if (item.checked === true) {
      checkEl.checked = true;
    }
    checkEl.setAttribute('onclick', `checkItem(${item.id})`);

    listEl.appendChild(labelEl);
    labelEl.appendChild(checkEl);
    todo_ul.appendChild(listEl);
  }
  console.log(todoItem);
}

const checkItem = (id) => {
  // console.log(`${id}: ${checkState}`);
  for (let i = 0; i < todoItem.length; i++) {
    if (todoItem[i].id === id && todoItem[i].checked) {
      todoItem[i].checked = false
    } else if (todoItem[i].id === id && !todoItem[i].checked) {
      todoItem[i].checked = true
    }
  }
}

const addTodo = (press) => {
  const todo = document.getElementById('todo_value');

  if (!todo.value) return false;
  // ボタン(true) 又は Enter が押されたら
  if (window.event.keyCode == 13 || press == true) {
    todoItem.push({
      id: count++,
      text: todo.value,
      checked: false
    })
    reGenerate();
    todo.value = '';
  }
}

const removeTodo = () => {
  todoItem = todoItem.filter((element, index, array) => {
    return Boolean(element.checked == false);
  })
  reGenerate();
}

window.checkItem = checkItem;
window.addTodo = addTodo;
window.removeTodo = removeTodo;

window.onload = () => { reGenerate(); }