let deleteProject = e => {
  // window.addEventListener('click', (e) => {
  //   if (e.target.innerHTML == '' && e.target.getElementsByClassName !== 'fa-plus'){
  //     console.log('delete')
  //   }
  
  // })
  let parentDiv = document.getElementsByClassName('project');
  e.remove(parentDiv)
  console.log(e.parentNode);
}

export {deleteProject}