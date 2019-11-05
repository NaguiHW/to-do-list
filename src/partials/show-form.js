const showButton = document.querySelector('.new-project-button');
const form = document.querySelector('.new-project');

let showForm = () => {
    // showButton.addEventListener('click', ()=> {
    //     form.classList.remove('hide');
    //     showButton.innerText =  'Close Form';
    // });
    // if (showButton.innerText === 'Close Form'){
    //     showButton.addEventListener('click', ()=>{
    //         form.classList.add('hide')
    //     });
    // };
    showButton.addEventListener('click', (e) => {
            if (e.target.innerText === 'Close Form'){
                form.classList.add('hide')
                }else if (e.target.innerText === 'Create Project') {
                form.classList.remove('hide');
                showButton.innerText =  'Close Form';
    }
    });
}

export { showForm }