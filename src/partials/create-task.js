import { errorForm } from "./error-message";
import { storageTask, index } from "./storage-task";
import { clearTaskForm } from "./clear-form";
import { clearProjectList } from "./project-list";
import { appendTask } from "./append-task";

let showTaskFormButton = document.querySelector('#create-task');
let createTaskButton = document.getElementById('create-task-button');
let project = document.querySelector('#project-list')
let taskName = document.querySelector('#task-form-title');
let taskDate = document.querySelector('#date');
let taskPriority = document.querySelector('#priority');
let form = document.querySelector('.task-form');

let createTask = () => {
    createTaskButton.addEventListener('click', e => {
        if (taskName.value === '' || taskDate.value === '' || taskPriority.value === '') {
            errorForm('Please fill all the fields');
        } else {
            e.preventDefault();
            storageTask();
            appendTask(index, project.value);
            form.classList.add('hide');
            showTaskFormButton.innerText = 'Create Task';
            clearTaskForm();
            clearProjectList();
        }
    })
}

export { createTask }
