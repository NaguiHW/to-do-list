
let deleteProject = () => {
  window.addEventListener('click', (e) => {
    if (e.target.innerHTML == '' && e.target.getElementsByClassName !== 'fa-plus'){
      console.log('delete')
    }
  
  })
}

export {deleteProject}