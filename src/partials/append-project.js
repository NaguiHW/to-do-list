/* eslint-disable import/prefer-default-export */
import { DataBase } from './storage';
import { taskBox } from './append-task';
import { clearProjectList, createProjectList } from './project-list';

const allProjects = document.querySelector('#table-row');
let getProjects = [];

const deleteProject = (e) => {
  const index = e.parentElement.parentElement.parentElement.cellIndex;
  const delProject = JSON.parse(localStorage.project);
  delProject.splice(index, 1);
  localStorage.setItem('project', JSON.stringify(delProject));
  const row = document.querySelector('#table-row');
  row.deleteCell(index);
  clearProjectList();
  createProjectList();
};

const createProjectBox = (element) => {
  const project = document.createElement('div');
  project.setAttribute('class', 'project panel');
  const title = document.createElement('h1');
  title.setAttribute('class', 'task-title');
  title.innerHTML = element.title;
  const taskTable = document.createElement('table');
  const taskTableBody = document.createElement('tbody');
  taskTableBody.setAttribute('class', 'task-body');
  if (element.task.length > 0) {
    for (let i = 0; i < element.task.length; i += 1) {
      taskBox(element.task[i], taskTableBody);
    }
  }
  taskTable.appendChild(taskTableBody);
  const buttons = document.createElement('div');
  buttons.setAttribute('class', 'buttons');
  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('class', 'button is-danger delete-project');
  deleteButton.innerHTML = 'Delete Project';
  deleteButton.addEventListener('click', (e) => {
    deleteProject(e.target);
  });
  buttons.appendChild(deleteButton);
  project.appendChild(title);
  project.appendChild(taskTable);
  project.appendChild(buttons);
  const newCell = allProjects.insertCell(-1);
  newCell.appendChild(project);
};

const appendProject = () => {
  getProjects = DataBase.getProjects();
  const lastProject = getProjects[getProjects.length - 1];
  createProjectBox(lastProject);
};

export { appendProject, createProjectBox };
