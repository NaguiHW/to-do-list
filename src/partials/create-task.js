let createTaskButton = document.querySelector('.fa-plus');
let newTask = document.querySelector('.new-task');
let n = 0;

let createTask = () => {
  createTaskButton.addEventListener('click', ()=> {
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.classList.add('task-input')
    input.setAttribute('id', `${n}`)
    newTask.appendChild(input);
    n++;
  });
}
    let counter = () =>{
      n = 0;
    }

export { createTask, counter }


// var input = document.createElement("input");
// input.setAttribute('type', 'text'); 