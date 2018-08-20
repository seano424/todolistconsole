//////////////////////////////////////////////////////////////////
var todos = [];
window.setTimeout(function() {
  var input = prompt('What would you like to do?');
  while(input !== 'quit'){
    if(input === 'list') {
      listTodos();
    } else if(input === 'new'){
      newTodos();
    } else if(input === 'delete') {
      deleteTodos();
    }
    input = prompt('What would you like to do?')
  }
  console.log('Ok you quit the app!');
}, 500);

/////////////////////////////////////////////////////////////////
function listTodos() {
  console.log("***********************");
  todos.forEach(function(todo, index) {
    console.log(index + ': ' + todo);
  });
  console.log("***********************");
}

function newTodos() {
  //ask for a new todo
  var newTodo = prompt('Enter a new todo');
  //add to new todos array
  todos.push(newTodo);
  console.log(`added todo`);
}

function deleteTodos() {
  //ask for index of todo to delete
  var index = prompt(`Enter index of Todo to Delete`);
  //delete that todo
  //splice()
  todos.splice(index, 1);
  console.log(`Deleted todo`);
}
