/* eslint-disable import/prefer-default-export */
import { Project } from './classes';

const title = document.querySelector('#title-project-input');

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
  const newProject = new Project(title.value);
  DataBase.addProject(newProject);
};

export { storage, DataBase };
