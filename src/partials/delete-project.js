let deleteProject = e => {
  let index = e.parentElement.parentElement.rowIndex;
  let delProject = JSON.parse(localStorage.project);
  delProject.splice(index, 1);
  localStorage.setItem('project', JSON.stringify(delProject));
  let table = document.querySelector('#project-list');
  table.deleteRow(index);
}

export {deleteProject}