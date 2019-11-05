let createTaskButton = document.querySelector('.fa-plus');
let newTask = document.querySelector('.new-task')

let createTask = () => {
  createTaskButton.addEventListener('click', ()=> {
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.classList.add('task-input')
    newTask.appendChild(input);
  });
}

export {createTask}


// var input = document.createElement("input");
// input.setAttribute('type', 'text'); 