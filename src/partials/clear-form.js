/* eslint-disable import/prefer-default-export */

const title = document.querySelector('#title-project-input');
const taskName = document.querySelector('#task-form-title');
const taskDescription = document.querySelector('#task-form-description');
const taskDate = document.querySelector('#date');
const taskPriority = document.querySelector('#priority');

const clearForm = () => {
  title.value = '';
};

const clearTaskForm = () => {
  taskName.value = '';
  taskDescription.value = '';
  taskDate.value = '';
  taskPriority.value = '';
};

export { clearForm, clearTaskForm };
