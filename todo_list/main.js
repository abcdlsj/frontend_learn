let DB = new Map();
let TODO = "TODO";
let DONE = "DONE";
let DOING = "DOING";

function getTodoName() {
    let name = document.forms["Todo"]["thing"].value;
    saveToDB(name, TODO);
}

function saveToDB(todo, status) {
    DB.set(todo, status)
}

function printAllTodos() {
    for (let [key, value] of DB) {
        alert(key + "--" + value);
    }
}

function changeTodoStatus(todo, status) {
    if (!DB.has(todo)) {
        alert("this todo not exists");
    }
    DB.set(todo, status);
}

function displayAllTodos() {

}