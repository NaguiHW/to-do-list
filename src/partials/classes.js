/* eslint-disable import/prefer-default-export */

class Project {
  constructor(title) {
    this.title = title;
    this.task = [];
  }
}

class Task {
  constructor(taskName, description, date, priority) {
    this.taskName = taskName;
    this.description = description;
    this.date = date;
    this.priority = priority;
  }
}


export { Project, Task };
