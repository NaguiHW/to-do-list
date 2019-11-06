let deleteButton = document.querySelector('.fa-trash')

let deleteProject = () => {
  deleteButton.addEventListener('click', (e) => {
    console.log(e.target);
  })
}

export {deleteProject}