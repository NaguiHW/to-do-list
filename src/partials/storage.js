let title = document.querySelector('#title-project-input');
let description = document.querySelector('#description');
let date = document.querySelector('#date');
let priority = document.querySelector('#priority');
let task = document.querySelector('.new-task');
let taskArray = []

class DataBase {
  static getProjects() {
    let allProjects = [];
    if (localStorage.getItem('project') === null) {
      allProjects = [];
    } else {
      allProjects = JSON.parse(localStorage.getItem('project'));
    }
    return allProjects;
  }

  static addProject(project) {
    const projects = DataBase.getProjects();
    projects.push(project);
    localStorage.setItem('project', JSON.stringify(projects));
  }
}

class ToDo {
  constructor (task) {
    this.task = task;
    this.status = false;
  }
}

class Project {
  constructor(title, description, date, priority, task) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    if (task.childElementCount > 0) {
      let newArr = Array.from(document.getElementsByClassName('task-input'));
      newArr.forEach( e => {
        let todo = new ToDo(e.value)
        taskArray.push(todo);
      });
      // for (let i = 0; i<task.childElementCount; i++){
      //   let todo = new ToDo(document.getElementById(i).value);
      //   taskArray.push(todo);
      // }
      // task.forEach(e =>{
      //   console.log("hello")
      // })
      this.task = taskArray;
    }
  }
}

let storage = () => {
  let newProject = new Project(title.value, description.value, date.value, priority.value, task);
  DataBase.addProject(newProject);
  taskArray = [];
}

export {storage, DataBase}