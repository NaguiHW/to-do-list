/* eslint-disable import/prefer-default-export */
import { errorForm } from './error-message';
import { storageTask, index } from './storage-task';
import { clearTaskForm } from './clear-form';
import { clearProjectList } from './project-list';
import { appendTask } from './append-task';

const showTaskFormButton = document.querySelector('#create-task');
const createTaskButton = document.getElementById('create-task-button');
const project = document.querySelector('#project-list');
const taskName = document.querySelector('#task-form-title');
const taskDate = document.querySelector('#date');
const taskPriority = document.querySelector('#priority');
const form = document.querySelector('.task-form');

const createTask = () => {
  createTaskButton.addEventListener('click', (e) => {
    if (taskName.value === '' || taskDate.value === '' || taskPriority.value === '') {
      errorForm('Please fill all the fields');
    } else {
      e.preventDefault();
      storageTask();
      appendTask(index, project.value);
      form.classList.add('hide');
      showTaskFormButton.innerText = 'Create Task';
      clearTaskForm();
      clearProjectList();
    }
  });
};

export { createTask };
