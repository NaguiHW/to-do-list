import { clearForm } from "./clear-form";
import { errorForm } from "./error-message";
import { storage } from "./storage";
import { appendProject } from "./append-project";

let postProjectButton  = document.querySelector('.post-project-button');
const showButton = document.querySelector('.new-project-button');
const form = document.querySelector('.project-form');
const title = document.querySelector('#title-project-input');

let createProject = () => {
  postProjectButton.addEventListener('click', e => {
    if (title.value === '') {
      errorForm();
    } else {
      e.preventDefault();
      storage();
      form.classList.add('hide');
      showButton.innerText = 'Create Project';
      showButton.classList.remove('close-form');
      appendProject();
      clearForm();
    }
  })
}

export { createProject };