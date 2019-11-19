import { DataBase } from "./storage";
import { updateStatus } from "./update-status";

let taskBox = (newTask, taskArea) => {
  let task = document.createElement('div');
  task.classList.add('task')
  let taskDescription = document.createElement('div');
  taskDescription.classList.add('task-description');
  let titleTask = document.createElement('h3');
  titleTask.innerHTML = `<b>${newTask.taskName}</b>`;
  let descriptionTask = document.createElement('p');
  descriptionTask.innerHTML = `${newTask.description}`;
  let dateTask = document.createElement('p');
  dateTask.innerHTML = `Due date: ${newTask.date}`;
  taskDescription.appendChild(titleTask);
  taskDescription.appendChild(descriptionTask);
  taskDescription.appendChild(dateTask);
  taskDescription.addEventListener('click', e => {
    updateStatus(e.target, task);
  })
  if (newTask.status) {
    task.classList.add('true');
  } else {
    task.classList.add('false');
  }
  if (newTask.priority === 'Low') {
    task.classList.add('low');
  } else if (newTask.priority === 'Medium') {
    task.classList.add('medium');
  } else {
    task.classList.add('high');
  }
  let taskDelete = document.createElement('div');
  let icon = document.createElement('i');
  icon.setAttribute('class', 'fas fa-minus-square delete-icon');
  icon.addEventListener('click', e => {
    let databaseProjects = DataBase.getProjects();
    let projectIndex = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.cellIndex;
    let taskIndex = e.target.parentElement.parentElement.parentElement.rowIndex;
    databaseProjects[projectIndex].task.splice(taskIndex, 1);
    localStorage.setItem('project', JSON.stringify(databaseProjects));
    const table = e.target.parentElement.parentElement.parentElement.parentElement;
    table.deleteRow(taskIndex);
  });
  let editIcon = document.createElement('i');
  editIcon.setAttribute('class', "fas fa-edit edit-icon");
  let saveIcon = document.createElement('i');
  saveIcon.setAttribute('class', "fas fa-save save-icon");
  editIcon.addEventListener('click', e => {
    let databaseProjects = DataBase.getProjects();
    let projectIndex = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.cellIndex;
    let taskIndex = e.target.parentElement.parentElement.parentElement.rowIndex;
    let editTaskDescription = document.createElement('div');
    let editTitle = document.createElement('input');
    editTitle.setAttribute('type', 'text');
    editTitle.setAttribute('class', 'input is-small edit-title');
    editTitle.value = databaseProjects[projectIndex].task[taskIndex].taskName;
    let editDescription = document.createElement('input');
    editDescription.setAttribute('type', 'text');
    editDescription.setAttribute('class', 'input is-small edit-description');
    editDescription.value = databaseProjects[projectIndex].task[taskIndex].description;
    let editDate = document.createElement('input');
    editDate.setAttribute('type', 'date');
    editDate.setAttribute('class', 'edit-date');
    editDate.value = databaseProjects[projectIndex].task[taskIndex].date;
    let editPriority = document.createElement('select');
    editPriority.setAttribute('class', 'edit-priority')
    let low = document.createElement('option');
    low.setAttribute('value', 'Low');
    low.innerHTML = 'Low';
    let medium = document.createElement('option');
    medium.setAttribute('value', 'Medium');
    medium.innerHTML = 'Medium';
    let high = document.createElement('option');
    high.setAttribute('value', 'High');
    high.innerHTML = 'High';
    editPriority.appendChild(low);
    editPriority.appendChild(medium);
    editPriority.appendChild(high);
    editPriority.value = databaseProjects[projectIndex].task[taskIndex].priority
    editTaskDescription.appendChild(editTitle);
    editTaskDescription.appendChild(editDescription);
    editTaskDescription.appendChild(editDate);
    editTaskDescription.appendChild(editPriority);
    editTaskDescription.classList.add('task-description');
    editTaskDescription.classList.add('task-description-edit');
    taskDelete.replaceChild(saveIcon, editIcon);
    task.replaceChild(editTaskDescription, taskDescription);
  });
  saveIcon.addEventListener('click', e => {
    let databaseProjects = DataBase.getProjects();
    let projectIndex = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.cellIndex;
    let taskIndex = e.target.parentElement.parentElement.parentElement.rowIndex;
    let editTaskDescription = e.target.parentElement.parentElement.firstChild;
    let editTitle = e.target.parentElement.parentElement.firstChild.childNodes[0];
    let editDescription = e.target.parentElement.parentElement.firstChild.childNodes[1];
    let editDate = e.target.parentElement.parentElement.firstChild.childNodes[2];
    let editPriority = e.target.parentElement.parentElement.firstChild.childNodes[3];
    databaseProjects[projectIndex].task[taskIndex].taskName = editTitle.value;
    databaseProjects[projectIndex].task[taskIndex].description = editDescription.value;
    databaseProjects[projectIndex].task[taskIndex].date = editDate.value;
    if (editPriority.value === 'Low') {
      e.target.parentElement.parentElement.classList.remove(`${databaseProjects[projectIndex].task[taskIndex].priority.toLowerCase()}`)
      e.target.parentElement.parentElement.classList.add('low');
    } else if (editPriority.value === 'Medium') {
      e.target.parentElement.parentElement.classList.remove(`${databaseProjects[projectIndex].task[taskIndex].priority.toLowerCase()}`)
      e.target.parentElement.parentElement.classList.add('medium');
    } else {
      e.target.parentElement.parentElement.classList.remove(`${databaseProjects[projectIndex].task[taskIndex].priority.toLowerCase()}`)
      e.target.parentElement.parentElement.classList.add('high');
    }
    databaseProjects[projectIndex].task[taskIndex].priority = editPriority.value;
    localStorage.setItem('project', JSON.stringify(databaseProjects));
    titleTask.innerHTML = `<b>${editTitle.value}</b>`;
    descriptionTask.innerHTML = `${editDescription.value}`;
    dateTask.innerHTML = `Due date: ${editDate.value}`;  
    task.replaceChild(taskDescription, editTaskDescription);
    taskDelete.replaceChild(editIcon, saveIcon);
  })
  taskDelete.appendChild(icon);
  taskDelete.appendChild(editIcon);
  taskDelete.setAttribute('class', 'task-options');
  task.appendChild(taskDescription);
  task.appendChild(taskDelete);
  const newRow = taskArea.insertRow(-1);
  newRow.classList.add('task-row');
  newRow.appendChild(task);
}

let appendTask = (index, project) => {
  let projects = document.querySelector('#table-row');
  let allProjects = DataBase.getProjects();
  for (let i = 0; i < allProjects.length; i++) {
    if (allProjects[i].title === project) {
      let arrayIndex = allProjects[i].task.length - 1;
      let taskToAppend = allProjects[i].task[arrayIndex];
      let taskArea = projects.childNodes[index].childNodes[0].childNodes[1];
      taskBox(taskToAppend, taskArea);
    }
  }
};

export { appendTask, taskBox };