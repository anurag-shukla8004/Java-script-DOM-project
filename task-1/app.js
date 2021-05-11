const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


//Load all event lisnear
loadEventLisnear();

//load all event lisnear

function loadEventLisnear(){
  form.addEventListener('submit', addTask);
}

// ADD TASK
function addTask(e){
  if(taskInput.Value === ' '){
    alert('enter the context');
  }

  e.preventDefault();
}
