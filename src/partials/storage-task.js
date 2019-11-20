/* eslint-disable import/prefer-default-export */
import { Task } from './classes';
import { DataBase } from './storage';

const taskName = document.querySelector('#task-form-title');
const taskDescription = document.querySelector('#task-form-description');
const taskDate = document.querySelector('#date');
const taskPriority = document.querySelector('#priority');
const project = document.querySelector('#project-list');
let index;

const storageTask = () => {
  const newTask = new Task(taskName.value, taskDescription.value,
    taskDate.value, taskPriority.value);
  const allProjects = DataBase.getProjects();
  for (let i = 0; i < allProjects.length; i += 1) {
    if (project.value === allProjects[i].title) {
      allProjects[i].task.push(newTask);
      index = i;
      localStorage.setItem('project', JSON.stringify(allProjects));
    }
  }
};

export { storageTask, index };
