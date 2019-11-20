/* eslint-disable import/prefer-default-export */
import { clearForm } from './clear-form';
import { createProject } from './create-project';
import { createProjectList, clearProjectList } from './project-list';
import { createTask } from './create-task';

const showButton = document.querySelector('.new-project-button');
const form = document.querySelector('.project-form');

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


const showTaskFormButton = document.querySelector('#create-task');
const taskForm = document.querySelector('.task-form');

const showTaskForm = () => {
  createTask();
  showTaskFormButton.addEventListener('click', (e) => {
    if (e.target.innerText === 'Close Form') {
<<<<<<< HEAD:src/partials/forms.js
      taskForm.classList.add('hide');
      showTaskFormButton.innerText = 'Create Task';
      clearProjectList();
      clearForm();
    } else if (e.target.innerText === 'Create Task') {
      taskForm.classList.remove('hide');
=======
      form.classList.add('hide');
      showTaskFormButton.innerText = 'Add Task To Project';
      clearProjectList();
      clearForm();
    } else if (e.target.innerText === 'Add Task To Project') {
      form.classList.remove('hide');
      clearProjectList();
>>>>>>> b276f291462bcffffac7dcf824ba3cc03695ba25:src/partials/show-task-form.js
      createProjectList();
      showTaskFormButton.innerText = 'Close Form';
    }
  });
};

export { showForm, showTaskForm };
