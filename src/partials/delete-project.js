let deleteProject = e => {
  let parentDiv = document.getElementsByClassName('project');
  //e.remove(parentDiv)
  console.log(e.parentElement.parentElement.rowIndex);
}

export {deleteProject}