import {DataBase} from './storage'
let projects = document.querySelector('.projects');
let allProjects = [];

let showProjects = () => {
  allProjects = DataBase.getProjects();

  if(allProjects === null){
    allProjects = [];
  }else{
    allProjects.forEach(element => {
      let toDoList = '';
      for (let i = 0; i < element.task.length; i++) {
        toDoList += `<li>${element.task[i].task}</li>`
      }
      projects.innerHTML += `<div class="project">
      <h3>${element.title}</h3>
      <p>${element.description}</p>
      <ul>
        ${toDoList}
      </ul>
      <p>Due Date: 12/12/2019</p>
      <i class="fas fa-trash"></i>
    </div>`;
    });
  }
}

let storedProjects = () => {
  allProjects = DataBase.getProjects();
  allProjects[-1]
  projects.innerHTML += `${allProjects[allProjects.length-1].title}`;
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
