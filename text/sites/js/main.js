let todoItem = [
  // { id: 0, text: 'todo1', checked: false }
]

let count = todoItem.length
const todo_ul = document.getElementById('todo_ul')

const checkStorage = () => {
  if (localStorage.getItem('todo')) {
    try {
      todoItem = JSON.parse(localStorage.getItem('todo'))
    } catch (e) {
      localStorage.removeItem('todo')
    }
  }
}

const saveTodo = () => {
  const parsed = JSON.stringify(todoItem)
  localStorage.setItem('todo', parsed)
}

const reGenerate = () => {
  // html 側のリストを全消去
  while (todo_ul.firstChild) {
    todo_ul.removeChild(todo_ul.firstChild)
  }

  // 再生成
  for (const item of todoItem) {
    const listEl = document.createElement('li')
    listEl.setAttribute('class', 'todo-item')

    const checkEl = document.createElement('input')
    checkEl.setAttribute('type', 'checkbox')
    if (item.checked === true) { checkEl.checked = true }
    checkEl.setAttribute('onclick', `checkItem(${item.id})`)

    const labelEl = document.createElement('label')
    
    labelEl.appendChild(checkEl)
    labelEl.insertAdjacentHTML('beforeend', item.text)
    listEl.appendChild(labelEl)
    todo_ul.appendChild(listEl)
  }
  // console.log(todoItem)
}

const checkItem = (id) => {
  for (let i = 0; i < todoItem.length; i++) {
    if (todoItem[i].id === id && todoItem[i].checked) {
      todoItem[i].checked = false
    } else if (todoItem[i].id === id && !todoItem[i].checked) {
      todoItem[i].checked = true
    }
  }
  saveTodo()
}

const addTodo = (press) => {
  const todo = document.getElementById('todo_value')

  if (!todo.value) return false
  // ボタン(true) 又は Enter が押されたら
  if (window.event.keyCode == 13 || press == true) {
    const nextId = todoItem.length === 0 ?
      0 :
      todoItem[todoItem.length - 1].id + 1
    todoItem.push({
      id: nextId,
      text: todo.value,
      checked: false
    })
    reGenerate()
    todo.value = ''
  }
  saveTodo()
}

const removeTodo = () => {
  todoItem = todoItem.filter((element, index, array) => {
    return Boolean(element.checked == false)
  })
  reGenerate()
  saveTodo()
}

window.checkItem = checkItem
window.addTodo = addTodo
window.removeTodo = removeTodo

window.onload = () => {
  checkStorage()
  reGenerate()
}