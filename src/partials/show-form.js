import {clearForm} from './clear-form'

const showButton = document.querySelector('.new-project-button');
const form = document.querySelector('.new-project');

let showForm = () => {
    showButton.addEventListener('click', (e) => {
        if (e.target.innerText === 'Close Form'){
            form.classList.add('hide')
            showButton.innerText = 'Create Project';
            showButton.classList.remove('close-form');
            clearForm();
        }else if (e.target.innerText === 'Create Project') {
            form.classList.remove('hide');
            showButton.innerText = 'Close Form';
            showButton.classList.add('close-form')
        }
    });
}

export { showForm }