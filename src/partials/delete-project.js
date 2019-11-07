/* eslint-disable import/prefer-default-export */
const deleteProject = (e) => {
  const index = e.parentElement.parentElement.rowIndex;
  const delProject = JSON.parse(localStorage.project);
  delProject.splice(index, 1);
  localStorage.setItem('project', JSON.stringify(delProject));
  const table = document.querySelector('#project-list');
  table.deleteRow(index);
};

export { deleteProject };
