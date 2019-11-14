import { DataBase } from "./storage"

let projectList = document.querySelector('#project-list');

let createProjectList = () => {
  const projects = DataBase.getProjects();
  for (let i = 0; i < projects.length; i++) {
    let option = document.createElement('option');
    option.setAttribute('value', `${projects[i].title}`);
    option.innerHTML = projects[i].title;
    projectList.appendChild(option);
    console.log(projects[i].title);
  }
}

let clearProjectList = () => {
  projectList.innerHTML = '';
}

export { createProjectList, clearProjectList };