// import { todoItem } from './links.js'
let todoItem = [
  { id: 0, text: 'todo', checked: false },
]
const todo_ul = document.getElementById('todo_ul');

// const obj = [
//   { name: '1', url: '#1' },
//   { name: '2', url: '#2' },
//   { name: '3', url: '#3' },
//   { name: '4', url: '#4' },
// ]

// for (const item of todoItem) {
//   const listEl = document.createElement('li');
//   const anchor = document.createElement('a');
//   anchor.href = item.url;
//   anchor.textContent = item.name;
//   listEl.appendChild(anchor);
//   nav_ul.appendChild(listEl);
// }

const reGenerate = () => {
  while (todo_ul.firstChild) {
    todo_ul.removeChild(todo_ul.firstChild);
  }
  for (const item of todoItem) {
    const listEl = document.createElement('li');
    listEl.setAttribute('id', 'todo-item');
    listEl.textContent = item.text;

    const checkEl = document.createElement('input');
    checkEl.setAttribute('type', 'checkbox');
    if (item.checked === true) {
      checkEl.checked = true;
    }
    checkEl.setAttribute('onclick', `checkItem(${item.id}, this.checked)`);
    listEl.appendChild(checkEl);

    todo_ul.appendChild(listEl);
  }
  console.log(todoItem);
}

const checkItem = (index, checkState) => {
  checkState === true ?
    todoItem[index].checked = true :
    todoItem[index].checked = false;
}

const addTodo = (press) => {
  const todo = document.getElementById('todo_value');

  if (!todo.value) return false;
  // ボタン(true) 又は Enter が押されたら
  if (window.event.keyCode == 13 || press == true) {
    todoItem.push({
      // TODO: id の処理をなんとかしよう！(カウントしとくとか)
      id: todoItem[todoItem.length - 1].id + 1,
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