// Tarea
class Task {
  constructor (name) {
    this.name = name;
    this.isComplete = false;
  }
  complete () {
    this.isComplete = !this.isComplete;
  }
}

class TaskList {
  constructor (name) {
    this.name = name;
    this.tasks = [];
  }
  //
  addTask (task, element) {
    this.tasks.push(task);
    this.renderTask(element);
  }
  removeTask (i, element) {
    this.tasks.splice(i, 1);
    this.renderTask(element);
  }
  renderTasks (element) {
    let tasks = this.tasks.map(task =>`
<li class = "task">
<input type = "checkbox">
<span>${task.name}</span>
<a href="#">X</a>
</li>
`);
    element.innerHTML = tasks.reduce((a,b) => a + b);
  }
}


// Dom
const addTaskElement = document.getElementById('add-task');
const tasksContainerElement = document.getElementById('tasks-container');
const inbox = new TaskList('inbox');


// añadir tarea
function addDomTask (e, list=inbox) {
  // obtener texto input
  if (e.key === 'Enter'){
    //crear la tarea intanciando la base
    let task = new Task(this.value);
    // añadr la tarea a la lista
    list.addTask(task,tasksContainerElement);
  }
  console.log(e);
}

//evento soltar tecla
addTaskElement.addEventListener('keyup', addDomTask);
