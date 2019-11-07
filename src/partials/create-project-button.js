/* eslint-disable import/prefer-default-export */
import { storage } from './storage';
import { clearForm } from './clear-form';
import { storedProjects } from './show-projects';
import { deleteProject } from './delete-project';

const createProjectButton = document.querySelector('.post-project-button');
const showButton = document.querySelector('.new-project-button');
const form = document.querySelector('.new-project');
const title = document.querySelector('#title-project-input');
const description = document.querySelector('#description');
const date = document.querySelector('#date');
const priority = document.querySelector('#priority');
const errors = document.querySelector('.errors');

const errorForm = () => {
  const message = document.createElement('p');
  message.setAttribute('class', 'notification is-danger');
  message.innerHTML = 'Please fill the empty fields.';
  errors.appendChild(message);
  setTimeout(() => message.remove(), 4000);
};

const createProject = () => {
  createProjectButton.addEventListener('click', () => {
    if (title.value === '' || description.value === '' || date.value === '' || priority.value === '') {
      errorForm();
    } else {
      storage();
      form.classList.add('hide');
      showButton.innerText = 'Create Project';
      showButton.classList.remove('close-form');
      clearForm();
      storedProjects();
      deleteProject();
    }
  });
};

export { createProject };
