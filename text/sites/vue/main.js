const todo = new Vue({
  el: '#todo',
  data: () => {
    return {
      inputText: '',
      todoItem: [
        // { id: 0, text: 'todo1', checked: false },
        // { id: 1, text: 'todo2', checked: false },
        // { id: 2, text: 'todo3', checked: false }
      ]
    }
  },
  mounted () {
    if (localStorage.getItem('todo')) {
      try {
        this.todoItem = JSON.parse(localStorage.getItem('todo'))
      } catch (e) {
        localStorage.removeItem('todo')
      }
    }
  },
  methods: {
    addTodo: function () {
      if (this.inputText === '') return false
      
      const nextId = this.todoItem.length === 0 ?
        0 :
        this.todoItem[this.todoItem.length - 1].id + 1
      this.todoItem.push({
        id: nextId,
        text: this.inputText,
        checked: false
      })
      this.inputText = ''
      this.saveTodo()
    },
    removeTodo: function () {
      this.todoItem = this.todoItem.filter((element, index, array) => {
        return Boolean(element.checked == false)
      })
      this.saveTodo()
    },
    saveTodo: function () {
      const parsed = JSON.stringify(this.todoItem)
      localStorage.setItem('todo', parsed)
    }
  }
})
