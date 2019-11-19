import { DataBase } from "./storage";

let updateStatus = (e, task) => {
  let databaseProjects = DataBase.getProjects();
  let projectIndex = e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.cellIndex;
  let taskIndex = e.parentElement.parentElement.parentElement.rowIndex;
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
}

export { updateStatus };