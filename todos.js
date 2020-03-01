new Vue({
  el: "#todos",
  data: {
    newTodo: "",
    todoList: [],
    //completed: false,
    filter: "all",
    editing: null,
    oldTodo: ""
  },
  methods: {
    addTodo: function() {
      var value = this.newTodo;
      if (!value) {
        return;
      }
      this.todoList.push({
        title: value
      });
      this.newTodo = "";
    },
    deleteTodo(todo) {
      this.todoList = this.todoList.filter(i => i !== todo);
    },

    deleteCompleted() {
      this.todoList = this.todoList.filter(todo => !todo.completed);
    },

    editTodo(todo) {
      this.editing = todo;
      this.oldTodo = todo.name;
    },

    doneEdit(todo) {
      this.editing = null;
    },

    cancelEdit() {
      this.editing.name = this.oldTodo;
      this.doneEdit();
    }
  },

  computed: {
    allDone: {
      get() {
        return this.remaining === 0;
      },
      set(value) {
        this.todoList.forEach(todo => {
          todo.completed = value;
        });
      }
    },

    remaining() {
      return this.todoList.filter(todo => !todo.completed).length;
    },

    completed() {
      return this.todoList.filter(todo => todo.completed).length;
    },

    filteredTodos() {
      if (this.filter === "todo") {
        return this.todoList.filter(todo => !todo.completed);
      } else if (this.filter === "done") {
        return this.todoList.filter(todo => todo.completed);
      }
      return this.todoList;
    }
  },
  directives: {
    focus(el, value) {
      if (value) {
        el.focus();
      }
    }
  }
});
