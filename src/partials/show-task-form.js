import { clearForm } from "./clear-form";

let showTaskFormButton = document.querySelector('#create-task');
let form = document.querySelector('.task-form');

const showTaskForm = () => {
  showTaskFormButton.addEventListener('click', e => {
    if (e.target.innerText === 'Close Form') {
      form.classList.add('hide');
      showTaskFormButton.innerText = 'Create Task';
      clearForm();
    } else if (e.target.innerText === 'Create Task') {
      form.classList.remove('hide');
      showTaskFormButton.innerText = 'Close Form';
    };
  })
}

export { showTaskForm };