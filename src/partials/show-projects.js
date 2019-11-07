import {DataBase} from './storage';
import {deleteProject} from './delete-project';
let projectList = document.querySelector('#project-list');
let allProjects = [];

let createProjectBox = element => {
  let toDoList = document.createElement('ul');
  if (element.task) {
    for (let i = 0; i < element.task.length; i++) {
      let item = document.createElement('li');
      item.innerHTML = element.task[i].task;
      toDoList.appendChild(item);
    }
  }
  let toDoListTitle = document.createElement('p');
  toDoListTitle.innerHTML = '<b>To do:</b>'
  let delButton = document.createElement('i');
  delButton.setAttribute('class', 'fas fa-trash')
  delButton.addEventListener('click', () => {
    deleteProject(delButton);
  });
  let project = document.createElement('div');
  project.classList.add('box')
  let title = document.createElement('h3');
  title.setAttribute('class', 'title is-3');
  title.innerHTML = element.title;
  let description = document.createElement('p');
  description.innerHTML = element.description;
  let priority = document.createElement('p');
  priority.innerHTML = `Priority: ${element.priority}`;
  priorityColor(priority);
  let date = document.createElement('p');
  date.innerHTML = `<b>Due date:</b><br>${element.date}`;
  project.appendChild(title);
  project.appendChild(description);
  project.appendChild(priority);
  project.appendChild(toDoListTitle);
  project.appendChild(toDoList);
  project.appendChild(date);
  project.appendChild(delButton);
  let newRow = projectList.insertRow(-1);
  newRow.appendChild(project);
}

let showProjects = () => {
  allProjects = DataBase.getProjects();
  if(allProjects === null){
    allProjects = [];
  }else{
    allProjects.forEach(element => {
      createProjectBox(element);
    });
  }
}

let storedProjects = () => {
  allProjects = DataBase.getProjects();
  let lastProject = allProjects[allProjects.length-1]
  createProjectBox(lastProject);
}

let priorityColor = (priority) => {
  if (priority.innerText === 'Priority: Low'){
    priority.setAttribute('class', 'low');
  } else if (priority.innerText === 'Priority: Medium'){
    priority.setAttribute('class', 'medium');
  } else if (priority.innerText === 'Priority: High'){
    priority.setAttribute('class', 'high');
  }
}


export {showProjects, storedProjects}