//The code below is because in Chrome it doesn't display the HTML on the page
//until after the popup has been closed.
//This gives the HTML a half second to load before running the JS
// var todos = []; //so i can access the array from console
// window.setTimeout(function() {
//   // put all of your JS code from the lecture here
//   var input = prompt('What would you like to do?');
//   while(input !== 'quit'){
//     //handle input
//     if(input === 'list') {
//       console.log(todos);
//     } else if(input = 'new'){
//       //ask for a new todo
//       var newTodo = prompt('Enter a new todo');
//       //add to new todos array
//       todos.push(newTodo);
//     }
//
//     //ask again for new input
//     input = prompt('What would you like to do?')
//   }
//   console.log('Ok you quit the app!');
// }, 500);
