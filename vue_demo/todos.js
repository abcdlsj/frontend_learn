Vue.component('todo_item', {
    props: ['todo'],
    template: "<li> {{ todo.text }} </li>"
})


let id = 1;
const TODO = "TODO";
const DOING = "DOTING";
const DONE = "DONE";

const app = new Vue({
    el: "#app",
    data: {
        newTodo: "",
        editID: 0,
        Todos: [],
        Dones: {
        },
    },
    methods: {
        addTodo: function () {
            if (!this.newTodo) {
                return;
            }
            this.Todos.unshift({
                id: id++,
                title: this.newTodo,
                status: TODO,
            })
            this.newTodo = "";
        },
        changeStatus: function(todo) {
            todo.status = DONE;
            this.Dones.add(this.editID, todo);
            //
            // if (this.Dones.has(this.editID)) {
            //     return;
            // }
            //
            // alert(this.editID)
            //
            // for (let i = 0; i < this.Todos.length; i++) {
            //     if (this.Todos[i].id === this.editID) {
            //         this.Todos[i].status = DONE;
            //         this.Dones.add(this.editID, this.Todos[i]);
            //         this.Todos.splice(i, 1);
            //     }
            // }
        }
    }
})
