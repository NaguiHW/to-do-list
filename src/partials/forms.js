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
      taskForm.classList.add('hide');
      showTaskFormButton.innerText = 'Add Task To Project';
      clearProjectList();
      clearForm();
    } else if (e.target.innerText === 'Add Task To Project') {
      taskForm.classList.remove('hide');
      clearProjectList();
      createProjectList();
      showTaskFormButton.innerText = 'Close Form';
    }
  });
};

export { showForm, showTaskForm };
