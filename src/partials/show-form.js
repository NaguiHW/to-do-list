/* eslint-disable import/prefer-default-export */
import { clearForm } from './clear-form';
import { createProject } from './create-project';

const showButton = document.querySelector('.new-project-button');
const form = document.querySelector('.project-form');

const showForm = () => {
  createProject();
  showButton.addEventListener('click', (e) => {
    if (e.target.innerText === 'Close Form') {
      form.classList.add('hide');
      showButton.innerText = 'Create Project';
      clearForm();
    } else if (e.target.innerText === 'Create Project') {
      form.classList.remove('hide');
      showButton.innerText = 'Close Form';
    }
  });
};

export { showForm };
