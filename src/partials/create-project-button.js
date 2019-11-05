import {storage} from './storage';
import {clearForm} from './clear-form';

let createProjectButton = document.querySelector('.post-project-button');
const showButton = document.querySelector('.new-project-button');
const form = document.querySelector('.new-project');

let createProject = () => {
  createProjectButton.addEventListener('click', (e) => {
    storage();
    form.classList.add('hide')
    showButton.innerText = 'Create Project';
    showButton.classList.remove('close-form')
    clearForm();
  });

}

export {createProject}