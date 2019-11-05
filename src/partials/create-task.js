let createTaskButton = document.querySelector('.fa-plus');

let createTask = () => {
  createTaskButton.addEventListener('click', ()=> {
    document.createElement('input', 'text');
  });
}

export {createTask}