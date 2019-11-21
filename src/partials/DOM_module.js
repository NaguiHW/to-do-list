/* eslint-disable import/prefer-default-export */
import { createProject } from './create-project';
import { createProjectList, clearProjectList } from './project-list';
import { createTask } from './create-task';

let DOM_module = (()=>{
  const showButton = document.querySelector('.new-project-button');
  const form = document.querySelector('.project-form');
  const showTaskFormButton = document.querySelector('#create-task');
  const taskForm = document.querySelector('.task-form');
  const title = document.querySelector('#title-project-input');
  const taskName = document.querySelector('#task-form-title');
  const taskDescription = document.querySelector('#task-form-description');
  const taskDate = document.querySelector('#date');
  const taskPriority = document.querySelector('#priority');
  const errors = document.querySelector('.errors');
  
  const showForm = () => {
    createProject();
    showButton.addEventListener('click', (e) => {
      if (e.target.innerText === 'Close Form') {
        form.classList.add('hide');
        showButton.innerText = 'Create Project';
        clearForm();
      } else if (e.target.innerText === 'Create Project') {
        form.classList.remove('hide');
        showButton.innerText = 'Close Form';
      }
    });
  };

  const clearForm = () => {
    title.value = '';
  };
  
  const clearTaskForm = () => {
    taskName.value = '';
    taskDescription.value = '';
    taskDate.value = '';
    taskPriority.value = '';
  };

  const showTaskForm = () => {
    createTask();
    showTaskFormButton.addEventListener('click', (e) => {
      if (e.target.innerText === 'Close Form') {
        taskForm.classList.add('hide');
        showTaskFormButton.innerText = 'Add Task To Project';
        clearProjectList();
        clearTaskForm();
      } else if (e.target.innerText === 'Add Task To Project') {
        taskForm.classList.remove('hide');
        clearProjectList();
        createProjectList();
        showTaskFormButton.innerText = 'Close Form';
      }
    });
  };
  
  const errorForm = (errorMessage) => {
    const message = document.createElement('p');
    message.setAttribute('class', 'notification is-danger');
    message.innerHTML = errorMessage;
    errors.appendChild(message);
    setTimeout(() => message.remove(), 4000);
  };

  return { showForm, showTaskForm, clearForm, clearTaskForm, errorForm }
})();


export { DOM_module };