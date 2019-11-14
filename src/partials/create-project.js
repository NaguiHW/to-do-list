import { clearForm } from "./clear-form";
import { errorForm } from "./error-message";
import { storage, DataBase } from "./storage";
import { appendProject } from "./append-project";

let postProjectButton  = document.querySelector('.post-project-button');
const showButton = document.querySelector('.new-project-button');
const form = document.querySelector('.project-form');
const title = document.querySelector('#title-project-input');
let titleArray = [];

let createProject = () => {
  postProjectButton.addEventListener('click', e => {
    if (title.value === '') {
      errorForm('Please fill all the fields');
    } else {
      e.preventDefault();
      let allProjects = DataBase.getProjects();

      for (let i = 0; i < allProjects.length; i++) {
        titleArray.push(allProjects[i].title);
      }
      if (titleArray.includes(title.value)){
        errorForm('Title is already used');
      } else {
          storage();
          form.classList.add('hide');
          showButton.innerText = 'Create Project';
          appendProject();
          clearForm();
      }
    }
  })
}

export { createProject };