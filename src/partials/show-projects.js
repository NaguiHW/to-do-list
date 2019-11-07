/* eslint-disable import/prefer-default-export */
import { DataBase } from './storage';
import { deleteProject } from './delete-project';

const projectList = document.querySelector('#project-list');
let allProjects = [];

const priorityColor = (priority) => {
  if (priority.innerText === 'Priority: Low') {
    priority.setAttribute('class', 'low');
  } else if (priority.innerText === 'Priority: Medium') {
    priority.setAttribute('class', 'medium');
  } else if (priority.innerText === 'Priority: High') {
    priority.setAttribute('class', 'high');
  }
};

const createProjectBox = (element) => {
  const toDoList = document.createElement('ul');
  if (element.task) {
    for (let i = 0; i < element.task.length; i += 1) {
      const item = document.createElement('li');
      item.innerHTML = element.task[i].task;
      toDoList.appendChild(item);
    }
  }
  const toDoListTitle = document.createElement('p');
  toDoListTitle.innerHTML = '<b>To do:</b>';
  const delButton = document.createElement('i');
  delButton.setAttribute('class', 'fas fa-trash');
  delButton.addEventListener('click', () => {
    deleteProject(delButton);
  });
  const project = document.createElement('div');
  project.classList.add('box');
  const title = document.createElement('h3');
  title.setAttribute('class', 'title is-3');
  title.innerHTML = element.title;
  const description = document.createElement('p');
  description.innerHTML = element.description;
  const priority = document.createElement('p');
  priority.innerHTML = `Priority: ${element.priority}`;
  priorityColor(priority);
  const date = document.createElement('p');
  date.innerHTML = `<b>Due date:</b><br>${element.date}`;
  project.appendChild(title);
  project.appendChild(description);
  project.appendChild(priority);
  project.appendChild(toDoListTitle);
  project.appendChild(toDoList);
  project.appendChild(date);
  project.appendChild(delButton);
  const newRow = projectList.insertRow(-1);
  newRow.appendChild(project);
};

const showProjects = () => {
  allProjects = DataBase.getProjects();
  if (allProjects === null) {
    allProjects = [];
  } else {
    allProjects.forEach((element) => {
      createProjectBox(element);
    });
  }
};

const storedProjects = () => {
  allProjects = DataBase.getProjects();
  const lastProject = allProjects[allProjects.length - 1];
  createProjectBox(lastProject);
};


export { showProjects, storedProjects };
