/* eslint-disable import/prefer-default-export */

class Task {
    constructor(taskName, description, date, priority) {
      this.taskName = taskName;
      this.description = description;
      this.date = date;
      this.priority = priority;
    }
  }
  
  export { Task };