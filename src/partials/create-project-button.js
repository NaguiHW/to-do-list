import {storage} from './storage'

let createProjectButton = document.querySelector('.post-project-button');

let createProject = () => {
  createProjectButton.addEventListener('click', storage);
}

export {createProject}