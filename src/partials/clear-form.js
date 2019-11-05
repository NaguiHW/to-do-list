let title = document.querySelector('#title-project-input');
let description = document.querySelector('#description');
let date = document.querySelector('#date');
let priority = document.querySelector('#priority');

let clearForm = () => {
  title.value = '';
  description.value = '';
  date.value = '';
  priority.value = '';
}

export { clearForm }