/* eslint-disable import/prefer-default-export */
const createTaskButton = document.querySelector('.fa-plus');
const newTask = document.querySelector('.new-task');

const createTask = () => {
  createTaskButton.addEventListener('click', () => {
    const taskContainer = document.createElement('div');
    const input = document.createElement('input');
    const delIcon = document.createElement('i');
    delIcon.setAttribute('class', 'fas fa-minus-square');
    input.setAttribute('type', 'text');
    input.classList.add('task-input');
    taskContainer.appendChild(input);
    taskContainer.appendChild(delIcon);
    newTask.appendChild(taskContainer);
    delIcon.addEventListener('click', () => {
      delIcon.parentElement.remove();
    });
  });
};

export { createTask };
