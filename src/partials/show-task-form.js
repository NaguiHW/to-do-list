/* eslint-disable import/prefer-default-export */
import { clearForm } from './clear-form';
import { createProjectList, clearProjectList } from './project-list';
import { createTask } from './create-task';

const showTaskFormButton = document.querySelector('#create-task');
const form = document.querySelector('.task-form');

const showTaskForm = () => {
  createTask();
  showTaskFormButton.addEventListener('click', (e) => {
    if (e.target.innerText === 'Close Form') {
      form.classList.add('hide');
      showTaskFormButton.innerText = 'Create Task';
      clearProjectList();
      clearForm();
    } else if (e.target.innerText === 'Create Task') {
      form.classList.remove('hide');
      createProjectList();
      showTaskFormButton.innerText = 'Close Form';
    }
  });
};

export { showTaskForm };
