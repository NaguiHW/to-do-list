/* eslint-disable import/prefer-default-export */
import { ToDo } from './to-do-class';

let taskArray = [];

class Project {
  constructor(title, description, date, priority, task) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    if (task.childElementCount > 0) {
      const newArr = Array.from(document.getElementsByClassName('task-input'));
      newArr.forEach((e) => {
        const todo = new ToDo(e.value);
        taskArray.push(todo);
      });
      this.task = taskArray;
    }
  }
}

const cleanArray = () => {
  taskArray = [];
};

export { Project, cleanArray };
