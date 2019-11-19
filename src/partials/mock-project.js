import { Project } from "./project-class"
import { Task } from "./task-class";
import { DataBase } from "./storage";

let mockProject = () => {
  let exampleProject = new Project('Example Project');
  let firstTask = new Task('First task', 'Task Description', '2019-12-12', 'Low');
  let secondTask = new Task('Second task', 'Task Description', '2019-11-11', 'Medium');
  secondTask.status = true;
  let thirdTask = new Task('Third task', 'Task Description', '2019-10-10', 'High');
  exampleProject.task.push(firstTask);
  exampleProject.task.push(secondTask);
  exampleProject.task.push(thirdTask);
  let allProjects = DataBase.getProjects();
  if (allProjects.length > 0 && allProjects[0].title !== exampleProject.title) {
    allProjects.unshift(exampleProject);
  } else if (allProjects.length === 0) {
    allProjects.push(exampleProject);
  } else if (allProjects[0].title === exampleProject.title) {
    allProjects.shift();
    allProjects.unshift(exampleProject);
  }
  localStorage.setItem('project', JSON.stringify(allProjects));
}

export { mockProject };