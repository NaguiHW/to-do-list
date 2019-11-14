/* eslint-disable import/prefer-default-export */

const title = document.querySelector('#title-project-input');
let taskName = document.querySelector('#task-form-title');
let taskDescription = document.querySelector('#task-form-description');
let taskDate = document.querySelector('#date');
let taskPriority = document.querySelector('#priority');

const clearForm = () => {
  title.value = '';
};

const clearTaskForm = () => {
  taskName.value = '';
  taskDescription.value = '';
  taskDate.value = '';
  taskPriority.value = '';
}

export { clearForm, clearTaskForm };
