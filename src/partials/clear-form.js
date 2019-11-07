/* eslint-disable import/prefer-default-export */

const title = document.querySelector('#title-project-input');
const description = document.querySelector('#description');
const date = document.querySelector('#date');
const priority = document.querySelector('#priority');
const taskRemove = document.querySelector('.new-task');

const clearForm = () => {
  title.value = '';
  description.value = '';
  date.value = '';
  priority.value = '';
  taskRemove.innerHTML = '';
};

export { clearForm };
