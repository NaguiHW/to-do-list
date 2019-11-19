import { DataBase } from "./storage";
import { deleteProject } from "./delete-project";
import { taskBox } from "./append-task";

let allProjects = document.querySelector('#table-row');
let getProjects = [];

const createProjectBox = element => {
  let project = document.createElement('div');
  project.setAttribute('class', 'project panel');
  let title = document.createElement('h1');
  title.setAttribute('class', 'task-title');
  title.innerHTML = element.title;
  let taskTable = document.createElement('table');
  let taskTableBody = document.createElement('tbody');
  taskTableBody.setAttribute('class', 'task-body');
  if (element.task.length > 0) {
    for (let i = 0; i < element.task.length; i++) {
      taskBox(element.task[i], taskTableBody);
    }
  }
  taskTable.appendChild(taskTableBody);
  let buttons = document.createElement('div');
  buttons.setAttribute('class', 'buttons');
  let deleteButton = document.createElement('button');
  deleteButton.setAttribute('class', 'button is-danger delete-project');
  deleteButton.innerHTML = 'Delete Project'
  deleteButton.addEventListener('click', e => {
    deleteProject(e.target);
  });
  buttons.appendChild(deleteButton);
  project.appendChild(title);
  project.appendChild(taskTable);
  project.appendChild(buttons);
  const newCell = allProjects.insertCell(-1);
  newCell.appendChild(project);
}

let appendProject = () => {
  getProjects = DataBase.getProjects();
  const lastProject = getProjects[getProjects.length - 1];
  createProjectBox(lastProject);
}

export { appendProject, createProjectBox };