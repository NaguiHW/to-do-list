import { counter } from './create-task'

let title = document.querySelector('#title-project-input');
let description = document.querySelector('#description');
let date = document.querySelector('#date');
let priority = document.querySelector('#priority');
let taskRemove = document.querySelector('.new-task');

let clearForm = () => {
  title.value = '';
  description.value = '';
  date.value = '';
  priority.value = '';
  taskRemove.innerHTML = ''
  counter();
  
  
}

export { clearForm }