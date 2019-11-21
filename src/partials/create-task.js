/* eslint-disable import/prefer-default-export */
import { storageTask, index } from './storage-task';
import { clearProjectList } from './project-list';
import { appendTask } from './append-task';
import { DOM_module } from './DOM_module';

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
      DOM_module.errorForm('Please fill all the fields');
    } else {
      e.preventDefault();
      storageTask();
      appendTask(index, project.value);
      form.classList.add('hide');
      showTaskFormButton.innerText = 'Add Task To Project';
      DOM_module.clearTaskForm();
      clearProjectList();
    }
  });
};

export { createTask };
