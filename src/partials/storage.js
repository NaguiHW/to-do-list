/* eslint-disable import/prefer-default-export */
import { Project, cleanArray } from './project-class';

const title = document.querySelector('#title-project-input');
const description = document.querySelector('#description');
const date = document.querySelector('#date');
const priority = document.querySelector('#priority');
const task = document.querySelector('.new-task');

class DataBase {
  static getProjects() {
    let allProjects = [];
    if (localStorage.getItem('project') === null) {
      allProjects = [];
    } else {
      allProjects = JSON.parse(localStorage.getItem('project'));
    }
    return allProjects;
  }

  static addProject(project) {
    const projects = DataBase.getProjects();
    projects.push(project);
    localStorage.setItem('project', JSON.stringify(projects));
  }
}


const storage = () => {
  const newProject = new Project(title.value, description.value, date.value, priority.value, task);
  DataBase.addProject(newProject);
  cleanArray();
};

export { storage, DataBase };
