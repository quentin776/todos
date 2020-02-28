Vue.filter("capitalize", value => {
  return value.charAt(0).toUpperCase() + value.slice(1);
});

let vm = new Vue({
  el: "#todos",
  data: {
    newTodo: "",
    todoList: []
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
    }
  }
});
