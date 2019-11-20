/* eslint-disable import/prefer-default-export */
import { DataBase } from './storage';
import { updateStatus } from './update-status';

const taskBox = (newTask, taskArea) => {
  const task = document.createElement('div');
  task.classList.add('task');
  const taskDescription = document.createElement('div');
  taskDescription.classList.add('task-description');
  const titleTask = document.createElement('h3');
  titleTask.innerHTML = `<b>${newTask.taskName}</b>`;
  const descriptionTask = document.createElement('p');
  descriptionTask.innerHTML = `${newTask.description}`;
  const dateTask = document.createElement('p');
  dateTask.innerHTML = `Due date: ${newTask.date}`;
  const statusTask = document.createElement('p');
  taskDescription.appendChild(titleTask);
  taskDescription.appendChild(descriptionTask);
  taskDescription.appendChild(dateTask);
  taskDescription.addEventListener('click', (e) => {
    updateStatus(e.target, task, statusTask);
  });
  if (newTask.status) {
    statusTask.innerHTML = 'Status: Complete' 
    task.classList.add('true');
  } else {
    statusTask.innerHTML = 'Status: Pending' 
    task.classList.add('false');
  }
  taskDescription.appendChild(statusTask);
  if (newTask.priority === 'Low') {
    task.classList.add('low');
  } else if (newTask.priority === 'Medium') {
    task.classList.add('medium');
  } else {
    task.classList.add('high');
  }
  const taskDelete = document.createElement('div');
  const icon = document.createElement('i');
  icon.setAttribute('class', 'fas fa-trash delete-icon');
  icon.addEventListener('click', (e) => {
    const databaseProjects = DataBase.getProjects();
    const projectIndex = e.target.parentElement.parentElement.parentElement.parentElement
      .parentElement.parentElement.parentElement.cellIndex;
    const taskIndex = e.target.parentElement.parentElement.parentElement.rowIndex;
    databaseProjects[projectIndex].task.splice(taskIndex, 1);
    localStorage.setItem('project', JSON.stringify(databaseProjects));
    const table = e.target.parentElement.parentElement.parentElement.parentElement;
    table.deleteRow(taskIndex);
  });
  const editIcon = document.createElement('i');
  editIcon.setAttribute('class', 'fas fa-edit edit-icon');
  const saveIcon = document.createElement('i');
  saveIcon.setAttribute('class', 'fas fa-save save-icon');
  editIcon.addEventListener('click', (e) => {
    const databaseProjects = DataBase.getProjects();
    const projectIndex = e.target.parentElement.parentElement.parentElement.parentElement
      .parentElement.parentElement.parentElement.cellIndex;
    const taskIndex = e.target.parentElement.parentElement.parentElement.rowIndex;
    const editTaskDescription = document.createElement('div');
    const editTitle = document.createElement('input');
    editTitle.setAttribute('type', 'text');
    editTitle.setAttribute('class', 'input is-small edit-title');
    editTitle.value = databaseProjects[projectIndex].task[taskIndex].taskName;
    const editDescription = document.createElement('input');
    editDescription.setAttribute('type', 'text');
    editDescription.setAttribute('class', 'input is-small edit-description');
    editDescription.value = databaseProjects[projectIndex].task[taskIndex].description;
    const editDate = document.createElement('input');
    editDate.setAttribute('type', 'date');
    editDate.setAttribute('class', 'edit-date');
    editDate.value = databaseProjects[projectIndex].task[taskIndex].date;
    const editPriority = document.createElement('select');
    editPriority.setAttribute('class', 'edit-priority');
    const low = document.createElement('option');
    low.setAttribute('value', 'Low');
    low.innerHTML = 'Low';
    const medium = document.createElement('option');
    medium.setAttribute('value', 'Medium');
    medium.innerHTML = 'Medium';
    const high = document.createElement('option');
    high.setAttribute('value', 'High');
    high.innerHTML = 'High';
    editPriority.appendChild(low);
    editPriority.appendChild(medium);
    editPriority.appendChild(high);
    editPriority.value = databaseProjects[projectIndex].task[taskIndex].priority;
    editTaskDescription.appendChild(editTitle);
    editTaskDescription.appendChild(editDescription);
    editTaskDescription.appendChild(editDate);
    editTaskDescription.appendChild(editPriority);
    editTaskDescription.classList.add('task-description');
    editTaskDescription.classList.add('task-description-edit');
    taskDelete.replaceChild(saveIcon, editIcon);
    task.replaceChild(editTaskDescription, taskDescription);
  });
  saveIcon.addEventListener('click', (e) => {
    const databaseProjects = DataBase.getProjects();
    const projectIndex = e.target.parentElement.parentElement.parentElement.parentElement
      .parentElement.parentElement.parentElement.cellIndex;
    const taskIndex = e.target.parentElement.parentElement.parentElement.rowIndex;
    const editTaskDescription = e.target.parentElement.parentElement.firstChild;
    const editTitle = e.target.parentElement.parentElement.firstChild.childNodes[0];
    const editDescription = e.target.parentElement.parentElement.firstChild.childNodes[1];
    const editDate = e.target.parentElement.parentElement.firstChild.childNodes[2];
    const editPriority = e.target.parentElement.parentElement.firstChild.childNodes[3];
    databaseProjects[projectIndex].task[taskIndex].taskName = editTitle.value;
    databaseProjects[projectIndex].task[taskIndex].description = editDescription.value;
    databaseProjects[projectIndex].task[taskIndex].date = editDate.value;
    if (editPriority.value === 'Low') {
      e.target.parentElement.parentElement.classList.remove(`${databaseProjects[projectIndex].task[taskIndex].priority.toLowerCase()}`);
      e.target.parentElement.parentElement.classList.add('low');
    } else if (editPriority.value === 'Medium') {
      e.target.parentElement.parentElement.classList.remove(`${databaseProjects[projectIndex].task[taskIndex].priority.toLowerCase()}`);
      e.target.parentElement.parentElement.classList.add('medium');
    } else {
      e.target.parentElement.parentElement.classList.remove(`${databaseProjects[projectIndex].task[taskIndex].priority.toLowerCase()}`);
      e.target.parentElement.parentElement.classList.add('high');
    }
    databaseProjects[projectIndex].task[taskIndex].priority = editPriority.value;
    localStorage.setItem('project', JSON.stringify(databaseProjects));
    titleTask.innerHTML = `<b>${editTitle.value}</b>`;
    descriptionTask.innerHTML = `${editDescription.value}`;
    dateTask.innerHTML = `Due date: ${editDate.value}`;
    task.replaceChild(taskDescription, editTaskDescription);
    taskDelete.replaceChild(editIcon, saveIcon);
  });
  taskDelete.appendChild(icon);
  taskDelete.appendChild(editIcon);
  taskDelete.setAttribute('class', 'task-options');
  task.appendChild(taskDescription);
  task.appendChild(taskDelete);
  const newRow = taskArea.insertRow(-1);
  newRow.classList.add('task-row');
  newRow.appendChild(task);
};

const appendTask = (index, project) => {
  const projects = document.querySelector('#table-row');
  const allProjects = DataBase.getProjects();
  for (let i = 0; i < allProjects.length; i += 1) {
    if (allProjects[i].title === project) {
      const arrayIndex = allProjects[i].task.length - 1;
      const taskToAppend = allProjects[i].task[arrayIndex];
      const taskArea = projects.childNodes[index].childNodes[0].childNodes[1];
      taskBox(taskToAppend, taskArea);
    }
  }
};

export { appendTask, taskBox };
