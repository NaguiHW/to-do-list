/* eslint-disable import/prefer-default-export */
import { Project } from './project-class';
import { Task } from './task-class';
import { DataBase } from './storage';

const mockProject = () => {
  const exampleProject = new Project('Example Project');
  const firstTask = new Task('This is a default project', 'It always going to load', '2019-12-12', 'Low');
  const secondTask = new Task('You can change the status', 'Clicking on the tasks', '2019-11-11', 'Medium');
  secondTask.status = true;
  const thirdTask = new Task('Background colors', 'Depend on the status', '2019-10-10', 'High');
  thirdTask.status = true;
  const fourthTask = new Task('You can add more tasks', 'Clicking on the "Add Task To Project" button', '2019-10-10', 'Medium');
  exampleProject.task.push(firstTask);
  exampleProject.task.push(secondTask);
  exampleProject.task.push(thirdTask);
  exampleProject.task.push(fourthTask);
  const allProjects = DataBase.getProjects();
  if (allProjects.length > 0 && allProjects[0].title !== exampleProject.title) {
    allProjects.unshift(exampleProject);
  } else if (allProjects.length === 0) {
    allProjects.push(exampleProject);
  } else if (allProjects[0].title === exampleProject.title) {
    allProjects.shift();
    allProjects.unshift(exampleProject);
  }
  localStorage.setItem('project', JSON.stringify(allProjects));
};

export { mockProject };
