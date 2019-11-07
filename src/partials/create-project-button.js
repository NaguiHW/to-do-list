import {storage} from './storage';
import {clearForm} from './clear-form';
import {storedProjects} from  './show-projects';
import { deleteProject } from './delete-project';

let createProjectButton = document.querySelector('.post-project-button');
const showButton = document.querySelector('.new-project-button');
const form = document.querySelector('.new-project');
let title = document.querySelector('#title-project-input');
let description = document.querySelector('#description');
let date = document.querySelector('#date');
let priority = document.querySelector('#priority');
let errors = document.querySelector('.errors');

let errorForm = () => {
  let message = document.createElement('p');
  message.innerHTML = 'Please fill the empty fields.'
  errors.appendChild(message);
}

let createProject = () => {
  createProjectButton.addEventListener('click', (e) => {
    if (title.value === '' || description.value === '' || date.value === '' || priority.value === '') {
      errorForm();
    } else {
      storage();
      form.classList.add('hide')
      showButton.innerText = 'Create Project';
      showButton.classList.remove('close-form')
      clearForm();
      storedProjects();
      deleteProject();
    }
  });
}

export {createProject}