import { clearProjectList, createProjectList } from "./project-list";

const deleteProject = (e) => {
  const index = e.parentElement.parentElement.parentElement.cellIndex;
  const delProject = JSON.parse(localStorage.project);
  delProject.splice(index, 1);
  localStorage.setItem('project', JSON.stringify(delProject));
  const row = document.querySelector('#table-row');
  row.deleteCell(index);
  clearProjectList();
  createProjectList();
};

export { deleteProject };