import { errorForm } from "./error-message";
// import { Project } from "./project-class";
// import { Task } from "./task-class"
import { storageTask } from "./storage-task";

let createTaskButton = document.getElementById('create-task-button');
let taskName = document.querySelector('#task-form-title');
let taskDate = document.querySelector('#date');
let taskPriority = document.querySelector('#priority');

let createTask = () => {
    createTaskButton.addEventListener('click', e => {
        if (taskName.value === '' || taskDate.value === '' || taskPriority.value === '') {
            errorForm();
        } else {
            e.preventDefault();
            storageTask();
            // Project().task.push(Task())
            // console.log(Project)
        }
    })
}

export { createTask }

// import { clearForm } from "./clear-form";
// import { errorForm } from "./error-message";
// import { storage } from "./storage";
// import { appendProject } from "./append-project";

// let postProjectButton  = document.querySelector('.post-project-button');
// const showButton = document.querySelector('.new-project-button');
// const form = document.querySelector('.project-form');
// const title = document.querySelector('#title-project-input');

// let createProject = () => {
//   postProjectButton.addEventListener('click', e => {
//     if (title.value === '') {
//       errorForm();
//     } else {
//       e.preventDefault();
//       storage();
//       form.classList.add('hide');
//       showButton.innerText = 'Create Project';
//       showButton.classList.remove('close-form');
//       appendProject();
//       clearForm();
//     }
//   })
// }

// export { createProject };