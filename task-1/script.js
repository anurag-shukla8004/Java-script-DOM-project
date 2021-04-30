
let form = document.querySelector('#task-form');
let taskList = document.querySelector('.collection');
let clearBtn = document.querySelector('clear-tasks');
let filter = document.querySelector('#filter');
let taskInput = document.querySelector('#task');



// Load all event lisnear
loadEventListeners();
  // Add task event

  function loadEventListeners() {
    form.addEventListener('submit', addTask);
  }

 function addTask(e) {
      if(taskInput.value === ''){
         alert('enter the content');
      }

      // create an element 

      let li = document.createElement('li');
      //  create a class and add text
      li.className = 'collection-item';
      li.appendChild(document.createTextNode(taskInput.value));
      
      // create a Link element

      let link = document.createElement('a');

      // create class and add icon with Html
      link.className = 'delete-item secondary-content';
      link.innerHTML = '<i class="fa fas-remove"></i>';

      // append the li in the link
      li.appendChild(link);

      // append li to ul
      taskList.appendChild(li);
      // Clear input
      taskInput.value = ''; 
      e.preventDefault();
  }


  


