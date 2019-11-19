/* eslint-disable import/prefer-default-export */
import { DataBase } from './storage';

const updateStatus = (e, task) => {
  const databaseProjects = DataBase.getProjects();
  const projectIndex = e.parentElement.parentElement.parentElement.parentElement
    .parentElement.parentElement.parentElement.cellIndex;
  const taskIndex = e.parentElement.parentElement.parentElement.rowIndex;
  if (databaseProjects[projectIndex].task[taskIndex].status) {
    databaseProjects[projectIndex].task[taskIndex].status = false;
    localStorage.setItem('project', JSON.stringify(databaseProjects));
    task.classList.remove('true');
    task.classList.add('false');
  } else {
    databaseProjects[projectIndex].task[taskIndex].status = true;
    localStorage.setItem('project', JSON.stringify(databaseProjects));
    task.classList.remove('false');
    task.classList.add('true');
  }
};

export { updateStatus };
