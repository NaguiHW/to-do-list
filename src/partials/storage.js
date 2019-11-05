let title = document.querySelector('#title-project-input');
let description = document.querySelector('#description');
let date = document.querySelector('#date');
let priority = document.querySelector('#priority');
let task = document.querySelector('.new-task');
let taskArray = []

class Project {
  constructor(title, description, date, priority, task) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priopriority = priority;
    if (task.childElementCount > 0) {
      for (let i = 0; i<task.childElementCount; i++){
        taskArray.push(document.getElementById(i).value)
      }
      this.task = taskArray;
    }
  }
}

let storage = () => {
  let newProject = new Project(title.value, description.value, date.value, priority.value, task);
  localStorage.setItem('newProject', JSON.stringify(newProject))
  console.log(newProject);
  taskArray = [];
}

export {storage}