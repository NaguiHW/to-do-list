import {DataBase} from './storage';
import {deleteProject} from './delete-project';
let projectList = document.querySelector('#project-list');
let allProjects = [];

let showProjects = () => {
  allProjects = DataBase.getProjects();

  if(allProjects === null){
    allProjects = [];
  }else{
    allProjects.forEach(element => {
      let toDoList = document.createElement('ul');
      if (element.task) {
        for (let i = 0; i < element.task.length; i++) {
          let item = document.createElement('li');
          item.innerHTML = element.task[i].task;
          toDoList.appendChild(item);
        }
      }
      let delButton = document.createElement('i');
      delButton.setAttribute('class', 'fas fa-trash')
      delButton.addEventListener('click', () => {
        deleteProject(delButton);
      });
      let project = document.createElement('div');
      project.classList.add('project')
      let title = document.createElement('h3');
      title.innerHTML = element.title;
      let description = document.createElement('p');
      description.innerHTML = element.description;
      let date = document.createElement('p');
      date.innerHTML = element.date;
      project.appendChild(title);
      project.appendChild(description);
      project.appendChild(toDoList);
      project.appendChild(date);
      project.appendChild(delButton);
      let newRow = projectList.insertRow(-1);
      newRow.appendChild(project);
    });
  }
}

let storedProjects = () => {
  allProjects = DataBase.getProjects();
  let lastProject = allProjects[allProjects.length-1]
  let project = document.createElement('div');
  project.classList.add('project')
  let title = document.createElement('h3');
  title.innerHTML = lastProject.title;
  let description = document.createElement('p');
  description.innerHTML = lastProject.description;
  let date = document.createElement('p');
  date.innerHTML = lastProject.date;
  let toDoList = document.createElement('ul');
  if (lastProject.task) {
    for (let i = 0; i < lastProject.task.length; i++) {
      let item = document.createElement('li');
      item.innerHTML = lastProject.task[i].task;
      toDoList.appendChild(item);
    }
  }
  let delButton = document.createElement('i');
  delButton.setAttribute('class', 'fas fa-trash')
  delButton.addEventListener('click', () => {
    deleteProject(delButton);
  });
  project.appendChild(title);
  project.appendChild(description);
  project.appendChild(toDoList);
  project.appendChild(date);
  project.appendChild(delButton);
  let newRow = projectList.insertRow(-1);
  newRow.appendChild(project);
}


export {showProjects, storedProjects}