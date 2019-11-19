/* eslint-disable import/prefer-default-export */
import { DataBase } from './storage';

const projectList = document.querySelector('#project-list');

const createProjectList = () => {
  const projects = DataBase.getProjects();
  for (let i = 0; i < projects.length; i += 1) {
    const option = document.createElement('option');
    option.setAttribute('value', `${projects[i].title}`);
    option.innerHTML = projects[i].title;
    projectList.appendChild(option);
  }
};

const clearProjectList = () => {
  projectList.innerHTML = '';
};

export { createProjectList, clearProjectList };
