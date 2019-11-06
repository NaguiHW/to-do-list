import {DataBase} from './storage';
import {deleteProject} from './delete-project';
let projectList = document.querySelector('#project-list');
let allProjects = [];

let showProjects = () => {
  allProjects = DataBase.getProjects();

  if(allProjects === null){
    allProjects = [];
  }else{
    allProjects.forEach(element => {
      let toDoList = document.createElement('ul');
      for (let i = 0; i < element.task.length; i++) {
        let item = document.createElement('li');
        item.innerHTML = element.task[i].task;
        toDoList.appendChild(item);
        //toDoList += `<li>${element.task[i].task}</li>`
      }
      let delButton = document.createElement('i');
      delButton.setAttribute('class', 'fas fa-trash')
      delButton.addEventListener('click', () => {
        deleteProject(delButton);
      });
      let project = document.createElement('div');
      project.classList.add('project')
      let title = document.createElement('h3');
      title.innerHTML = element.title;
      let description = document.createElement('p');
      description.innerHTML = element.description;
      let date = document.createElement('p');
      date.innerHTML = element.date;
      project.appendChild(title);
      project.appendChild(description);
      project.appendChild(toDoList);
      project.appendChild(date);
      project.appendChild(delButton);
      let newRow = projectList.insertRow(-1);
      newRow.appendChild(project);
    });
  }
}

let storedProjects = () => {
  allProjects = DataBase.getProjects();
  let lastProject = allProjects[allProjects.length-1]
  let project = document.createElement('div');
  project.classList.add('project')
  let title = document.createElement('h3');
  title.innerHTML = lastProject.title;
  let description = document.createElement('p');
  description.innerHTML = lastProject.description;
  let date = document.createElement('p');
  date.innerHTML = lastProject.date;
  let toDoList = document.createElement('ul');
  for (let i = 0; i < lastProject.task.length; i++) {
    let item = document.createElement('li');
    item.innerHTML = lastProject.task[i].task;
    toDoList.appendChild(item);
  }
  let delButton = document.createElement('i');
  delButton.setAttribute('class', 'fas fa-trash')
  delButton.addEventListener('click', () => {
    deleteProject(delButton);
  });
  project.appendChild(title);
  project.appendChild(description);
  project.appendChild(toDoList);
  project.appendChild(date);
  project.appendChild(delButton);
  let newRow = projectList.insertRow(-1);
  newRow.appendChild(project);
}


export {showProjects, storedProjects}

// // Variables globales
// ​
// const formularioUI = document.querySelector('#formulario');
// const listaActividadesUI = document.getElementById('listaActividades');
// let arrayActividades = [];
// ​
// ​
// // Funciones
// ​
// const CrearItem = (actividad) => {
// ​
//   let item = {
//     actividad: actividad,
//     estado: false
//   }
// ​
//   arrayActividades.push(item);
// ​
//   return item;
// ​
// }
// ​
// const GuardarDB = () => {
// ​
//   localStorage.setItem('rutina', JSON.stringify(arrayActividades));
// ​
//   PintarDB();
// ​
// }
// ​
// const PintarDB = () => {
// ​
//   listaActividadesUI.innerHTML = '';
// ​
//   arrayActividades = JSON.parse(localStorage.getItem('rutina'));
  
//   if(arrayActividades === null){
//     arrayActividades = [];
//   }else{
// ​
//     arrayActividades.forEach(element => {
// ​
//       if(element.estado){
//         listaActividadesUI.innerHTML += `<div class="alert alert-success" role="alert"><i class="material-icons float-left mr-2">accessibility</i><b>${element.actividad}</b> - ${element.estado}<span class="float-right"><i class="material-icons">done</i><i class="material-icons">delete</i></span></div>`
//       }else{
//         listaActividadesUI.innerHTML += `<div class="alert alert-danger" role="alert"><i class="material-icons float-left mr-2">accessibility</i><b>${element.actividad}</b> - ${element.estado}<span class="float-right"><i class="material-icons">done</i><i class="material-icons">delete</i></span></div>`
//       }
//     });
// ​
//   }
// }
// ​
// const EliminarDB = (actividad) => {
//   let indexArray;
//   arrayActividades.forEach((elemento, index) => {
    
//     if(elemento.actividad === actividad){
//       indexArray = index;
//     }
    
//   });
// ​
//   arrayActividades.splice(indexArray,1);
//   GuardarDB();
// ​
// }
// ​
// const EditarDB = (actividad) => {
// ​
//   let indexArray = arrayActividades.findIndex((elemento)=>elemento.actividad === actividad);
// ​
//   arrayActividades[indexArray].estado = true;
// ​
//   GuardarDB();
// ​
// }
// ​
// ​
// ​
// ​
// // EventListener
// ​
// formularioUI.addEventListener('submit', (e) => {
// ​
//   e.preventDefault();
//   let actividadUI = document.querySelector('#actividad').value;
// ​
//   CrearItem(actividadUI);
//   GuardarDB();
// ​
//   formularioUI.reset();
// ​
// });
// ​
// document.addEventListener('DOMContentLoaded', PintarDB);
// ​
// listaActividadesUI.addEventListener('click', (e) => {
// ​
//   e.preventDefault();
// ​
//   if(e.target.innerHTML === 'done' || e.target.innerHTML === 'delete'){
//     let texto = e.path[2].childNodes[1].innerHTML;
//     if(e.target.innerHTML === 'delete'){
//       // Accción de eliminar
//       EliminarDB(texto);
//     }
//     if(e.target.innerHTML === 'done'){
//       // Accción de editar
//       EditarDB(texto);
//     }
//   }
// ​
// });
