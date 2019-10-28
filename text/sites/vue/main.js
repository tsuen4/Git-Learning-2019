const todo = new Vue({
  el: '#todo',
  data: () => {
    return {
      inputText: '',
      todoItem: [
        { id: 0, text: 'todo1', checked: false },
        { id: 1, text: 'todo2', checked: false },
        { id: 2, text: 'todo3', checked: false }
      ]
    }
  },
  methods: {
    addTodo: function () {
      if (this.inputText === '') return false
      this.todoItem.push({
        id: this.todoItem[this.todoItem.length - 1].id + 1,
        text: this.inputText,
        checked: false
      })
      this.inputText = ''
    },
    removeTodo: function () {
      this.todoItem = this.todoItem.filter((element, index, array) => {
        return Boolean(element.checked == false);
      })
    }
  }
})
